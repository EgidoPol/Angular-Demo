import { Injectable } from '@angular/core';
import { Course } from 'src/model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public newCourse(newC: Course){
    return localStorage.setItem('course', JSON.stringify(newC));
    
  }
}
