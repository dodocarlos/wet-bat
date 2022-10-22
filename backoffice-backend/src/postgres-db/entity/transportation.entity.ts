import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transportation')
export class Transportation {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;
}
