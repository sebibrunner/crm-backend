import { ContactsService } from './contacts.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

type Contact = {
  id?: number;
  prename: string;
  surname: string;
  street: string;
  streetnumber: string;
  city: string;
  zip: number;
};

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  getContacts() {
    return this.contactService.getContacts();
  }

  @Post()
  addContact(@Body() contact: Contact) {
    return this.contactService.addContact(contact);
  }
}