import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisCacheModule } from './redis-cache/redis-cache.module';
import { AirportsModule } from './airports/airports.module';
import { PostgresDbModule } from './postgres-db/postgres-db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    RedisCacheModule,
    AirportsModule,
    PostgresDbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
