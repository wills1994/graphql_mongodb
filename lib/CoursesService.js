const MongoLib = require('../config/mongo');

class CoursesService{
    constructor() {
        this.collection = 'courses';
        this.mongoDB = new MongoLib();
    }
    async getCourses() {
        const courses = await this.mongoDB.getAll(this.collection);
        return courses || [];
    }
    async getCourse(Id) {
        const course = await this.mongoDB.get(this.collection, Id);
        return course || {};
    }
    createCourse(course) {
      const createCourse= this.mongoDB.create(this.collection, course)
      return createCourse || {};
    }
    async editCourse(Id,course) {
      const updateCourse=  await this.mongoDB.updated(this.collection, Id, course);
      return updateCourse;
    }
    
}

module.exports = CoursesService;