import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transportation } from '../entities';

@Injectable()
export class TransportationRepository {
  constructor(
    @InjectRepository(Transportation)
    private readonly transportationRep: Repository<Transportation>,
  ) {}

  async getById(id: string) {
    return this.transportationRep.findOneBy({ id });
  }

  async getAll() {
    return this.transportationRep.find();
  }
}
