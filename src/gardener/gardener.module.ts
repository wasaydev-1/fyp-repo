import { Module } from '@nestjs/common';
import { GardenerService } from './gardener.service';
import { GardenerController } from './gardener.controller';

@Module({
  controllers: [GardenerController],
  providers: [GardenerService],
})
export class GardenerModule {}
