import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CardComponent } from './card/card.component';

export const routes: Routes = [
    {path:'nav-bar', component:NavBarComponent},
    {path: 'inicio', component:InicioComponent},
    {path: 'quienes-somos', component:QuienesSomosComponent},
    {path: 'contactos', component:ContactosComponent},
    {path: 'card', component:CardComponent}
];
