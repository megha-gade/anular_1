import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CoursesService } from "../../../Service/courses.service";

@Component({
  selector: 'app-course',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})


export class BuyComponent{
buyComponent:any;
buyComponentId:any;

constructor(private active:ActivatedRoute,
  private service:CoursesService,
  private rot:Router
 ) {

}

ngOnInit()
{
//snapshot
// this.buyComponentId=this.active.snapshot.paramMap.get('id');
// this.buyComponent=this.service.courses.find(s=>s.id==this.buyComponentId);




this.active.paramMap.subscribe((param)=>{

this.buyComponentId=this.buyComponentId=param.get('id');
this.buyComponent=this.service.courses.find(a=>a.id==this.buyComponentId)

})
}





}
