import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('airport')
export class Airport {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  iataCode: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  country: string;

  @Column()
  region: string;

  @Column()
  municipality: string;

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
