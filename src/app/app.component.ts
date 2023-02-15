import { GarbageService } from './services/garbage.service';
import { IGarbageModel } from './models/garbage.model';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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
    //this.GarbageService.postGarbage(this.body).subscribe((el) => {
    // this.result = el;
    // });
    //console.log(this.result);

    this.garbageServiceApi.getAll().subscribe(allGarbages => {
      this.garbageItems = allGarbages
    });
  }

  removeItem(id: string){
    this.garbageServiceApi.removeById(id).subscribe(() => {
      this.garbageServiceApi.getAll().subscribe(garbages => {
        this.garbageItems = garbages
      })
    })
  }

}
