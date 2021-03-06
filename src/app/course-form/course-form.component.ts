import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/model/course';
import { CoursesComponent } from '../courses/courses.component';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  courseForm: FormGroup;
  isSubmitted = false;
  constructor(private courseService: CourseService ,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.courseForm = this.formBuilder.group({
      id:['', [Validators.required, Validators.nullValidator]], 
      description: ['', [Validators.required, Validators.nullValidator]],
      iconUrl:['', [Validators.required, Validators.nullValidator]],
      longDescription:[''],
      category:['',[Validators.required, Validators.nullValidator]],
      lessonsCount:['',[Validators.required, Validators.nullValidator]]
    });
  }
  get formControls(){return this.courseForm.controls;}
  
  submitCourse(){
    this.isSubmitted = true;
    if(this.courseForm.invalid){
      return;
    }
    this.courseService.newCourse(this.courseForm.value);
    this.router.navigateByUrl('/courses');
  }

}
