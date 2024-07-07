import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatdata01Component } from './chatdata01.component';

describe('Chatdata01Component', () => {
  let component: Chatdata01Component;
  let fixture: ComponentFixture<Chatdata01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Chatdata01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatdata01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
