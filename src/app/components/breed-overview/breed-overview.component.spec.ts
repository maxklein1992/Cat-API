import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
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
import { GetBreedNames, PostFavorite, SearchBreedByName } from '../../services';
import { BreedOverviewComponent } from './breed-overview.component';

describe('BreedOverviewComponent', () => {
  let component: BreedOverviewComponent;
  let fixture: ComponentFixture<BreedOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreedOverviewComponent, ButtonComponent],
      providers: [
        GetBreedNames,
        PostFavorite,
        SearchBreedByName,
        HttpClient,
        HttpHandler,
      ],
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
    fixture = TestBed.createComponent(BreedOverviewComponent);
    component = fixture.componentInstance;
  }));

  it('should render a header, an inputfield and two buttons', inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(BreedOverviewComponent);
      fixture.detectChanges();

      const header = fixture.debugElement.nativeElement.querySelector('h1');
      expect(header.textContent).toEqual('Zoek op Ras');

      const inputfield = screen.getByPlaceholderText('Bijvoorbeeld Cheetoh');
      expect(inputfield).toBeTruthy();

      const searchButton = fixture.debugElement.query(
        By.css('[data-testid="search-button"]')
      );
      expect(searchButton.nativeElement.textContent).toContain('Zoek op Ras');

      const examplesButton = fixture.debugElement.query(
        By.css('[data-testid="examples-button"]')
      );
      expect(examplesButton.nativeElement.textContent).toContain(
        'Laat voorbeelden van ras namen zien'
      );
    }
  ));
});
