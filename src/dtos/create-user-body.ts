import { IsNotEmpty, Length } from "class-validator";

export class CreateUserBody {
    
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    occupation: string;
}