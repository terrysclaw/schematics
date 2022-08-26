import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { <%= classify(plural) %>Component } from './<%= dasherize(plural) %>.component';
import { <%= classify(singular) %>Component } from './<%= dasherize(singular) %>/<%= dasherize(singular) %>.component';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class <%= classify(plural) %>RoutingModule { }
