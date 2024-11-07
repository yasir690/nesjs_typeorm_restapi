import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDto, UpdateUserDto } from "src/dto/user.dto";
import { UserService } from "./user.service";

@Controller('/user')
export class UserController{
constructor(private userservice:UserService){}
@Post('/adduser')


async adduser(@Body() createUserDto: CreateUserDto) {
    console.log('called');
    
    return this.userservice.addUser(createUserDto);
  }
@Get('/getuser')
async getuser(){
return this.userservice.getUser();
}

@Put('/updateuser/:id')
async updateUser(@Param('id')id:string , @Body() UpdateUserDto:UpdateUserDto){
return this.userservice.updateUser(id,UpdateUserDto)
}
@Delete('/deleteuser/:id')
deleteuser(@Param('id') id:string){
return this.userservice.deleteUser(id)
}
}