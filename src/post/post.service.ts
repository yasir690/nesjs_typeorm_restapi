import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto, UpdatePostDto } from "src/dto/post.dto";
import { Posts } from "src/entity/post.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";

export class PostService{
    constructor(
        @InjectRepository(Posts)
        private postRepo: Repository<Posts>,
        @InjectRepository(User)
        private userRepo: Repository<User>,
    ){}
    async addPost(createPostDto: CreatePostDto): Promise<Posts> {
        // Create a new Post instance
        const post = new Posts();
        post.title = createPostDto.title;
        post.content = createPostDto.content;
    
        // Find the user by their ID (assuming you pass the userId in the DTO)
        const user = await this.userRepo.findOne({ where: { id: createPostDto.user } });
    
        if (!user) {
          throw new Error('User not found');  // Handle the case if the user is not found
        }
    
        post.user = user;  // Assign the user entity to the post
    
        // Save the new post
        return this.postRepo.save(post);
      }

    async getPost():Promise<Posts[]>{
      return this.postRepo.find({
        relations:['user']
      });
    }

    async updatePost(id:string,UpdatePostDto:UpdatePostDto){
     const user=await this.postRepo.update(id,{
        title:UpdatePostDto.title,
        content:UpdatePostDto.content
     });

     return user;
    }

    async deletePost(id:string){
     return await this.postRepo.delete(id) 
    }
}