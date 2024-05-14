import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Event } from "src/event/event.entity";
import { Participant } from "./participant.entity";
import { ParticipantController } from "./participant.controller";
import { ParticipantService } from "./participant.service";

@Module({
    imports: [TypeOrmModule.forFeature([Participant, Event])],
    controllers: [ParticipantController],
    providers: [ParticipantService],
  })
  export class ParticipantModule {}