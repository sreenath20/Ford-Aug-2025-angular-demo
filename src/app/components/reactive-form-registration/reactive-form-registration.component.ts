import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-registration',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-registration.component.html',
  styleUrl: './reactive-form-registration.component.css'
})
export class ReactiveFormRegistrationComponent {
  registrationFormGroup: FormGroup;
  // Dependency Injection of FormBuilder 
  constructor(private fb: FormBuilder) {
    this.registrationFormGroup = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]]
        ,
        email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$')]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#$%^&*])[a-zA-Z0-9!#$%^&*]{8,}$')
          ]
        ],
        confirmPassword: ['', [Validators.required]]
      },
      {
        // custom synchronous validator
        validator:[this.passwordMatchValidator]
      }
    );
  }
  get f() {
    return this.registrationFormGroup.controls;
  }
  onSubmit() {
    console.log("form submitted.", this.registrationFormGroup.value);

  }
  // custom validation in reactive forms
  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };

  }

}
