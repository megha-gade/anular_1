import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

//createconstructor
constructor(private route:Router,private activeRoute:ActivatedRoute)
{

}

  navigateToHome()
  {
//using navigate method
this.route.navigate(['home'])
  }

  navigateToContact()
{
this.route.navigate(['contact'])
}

navigateToContactByRelativePath()
{
this.route.navigate(['contact'],{relativeTo:this.activeRoute})
}

}
