import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    tipo: string

    @Column()
    tecnologia: string

    @Column()
    inicio: string

    @Column()
    fim: string

}

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    idade: string

    @Column()
    linguagens: string

    @Column()
    contato: string

}