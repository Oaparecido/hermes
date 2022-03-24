import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @OneToOne(() => Address)
  address: number;

  @Column()
  profile_image: string;

  @Column()
  created_at: string;
}
