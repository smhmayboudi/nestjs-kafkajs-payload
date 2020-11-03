import { UserGetReqDto, UserResDto } from '@app/common/user/dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async get(dto: UserGetReqDto): Promise<UserResDto | undefined> {
    return Promise.resolve({
      id: dto.sub,
      username: "smhmayboudi",
    });
  }
}
