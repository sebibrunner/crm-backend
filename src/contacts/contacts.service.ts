import { Contact } from './contact.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private contactsRepository: Repository<Contact>,
  ) {}

  getContacts(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }

  addContact(contact): Promise<Contact> {
    this.contactsRepository.insert(contact);
    return contact;
  }
}