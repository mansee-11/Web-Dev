// import { createContext } from "react";

// let Context =createContext()
// export default Context

//lect24

// import { Children, createContext, useContext, useReducer } from "react";
// export const storeContext =createContext();

// let initial={
//     input:"",
//     todos:[],
//     index:null
// }

// function red(store,action){
//     if(action.type == "write")
//     {
//         return{
//             ...store,
//             input:action.payload
//         }
//     }
//     else if(action.type =="add"){
//         return{
//             ...store,
//             todos:[...store.todos,store.input],
//             input:""
//         }
//     }
//     else if(action.type=="del"){
//         return{
//             ...store,
//             todos:store.todos.filter((a,b)=>{
//                 return b!=action.payload
//             })
//         }
//     }
//     else if(action.type =="update")
//     {
//         let updateData=[...store.todos]
//         updateData[store.index]=store.input
//         return{
//             ...store,
//             todos:updateData,
//             index:null,
//             input:""
//         }
//     }
//     else if(action.type =="edit")
//     {
//         return{
//             ...store,
//             input:store.todos[action.payload],
//             index:action.payload
//         }
//     }
//     return store
// }
// const Context =({children})=>{
//     let [store,dispatch] = useReducer(red,initial)
//     return(
//         <storeContext.Provider value={{store,dispatch}}>
//             {children}
//         </storeContext.Provider>
//     )
// }

// export default Context


//E-commerce 
import React, { createContext, useReducer } from 'react'
import { PRODUCTS } from './dummydata'

export const storeContext = createContext()

let initial = {
    products: PRODUCTS.map((item) => {
        return {
            ...item,
            quantity: 0
        }
    })
}

function red(store, action) {

    if (action.type === "ADD") {

        return {
            ...store,

            products: store.products.map((item) => {

                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }

                return item
            })
        }
    }
    else if(action.type === "dec") {

        return {
            ...store,

            products: store.products.map((item) => {

                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0
                    }
                }

                return item
            })
        }
    }
    else if(action.type === "del") {

        return {
            ...store,

            products: store.products.map((item) => {

                if (item.id === action.payload) {
                    return {
                        ...item,
                        quantity:0
                    }
                }

                return item
            })
        }
    }
    return store
}

const Context = ({ children }) => {

    let [store, dispatch] = useReducer(red, initial)

    return (
        <storeContext.Provider value={{ store, dispatch }}>
            {children}
        </storeContext.Provider>
    )
}

export default Context