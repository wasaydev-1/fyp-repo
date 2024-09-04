import { IsEmail, IsNotEmpty, MinLength, IsEnum } from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsEnum(['admin', 'customer', 'gardener'])
  role: 'admin' | 'customer' | 'gardener';
}
