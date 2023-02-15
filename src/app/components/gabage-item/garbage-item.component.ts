import { Observable } from 'rxjs';
import { GarbageService } from './../../services/garbage.service';
import { IGarbageModel } from './../../models/garbage.model';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-garbage-item',
  templateUrl: './garbage-item.component.html',
})
export class GarbageItemComponent {
  @Input()
  item!: IGarbageModel;

  @Output() deleteItem: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private garbageServiceApi: GarbageService,
    public ChangeDetectorRef: ChangeDetectorRef
  ) {}

  handleRemove(id: string) {
    this.deleteItem.emit(id);
  }
  details = false;
}
