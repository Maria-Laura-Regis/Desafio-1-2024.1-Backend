function checkCashRegister(price, cash, cid) {
  const currencyUnitValues = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let changeDueInCents = Math.round(cash * 100) - Math.round(price * 100);

  let totalInDrawer = 0;
  for (let [name, amount] of cid) {
    totalInDrawer += Math.round(amount * 100);
  }

  if (totalInDrawer < changeDueInCents) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  if (totalInDrawer === changeDueInCents) {
    return { status: "CLOSED", change: cid };
  }

  let changeToGive = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const currencyName = cid[i][0];
    const currencyValue = currencyUnitValues[currencyName];
    let amountInDrawer = Math.round(cid[i][1] * 100);
    let amountOfThisCurrencyToGive = 0;

    while (changeDueInCents >= currencyValue && amountInDrawer > 0) {
      changeDueInCents -= currencyValue;
      amountInDrawer -= currencyValue;
      amountOfThisCurrencyToGive += currencyValue;
    }

    if (amountOfThisCurrencyToGive > 0) {
      changeToGive.push([currencyName, amountOfThisCurrencyToGive / 100]);
    }
  }

  if (changeDueInCents > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeToGive };
}