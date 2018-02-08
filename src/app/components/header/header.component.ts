import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    openPath(nav) {
        this.router.navigate([nav.path]);
    }
}
