import { FormService } from './../../services/form.service';
import { GarbageService } from './../../services/garbage.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './post-garbage-form.component.html',
})
export class PostGarbageFormComponent{
  postGarbageForm!: FormGroup;
  countOfTags: number = 1;
  formsControl!: FormArray

  constructor(
    private FormService: FormService,
    private GarbageServiceApi: GarbageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.postGarbageForm = new FormGroup({
      name: new FormControl('', Validators.required),
      link: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ]),
      comment: new FormControl('', Validators.required),
      tags: new FormArray([new FormControl('', Validators.required)]),
    });
    this.formsControl = this.FormService.getFormsControls(this.postGarbageForm, "tags")
  }

  onSubmit() {
    if(this.FormService.isControlsValid(this.postGarbageForm)){
      this.GarbageServiceApi.postGarbage(this.postGarbageForm.value).subscribe(
        (el) => {
          this.router.navigate(['']);
        }
      );
    }
  }
  addTag() {
    this.FormService.addControl(this.postGarbageForm,'tags')
    this.countOfTags++;
  }
  removeTag(i: number) {
    this.FormService.removeControl(this.postGarbageForm, 'tags', i)
    this.countOfTags--;
  }
}
