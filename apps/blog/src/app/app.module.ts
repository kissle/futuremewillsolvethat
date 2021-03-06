import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { InitialPostComponent, PublishingOnGithubPagesComponent } from '@futureme/blog-pages-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(
      [
        {
          path: '',
          component: InitialPostComponent
        },
        {
          path: 'publishing-on-github-pages',
          component: PublishingOnGithubPagesComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
