// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));


// Iteration 1 - using callbacks
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    getInstruction(
      "mashedPotatoes",
      1,
      (step1) => {
        document.querySelector("#mashedPotatoes").innerHTML +=
          `<li>${step1}</li>`;

        getInstruction(
          "mashedPotatoes",
          2,
          (step2) => {
            document.querySelector("#mashedPotatoes").innerHTML +=
              `<li>${step2}</li>`;

            getInstruction(
              "mashedPotatoes",
              3,
              (step3) => {
                document.querySelector("#mashedPotatoes").innerHTML +=
                  `<li>${step3}</li>`;

                getInstruction(
                  "mashedPotatoes",
                  4,
                  (step4) => {
                    document.querySelector("#mashedPotatoes").innerHTML +=
                      `<li>${step4}</li>`;

                    document
                      .querySelector("#mashedPotatoesImg")
                      .removeAttribute("hidden");
                  },
                  (error) => console.log(error),
                );
              },
              (error) => console.log(error),
            );
          },
          (error) => console.log(error),
        );
      },
      (error) => console.log(error),
    );
  },
  (error) => console.log(error),
);

// Iteration 2 - using promises

getInstructionPromise("mashedPotatoes", 0)
  .then((step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    return getInstructionPromise("mashedPotatoes", 1);
  })
  .then((step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    return getInstructionPromise("mashedPotatoes", 2);
  })
  .then((step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    return getInstructionPromise("mashedPotatoes", 3);
  })
  .then((step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
    return getInstructionPromise("mashedPotatoes", 4);
  })
  .then((step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));



// Iteration 3 using async/await

async function makeMashedPotatoes() {
  try {
    const step0 = await getInstructionPromise("mashedPotatoes", 0);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

    const step1 = await getInstructionPromise("mashedPotatoes", 1);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    const step2 = await getInstructionPromise("mashedPotatoes", 2);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;

    const step3 = await getInstructionPromise("mashedPotatoes", 3);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

    const step4 = await getInstructionPromise("mashedPotatoes", 4);
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;

    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeMashedPotatoes();

// Bonus 2 - Promise all
const promises = [];

for (let i = 0; i < 5; i++) {
  promises.push(getInstructionPromise("mashedPotatoes", i));
}

Promise.all(promises)
  .then((steps) => {
    steps.forEach((step) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    });
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));