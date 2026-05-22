// const questions = [
//   {
//     question: "HTML ka full form kya hai?",
//     options: [
//       "Hyper Text Markup Language",
//       "High Text Machine Language",
//       "Hyper Tabular Markup Language",
//       "Home Tool Markup Language"
//     ],
//     answer: 0   
//   },
//   {
//     question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
//     options: ["font-color", "text-color", "color", "background"],
//     answer: 2
//   },
//   {
//     question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
//     options: ["var", "int", "string", "declare"],
//     answer: 0
//   },
//   {
//     question: "Kaunsa HTML tag sabse bada heading banata hai?",
//     options: ["<h6>", "<heading>", "<h1>", "<head>"],
//     answer: 2
//   },
//   {
//     question: "JavaScript me array ki length kaise pata karte hain?",
//     options: ["array.size()", "array.length", "array.count", "length(array)"],
//     answer: 1
//   }
// ];

// // questions.forEach((curr)=>{
// //     curr.options.forEach((c)=>{
// //         console.log(c);
// //     })
// // })

// // console.log(questions[0].options[0])

// questions.forEach((curr)=>{
//     console.log(curr.options[1])
// })

// let obj={
//     id:1,
//     firstName:"Mansee",
//     lastName:"Asati",
//     fullName:function(city){
//         console.log(this.firstName+" "+this.lastName+" "+city)
//     }
// }

let obj={
    id:1,
    firstName:"Mansee",
    lastName:"Asati",
    fullName:function(city,age){
        console.log(this.firstName+" "+this.lastName+" "+city+" "+age)
    }
}

let obj2={
    id:1,
    firstName:"Manya",
    lastName:"Asati",
}

// obj.fullName.call(obj2,"damoh")
obj.fullName.apply(obj2,["damoh",16])

//shallow copy only one layer copy nested data reflect same address share

let ob={
    id:11,
    name:"mansee",
    address:{
        city:"damoh"
    }
}
let ob1=ob
ob1.address.city="Futera Kalan"

console.log(ob.address.city)
console.log(ob1.address.city)

//deepcopy full layer copy no connection to orignal
let ob2=structuredClone(ob)
ob2.address.city="jabalpur"

console.log(ob.address.city)
console.log(ob2.address.city)

console.log(Array.prototype)
console.log(Object.prototype)

let str=" Js Css "
console.log(str.length)
console.log(str.toLocaleLowerCase())
console.log(str.toLocaleUpperCase())
console.log(str.trim())
console.log(str.includes("s"))
console.log(str.indexOf("j"))
console.log(str.substring(0,6))
console.log(str.substr(3,4)) //4 here is not index it is length
console.log(str.split(" "))
console.log(str.slice(2,5))
console.log(str.split("").reverse().join(""))
console.log(str.replaceAll("Js","html")) //replace all 
console.log(str.replace("Js","html")) //replace first occurence
console.log(str.replace("J",""))
console.log(str.replace("Js","jsx"))

