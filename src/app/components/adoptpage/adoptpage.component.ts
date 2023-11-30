import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adoptpage',
  templateUrl: './adoptpage.component.html',
  styleUrls: ['./adoptpage.component.css']
})
export class AdoptpageComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;
  adoptionForm!: FormGroup;
  showHelpText: boolean = false;

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
    this.adoptionForm = this.formBuilder.group({
      accountId: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      petName: new FormControl('', [Validators.required]),
    });
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
  onAdoptionSubmit() {
 
    if (this.adoptionForm.invalid) {
      return;
    }
  }

  showHelp() {
    this.showHelpText = !this.showHelpText;
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
