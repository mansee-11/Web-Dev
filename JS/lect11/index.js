fetch("https://dummyjson.com/products").then((res)=>{
    return res.json();
}).then((data)=>{
    let body=document.querySelector("body")
    console.log(data)
    data.products.map((a)=>{
        body.innerHTML+=`<div Style="border:1px solid black;
            padding:20px;
            margin:20px;
            width:300px;
            border-radius:21px;
            background-color: white;
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
            ">
            <img src="${a.thumbnail}" width="100%">
            <h2> ${a.title}</h2>
            <p> ${a.description}</p>
            <h3>Price: ${a.price}$</h3>
            <h3>Discount: ${a.discountPercentage}%</h3>
            <h4>Return: ${a.returnPolicy}</h4>
            <h4>Stock: ${a.stock}</h4>
            <button Style="height:40px; width:150px; border-radius:10px; border:1px solid grey;background-color:gold; cursor: pointer;" onclick="addtoCart(${a.id})">Add to cart</button>
        </div>`
        
    })

    window.allP=data.products
})

let arr=[]
function addtoCart(id){
    let data= window.allP.find((a)=>{
        return a.id==id
    })
    arr.push(data)
    localStorage.setItem("item",JSON.stringify(arr))
}
