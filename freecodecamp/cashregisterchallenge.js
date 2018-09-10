function checkCashRegister(price, cash, cid) {
  let obj = { status: "", change: []};
  price = price * 100;
  cash = cash * 100;
  let rate = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let c = cid.map(x => x[1]).map(x => Math.round(parseFloat(x)*100)).reverse();
  let p = perfReturn(cash - price, rate, c);

  //INSUFFICIENT
  if (p === undefined) {
    obj.status = "INSUFFICIENT_FUNDS";
    return obj;
  }

  //CLOSED
  p = p.map(x => x / 100);
  c = c.map(x => x / 100);
  if (c.every((x, i) => x === p[i])) {
    obj.status = "CLOSED";
    obj.change = cid;
    return obj;
  }

  //OPEN
  obj.status = "OPEN";
  let ret = [["ONE HUNDRED", 0], ["TWENTY", 0], ["TEN", 0], ["FIVE", 0], ["ONE", 0], ["QUARTER", 0], ["DIME", 0], ["NICKEL", 0], ["PENNY", 0]];

  for (let i in c) {
     ret[i][1] += p[i];
  }
  ret = ret.filter(x => x[1] !== 0);
  obj.change = ret;
  return obj;
}

function perfReturn(price, rate, cid) {
  let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let temp = cid.concat();
  for (let i in temp) {
    while (price >= rate[i] && temp[i] >= rate[i]) {
      arr[i] += rate[i];
      price -= rate[i];
      temp[i] -= rate[i];
    }
  }
  if (price === 0) return arr;
  console.log(price);
  return undefined;
}
