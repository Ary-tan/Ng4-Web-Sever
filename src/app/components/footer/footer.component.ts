import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
    time: any;
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
            name: '技术论坛'
        }
    ];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.time = new Date();
    }

    openPath(nav) {
        this.router.navigate([nav.path]);
    }

}
