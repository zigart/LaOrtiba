import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//componentes
import { HeaderComponent } from './components/header/header.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';


const appRoutes: Routes = [
    {path: '', component: HeaderComponent},
    {path:'quienes-somos', component: QuienesSomosComponent }
];


export const appRoutingProviders: any[] = []
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);