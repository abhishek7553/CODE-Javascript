const doWorkPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
       // resolve([1,2,4])
       reject('ERROR!')
    }, 2000);
})

doWorkPromise.then((result)=>{
    console.log('Succces:',result)
}).catch((error)=>{
    console.log('FAILURE:',error)
})