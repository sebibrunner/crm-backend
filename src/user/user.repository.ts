import { Injectable } from '@nestjs/common';
import { Repository, EntityRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password } = createUserDto;
    const user = new User();
    user.username = username;
    user.password = password;

    await this.save(user);
    return user;
  }
}
