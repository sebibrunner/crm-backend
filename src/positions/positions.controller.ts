import { PositionsService } from './positions.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

type Position = {
  id?: number;
  description: string;
  quantity: number;
  price: number;
};

@Controller('positions')
export class PositionsController {
  constructor(private readonly positionService: PositionsService) {}

  @Get()
  getPositions() {
    return this.positionService.getPositions();
  }

  @Post()
  addPosition(@Body() position: Position) {
    return this.positionService.addPosition(position);
  }
}