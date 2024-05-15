import 'dotenv/config'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './event/event.entity';
import { Participant } from './participant/participant.entity';
import { EventModule } from './event/event.module';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      entities: [Event, Participant],
      database: 'events',
      synchronize: true,
      logging: true,
    }),
    EventModule,
    ParticipantModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
