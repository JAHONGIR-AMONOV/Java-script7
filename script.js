// let txt2 = 'Hello my name is Batman and I am a hero from the DC universe I do not have any superpower my main power is Money'

// let txt = [[["is Batman", "!"]],[[ "a hero"], "power is Money"], "I don't have any superpower", "Hello my name", ["and I am", "from the DC universe"], "my main"]

// console.log(
//     txt[3] + " " + txt[0][0][0] + " " + txt[4][0] + " " + txt[1][0] + " " + txt[4][1] + " " + txt[2] + " " + txt[5] + " " + txt[1][1]);

let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]];
let total = 0;

arr.forEach(item => {
  total += item[0].a.price;
});

console.log(total);