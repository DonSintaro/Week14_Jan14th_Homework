const db = require('../models');



async function search_database_ordered(){
    await db.sequelize.sync()
    let data = await db.burger.findAll({
        where:{devoured: 0}}); 
    return data; 
}

async function search_database_devoured(){
    await db.sequelize.sync()
    let data = await db.burger.findAll({
        where:{devoured: 1}}); 
    return data; 
}

async function create(name){
    await db.burger.create({
        burger_name: name
    })
}

async function update(ID){
    await db.burger.update({
        devoured: 1
    },{
        where: { id: parseInt(ID)}
    })
}



module.exports = {
    create:create,
    search_database_ordered:search_database_ordered,
    search_database_devoured:search_database_devoured,
    update:update
}

