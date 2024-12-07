import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeProductosComponent } from './lista-de-productos.component';

describe('ListaDeProductosComponent', () => {
  let component: ListaDeProductosComponent;
  let fixture: ComponentFixture<ListaDeProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDeProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDeProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
