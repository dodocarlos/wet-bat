import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Transportation } from '../entity';

@Injectable()
export class TransportationRepository {
  constructor(
    @InjectRepository(Transportation)
    private readonly transportation: Repository<Transportation>,
  ) {}

  async getAll() {
    return this.transportation.find();
  }
}
