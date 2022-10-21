import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
