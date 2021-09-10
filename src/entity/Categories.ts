import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinTable} from "typeorm"; 
import { Menu } from "./Menu";

@Entity()
export class Categories extends BaseEntity{

    @PrimaryGeneratedColumn()
    categoryId: number;

    @Column()
    categoryName: string;
    
    @OneToMany(type => Menu, menu => menu.categoriesID,{cascade:true})
  
    item: Menu[];
    
        //CategoriesID O Realtion with M Menu Table//


}
