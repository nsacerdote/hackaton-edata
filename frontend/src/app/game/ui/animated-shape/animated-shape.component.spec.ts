import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedShapeComponent } from './animated-shape.component';

describe('AnimatedShapeComponent', () => {
  let component: AnimatedShapeComponent;
  let fixture: ComponentFixture<AnimatedShapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedShapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
