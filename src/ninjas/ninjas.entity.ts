
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ninjas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weapon: string;
}
