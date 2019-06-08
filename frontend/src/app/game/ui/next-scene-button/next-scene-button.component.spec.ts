import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextSceneButtonComponent } from './next-scene-button.component';

describe('NextSceneButtonComponent', () => {
  let component: NextSceneButtonComponent;
  let fixture: ComponentFixture<NextSceneButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextSceneButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextSceneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
