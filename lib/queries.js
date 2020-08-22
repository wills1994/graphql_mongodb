'use strict';
const CoursesService = require('./CoursesService');
let coursesService = new CoursesService();

module.exports ={ 
    getCourses: async () => {
        let courses = [];
       
        try {
            courses= await coursesService.getCourses();
          
        }catch(err){
            console.log(err);
        }
        return courses;
    },
    getCourse: async (root,args) => {
        let course;
        try{
            course= await coursesService.getCourse(args.id);
        }catch(err){
            console.log(err);
        }
        return course;
    }
}