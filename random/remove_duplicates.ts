const removeDuplicatesUsingFor = () => {
  const array = [1,2,3,3,4,5,6,6,6,7,8,9,10,10,1,2,3,2,12,11,12,12,11,1];
  
  const result: number[] = [];
  result.push(array[0]);
  
  for (let i = 0; i < array.length; i++) {
    let hasElement = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === array[i]) {
        hasElement = true;
      }
    }
    if (!hasElement) {
      result.push(array[i]);
    }
  } 
  console.log(result);
}

removeDuplicatesUsingFor();