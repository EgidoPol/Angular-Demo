import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/model/course';

@Component({
  selector: 'app-targeta',
  templateUrl: './targeta.component.html',
  styleUrls: ['./targeta.component.css']
})
export class TargetaComponent implements OnInit {

  @Input()
  course: Course;
  
  @Input()
  courseIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

}
