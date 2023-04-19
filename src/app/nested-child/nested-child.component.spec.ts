import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChildComponent } from './nested-child.component';

describe('NestedChildComponent', () => {
  let component: NestedChildComponent;
  let fixture: ComponentFixture<NestedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
