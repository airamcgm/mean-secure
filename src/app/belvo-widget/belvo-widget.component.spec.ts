import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelvoWidgetComponent } from './belvo-widget.component';

describe('BelvoWidgetComponent', () => {
  let component: BelvoWidgetComponent;
  let fixture: ComponentFixture<BelvoWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelvoWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BelvoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
