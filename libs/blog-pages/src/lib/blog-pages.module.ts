import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { InitialPostComponent } from './pages/initial-post/initial-post.component';
import { PublishingOnGithubPagesComponent } from './pages/publishing-on-github-pages/publishing-on-github-pages.component';

export const blogPagesRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [InitialPostComponent, PublishingOnGithubPagesComponent],
  exports: [InitialPostComponent, PublishingOnGithubPagesComponent],
})
export class BlogPagesModule {}
