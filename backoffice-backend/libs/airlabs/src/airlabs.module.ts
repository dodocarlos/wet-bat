import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AirlabsService } from './airlabs.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 30000,
    }),
  ],
  providers: [AirlabsService, HttpService],
  exports: [AirlabsService],
})
export class AirlabsModule {}
