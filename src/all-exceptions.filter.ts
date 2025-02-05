import { ArgumentsHost, Catch, HttpException, HttpStatus } from '@nestjs/common'
import { BaseExceptionFilter } from '@nestjs/core'
import { PrismaClientValidationError } from '@prisma/client/runtime/library'
import { Response, Request } from 'express'

type ResponseObject = {
  statusCode: number
  errorMessage: string | object
}

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse<Response>()
    const request = ctx.getRequest<Request>()

    const responseObject: ResponseObject = {
      statusCode: 200,
      errorMessage: ''
    }

    if (exception instanceof HttpException) {
      responseObject.statusCode = exception.getStatus()
      responseObject.errorMessage = exception.getResponse()
    } else if (exception instanceof PrismaClientValidationError) {
      responseObject.statusCode = 422
      responseObject.errorMessage = exception.message.replaceAll(/\n/g, '')
    } else {
      responseObject.statusCode = HttpStatus.INTERNAL_SERVER_ERROR
      responseObject.errorMessage = 'Internal Server Error'
    }

    response.status(responseObject.statusCode).json(responseObject)

    super.catch(exception, host)
  }
}
