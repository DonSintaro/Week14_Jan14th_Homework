$(document).on("click",".eatBtn",function(){
    let burgerBufferID = $(this).attr("data-name");
    let burgerID = (burgerBufferID.split("db"))[1];
    console.log(burgerID);

})

// Currently need to make on click for entry for burger, and also need to finish with update/create.
// then server side create and update.


renderList();

async function getOrdered() {
    console.log("Got to ajax request for ordered");
    return await $.ajax({
        url: "/api/ordered",
        method: "GET"
    });
};

async function getDevoured() {
    console.log("Got to ajax request for devoured");
    return await $.ajax({
        url: "/api/devoured",
        method: "GET"
    });
};


async function updateBurgers(id){
    console.log("Got to ajax for update");
    return await $.ajax({
        url: "/api/ordered/" + id,
        method: "PUT"
    })
}

async function createBuger(name){
    console.log("Got to ajax for create");
    return await $.ajax({
        url: "/api/create/",
        data: name,
        method: "POST"
    })
}


function getAndRenderOrdered() {
    return getOrdered().then(function(data) {
        makeOrdered(data);
    });
  };

function makeOrdered(data){
    $("#ordered").html("");
    $("#ordered").append(data);
    
}

function getAndRenderDevoured() {
    return getDevoured().then(function(data) {
        makeDevoured(data);
    });
  };

function makeDevoured(data){
    $("#devoured").html("");
    $("#devoured").append(data);
    
}

function renderList(){

getAndRenderOrdered();
getAndRenderDevoured();

}

