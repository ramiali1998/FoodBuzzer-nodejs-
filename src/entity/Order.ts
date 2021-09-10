import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"; 

@Entity()
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    orderId: number;
    @Column()
    orderDate: Date;
    @Column()
    orderStatus: String;

        // Order Realtion with Customers Table//
}
