import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Task{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name:string
    @Column()
    content:string
    @Column()
    status:string
    @Column()
    deadline:string

    @ManyToMany(() => User)
    @JoinTable()
    users?: User[]

    constructor(name:string, contend:string, status:string, deadline:string, users?:User[]){
        this.name = name;
        this.content = contend;
        this.status = status;
        this.deadline = deadline;
        this.users = users
    }


}