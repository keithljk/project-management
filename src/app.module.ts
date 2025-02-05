import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectController } from './project/project.controller';
import { ProjectService } from './project/project.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProjectModule } from './project/project.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [ProjectModule],
  controllers: [AppController, ProjectController],
  providers: [AppService, ProjectService, PrismaService],
})
export class AppModule {}
