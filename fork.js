const express = require("express");
const { fork } = require("child_process");
const app = express();

app.get("/one", (req, res) => {
  const sum = longComputation();
  res.send({ message: "it took some time actually /one", sum });
});

app.get("/two", async (req, res) => {
  const sum = await longComputePromise();
  res.send({ message: "it took some time actually /two", sum });
});
app.get("/three", (req, res) => {
  const child = fork("./longTask.js");
  child.send("start");
  child.on("message", (sum) => {
    res.send({ message: "it took some time actually /two", sum });
  });
});
app.listen(3000, (err) => {
  if (err) return console.log(err.message);
  console.log("server is running on port 3000...");
});

function longComputation() {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
}

function longComputePromise() {
  return new Promise((resolve, reject) => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }
    resolve(sum);
  });
}
