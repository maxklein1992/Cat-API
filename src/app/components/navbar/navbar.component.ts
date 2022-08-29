import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navbar-app',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentLanguage: string;

  languages = [
    { code: 'en', name: 'English' },
    { code: 'nl', name: 'Dutch' },
  ];

  constructor(private translate: TranslateService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
  }

  /**
   * Changes the language of the app
   */
  changeLanguage(language: string): void {
    localStorage.setItem('language', language);
    this.currentLanguage = language;
    this.translate.use(language);
  }
}
