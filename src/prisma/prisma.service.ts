import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger(PrismaService
        .name);
    async onModuleInit() {
        let retries = 5;
        while (retries > 0) {
            try {
                await this.$connect();
                this.logger.log('Successfully connected to database');
                break;
            } catch (err) {
                this.logger.error(err);
                this.logger.error(
                    `there was an error connection to database, retrying ... (${retries})`,
                );

                retries -= 1;
                await new Promise((res) => setTimeout(res, 3000));
            }
        }
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect()
    }
}
