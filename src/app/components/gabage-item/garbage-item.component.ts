import { FormService } from './../../services/form.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IGarbageModel } from 'src/app/models/garbage.model';

@Component({
  selector: 'app-garbage-item',
  templateUrl: './garbage-item.component.html',
})
export class GarbageItemComponent {
  @Input()
  item!: IGarbageModel;

  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateItem: EventEmitter<any> = new EventEmitter<any>();

  isNowUpdate = false;
  updateGarbageForm!: FormGroup;
  formsControl!: FormArray;
  countOfTags!: number;

  constructor(private formService: FormService) {}

  initForm() {
    this.updateGarbageForm = new FormGroup({
      createdAt: new FormControl(this.item.createdAt),
      updatedAt: new FormControl(new Date().toISOString()),
      name: new FormControl(this.item.name, Validators.required),
      link: new FormControl(this.item.link, [
        Validators.required,
        Validators.pattern(
          '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
        ),
      ]),
      comment: new FormControl(this.item.comment, Validators.required),
      tags: new FormArray([]),
    });
    this.formService.createFormArray(
      this.item.tags,
      this.updateGarbageForm,
      'tags'
    );
    this.formsControl = this.formService.getFormsControls(
      this.updateGarbageForm,
      'tags'
    );
    this.countOfTags = this.formsControl.length
  }
  handleStartToUpdate() {
    this.initForm();
    this.isNowUpdate = true;
  }
  handleSubmit(id: string) {
    if(this.formService.isControlsValid(this.updateGarbageForm)){
      const passObject = {
        id: id,
        body: this.updateGarbageForm.value,
      };
      this.updateItem.emit(passObject);
      this.isNowUpdate = false;
    }
  }
  addTag() {
    this.formService.addControl(this.updateGarbageForm,'tags')
    this.countOfTags++;
  }
  removeTag(i: number) {
    this.formService.removeControl(this.updateGarbageForm, 'tags', i)
    this.countOfTags--;
  }
  handleRemove(id: string) {
    this.deleteItem.emit(id);
  }
  getDateFormat(date: string): string {
    let dateFormat = new Date(date);
    return `${dateFormat.getDate()}.${dateFormat.getMonth()}.${dateFormat.getFullYear()} - ${dateFormat.getHours()}.${dateFormat.getMinutes()}`;
  }
  isUpdated(created: string, updated: string): boolean {
    return created !== updated;
  }
}
