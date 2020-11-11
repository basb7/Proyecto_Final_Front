import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

	userForm : FormGroup;

  constructor(
  	private FormBuilder: FormBuilder,
  ) {
   	this.Validator() 
	}

  ngOnInit(): void {
  }

  Validator(){
  	this.userForm = this.FormBuilder.group({
  		firstName: ['', Validators.required],
  		lastName:['', Validators.required],
  		email:['', [Validators.required, Validators.email]],
  		password:['', [Validators.required, Validators.minLength(6)]],
  		role:['User', Validators.required]
  	})
  }

  saveUser(){
  	if(this.userForm.valid){

  	}else{
  		alert('Se deben llenar los campos')
  	}
  }

}
