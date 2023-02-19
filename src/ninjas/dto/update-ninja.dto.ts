import { PartialType } from '@nestjs/mapped-types';
import { CreatNinjaDto } from './create-ninja.dto';

export class UpdateNinjaDto extends PartialType(CreatNinjaDto) {}
