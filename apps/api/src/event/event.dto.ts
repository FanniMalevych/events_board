import { ParticipantDTO } from "src/participant/participant.dto";

export class EventDTO {
    id: string;
    title: string;
    description: string;
    organizer: string;
    date: Date;
    participants: ParticipantDTO[];
}