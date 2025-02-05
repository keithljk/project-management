import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
    providers: [PrismaService],
    exports: [PrismaService]    //確保可以被其他 Module 使用（因為PrismaService有注入，所以要export給其他Module import）
})
export class PrismaModule {}
