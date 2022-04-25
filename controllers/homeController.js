const task = require('../models/task');

module.exports.home = function(req,res){

    // Fetching tasks from the Database
    task.find({},function(err,task){
        if(err){
            console.log('error in fetching tasks');
            return;
        }

        // Passing the fetched tasks as an argument while rendering the page
        return res.render('home',{
            tasks : task
        });
    });
};