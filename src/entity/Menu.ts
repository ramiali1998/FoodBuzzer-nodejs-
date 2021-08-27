import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm"; 

@Entity()
export class Menu extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    cost: string;

    @Column()
    status: boolean;

}
