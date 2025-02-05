import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService){}

    async create(createProjectDto: CreateProjectDto){
        return await this.prisma.project.create({
            data: createProjectDto
        })
    }

    async findAll(){
        return await this.prisma.project.findMany()
    }

    async findOne(key: string){
        return await this.prisma.project.findUnique({
            where: {key}
        })
    }

    // async update(key: string, update)
    
    async remove(key: string){
        return await this.prisma.project.delete({
            where: {key}
        })
    }
}
