let result = 1;

for (let i=2; i < process.argv.length; i++) {
    result += Number(process.argv[i]);
}

console.log(process.argv);
