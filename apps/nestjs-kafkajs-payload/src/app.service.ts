import { UserGetReqDto, UserResDto } from '@app/common/user/dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject("USER") private readonly userClientKafka: ClientKafka) {}

  async get(dto: UserGetReqDto): Promise<UserResDto | undefined> {
    return this.userClientKafka
      .send<UserResDto, UserGetReqDto>("USER_GET", dto)
      .toPromise();
  }
}
