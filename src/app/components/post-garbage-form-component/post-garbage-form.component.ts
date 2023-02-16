import { GarbageService } from './../../services/garbage.service';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './post-garbage-form.component.html',
})
export class PostGarbageFormComponent {
  postGarbageForm!: FormGroup;
  countOfTags: number = 1;

  constructor(
    private FormBuilder: FormBuilder,
    private GarbageServiceApi: GarbageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postGarbageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      link: new FormControl('', Validators.required),
      comment: new FormControl(''),
      tags: new FormArray([new FormControl('', Validators.required)]),
    });
  }

  onSubmit() {
    const controls = this.postGarbageForm.controls;

    if (this.postGarbageForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }
    this.GarbageServiceApi.postGarbage(this.postGarbageForm.value).subscribe(
      (el) => {
        this.router.navigate(['']);
      }
    );
  }

  getFormsControls(): FormArray {
    return this.postGarbageForm.controls['tags'] as FormArray;
  }
  addTag() {
    (<FormArray>this.postGarbageForm.controls['tags']).push(
      new FormControl('', Validators.required)
    );
    this.countOfTags++;
  }
  removeTag(i: number) {
    (<FormArray>this.postGarbageForm.controls['tags']).removeAt(i);
    this.countOfTags--;
  }
}
