import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService){}

    @Post()
    create(@Body() createProjectDto: CreateProjectDto){
        return this.projectService.create(createProjectDto)
    }

    @Get()
    findAll(){
        return this.projectService.findAll()
    }

    @Get(':key')
    findOne(@Param('key') key: string){
        return this.projectService.findOne(key)
    }

    // @Put(':key')
    // update(@Param('key') key: string, @Body() )

    @Delete(':key')
    remove(@Param(':key') key: string){
        return this.projectService.remove(key)
    }
}
