import { PartialType } from '@nestjs/mapped-types';
import { CreateAbstractArtDto } from './create-abstract-art.dto';

export class UpdateAbstractArtDto extends PartialType(CreateAbstractArtDto) {}
