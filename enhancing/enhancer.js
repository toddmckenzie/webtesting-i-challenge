module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancementChanged = item.enhancement;
  (enhancementChanged < 20)? enhancementChanged = enhancementChanged + 1 : enhancementChanged = 20;
  return { ...item, enhancement: enhancementChanged};
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}




// item = {
//   name: '',
//   durability:  between 0 - 100,
//   enhancement: between 0 and 20;
// }

//when enhancement succeeds enchancement increases by 1,
//if enhancement level is 20 the enhancement level is not changed.
//durabillity of the item is unchanged on enhancement.

