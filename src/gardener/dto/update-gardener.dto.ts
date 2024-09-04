import { PartialType } from '@nestjs/mapped-types';
import { CreateGardenerDto } from './create-gardener.dto';

export class UpdateGardenerDto extends PartialType(CreateGardenerDto) {}
