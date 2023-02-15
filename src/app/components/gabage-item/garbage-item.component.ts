import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IGarbageModel } from 'src/app/models/garbage.model';

@Component({
  selector: 'app-garbage-item',
  templateUrl: './garbage-item.component.html',
})
export class GarbageItemComponent {
  @Input()
  item!: IGarbageModel;

  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();

  handleRemove(id: string) {
    this.deleteItem.emit(id);
  }
}
