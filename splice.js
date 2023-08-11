const friends = [12, 45, 32, 22, 44, 62, 66, 87];

const partial = friends.splice(2, 5, 88, 77, 66, 55, 44);

console.log(partial);
console.log(friends);