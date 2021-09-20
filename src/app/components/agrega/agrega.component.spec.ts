import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaComponent } from './agrega.component';

describe('AgregaComponent', () => {
  let component: AgregaComponent;
  let fixture: ComponentFixture<AgregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
