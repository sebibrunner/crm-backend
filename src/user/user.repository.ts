import { Repository, EntityRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username } = createUserDto;
    const user = new User();
    user.username = username;

    await this.save(user);
    return user;
  }
}
