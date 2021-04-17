import { Injectable } from '@nestjs/common';
import { CreateBankdatumDto } from './dto/create-bankdatum.dto';
import { UpdateBankdatumDto } from './dto/update-bankdatum.dto';

@Injectable()
export class BankdataService {
  create(createBankdatumDto: CreateBankdatumDto) {
    return 'This action adds a new bankdatum';
  }

  findAll() {
    return `This action returns all bankdata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bankdatum`;
  }

  update(id: number, updateBankdatumDto: UpdateBankdatumDto) {
    return `This action updates a #${id} bankdatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankdatum`;
  }
}
