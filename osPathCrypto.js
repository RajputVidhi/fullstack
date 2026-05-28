const os = require('os');
// const path = require('path');
// console.log(__dirname);
// console.log(__filename);
// const a = path.join("A:","MCA","Sem-2","Project.txt");
// console.log(path.parse(a));

console.log(os.platform());
console.log(os.arch());
// console.log(os.cpus());
console.log(os.hostname());
console.log(os.totalmem() / 1024 / 1024 / 1024);
console.log(os.freemem() / 1024 / 1024 / 1024);
console.log(os.homedir());
console.log(os.uptime() / 3600);


console.table(os.cpus());