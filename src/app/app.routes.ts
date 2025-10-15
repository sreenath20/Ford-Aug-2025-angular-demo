import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ErrorComponent } from './components/error/error.component';
import { DemoComponent } from './components/demo/demo.component';
import { ParentComponent } from './components/parent/parent.component';
import { ListBookComponent } from './components/list-book/list-book.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'users',component:UserComponent}, // display all users
    {path:'user/:id',component:UserComponent}, // display user by id
    {path:'registration',component:RegistrationComponent},  
    {path:'parent',component:ParentComponent},   
    {path:'list-books',component:ListBookComponent},    
    {path:'demo',component:DemoComponent},    
    
    {path:'**',redirectTo:''} // '/' root of url 
    // {path:'**',component:ErrorComponent} // or display notFound component 
];

// /home -> HomeComponent
// /about -> AboutComponent
// /user -> UserComponent
