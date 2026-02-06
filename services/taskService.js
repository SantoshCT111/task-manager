const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTask = async (taskData) => {
    return await prisma.task.create({
        data: {
            title: taskData.title,
            description: taskData.description,
            // completed is false by default in our schema!
        }
    });
};