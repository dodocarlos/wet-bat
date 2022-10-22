import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Airport, Transportation, Customer } from '.';

@Entity('quote')
export class Quote {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, { eager: true })
  customer: Customer;

  @ManyToOne(() => Airport, { eager: true })
  departure: Airport;

  @Column()
  departureDate: Date;

  @ManyToOne(() => Airport, { eager: true })
  destination: Airport;

  @Column()
  returnDate: Date;

  @ManyToOne(() => Transportation, { eager: true })
  transportation: Transportation;

  @Column()
  price: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
