import { Route } from '@angular/router';
import { <%= classify(plural) %>Component } from './<%= dasherize(plural) %>.component';
import { <%= classify(singular) %>Component } from './<%= dasherize(singular) %>/<%= dasherize(singular) %>.component';

export const <%= classify(plural) %>Routes: Route[] = [
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
