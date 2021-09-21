let mseconds = 50;
let animationArray = ["|", "/", "-", "\\","|", "/", "-", "\\", "|"];
for (let i of animationArray) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, mseconds += 200);
}