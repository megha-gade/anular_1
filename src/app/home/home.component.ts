import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

courses=[
{id:1,name:'Angular Course',type:'Free',rating:3.4,price:20000,duration:12,description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia debitis voluptates et cumque, amet doloremque quasi commodi laboriosam tempora expedita.'},
{id:2,name:'React Course',type:'Premium',rating:3.4,price:1000,duration:3,description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia debitis voluptates et cumque, amet doloremque quasi commodi laboriosam tempora expedita.'},
{id:3,name:'Java Course',type:'Premium',rating:3.4,price:300,duration:5,description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia debitis voluptates et cumque, amet doloremque quasi commodi laboriosam tempora expedita.'},
{id:4,name:'C++ Course',type:'Free',rating:3.4,price:5600,duration:4,description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia debitis voluptates et cumque, amet doloremque quasi commodi laboriosam tempora expedita.'},
]

}
