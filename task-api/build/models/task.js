"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskFactory = exports.Tasks = void 0;
const sequelize_1 = require("sequelize");
class Tasks extends sequelize_1.Model {
}
exports.Tasks = Tasks;
function TaskFactory(sequelize) {
    Tasks.init({
        taskId: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        taskTitle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        completed: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        tableName: "tasks",
        freezeTableName: true,
        sequelize,
    });
}
exports.TaskFactory = TaskFactory;
