import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { InitialPostComponent } from './pages/initial-post/initial-post.component';

export const blogPagesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [InitialPostComponent],
  exports: [InitialPostComponent],
})
export class BlogPagesModule {}
