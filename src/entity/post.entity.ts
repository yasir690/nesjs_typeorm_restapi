import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Posts{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    content:string;


    // Many posts belong to one user
  @ManyToOne(() => User, user => user.posts)
    user:User
}