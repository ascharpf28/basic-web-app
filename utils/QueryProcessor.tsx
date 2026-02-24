export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ascharpf";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "ascharpf";
  }
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = parseInt(numbers[0]) + parseInt(numbers[1]);
      return sum.toString();
    }
  }
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const largest = Math.max(...numbers.map(Number));
      return largest.toString();
    }
  }
  // if (query.toLowerCase().includes("square and a cube")){
  //   const numbers = query.match(/\d+/g);
  //   if (numbers && numbers.length >= 2) {
  //     for i in 0..numbers.length {
  //     const square = Math.pow(parseInt(numbers[0]), 2);
  //     const cube = Math.pow(parseInt(numbers[1]), 3);
  //     return (square + cube).toString();
  //   }
  // }
  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return product.toString();
    }
  }

  return "";
}
