var express = require("express");
var index = require("../views/index.js");
const db = require("../db/db.js");
const ordered = require("../views/ordered.js");
const devoured = require("../views/devoured.js");
const router = express.Router();

var orderedArray;
var devouredArray;
var orderedTemplate;
var devouredTemplate;

async function searchDB(){
    orderedArray =  await db.search_database_ordered();
    devouredArray = await db.search_database_devoured();
};



async function updateDB(updateID){
    await db.update(updateID);
    await readyTemplates();
}

async function createDB(name){
    await db.create(name);
    await readyTemplates();
}

async function readyTemplates(){
    await searchDB();

    orderedTemplate = orderedArray.reduce(function(total, item){
        return total + ordered.render(JSON.stringify(item.dataValues.burger_name), item.dataValues.id);
      }, "")
      
      
    devouredTemplate = devouredArray.reduce(function(total, item){
        return total + devoured.render(JSON.stringify(item.dataValues.burger_name), item.dataValues.id);
    }, "")
}

readyTemplates();

router.get("/", function(req,res){
    res.send(index.render());
});


router.get("/api/ordered", function(req,res){
    res.send(orderedTemplate);
});

router.get("/api/devoured", function(req,res){
    res.send(devouredTemplate);
});


router.put("/api/update/:id",function(req,res){
    let buffer = req.params.id;
    updateDB(buffer).then(function(){
        res.send("Successful Update");
    });
});


router.post("/api/create/:name",function(req,res){

    let buffer = req.params.name;
    console.log(buffer);
    createDB(buffer).then(function(){
        res.send("Successful Update");
    });
});




module.exports = router;