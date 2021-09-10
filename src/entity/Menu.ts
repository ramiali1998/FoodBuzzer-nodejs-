import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn} from "typeorm"; 
import { Categories } from "./Categories";

@Entity()
export class Menu extends BaseEntity{

    @PrimaryGeneratedColumn()
    foodId: number;


    @Column()
    foodName: string;


    @Column()
    foodPrice: string;

 


    @ManyToOne(type => Categories, categories => categories.item)
  
    categoriesID: Categories;
        // Menu Realtion with CategoriesID Table//
}
