const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CRUD-db', (err)=>{
    if(!err){
        console.log('mongodb connection successful');
    }else{
        console.log('conn failed: '+ JSON.stringify(err.undefined,2));
    }
});

module.exports=mongoose;