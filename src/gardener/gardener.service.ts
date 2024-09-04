import { Injectable } from '@nestjs/common';
import { CreateGardenerDto } from './dto/create-gardener.dto';
import { UpdateGardenerDto } from './dto/update-gardener.dto';

@Injectable()
export class GardenerService {
  create(createGardenerDto: CreateGardenerDto) {
    return 'This action adds a new gardener';
  }

  findAll() {
    return `This action returns all gardener`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gardener`;
  }

  update(id: number, updateGardenerDto: UpdateGardenerDto) {
    return `This action updates a #${id} gardener`;
  }

  remove(id: number) {
    return `This action removes a #${id} gardener`;
  }
}
