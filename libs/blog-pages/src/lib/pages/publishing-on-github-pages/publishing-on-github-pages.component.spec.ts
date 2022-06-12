import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishingOnGithubPagesComponent } from './publishing-on-github-pages.component';

describe('PublishingOnGithubPagesComponent', () => {
  let component: PublishingOnGithubPagesComponent;
  let fixture: ComponentFixture<PublishingOnGithubPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishingOnGithubPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PublishingOnGithubPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
