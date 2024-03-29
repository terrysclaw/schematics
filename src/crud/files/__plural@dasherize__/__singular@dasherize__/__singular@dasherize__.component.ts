import { Component, ChangeDetectionStrategy, ViewEncapsulation, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Validators } from '@angular/forms';

import { TranslocoModule } from '@ngneat/transloco';

import { takeUntil } from 'rxjs';
import * as moment from 'moment';

import { SharedModule } from 'app/shared/shared.module';
import { AbstractFormComponent } from 'app/shared/components/abstract-form.component';
import { <%= classify(singular) %> } from '../<%= dasherize(singular) %>.model';
import { <%= classify(singular) %>Service } from '../<%= dasherize(singular) %>.service';


@Component({
    standalone: true,
    imports: [
        RouterModule,
        TranslocoModule,
        SharedModule
    ],
    selector: 'app-<%= path %>-<%= dasherize(singular) %>',
    templateUrl: './<%= dasherize(singular) %>.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%= classify(singular) %>Component extends AbstractFormComponent<<%= classify(singular) %>> {

    constructor(
        protected _injector: Injector,
        private _<%= camelize(singular) %>Service: <%= classify(singular) %>Service,
    ) {
        super(_injector);
    }

    protected _fetchData(): void {
        this._id = +this._activatedRoute.snapshot.paramMap.get('id');

        if (this._id != 0) {
            this._<%= camelize(singular) %>Service.findOne(this._id)
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe({
                    next: (response) => {
                        this._item.next(response.body);
                        this._allowPut.next(response.headers.get('x-access-control-allow-put') === 'true');
                        this._allowDelete.next(response.headers.get('x-access-control-allow-delete') === 'true');

                        this.buildItemForm(response.body);
                    },
                    error: (e) => this._handleError(e),
                    complete: () => this._changeDetectorRef.markForCheck()
                });
        } else {
            this._item.next(null);
            this.buildItemForm({});
            this.editMode = true;
        }
       
    }

    buildItemForm(item: any): void {
        this.itemForm = this._formBuilder.group({
            name: [item.name || null, [Validators.required, Validators.maxLength(50)]],
            notes: [item.notes]
        });
    }

    submit(): void {
        this._loading.next(true);

        this._<%= camelize(singular) %>Service.save_or_update(this._id, this.itemForm.value, this._item.value?.updated_ts)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => this._savedSuccessfully(),
                error: (e) => this._handleError(e),
                complete: () => this._loading.next(false)
            });
    }

    deleteItem(): void {
        this._<%= camelize(singular) %>Service.delete(this._id)
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: () => this._deletedSuccessfully(),
                error: (e) => this._handleError(e),
                complete: () => console.info('complete')
            });
    }
}
