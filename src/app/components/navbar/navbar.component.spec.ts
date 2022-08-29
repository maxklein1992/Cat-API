import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { screen } from '@testing-library/angular';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { AppRoutingModule } from '../../../app/app-routing.module';
import { HttpLoaderFactory } from '../../../app/app.module';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [HttpClient, HttpHandler],
      imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        TranslateTestingModule.withTranslations({
          en: require('../../../assets/i18n/en.json'),
          nl: require('../../../assets/i18n/nl.json'),
        }),
      ],
    });
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  }));

  it('should render a logo', inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(NavbarComponent);
      fixture.detectChanges();

      const logo = screen.findByText('CatApi App');
      expect(logo).toBeTruthy();
    }
  ));

  it('should render navigation items, with the correct name and a href pointing to the right source', inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(NavbarComponent);
      fixture.detectChanges();

      const navItems = screen.queryAllByRole('menuitem');
      expect(navItems).toHaveLength(3);

      const firstNavItem = navItems[0];
      const secondNavItem = navItems[1];
      const thirdNavItem = navItems[2];

      expect(firstNavItem.textContent).toBe('Spawn een random kat');
      expect(secondNavItem.textContent).toBe('Zoek op Ras');
      expect(thirdNavItem.textContent).toBe('Favorieten');

      expect(firstNavItem.getAttribute('href')).toBe('/cat');
      expect(secondNavItem.getAttribute('href')).toBe('/filterByBreed');
      expect(thirdNavItem.getAttribute('href')).toBe('/favorites');
    }
  ));

  it('Supports change in language', inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(NavbarComponent);
      fixture.detectChanges();

      const navItems = screen.queryAllByRole('menuitem');
      const firstNavItem = navItems[0];
      const secondNavItem = navItems[1];
      const thirdNavItem = navItems[2];

      expect(firstNavItem.textContent).toBe('Spawn een random kat');
      expect(secondNavItem.textContent).toBe('Zoek op Ras');
      expect(thirdNavItem.textContent).toBe('Favorieten');

      translateService.use('en');
      fixture.detectChanges();

      expect(firstNavItem.textContent).toBe('Get a random cat');
      expect(secondNavItem.textContent).toBe('Search by breed');
      expect(thirdNavItem.textContent).toBe('Favorites');
    }
  ));
});
