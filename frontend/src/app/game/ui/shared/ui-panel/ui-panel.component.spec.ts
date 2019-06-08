import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPanelComponent } from './ui-panel.component';

describe('UiPanelComponent', () => {
  let component: UiPanelComponent;
  let fixture: ComponentFixture<UiPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
