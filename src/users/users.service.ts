import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  addUser(user): Promise<User> {
    this.usersRepository.insert(user);
    return user;
  }

  findUserByUsername(username: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        username,
      }
    });
  }

  findUserById(id: number): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        id,
      }
    });
  }
}