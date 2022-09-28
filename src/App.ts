import { Sequelize } from 'sequelize-typescript'

import { User } from './entities';

const sequelize = new Sequelize('postgres', 'sample_user', 'sample_password', {
    host: 'localhost',
    dialect: 'postgres',
    models: [
        `${__dirname}/entities/User.ts`
    ]
});

const printUsers = (users: User[]) => {
    for (let user of users) {
        printUser(user);
    }
}

const printUser = (user: User) => {
    console.log(`User: { id: ${user.id}, firstName: ${user.firstName}, lastName: ${user.lastName} }`);
}

const main = async () => {
    console.log('application started');

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    printUsers(await User.findAll());

    await User.create({ firstName: "Michael", lastName: "Colby" });

    const user = await User.findByPk(1);
    if (user) printUser(user);
}

main().then(() => { console.log('application stopped');});