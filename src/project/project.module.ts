import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
    imports: [PrismaModule],// 確保 PrismaModule 被引入
    controllers: [ProjectController],
    providers: [ProjectService]
})
export class ProjectModule {}
