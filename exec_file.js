const { execFile } = require("child_process");
const path = require("path");

//?     does the same shit but in a .sh file for bash scripting and bluh bluh bluh

const execPath = path.resolve(__dirname, "./execFile.sh");

execFile(execPath, (err, stdout, stderr) => {
  if (err) return console.log(`err: ${err.message}`); //*   if ant errors in application would happen.
  if (stderr) return console.log(`stderr: ${stderr}`); //*    if any errors while running the command would happen.
  console.log(`stdout: ${stdout}`); //*       just to make sure the shit is working yk...
});
