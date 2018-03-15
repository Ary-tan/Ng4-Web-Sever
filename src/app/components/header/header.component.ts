import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/observable';

interface AppState {
    count: boolean;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
    value: any;
    nav = [
        {
            path: '',
            name: '首页'
        },
        {
            path: 'server',
            name: 'HTML/CSS'
        },
        {
            path: '',
            name: 'JAVASCRIPT'
        },
        {
            path: '',
            name: 'NODE/EXPRESS'
        },
        {
            path: '',
            name: '技术交流'
        }
    ];
    count$: Observable<boolean>;

    constructor(private router: Router, private store: Store<AppState>) {
        this.count$ = store.pipe(select('count'));
    }

    ngOnInit() {
    }

    openPath(nav) {
        this.router.navigate([nav.path]);
    }

    onSearch(event: string): void {
        console.log(event);
    }
}
