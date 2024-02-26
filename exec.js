const { exec } = require("child_process");

//?   the exec function runs a terminal command with nodejs and gives us some result

exec("node someOther.js & pwd", (err, stdout, stderr) => {
  if (err) return console.log(`err: ${err.message}`); //*   if ant errors in application would happen.
  if (stderr) return console.log(`stderr: ${stderr}`); //*    if any errors while running the command would happen.
  console.log(`stdout: ${stdout}`); //*       just to make sure the shit is working yk...
});
