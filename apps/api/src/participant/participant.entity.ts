import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from 'src/event/event.entity';

@Entity()
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @ManyToOne(() => Event, (event) => event.participants, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  event: Event;

  @Column()
  eventId: number;

  @Column({ type: 'varchar' })
  details: string;

  @Column()
  dateBirth: Date
}