// const value = document.getElementById("data");

//without callback:
/*const fetchUser = function(userName) {
    setTimeout(function(){
        return {
            user: userName
        }
    },2000);
}
const user = fetchUser("John");
value.innerHTML = user;*/

//with Callback:

// const fetchUser = function(username, callback) {
//     setTimeout(function(){
//             callback(username);
//     },2000);
// };

//with promise
const fetchUser = function(userName){
    return new Promise(function(resolve,reject) {
        setTimeout(function(){
            console.log("Fetching frm API");
            resolve(userName);
        },2000);
    });
};
console.log(fetchUser("Prasanna"));
// const user = fetchUser("John",function(user){
//     value.innerHTML = user;
// });