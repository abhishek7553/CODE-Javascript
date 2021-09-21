// const square = function (x){
//     return x*x
// }

// const square = (x) =>{ return x * x }

// const square = (x) => x*x

// console.log(square(4))

const event = {
    name : "BIRTHDAY PARTY",
    guestList : ["abhishek","panda","like"],
    printGuestList() {
        console.log('Guest list for ' + this.name )

        this.guestList.forEach((g) =>{
            console.log(g+ " is attending "+this.name)
        })
    }
}

event.printGuestList()
