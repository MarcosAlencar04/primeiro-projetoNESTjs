import { PrismaService } from "src/database/prisma.service";
import { UserRepository } from "../user-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService){}

    async create(name: string, occupation: string): Promise<void> {
        await this.prisma.user.create({
            data: {
                name,
                occupation
            }
        })
    }
}