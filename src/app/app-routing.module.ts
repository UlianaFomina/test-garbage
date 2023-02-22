import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PostGarbageFormComponent } from './components/post-garbage-form-component/post-garbage-form.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'form', component: PostGarbageFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
