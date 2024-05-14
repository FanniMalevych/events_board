import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventService } from "./event.service";
import { EventController } from "./event.controller";
import { Event } from "./event.entity";
import { Participant } from "src/participant/participant.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Event, Participant])],
    controllers: [EventController],
    providers: [EventService],
  })
  export class EventModule {}