import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = environment.title;

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  initLanguage() {
    const language = localStorage.getItem('language');
    if (language == 'nl') {
      this.translate.setDefaultLang('nl');
      this.translate.use('nl');
    }
    if (language == 'en' || language == null) {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
    }
  }
}
