import { Module } from "@nestjs/common";
import { PostController } from "./post.controller";
import { PostService } from "./post.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Posts } from "src/entity/post.entity";
import { userModule } from "src/users/user.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Posts]),  // Register the User repository here
        userModule
      ],
    controllers:[PostController],
    providers:[PostService],
    exports :[PostService,TypeOrmModule]

})
export class postModule{

}