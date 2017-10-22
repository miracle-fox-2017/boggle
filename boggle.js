const shake = (num) => {
  const arrResult = [];

  const random = (num) => {
    let randomText = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < num; i++) {
      randomText += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    
    return randomText;
  }

  for (let i = 0; i < num; i++) {
    arrResult.push(random(num).split(''));
  }

  console.log(arrResult);
}

shake(4);
