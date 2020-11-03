import { AppService } from './app.service';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from "@nestjs/microservices";
import { UserGetReqDto, UserResDto } from '@app/common/user/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern("USER_GET")
  get(
    @Payload() dto: UserGetReqDto
  ): Promise<UserResDto | undefined> {
    console.log("My suggestion to bring back the dto itself like Redis, since the rest of message accessible with context.");
    console.log("dto", dto);
    console.log("dto => dto.value");
    console.log("dto.value", (dto as any).value);
    return this.appService.get(dto);
  }
}
