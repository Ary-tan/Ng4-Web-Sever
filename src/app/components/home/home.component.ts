import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    scrollTop(dom) {
        let height = document.documentElement.clientHeight;
        let timeID = setInterval(() => {
            let top = document.documentElement.scrollTop;
            if (top > height) {
                clearInterval(timeID);
                return;
            }
            if (top < height) {
                document.documentElement.scrollTop = document.documentElement.scrollTop + 30;
            }
        }, 10);
    }

}
