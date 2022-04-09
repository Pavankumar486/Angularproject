import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: any;
  
  

  constructor(private formBuilder: FormBuilder ) {
  
   }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.required]],
      password: ['',[Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
    });
  }
  onSubmit(){       
    if(this.userForm.valid){
      alert('Login Successful..!!')
    } 
    else{
      alert('Password Invalid!!'+
      'should contain one upper case,lower case,number and special character')
    }

  }
 
}
