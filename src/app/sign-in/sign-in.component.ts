import{FormGroup,FormControl}from'@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
 @Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignINComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    
   }


  signIn:FormGroup=new FormGroup({

   
    'email':new FormControl(),
    'password':new FormControl(),
    

   })
;

  ngOnInit(): void {
    
  }

}
