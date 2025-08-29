/*let myObject = {
    "name":"Maya",
    "age":"secret ;)",
    "logJob":function (){
        console.log("prompt engineer" + ", " + "AI Soul Maker")
    },
    "dev in training":true,
};


myObject.logJob()
//console.table(myObject);
*/


let myObject = {
    "name":"Maya",
    "age":"secret ;)",
    "logJob":"prompt engineer",
    "dev in training":true,
};

console.table(Object.keys(myObject))

console.log(Object.entries(myObject))


let objKeys = (Object.keys(myObject))
let ourArray = []


for (let i = 0; i < objKeys.length; i++) {
    const element = objKeys[i];
    ourArray.push(myObject[objKeys[i]])
}

console.table(ourArray);
