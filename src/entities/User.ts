import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript'

@Table({underscored: true, name: {singular: "user", plural: "users"}, createdAt: false, updatedAt: false, deletedAt: false})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    public id: number;

    @Column
    public firstName: string;

    @Column
    public lastName: string;
}