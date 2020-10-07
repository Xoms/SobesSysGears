import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskJSComponent } from './task-js.component';

describe('TaskJSComponent', () => {
  let component: TaskJSComponent;
  let fixture: ComponentFixture<TaskJSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskJSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
