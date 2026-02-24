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
  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const sum = parseInt(numbers[0]) - parseInt(numbers[1]);
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
  if (query.toLowerCase().includes("square and a cube")){
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      for (let i=0; i< numbers.length; i++){
        let value=Number(numbers[i])
        let sqrtVal=Math.floor(Math.sqrt(value))
        let cubeRootVal=Math.floor(Math.cbrt(value))
        let finalSq=Math.pow(sqrtVal, 2)
        let finalCube=Math.pow(cubeRootVal, 3)
        if (finalSq === value && finalCube === value){
          return value.toString()
        }
      } 
    }
  }
  if (query.toLowerCase().includes("multiplied")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      const product = parseInt(numbers[0]) * parseInt(numbers[1]);
      return product.toString();
    }
  }
  if (query.toLowerCase().includes("primes")) {
    const numbers = query.match(/\d+/g);
    if (numbers && numbers.length >= 2) {
      for (let i=0; i<numbers.length; i++){
        let value=Number(numbers[i])
        let isPrime=true
        if (value <= 1) {
          isPrime = false;
        } else {
          for (let j = 2; j <= Math.sqrt(value); j++) {
            if (value % j === 0) {
              isPrime = false;
              break;
            }
          }
        }
        if (isPrime){
          return value.toString()
        }
      }
    }
  }

  return "";
}
