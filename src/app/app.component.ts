import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NgwWowService} from 'ngx-wow';
import ripplet from 'ripplet.js';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {

    public tab = 1;
    public distance = '';
    public lineWidth = '';
    public menu = false;
    public toggle = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private wow: NgwWowService,
        private cd: ChangeDetectorRef
    ) {
        this.initializeApp();
        this.wow.init();
    }

    ngAfterViewInit() {
        const li = document.querySelector('footer ul li:first-child');
        this.selectMenu(1, {target: li});
        this.cd.detectChanges();
        [
            '#burger',
        ].forEach(s => document.querySelector(s).addEventListener('mousedown', ripplet));
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    public selectMenu(num, event) {
        this.tab = num;
        const li: HTMLElement = event.target.closest('li');
        this.lineWidth = li.offsetWidth + 'px';
        this.distance = li.offsetLeft + 'px';
    }
}
