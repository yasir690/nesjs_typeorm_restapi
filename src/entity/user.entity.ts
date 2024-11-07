import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./post.entity";

@Entity()
export class User{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    age?:number;

      // One user can have many posts

    @OneToMany(() => Posts, post => post.user)
  posts: Posts[];
}