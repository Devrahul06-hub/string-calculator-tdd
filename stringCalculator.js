function add(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    delimiter = new RegExp(delimiterMatch[1]);
    numbers = numbers.split("\n")[1];
  }

  const numArray = numbers.split(delimiter).map(Number);

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((acc, num) => acc + num, 0);
}

module.exports = add;
