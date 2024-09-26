import { IsNotEmpty, IsNumber, IsUUID } from '@nestjs/class-validator';

export class CreatePaymentHttpDto {
  @IsNumber()
  @IsNotEmpty()
  amount!: number;

  @IsUUID()
  @IsNotEmpty()
  customerId!: string;
}
