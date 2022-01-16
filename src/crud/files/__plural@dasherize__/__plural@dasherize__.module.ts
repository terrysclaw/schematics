import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';

import { SharedModule } from 'app/shared/shared.module';

import { <%= classify(plural) %>RoutingModule } from './<%= dasherize(plural) %>-routing.module';
import { <%= classify(plural) %>Component } from './<%= dasherize(plural) %>.component';
import { <%= classify(singular) %>Component } from './<%= dasherize(singular) %>/<%= dasherize(singular) %>.component';


@NgModule({
  declarations: [
    <%= classify(plural) %>Component,
    <%= classify(singular) %>Component
  ],
  imports: [
    <%= classify(plural) %>RoutingModule,
    TranslocoModule,
    SharedModule
  ]
})
export class <%= classify(plural) %>Module { }
