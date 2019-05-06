import {Routes, RouterModule} from '@angular/router';
// import { homedir } from 'os';
import { MoviesComponent } from './movies/movies.component';
import { RequestsComponent } from './requests/requests.component';
import { MainContentComponent } from './main-content/main-content.component';



const routes: Routes = [
    {
        path: 'movies',
        component: MoviesComponent
    },
    {
        path: 'request',
        component: RequestsComponent
    }
];

export const AppRoutes = RouterModule.forRoot(routes);
