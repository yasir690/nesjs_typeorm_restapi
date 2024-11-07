import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreatePostDto, UpdatePostDto } from "src/dto/post.dto";
import { PostService } from "./post.service";

@Controller('/post')
export class PostController{
    constructor(private postservice:PostService){}
@Post('/addpost')
async addpost(@Body() CreatePostDto:CreatePostDto){
return this.postservice.addPost(CreatePostDto)
}

@Get('/getpost')
async getpost(){
return this.postservice.getPost();
}

@Put('/updatepost/:id')

async updatepost(@Param('id') id:string , @Body() UpdatePostDto:UpdatePostDto){
return this.postservice.updatePost(id,UpdatePostDto)
}

@Delete('/deletepost/:id')
async deletepost(@Param('id') id:string){
return this.postservice.deletePost(id)
}
}