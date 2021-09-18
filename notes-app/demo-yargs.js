const yargs = require('yargs');

// console.log(process.argv)

// console.log(yargs.argv)

//Customizing yargs

yargs.version('1.1.0')

//create add command

yargs.command({
    command:'add',
    describe:'Add a note.',
    handler:function (){
        console.log("Adding a note!")
    }

})
//create remove command

yargs.command({
    command:'remove',
    describe:'Remove a note.',
    handler:function (){
        console.log("Removing a note!")
    }

})
//create list command

yargs.command({
    command:'list',
    describe:'List all notes.',
    handler:function (){
        console.log("List all notes!")
    }

})
//create read command

yargs.command({
    command:'read',
    describe:'Read a note.',
    handler:function (){
        console.log("Redding a note!")
    }

})

console.log(yargs.argv)