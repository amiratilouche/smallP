import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ninjas } from './ninjas.entity';

@Injectable()
export class NinjasService {
    constructor(
        @InjectRepository(ninjas)
        private ninjasRepository: Repository<ninjas>,
      ) {}

      private ninjas: ninjas[] = [
        { id: 0, name: 'Amira', weapon: 'flames' },
        { id: 1, name: 'No Names', weapon: 'stars' },
      ];
    
      async getNinjas(weapon?: 'stars' | 'flames'): Promise<ninjas[]> {
        if (weapon) {
          return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }
        return this.ninjasRepository.find();
      }
}
