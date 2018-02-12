import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/observable';
import {NAVGB, NONAVGB} from '../../../app/ngrx/action/index';

interface AppState {
    count: boolean;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
    count$: Observable<boolean>;
    admin = false;

    constructor(private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
    }

    ngOnInit() {
        window.addEventListener('scroll', () => {
            let height = document.documentElement.clientHeight;
            let top = document.documentElement.scrollTop;
            if (top > height) {
                this.store.dispatch({type: NAVGB});
            } else {
                this.store.dispatch({type: NONAVGB});
            }
        });
        let timeID = setTimeout(() => {
            this.admin = true;
        }, 300);
        if (this.admin) {
            clearTimeout(timeID);
        }
    }

    scrollTop(dom) {
        let height = document.documentElement.clientHeight;
        let timeID = setInterval(() => {
            let top = document.documentElement.scrollTop;
            if (top > height) {
                clearInterval(timeID);
                this.store.dispatch({type: NAVGB});
                return;
            }
            if (top < height) {
                document.documentElement.scrollTop = document.documentElement.scrollTop + 30;
            }
        }, 20);
    }

}
