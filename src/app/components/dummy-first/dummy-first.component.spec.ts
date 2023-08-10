import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyFirstComponent } from './dummy-first.component';

describe('DummyFirstComponent', () => {
  let component: DummyFirstComponent;
  let fixture: ComponentFixture<DummyFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
