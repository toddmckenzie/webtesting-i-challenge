module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  (enhancement < 20)? enhancement = enhancement + 1 : enhancement = 20;
  return { ...item, enhancement: enhancement};
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;
  if (enhancement < 15) {
    durability -= 5;
  } else if (enhancement > 16) {
    durability -= 10;
    enhancement -= 1;
  } else if (enhancement >= 15) {
    durability -= 10;
  
  }
  return { ...item, durability: durability, enhancement: enhancement };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  let name = item.name;
  let enhancement = item.enhancement;

  if (enhancement > 0){
    name = `[+${enhancement}]${name}`
  }
  return { ...item, name: name };
}




// item = {
//   name: '',
//   durability:  between 0 - 100,
//   enhancement: between 0 and 20;
// }

//when enhancement succeeds enchancement increases by 1,
//if enhancement level is 20 the enhancement level is not changed.
//durabillity of the item is unchanged on enhancement.

