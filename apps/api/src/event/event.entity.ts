import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Participant } from 'src/participant/participant.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title!: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  organizer: string;

  @Column()
  date: Date;

  @OneToMany(() => Participant, (participant) => participant.event)
  participants: Participant[];
}