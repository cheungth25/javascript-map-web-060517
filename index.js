function map(collection) {
  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    console.log(element);
  }
}

function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element));
  }

  return result;
}


function map(collection, callback) {
  const result = [];

  for (let i = 0; i < collection.length; i++) {
    const element = collection[i];
    result.push(callback(element, i, collection));
  }

  return result;
}
