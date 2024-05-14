import { Controller, Get, Post, Body } from "@nestjs/common";
import { ParticipantService } from "./participant.service";
import { ParticipantDTO } from "./participant.dto";

@Controller('participant')
  export class ParticipantController {
    constructor(private readonly participantService: ParticipantService) {}
  
    @Post()
    async create(@Body() newParticipant: ParticipantDTO) {
      return this.participantService.addParticipant(newParticipant);
    }
}