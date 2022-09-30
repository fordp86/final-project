import {
  InferAttributes,
  InferCreationAttributes,
  Model,
  DataTypes,
  Sequelize,
} from "sequelize";

export class Tasks extends Model<
  InferAttributes<Tasks>,
  InferCreationAttributes<Tasks>
> {
  declare taskId: number;
  declare taskTitle: string;
  declare completed: boolean;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

export function TaskFactory(sequelize: Sequelize) {
  Tasks.init(
    {
      taskId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      taskTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "tasks",
      freezeTableName: true,
      sequelize,
    }
  );
}
