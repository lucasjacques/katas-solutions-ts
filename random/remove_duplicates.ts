// const array = [1,2,3,3,4,5,6,6,6,7,8,9,10,10,1,2,3,2,12,11];
const array = [1,2,3,3];

const result: number[] = [];
result.push(array[0]);

for (let i = 0; i < array.length; i++) {
  let tmp: number[] = []
  for (let j = 0; j < result.length; j++){
    // se o elemento estiver dentro do resultado
    //   continue
    if (result[j] === array[i]) {
      continue;
    }
    // se não estiver dentro do resultado
    //   adicionar no resultado
    else {
      console.log('hey', result);
      result.push(array[i]);
    }
  }
}

console.log(result);