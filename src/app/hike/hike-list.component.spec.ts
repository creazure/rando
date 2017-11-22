import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeListComponent } from './hike-list.component';

describe('HikeComponent', () => {
  let component: HikeListComponent;
  let fixture: ComponentFixture<HikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
