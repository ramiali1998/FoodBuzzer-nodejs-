import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"; 

@Entity()
export class Customers extends BaseEntity{

    @PrimaryGeneratedColumn()
    CustomerId: number;

    @Column()
    CustomerPhone: string;
    
 
    //CategoriesID O Realtion with M Menu Table//


}