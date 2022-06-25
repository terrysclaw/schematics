import { Route } from '@angular/router';
import { <%= classify(plural) %>Component } from './<%= dasherize(plural) %>.component';
import { <%= classify(singular) %>Component } from './<%= dasherize(singular) %>/<%= dasherize(singular) %>.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: <%= classify(plural) %>Component,
        children: [
            {
                path: ':id',
                component: <%= classify(singular) %>Component
            }
        ]
    }
];
