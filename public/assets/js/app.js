renderList();



$(document).on("click",".eatBtn",function(){
    let burgerBufferID = $(this).attr("data-name");
    let burgerID = (burgerBufferID.split("db"))[1];
    
    updateBurger(burgerID).then(function(data){
        console.log(data);
        renderList();
    })
})

$(".startB").on("click",function(){
    let burgerNameBuffer = $("textarea").val();
    $("textarea").val("");
    createBurger(burgerNameBuffer).then(function(data){
        console.log(data);
        renderList(); 
    })
})

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


async function updateBurger(id){
    console.log("Got to ajax for update");
    return await $.ajax({
        url: "/api/update/" + id,
        method: "PUT"
    })
}

async function createBurger(name){
    console.log("Got to ajax for create " + name);
    return await $.ajax({
        url: "/api/create/" + name,
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