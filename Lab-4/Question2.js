const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());


for (const cpu of os.cpus()) {
    console.log(cpu);
}
console.log(os.uptime());