import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Airport } from '../entities';

@Injectable()
export class AirportRepository {
  constructor(
    @InjectRepository(Airport) private readonly airportRep: Repository<Airport>,
  ) {}

  async getById(id: string) {
    return this.airportRep.findOneBy({ id });
  }

  async search(search: string) {
    return this.airportRep.find({
      where: [
        { iataCode: ILike(`%${search}%`) },
        { municipality: ILike(`%${search}%`) },
      ],
      order: {
        municipality: 1,
        iataCode: 1,
      },
    });
  }
}
