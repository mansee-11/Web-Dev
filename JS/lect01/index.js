//primitive datatypes
            //number
            //string
            //boolean
            //undefined
            //null
            //symbol
            //BigInt
        console.log("hello")
        console.error("error")
        console.warn("light kabhi bhi jaa sakti hai")
        
        alert("input deta carefully")
        //a
        //console.log(a) will throw error since a is not decleared

        b=5
        console.log(b) // will give its value cause it include b in window
        console.log(window)

        let c
        console.log(c) //will give datatype as undefined since no assignment done

        var x=5
        var x=10 //allow redeclaration and reassignment

        let y=5
        y=10  //allow reassignment but not redeclaration

        const z=10 //do not allow redeclaration and reassignment

        console.log(5==5)
        console.log(5=="5")
        console.log(5==="5")
        console.log(5===5)

        console.log(5+'5')//"55"
        console.log(5-'5')//0 convert to number
        console.log(false+5)// 5 convert false to number
        console.log(null+"hello")//convert to string nullhello
        console.log(null+null)//convert to number 0
        console.log(undefined-1) //nan not a number
        console.log(1+2+"3")//33 in string

        console.log(typeof(typeof(5)))//string
        //falsy value
        //0,null,false,undefined always run else part 

        if(undefined){
            console.log("hello")
        }
        else{
            console.log("hiiiii")
        }

        let score=100
        let to=score==100
        console.log(to)