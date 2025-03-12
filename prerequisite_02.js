// Objs --> key-value pairs
// blank obj
// {
// }

// {
//     name:'Itachi',
//     age:21,
//     gender:'not confirmed',
//     isAnimeLover:true

// }

var obj = {
    name:'Farooque Sajjad',
    age:21,
}
Object.freeze(obj); // this will make the object immutable
obj.age = 25;
console.log(obj.name,obj.age);
// console.log(obj['name'] + 1);
