import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensilverComponent } from './opensilver.component';

describe('OpensilverComponent', () => {
  let component: OpensilverComponent;
  let fixture: ComponentFixture<OpensilverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpensilverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensilverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
