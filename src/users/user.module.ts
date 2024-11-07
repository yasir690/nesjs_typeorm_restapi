import { Module } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),  // Register the User repository here
      ],
    providers:[UserService],
    controllers:[UserController],
    exports:[TypeOrmModule,UserService]
})
export class userModule{}