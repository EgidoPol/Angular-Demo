import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/db-data';
import { Course } from 'src/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  constructor() {
    console.log("Funciono");
    this.courses = COURSES; 
    console.log(COURSES);
    
}

  courses: Course[] = COURSES;
  nuevoCurso(){
    let nuevoCurso: Course = {
      id: 99,
      description: 'nuevoCurso',
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
      longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules',
      category: 'INTERMEDIATE',
      lessonsCount: 10
  }
  this.courses.push(nuevoCurso);
  }
  newCourseForm(){
    let newCourse: Course;
    newCourse = (JSON.parse(localStorage.getItem('course')));
    Number(newCourse.id);
    Number(newCourse.lessonsCount);
    console.log(newCourse);
    this.courses.push(newCourse);
  }
  ngOnInit(): void {
    this.newCourseForm();
  }

}
