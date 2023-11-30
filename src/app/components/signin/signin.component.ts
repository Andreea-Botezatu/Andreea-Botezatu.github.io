import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('',[Validators.required]),
      cb: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  get f() {
    return this.registerForm.controls;
  }
  passwordMatchValidator(registerForm: FormGroup) {
    const passwordControl = registerForm.get('password');
    const confirmPasswordControl = registerForm.get('confirmPassword');

    if (passwordControl && confirmPasswordControl) {
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({  passwordMismatch: true });
      } else {
       // confirmPasswordControl.setErrors(null);
      }
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

   
  }
}
