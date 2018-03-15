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
    nav = [
        {
            path: '',
            name: '首页'
        },
        {
            path: 'server',
            name: '服务'
        },
        {
            path: '',
            name: '项目'
        },
        {
            path: '',
            name: '关于'
        },
        {
            path: '',
            name: '配置说明'
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
}
