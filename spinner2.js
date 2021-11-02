const spin = ['|', '/', '-', '\\', '|', '/', '-', '\\'];
let wait = 0;

for (let x of spin) {
  wait += 200;
  setTimeout(() => {
    process.stdout.write(`\r${x}  `)
  }, wait);
}
