import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowChairTypeComponent } from './show-chair-type.component';

describe('ShowChairTypeComponent', () => {
  let component: ShowChairTypeComponent;
  let fixture: ComponentFixture<ShowChairTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowChairTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowChairTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
