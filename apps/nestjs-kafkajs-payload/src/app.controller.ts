import { AppService } from './app.service';
import { Controller, Get } from '@nestjs/common';
import { UserResDto } from '@app/common/user/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async get(): Promise<UserResDto | undefined> {
    return this.appService.get(
      {
        sub: 0,
      },
    );
  }
}
