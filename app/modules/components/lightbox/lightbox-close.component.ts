import {Component} from "@angular/core";
import {Store} from "@ngrx/store";
import {IState} from "../../../app.store";
import {CloseLightboxAction} from "../../../app.actions";

@Component({
    selector: "tg-lightbox-close",
    template: `
        <a class="close" (click)="close()" [title]="'COMMON.CLOSE' | translate">
            <tg-svg svg-icon="icon-close"></tg-svg>
        </a>`
})
export class LightboxClose {
    constructor(private store: Store<IState>) {}

    close() {
        this.store.dispatch(new CloseLightboxAction());
        return false;
    }
}

