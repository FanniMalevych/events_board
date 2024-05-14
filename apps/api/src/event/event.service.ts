import { Injectable } from "@nestjs/common";
import { EventDTO } from "./event.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./event.entity";
import { Repository } from "typeorm";


@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
      ) {}
    

    async findAllEvents(): Promise<Event[]> {
        return this.eventRepository.find()
    }

    async viewEvent(id: number): Promise<Event> {
        return this.eventRepository.findOneBy({id})
    }
}