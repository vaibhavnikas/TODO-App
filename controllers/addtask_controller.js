const task = require("../models/task");

module.exports.addtask = function(req,res){

    // Creating a new Task and saving it to the database
    task.create({
        description : req.body.description,
        category : req.body.category,
        date : req.body.date
    },
    function(err,newTask){
        if(err){
            console.log('error in adding task');
            return;
        }

        console.log('*********',newTask);
        return res.redirect('back');
    });
};