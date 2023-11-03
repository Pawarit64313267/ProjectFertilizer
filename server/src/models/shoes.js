module.exports = (sequelize, DataTypes) => {
    const Shoes = sequelize.define('Shoes', {
        shoe_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        details: {
            type: DataTypes.TEXT, 
            allowNull: true 
        },
        image: {
            type: DataTypes.STRING, 
            allowNull: true
        }
    });

    return Shoes;
};
