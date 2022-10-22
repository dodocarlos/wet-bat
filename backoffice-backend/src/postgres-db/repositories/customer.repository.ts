import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from '@postgres-db/models/customer.model';
import { EntityManager, Repository } from 'typeorm';
import { Customer } from '../entities';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRep: Repository<Customer>,
  ) {}

  async createCustomer(
    customerData: CustomerModel,
    entityManager?: EntityManager,
  ) {
    const { name, email } = customerData;

    const customer = this.customerRep.create({
      name,
      email,
    });

    if (entityManager) {
      return entityManager.save(customer);
    }
    return this.customerRep.save(customer);
  }

  async getCustomerByEmail(email: string) {
    return this.customerRep.findOne({
      where: [{ email: email }],
    });
  }
}
