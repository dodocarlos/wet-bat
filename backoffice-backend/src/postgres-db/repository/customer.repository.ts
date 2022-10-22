import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Customer } from '../entity';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer) private readonly customer: Repository<Customer>,
  ) {}

  async getCustomerByEmail(email: string) {
    return this.customer.findOne({
      where: [{ email: ILike(`%${email}%`) }],
    });
  }
}
