import { Component, input, linkedSignal } from '@angular/core';
import { PublicidadComponent } from '../childs/publicidad/publicidad.component';
import { ListaDeProductosComponent } from '../childs/lista-de-productos/lista-de-productos.component';

@Component({
  selector: 'app-incremental-hidration',
  imports: [PublicidadComponent, ListaDeProductosComponent],
  templateUrl: './incremental-hidration.component.html',
  styleUrl: './incremental-hidration.component.css'
})
export class IncrementalHidrationComponent {

  readonly _nombreUsuario = input<string>('');
  nombreUsuario = linkedSignal(this._nombreUsuario);


  agregarAlcarrito() {
    this.nombreUsuario.set('Nelson');
  }
}
