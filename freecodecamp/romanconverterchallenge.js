function convertToRoman(num) {
  let str = "";

  //add thousands
  while (num >= 1000) {
    str += "M";
    num -= 1000;
  }

  let arr = convertToArr(num);

  //add hundreds
  if (arr[0] > 0) {
    str += addRomans(arr[0], "C", "D", "M");
  }
  //add tens
  if (arr[1] > 0) {
    str += addRomans(arr[1], "X", "L", "C");
  }
  //add ones
  if (arr[2] > 0) {
    str += addRomans(arr[2], "I", "V", "X");
  }
  return str;
}

convertToRoman(36);

// 1 = I
// 5 = V
// 10 = X
// 50 = L
// 100 = C
// 500 = D
// 1000 = M

function addRomans(num, one, five, ten) {
    if (num === 4) {
        return one + five;
    }
    if (num === 9) {
        return one + ten;
    }
    let res = "";
    if (num >= 5) {
        res = res + five;
        num -= 5;
    }
    while (num >= 1) {
        res = res + one;
        num -= 1;
    }
    return res;
}

function convertToArr(num) {
    let arr = [0, 0, 0];
    //100s
    while (num >= 100) {
        arr[0] += 1;
        num -= 100;
    }
    //tens
    while (num >= 10) {
        arr[1] += 1;
        num -= 10;
    }
    //ones
    while (num >= 1) {
        arr[2] += 1;
        num -= 1;
    }
    return arr;
}
