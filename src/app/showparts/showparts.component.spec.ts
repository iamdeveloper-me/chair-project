import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpartsComponent } from './showparts.component';

describe('ShowpartsComponent', () => {
  let component: ShowpartsComponent;
  let fixture: ComponentFixture<ShowpartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowpartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
