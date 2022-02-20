import { InvoicesService } from './invoices.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Position } from 'src/positions/position.entity';
import { Contact } from 'src/contacts/contact.entity';

type Invoice = {
  id?: number;
  invoicedate: Date;
  positions: Position[];
  receiver: Contact;
};

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Get()
  getInvoices() {
    return this.invoiceService.getInvoices();
  }

  @Post()
  addInvoice(@Body() invoice: Invoice) {
    return this.invoiceService.addInvoice(invoice);
  }
}