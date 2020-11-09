//1. 
//string (szöveg)
const text = 'aniko';

//number (szám)
const num = 5;

//boolean (logikai érték)
const isTrue = true;

//object (objektum)
const obj = { name: 'Aniko', age: 26 };

//array (tömb)
const exArr = [1, 2, 3];

//speciális
//undefined, null


//2.
//Ha egy változót a const kulcsszóval definiálunk, akkor muszáj neki értéket adni, és nem tudjuk változtatni az értékét.
const text2 = 'ez egy konstans';
//const text3;      Erre hibát dobna.
//text2 = "masik szoveg";   Erre is.

//Ha egy változót a let kulcsszóval definiálunk, akkor nem muszáj neki kezdőértéket adni, és ha adunk, akkor is bármikor változtathatjuk az értékét.
let text4;
let text5 = 'egy';
text5 = 'hat';

//3.
//Ha egy függvénynek érték szerint adunk át egy paramétert, és a függvényen belül változtatjuk a paraméter értékét, akkor a külső (függvényen kívüli) változó értéke nem változik. Így adódik át JavaSciptben a string, szám, boolean.
//Ha egy függvénynek referencia szerint adunk át egy paramétert, és a függvényen belül változtatjuk a paraméter értékét, akkor a külső (függvényen kívüli) változó értéke is változik. Így adódik át JavaSciptben a tömb és az objektum.
const probaFgv = (szoveg, tomb) => {
  szoveg += 'valami mas';
  tomb.push(3);
};
let text6 = 'valami szoveg';
let array = [1, 2];
probaFgv(text6, array);
//Most text6 = 'valami szoveg', tehát nem változott.
//array = [1, 2, 3], tehát változott


//4.
const containsElement = (numbersArray, num) => {
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === num) {
      return true;
    }
  };
  return false;
};


//5.
const legidosebb = (objArray) => {
  if (objArray.length === 0) {
    return 'error';
  }
  let maxAge = objArray[0].age;
  let maxIndex = 0;
  for (let i = 1; i < objArray.length; i++) {
    if (objArray[i].age > maxAge) {
      maxAge = objArray[i].age;
      maxIndex = i;
    }
  }
  return objArray[maxIndex].name;
}


//6.
const divideByTwo = () => {
  for (let i = 10; i < 100; i++) {
    if (i % 2 === 0) {
      process.stdout.write(i + ', ');
    }
  };
  console.log();
};


//7.
const metszet = (arr1, arr2) => {
  const metszetTomb = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        metszetTomb.push(arr1[i]);
        break;
      }
    };
  };
  return metszetTomb;
};


//9.
const makeArray = (n, m) => {
  //létrehozás
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  //feltöltés
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = i * j;
    }
  }
  //kiíratás
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      process.stdout.write(arr[i][j] + ' ');
    }
    console.log();
  };
};