import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialPostComponent } from './initial-post.component';

describe('InitialPostComponent', () => {
  let component: InitialPostComponent;
  let fixture: ComponentFixture<InitialPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InitialPostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InitialPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
