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
import { TranslateTestingModule } from 'ngx-translate-testing';

import { ButtonComponent } from '../../../app/UI';
import { HttpLoaderFactory } from '../../../app/app.module';
import { DeleteFavorite, GetFavorites } from '../../services';
import { FavoritesOverviewComponent } from './favorites-overview.component';

describe('FavoritesOverviewComponent', () => {
  let component: FavoritesOverviewComponent;
  let fixture: ComponentFixture<FavoritesOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesOverviewComponent, ButtonComponent],
      providers: [GetFavorites, DeleteFavorite, HttpClient, HttpHandler],
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
    fixture = TestBed.createComponent(FavoritesOverviewComponent);
    component = fixture.componentInstance;
  }));

  it('should render a header', inject(
    [TranslateService],
    (translateService: TranslateService) => {
      translateService.setDefaultLang('nl');
      const fixture = TestBed.createComponent(FavoritesOverviewComponent);
      fixture.detectChanges();

      const header = fixture.debugElement.nativeElement.querySelector('h1');
      expect(header.textContent).toEqual('Favorieten');
    }
  ));
});
