import { Component, OnInit} from '@angular/core';
import { IGarbageModel } from 'src/app/models/garbage.model';

import { GarbageService } from 'src/app/services/garbage.service';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  title = 'test-garbage';
  result: any;
  garbageItems!: IGarbageModel[];
  id: string = '';
  body: object = {
    name: 'name1',
    link: 'link1',
    comment: 'comment1',
    tags: ['tag1', 'tag2', 'tag3'],
  };
  body1: object = {
    createdAt: '2',
    updatedAt: '1',
    name: 'hi',
    link: 'imlink',
    comment: 'imcomment',
    tags: ['imtag'],
  };

  constructor(private garbageServiceApi: GarbageService) {}

  ngOnInit(): void {
    // this.garbageServiceApi.postGarbage(this.body).subscribe((el) => {
    // this.result = el;
    //});
    //console.log(this.result);

    this.garbageServiceApi.getAll().subscribe((allGarbages) => {
      this.garbageItems = allGarbages;
    });
  }

  removeItem(id: string) {
    this.garbageServiceApi.removeById(id).subscribe(() => {
      this.garbageServiceApi.getAll().subscribe((garbages) => {
        this.garbageItems = garbages;
      });
    });
  }
}
