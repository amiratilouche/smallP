import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NinjasController } from './ninjas.controller';
import { ninjas } from './ninjas.entity';
import { NinjasService } from './ninjas.service';

@Module({
  imports: [TypeOrmModule.forFeature([ninjas]), Repository],
  controllers: [NinjasController],
  providers: [NinjasService]
})
export class NinjasModule {}
