module.exports = function(sequelize,DataTypes){
    const Model = sequelize.define('burger', {
        id: {type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
            },

        burger_name: {type: DataTypes.STRING, 
            allowNull: false
            },

        devoured: {type: DataTypes.BOOLEAN,
            defaultValue: false
            }
    },{timestamps: false});
    return Model
}