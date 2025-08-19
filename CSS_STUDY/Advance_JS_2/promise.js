const promiseObj = new Promise(function(resolve,reject){
    console.log("Process Started");
    setTimeout(function(){
        resolve({a:10,b:20});
        // reject("Error occured");
    },5000);
});

promiseObj.then(function(add){
    console.log("the result is",add.a+add.b);
}).catch(function(error){
    console.error(error);
})