import { GarbageService } from './services/garbage.service';
import { IGarbageModel } from './models/garbage.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'test-garbage';
  garbageItems!: IGarbageModel[];

  constructor(private garbageServiceApi: GarbageService) {}

  ngOnInit(): void {
    this.garbageServiceApi.getAll().subscribe((allGarbages) => {
      this.garbageItems = allGarbages;
    });
  }
}
