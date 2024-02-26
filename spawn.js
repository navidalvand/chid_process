const { spawn } = require("child_process");


const someChild = spawn("ls", ["-ltrh"]);//?    event based and runs the command by streaming.

someChild.stdout.on("data", (data) => console.log(`stdout: ${data}`));//*    stdout data event.
someChild.stderr.on("data", (data) => console.log(`stderr: ${data}`));//*    stderr data event.
someChild.on("error", (err) => console.log(`err: ${err.message}`));//*       application error event.

someChild.on("exit", (code, signal) => { //*       this event calls at the end of the stream to show when its end.
  if (code) return console.log(`process exit with code: ${code}`);
  if (signal) return console.log(`process exit with signal: ${signal}`);
  console.log("Done");
});
