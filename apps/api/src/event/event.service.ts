import { Injectable } from "@nestjs/common";
import { EventDTO } from "./event.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./event.entity";
import { Repository } from "typeorm";
import { Participant } from "src/participant/participant.entity";


@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>,
      ) {}
    

    async findAllEvents(): Promise<Event[]> {
        return this.eventRepository.find()
    }

    async viewEvent(id: number): Promise<unknown> {
        const eventDetail = await this.eventRepository.findOneBy({id})
        const participants = await this.participantRepository.find({ where: { eventId: id }})
        return { eventDetail, participants }
    }
}