import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'; // 引入路由
import {HttpClientModule} from '@angular/common/http';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServerComponent} from './components/server/server.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './ngrx/action/index';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'server',
        component: ServerComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        ServerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        ),
        StoreModule.forRoot({count: counterReducer}),
        NgZorroAntdModule.forRoot()
    ],
    exports: [RouterModule],
    bootstrap: [AppComponent]
})
export class AppModule {
}
