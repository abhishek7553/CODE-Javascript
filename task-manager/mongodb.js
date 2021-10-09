// CRUD implement
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


// const id = new ObjectID()
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{ useNewUrlParser : true },(error,client)=>{
    if(error){
        return console.log('unable to databse')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
  
    //     name:'Jin',
    //     age:78
    // },(error,result)=>{
    //     if(error)
    //    {
    //     return console.log('unable to insert')
    //    }
      

    // })

    // db.collection('users').insertMany([
    //     {
    //         name:'Jin',
    //         age:'22'
    //     },
    //     {
    //         name:'alice',
    //         age:21
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert')
    //     }
    //     console.log(result.acknowledged)
    // })
    // db.collection('task').insertMany([
    //     {
    //         description:'EAT YOUR BREAKFAST',
    //         complete:true
    //     },
    //     {
    //         description:'GOT TO GYM',
    //         complete:false
    //     },
    //     {
    //         description:'GET UP EARLY',
    //         complete:true
    //     }
    // ],(error,T)=>{
    //     if(error){
    //         return console.log('unable to insert')
    //     }

        
    // })

    // db.collection('task').find({complete:true}).toArray((error,users)=>{
    //     if(error)
    //     return console.log("unable to find")
    //     console.log(users)
    // })
    // db.collection('task').find({complete:true}).count((error,count)=>{
    //     if(error)
    //     return console.log("unable to find")
    //     console.log(count)
    // })

//    db.collection('users').updateOne({
//         _id:new ObjectId("616105e65c476da4a993c808"),
//     },{
//     //    $set:{
//     //        name:'Lee',
//     //        age:00
//     //    } 
//     $inc :{
//         age:172
//     }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error)=>{
//         console.log(error)
//     })    

    // db.collection('task').deleteMany({complete:false}).then((result)=>{
    //             console.log(result)
    //         }).catch((error)=>{
    //             console.log(error)
    //         })  

})