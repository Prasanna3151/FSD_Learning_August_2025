// fetch("https://reqres.in/api/users", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then(function (response) {
//     // console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.data);
//   });
async function create() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("New User Creater:", data.results);
  } catch (error) {
    console.log(error);
  }
}

create();
