import { PostgresConfig } from '@infra/config/postgres';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: PostgresConfig,
    }),
  ],
})
export class PostgresDbModule {}
