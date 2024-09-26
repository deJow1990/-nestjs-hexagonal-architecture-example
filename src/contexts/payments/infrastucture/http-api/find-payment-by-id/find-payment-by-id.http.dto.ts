import { IsNotEmpty, IsString } from '@nestjs/class-validator';

export class FindPaymentByIdHttpDto {
  @IsNotEmpty()
  @IsString()
  id!: string;
}
