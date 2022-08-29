import { HttpClient, HttpHandler } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { screen } from '@testing-library/angular';
import { TranslateTestingModule } from 'ngx-translate-testing';

import { ButtonComponent } from '../../../app/UI';
import { HttpLoaderFactory } from '../../../app/app.module';
import { GetRandomCatImage } from '../../services';
import { RandomCatImageComponent } from './random-cat-image.component';

describe('RandomCatImageComponent', () => {
  let component: RandomCatImageComponent;
  let fixture: ComponentFixture<RandomCatImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RandomCatImageComponent, ButtonComponent],
      providers: [GetRandomCatImage, HttpClient, HttpHandler],
      imports: [
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
    fixture = TestBed.createComponent(RandomCatImageComponent);
    component = fixture.componentInstance;
  }));

  it("should render loading message when 'getRandomCatImage' service is not finished loading", inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(RandomCatImageComponent);
      fixture.detectChanges();

      const header = fixture.debugElement.nativeElement.querySelector('h1');
      expect(header.textContent).toContain('De kat is aan het laden...');
    }
  ));
});
