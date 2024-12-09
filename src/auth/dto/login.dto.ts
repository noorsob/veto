import { IsEmail,  IsNotEmpty, IsString,  MinLength } from "class-validator";

export class LoginDto{
  
   @IsEmail({},{message:"Please enter the valid email"})
    @IsNotEmpty()
    readonly email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    readonly password:string
    
   
 
   
}

