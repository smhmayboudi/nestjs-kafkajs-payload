import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from "@nestjs/microservices";
import { CommonClientKafka } from '@app/common';
import { HttpModule, OnModuleInit, Inject } from "@nestjs/common";
import { Module } from '@nestjs/common';
import { UserClientsOptionsFactory } from './app.clients.options.factory';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [HttpModule, AppModule],
        name: "USER",
        useClass: UserClientsOptionsFactory,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(@Inject("USER") private readonly userClientKafka: CommonClientKafka) {}

  async onModuleInit(): Promise<void> {
    this.userClientKafka.subscribeToResponseOf("USER_GET");
    await this.userClientKafka.connect();
  }
}
