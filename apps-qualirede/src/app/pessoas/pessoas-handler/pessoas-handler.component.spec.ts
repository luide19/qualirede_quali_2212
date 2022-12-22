import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasHandlerComponent } from './pessoas-handler.component';

describe('PessoasHandlerComponent', () => {
  let component: PessoasHandlerComponent;
  let fixture: ComponentFixture<PessoasHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoasHandlerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoasHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
