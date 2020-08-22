'use strict';
const CoursesService = require('./CoursesService');

let coursesService = new CoursesService();

module.exports ={ 
    createCourse:async(root,{input}) => {
        const defaults ={
            teacher:'',
            topic:'',
        }
        const newCourse=Object.assign(defaults,input);
        let course;
        try{
            course= await coursesService.createCourse(newCourse);
            input._id = course.insertedId;
        }catch(err){
            console.log(err);
        }
        return input;
    },
    editCourse:async (root,{_id,input}) => {
        await coursesService.editCourse(_id,input);
        return Object.assign({_id:_id});;
    }
}