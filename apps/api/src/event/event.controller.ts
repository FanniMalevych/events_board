import { Controller, Get, Param } from "@nestjs/common";
import { EventService } from "./event.service";


@Controller('event') 
export class EventController {
    constructor(private readonly eventService: EventService) {}

    @Get()
    async findAll() {
      return this.eventService.findAllEvents();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
      return this.eventService.viewEvent(id);
    }
}