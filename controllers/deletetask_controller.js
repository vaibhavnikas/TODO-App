const task = require("../models/task");

module.exports.deletetask = function(req,res){

    for(let id of req.body.taskid){

        // If there is only 1 task it will be in the form of an object
        // Deleting the Single task and breaking the loop
        if(id.length == 1){
            task.findByIdAndDelete(req.body.taskid,function(err){
                if(err){
                    console.log('error in deleting task');
                }
            });
            break;
        }

        // If there are multiple tasks then it will be in the form of an array. This will be executed to delete the tasks using its taskid
        task.findByIdAndDelete(id,function(err){
            if(err){
                console.log('error in deleting task');
            }
        });

    }

    return res.redirect('back');
};