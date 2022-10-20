import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { AirportsOutputDto } from './dto/airports-output.dto';
import { AirlabsAirportsOutputDto } from './dto/airlabs-airports-output.dto';

interface ApiConfig {
  baseUrl: string;
  apiKey: string;
}

@Injectable()
export class AirlabsService {
  private config: ApiConfig;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.config = {
      baseUrl: configService.get('API_AIRLABS_BASEURL'),
      apiKey: configService.get('API_AIRLABS_API_KEY'),
    };
  }

  async getAiportList(): Promise<AirportsOutputDto> {
    try {
      const response = await lastValueFrom(
        this.httpService.get<AirlabsAirportsOutputDto>(
          `${this.config.baseUrl}/v9/airports?api_key=${this.config.apiKey}`,
        ),
      );

      return { airports: response.data.response };
    } catch (err) {
      console.log(err);
    }
  }
}
