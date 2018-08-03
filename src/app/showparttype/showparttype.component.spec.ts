import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowparttypeComponent } from './showparttype.component';

describe('ShowparttypeComponent', () => {
  let component: ShowparttypeComponent;
  let fixture: ComponentFixture<ShowparttypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowparttypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowparttypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
