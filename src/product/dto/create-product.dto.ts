import { IsEmail, IsNotEmpty, IsNumber, IsString  } from "class-validator";
export class CreateProductDto {
    id: number;
    
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    description: string;
}

// export class CreateProductDto {}