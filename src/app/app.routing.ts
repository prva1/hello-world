import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { WeatherComponent } from './weather/weather.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from "./user/user.component";
import { SortuserDateTableComponent } from './sortuser-date-table/sortuser-date-table.component';
 
export const AppRoutes: Routes = [
    {   path: 'weather',
        component: WeatherComponent 
    }, 
    {   path: 'Queryuser',
        component: UserComponent 
    }, 
    {   path: 'SortedQueryuser',
        component: SortuserDateTableComponent 
    },    
    {   path: '**',
        redirectTo: '/',
        pathMatch: 'full',
     //  component: NotFoundComponent
    }
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);