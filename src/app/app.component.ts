import {AfterViewInit, Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NgwWowService} from 'ngx-wow';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

    public menu = 1;
    public distance = '';
    public lineWidth = '';

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private wow: NgwWowService
    ) {
        this.initializeApp();
        this.wow.init();
    }

    ngAfterViewInit() {
        const li = document.querySelector('#menu ul li:first-child');
        this.selectMenu(1, {target: li});
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    public selectMenu(num, event) {
        this.menu = num;
        const li: HTMLElement = event.target.closest('li');

        this.lineWidth = li.offsetWidth + 'px';
        this.distance = li.offsetLeft + 'px';
    }
}
