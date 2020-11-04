import { ClientKafka } from "@nestjs/microservices";

export class CommonClientKafka extends ClientKafka {
  protected getResponsePatternName(pattern: string): string {
    return `${pattern}_REPLY`;
  }
}
