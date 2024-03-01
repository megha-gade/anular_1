import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoursesService } from '../Service/courses.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import {CoursComponent} from './courses/course.component';
import{BuyComponent}from './courses/Buy/buy.component'
import { FormsModule } from '@angular/forms';

const appRoutes:Routes=[

// {path:'',component:HomeComponent}
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home', component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'courses',component:CoursesComponent},
//passing Parameter In Url
{path:'courses/course/:id',component:CoursComponent},

{path:'courses/buy/:id',component:BuyComponent},
{path:'**',component:ErrorComponent},



]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    ErrorComponent,

  ],
  imports: [
FormsModule,
    BrowserModule,
    AppRoutingModule,

RouterModule.forRoot(appRoutes)
  ],
  providers: [    CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
