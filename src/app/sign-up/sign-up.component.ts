import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from'@angular/forms';
  import { from } from 'rxjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  register:FormGroup;
  constructor() { 




  }


  ngOnInit(): void {

    this.register=new FormGroup({

      'first_name':new FormControl(''),
      'last_name':new FormControl(''),
      'email':new FormControl(''),
      'password':new FormControl(''),
      'repassword':new FormControl(''),
  
     });
  
  
  }




  getRegisterDate(data)
  {

console.log(data);


  }


}
