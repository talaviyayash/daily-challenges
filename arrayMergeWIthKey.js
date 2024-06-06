// #dailyChallenge

// Group Array Elements by a Criterion:
// Write a function that takes an array of objects and groups them based on a specified key.

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
  { name: "Jane", age: 25 },
];

function groupTogether(data, key) {
  const groupData = data.reduce((groupObj, value) => {
    const keyOfValue = value[key];
    if (!groupObj[keyOfValue]) {
      groupObj[keyOfValue] = [value];
    } else {
      groupObj[keyOfValue].push(value);
    }
    return groupObj;
  }, {});
  console.log(groupData);
  return groupData;
}
groupTogether(people, "age");
