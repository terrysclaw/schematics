import { Component, ChangeDetectionStrategy, ViewEncapsulation, Injector } from '@angular/core';
import { takeUntil } from 'rxjs';

import { fuseAnimations } from '@fuse/animations';

import { AbstractListComponent } from 'app/shared/components/abstract-list.component';
import { PageRequest, <%= classify(singular) %> } from 'app/core/models';
import { <%= classify(singular) %>Service } from 'app/core/crud';


@Component({
    selector: 'app-<%= dasherize(plural) %>',
    templateUrl: './<%= dasherize(plural) %>.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: fuseAnimations
})
export class <%= classify(plural) %>Component extends AbstractListComponent<<%= classify(singular) %>> {

    constructor(
        protected _injector: Injector,
        private _<%= camelize(singular) %>Service: <%= classify(singular) %>Service,
    ) {
        super(_injector);

        this.displayedColumns = ['id', 'action'];
    }

    protected _fetchData(): void {
        this._loading.next(true);

        this._<%= camelize(singular) %>Service.findRange(
            PageRequest.from(
                (this._paginator?.pageIndex || 0),
                (this._paginator?.pageSize || this.pageSize),
                (this._sort?.active || 'id'),
                (this._sort?.direction || 'desc'),
                (this.searchInputControl?.value || '')
            ))
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe({
                next: (response) => {
                    this._items.next(response.body);
                    this._count.next(+response.headers.get('x-total-count'));
                    this._allowPost.next(response.headers.get('x-access-control-allow-post') === 'true');
                },
                error: (e) => this._handleError(e),
                complete: () => {
                    this._loading.next(false);
                    this._changeDetectorRef.markForCheck();
                }
            });
    }
}
