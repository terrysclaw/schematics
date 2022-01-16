import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'environments/environment';
import { GenericCrudService } from 'app/core/crud';
import { <%= classify(singular) %> } from 'app/core/models';


@Injectable({
    providedIn: 'root'
})
export class <%= classify(singular) %>Service extends GenericCrudService<<%= classify(singular) %>, number> {

    constructor(private http: HttpClient) {
        super(http, `${environment.apiUrl}/<%= underscore(plural) %>`);
    }

}
