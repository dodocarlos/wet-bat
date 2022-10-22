import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Airport } from '../entity';

@Injectable()
export class AirportRepository {
  constructor(
    @InjectRepository(Airport) private readonly airport: Repository<Airport>,
  ) {}

  async searchAirports(search: string) {
    return this.airport.find({
      where: [
        { name: ILike(`%${search}%`) },
        { iataCode: ILike(`%${search}%`) },
        { municipality: ILike(`%${search}%`) },
      ],
    });
  }
}
