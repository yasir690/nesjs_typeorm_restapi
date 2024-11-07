import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from 'src/dto/user.dto';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcryptjs'; // Import bcryptjs

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,  // Inject the User repository
  ) {}

  async addUser(createUserDto: CreateUserDto): Promise<User> {


    const { name, email, password, age } = createUserDto;

    const existuser=await this.userRepo.findOne({where:{email}});

    if(existuser){
        throw new ConflictException('user already exist')
    }

    // Ensure password is hashed
    const hashedPassword = await bcrypt.hash(password, 10); // bcrypt.hash(password, saltRounds)

    const user = new User();
    user.name = name;
    user.email = email;
    user.password = hashedPassword; // Save the hashed password
    user.age = age;
    return this.userRepo.save(user);
  }

  async getUser():Promise<User[]>{
   return this.userRepo.find();
  }

  async updateUser(id:string,UpdateUserDto:UpdateUserDto){
   const user=await this.userRepo.update(id,{
    name:UpdateUserDto.name,
    email:UpdateUserDto.email,
    age:UpdateUserDto.age
   });
   return user;
  }

  async deleteUser(id:string){
  const user=await this.userRepo.delete(id);
  return user;
  }
}
