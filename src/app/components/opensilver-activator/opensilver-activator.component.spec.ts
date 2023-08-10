import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensilverActivatorComponent } from './opensilver-activator.component';

describe('OpensilverActivatorComponent', () => {
  let component: OpensilverActivatorComponent;
  let fixture: ComponentFixture<OpensilverActivatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpensilverActivatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensilverActivatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
