import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Participant } from "./participant.entity";
import { ParticipantDTO } from "./participant.dto";
import { Event } from "src/event/event.entity";


@Injectable()
export class ParticipantService {
    constructor(
        @InjectRepository(Participant) private readonly participantRepository: Repository<Participant>,
        @InjectRepository(Event) private readonly eventRepository: Repository<Event>,
      ) {}
    

    async addParticipant(newParticipant: ParticipantDTO): Promise<Participant> {
        const participant: Participant = new Participant()
        const event: Event = await this.eventRepository.findOneBy({id: newParticipant.eventId})
        participant.name = newParticipant.name
        participant.email = newParticipant.email
        participant.dateBirth = newParticipant.dateBirth
        participant.details = newParticipant.details
        participant.event = event
        participant.eventId = newParticipant.eventId
        return await this.participantRepository.save(participant)
    }

}