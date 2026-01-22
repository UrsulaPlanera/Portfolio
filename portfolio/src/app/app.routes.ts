import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Navbar } from './core/layout/navbar/navbar';
import path from 'path';
import { Projects } from './features/projects/projects';

export const routes: Routes = [
    {
        path: '',
        component: Navbar,
        children:[
            {
                path: '',
                component: Home
            },
            {
                path: 'projects',
                component: Projects
            }
        ]
        }
];
