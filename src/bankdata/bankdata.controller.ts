import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BankdataService } from './bankdata.service';
import { CreateBankdatumDto } from './dto/create-bankdatum.dto';
import { UpdateBankdatumDto } from './dto/update-bankdatum.dto';

@Controller('bankdata')
export class BankdataController {
  constructor(private readonly bankdataService: BankdataService) {}

  @Post()
  create(@Body() createBankdatumDto: CreateBankdatumDto) {
    return this.bankdataService.create(createBankdatumDto);
  }

  @Get()
  findAll() {
    return this.bankdataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bankdataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBankdatumDto: UpdateBankdatumDto) {
    return this.bankdataService.update(+id, updateBankdatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bankdataService.remove(+id);
  }
}
