import { Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';

export const routes: Routes = [
    { path: 'register', component: CadastroComponent},
    { path: 'search', component: ConsultaComponent}
];
