import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormService {
  getFormsControls(formGroup: FormGroup, name: string): FormArray {
    return formGroup.controls[name] as FormArray;
  }

  createFormArray(arr: Array<string>, formGroup: FormGroup, name: string) {
    arr.forEach((tag) => {
      (<FormArray>formGroup.controls[name]).push(
        new FormControl(tag, Validators.required)
      );
    });
  }

  addControl(formGroup: FormGroup, name: string) {
    (<FormArray>formGroup.controls[name]).push(
      new FormControl('', Validators.required)
    );
  }

  removeControl(formGroup: FormGroup, name: string, i: number) {
    (<FormArray>formGroup.controls['tags']).removeAt(i);
  }

  isControlsValid(formGroup: FormGroup): boolean {
    const controls = formGroup.controls;
    if (formGroup.invalid) {
      Object.keys(controls).forEach((controlName) => {
        controls[controlName].markAsTouched();
        controls[controlName].markAllAsTouched();
      });
      return false;
    }
    return true;
  }
}
