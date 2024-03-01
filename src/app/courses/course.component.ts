import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../Service/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CoursComponent{
  courseId:any;
  course:any;
constructor(private activeRouteFind:ActivatedRoute,
  private coursesservice:CoursesService,
  private rot:Router)
{

}

ngOnInit()
{
this.courseId=this.activeRouteFind.snapshot.paramMap.get('id');
this.course=this.coursesservice.courses.find(x=>x.id==this.courseId);


if (!this.course) {
  this.rot.navigate(['/Id Not Found']);
}
}



}
