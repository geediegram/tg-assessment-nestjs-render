import { Module } from '@nestjs/common';
import { RoosterService } from './rooster.service';
import { RoosterController } from './rooster.controller';

@Module({
  controllers: [RoosterController],
  providers: [RoosterService],
})
export class RoosterModule {}
