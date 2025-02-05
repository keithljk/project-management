import { IsInt, IsString, IsUUID } from 'class-validator';

export class CreateProjectDto {
    @IsUUID()
    key: string

    @IsInt()
    phase: number

    @IsString()
    name: string

    @IsInt()
    typeId: number

    @IsInt()
    leaderId: number

    @IsInt()
    trusteeId: number
}