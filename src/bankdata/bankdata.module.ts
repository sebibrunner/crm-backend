import { Module } from '@nestjs/common';
import { BankdataService } from './bankdata.service';
import { BankdataController } from './bankdata.controller';
import { BankData } from './entities/bankdata.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BankData])],
  controllers: [BankdataController],
  providers: [BankdataService],
})
export class BankdataModule {}
