import { EventEmitter, OnDestroy } from "@angular/core";
import { Page } from "./providers/page";
export declare class DatagridPagination implements OnDestroy {
    page: Page;
    constructor(page: Page);
    /**
     * Subscription to the page service changes
     */
    private _pageSubscription;
    ngOnDestroy(): void;
    /**
     * Page size
     */
    pageSize: number;
    /**
     * Total items (needed to guess the last page)
     */
    totalItems: number;
    /**
     * Last page
     */
    lastPage: number;
    /**
     * Current page
     */
    currentPage: number;
    currentChanged: EventEmitter<number>;
    /**
     * Moves to the previous page if it exists
     */
    previous(): void;
    /**
     * Moves to the next page if it exists
     */
    next(): void;
    /**
     * Index of the first item displayed on the current page, starting at 0
     */
    readonly firstItem: number;
    /**
     * Index of the last item displayed on the current page, starting at 0
     */
    readonly lastItem: number;
}
