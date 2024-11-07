import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
 name:string;
 @IsString()
  @IsNotEmpty()
  @IsEmail()
 email:string;
 @IsString()
 @IsNotEmpty()
 password:string;
 @IsNumber()
 @IsNotEmpty()

 age:number;   
}

export class UpdateUserDto{
    @IsString()
    @IsNotEmpty()
    name?:string;
    @IsString()
    @IsNotEmpty()
    @IsEmail()

    email?:string;
    // password?:string;

    @IsNumber()
    @IsNotEmpty()
    age?:number;   
}