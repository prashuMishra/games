import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTac } from './tic-tac.component';

describe('tic-tac', () => {
  let component: TicTac;
  let fixture: ComponentFixture<TicTac>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTac ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTac);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
