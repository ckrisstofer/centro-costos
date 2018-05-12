import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';

@NgModule({
  declarations: [
    ListUsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListUsuariosComponent
  ]

})
export class UsuariosModule { }
export const listUsuariosComponent = ListUsuariosComponent;
