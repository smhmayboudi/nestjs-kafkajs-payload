import {
    IsNumberString,
    IsString,
  } from "class-validator";
  
  import { ApiProperty } from "@nestjs/swagger";
  
  export class UserResDto {
    @ApiProperty({
      description: "The primary key",
      example: "abcdef",
    })
    @IsNumberString()
    readonly id: number;
  
    @ApiProperty({
      description: "The username",
      example: "smhmayboudi",
    })
    @IsString()
    readonly username: string;
  
    constructor(
      id: number,
      username: string
    ) {
      this.id = id;
      this.username = username;
    }
  }
  