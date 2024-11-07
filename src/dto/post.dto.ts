import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePostDto{
    @IsNotEmpty()
    @IsString()
    title:string;

    @IsNotEmpty()
    @IsString()
    content:string;

    @IsNotEmpty()
    @IsNumber()
    user:number;
   }
   
   export class UpdatePostDto{

    @IsNotEmpty()
    @IsString()
    title?:string;

    @IsNotEmpty()
    @IsString()
    content?:string;
   }