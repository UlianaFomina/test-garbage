import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IGarbageModel } from 'src/app/models/garbage.model';
import { GarbageService } from 'src/app/services/garbage.service';
import { selectFavorite } from '../state/favorite.selectors';
@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  title = 'test-garbage';
  result: any;
  garbageItems!: IGarbageModel[];
  isLoading: boolean = true;
  favorites = this.store.select(selectFavorite);

  constructor(
    private garbageServiceApi: GarbageService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.garbageServiceApi.getAll().subscribe((allGarbages) => {
      this.isLoading = false;
      this.garbageItems = allGarbages;
    });
  }
  updateItem(passObject: any) {
    this.isLoading = true;
    this.garbageServiceApi
      .updateById(passObject.id, passObject.body)
      .subscribe(() => {
        this.garbageServiceApi.getAll().subscribe((garbages) => {
          this.garbageItems = garbages;
          this.isLoading = false;
        });
      });
  }
  removeItem(id: string) {
    this.isLoading = true;
    this.garbageServiceApi.removeById(id).subscribe(() => {
      this.garbageServiceApi.getAll().subscribe((garbages) => {
        this.garbageItems = garbages;
        this.isLoading = false;
      });
    });
  }
}
