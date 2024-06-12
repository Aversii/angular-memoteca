import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarPensamentoComponent } from './deletar-pensamento.component';

describe('DeletarPensamentoComponent', () => {
  let component: DeletarPensamentoComponent;
  let fixture: ComponentFixture<DeletarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
