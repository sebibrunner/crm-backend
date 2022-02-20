import { Invoice } from './invoice.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoicesRepository: Repository<Invoice>,
  ) {}

  getInvoices(): Promise<Invoice[]> {
    return this.invoicesRepository.find();
  }

  addInvoice(invoice): Promise<Invoice> {
    this.invoicesRepository.insert(invoice);
    return invoice;
  }
}