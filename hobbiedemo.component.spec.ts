import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiedemoComponent } from './hobbiedemo.component';

describe('HobbiedemoComponent', () => {
  let component: HobbiedemoComponent;
  let fixture: ComponentFixture<HobbiedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbiedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbiedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
