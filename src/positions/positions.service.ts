import { Position } from './position.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private positionsRepository: Repository<Position>,
  ) {}

  getPositions(): Promise<Position[]> {
    return this.positionsRepository.find();
  }

  addPosition(position): Promise<Position> {
    this.positionsRepository.insert(position);
    return position;
  }
}