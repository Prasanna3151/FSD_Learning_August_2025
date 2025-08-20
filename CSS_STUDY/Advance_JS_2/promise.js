function add() {
  return new Promise(function (resolve, reject) {
    console.log("Process Started");
    setTimeout(function () {
      resolve({ a: 10, b: 20 });
      // reject("Error occured");
    }, 5000);
  });
}

function sub() {
  return new Promise(function (resolve, reject) {
    console.log("subtraction started");
    setTimeout(function () {
      resolve({ a: 999, b: 333 });
    }, 3000);
  });
}

async function operation() {
  try {
    const sum = await add(); // Capture the result of add()
    console.log("The result is", sum.a + sum.b);

    const minus = await sub(); // Capture the result of sub()
    console.log("Subtraction Value is", minus.a - minus.b);

    console.log("All Process Completed.");
  } catch (error) {
    console.log(error);
  }
}

operation();

function process() {
  add()
    .then(function (sum) {
      console.log("the result is", sum.a + sum.b);
      return sub();
    })
    .then(function (minus) {
      console.log("Subtraction Value is ", minus.a - minus.b);
    })
    .catch(function (error) {
      console.error(error);
    });
}
