import { ApiProperty } from "@nestjs/swagger";

export class CreateAbstractArtDto {
    @ApiProperty()
    name: string;

    @ApiProperty({required: false})
    description?: string;

    @ApiProperty()
    autor: string;
}
