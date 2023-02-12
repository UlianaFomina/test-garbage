import { GarbageService } from './services/garbage.service';
import { IGarbageModel } from './models/garbage.model';
import { Component } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-garbage';
  result: any;
  garbageItems$: Observable<IGarbageModel[]> | undefined;
  id: string = '';
  body: object = {
    name: 'name1',
    link: 'link1',
    comment: 'comment1',
    tags: ['tag1'],
  };
  body1: object = {
    createdAt: '2',
    updatedAt: '1',
    name: 'hi',
    link: 'imlink',
    comment: 'imcomment',
    tags: ['imtag'],
  };

  constructor(private GarbageService: GarbageService) {}

  ngOnInit(): void {
    //this.GarbageService.postGarbage(this.body).subscribe((el) => {
    //this.result = el;
    //});
    //console.log(this.result);
    this.garbageItems$ = this.GarbageService.getAll();
    this.garbageItems$.subscribe((e) => {
      // this.GarbageService.removeById(e[0].id).subscribe(deleted => {
      //  console.log(`Data with id: ${e[0].id} has been deleted..`)
      //});
      this.GarbageService.updateById(e[0].id, this.body1).subscribe(
        (updated) => {
          console.log(e[0].comment);
        }
      );
    });
    this.garbageItems$.subscribe((e) => {
      console.log(e);
    });
  }
}
