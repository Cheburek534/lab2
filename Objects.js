
const fn = () => {
  const obj1 = {name: "Alucard"};
  let obj2 = {name: "John"};
  
  obj1.name = "Nastya";
  obj2.name = "Tom";

  obj2.name = {name: "Yaroslav"};
  console.dir({obj1, obj2});
} ;
fn();

function createUser(name, city) {
    return {name, city};
};
console.log(createUser("Mike", "NYC"));