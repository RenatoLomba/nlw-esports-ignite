import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator'

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  discord: string

  @IsString()
  @IsNotEmpty()
  hourEnd: string

  @IsString()
  @IsNotEmpty()
  hourStart: string

  @IsString()
  @IsNotEmpty()
  name: string

  @IsBoolean()
  useVoiceChannel: boolean

  @IsArray()
  weekDays: string[]

  @IsNumber()
  yearsPlaying: number
}
