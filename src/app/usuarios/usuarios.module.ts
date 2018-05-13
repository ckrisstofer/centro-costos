import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsuariosComponent } from './list-usuarios/list-usuarios.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'usuarios', component: ListUsuariosComponent }
];

@NgModule({
  declarations: [
    ListUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [
    ListUsuariosComponent
  ]

})
export class UsuariosModule { }