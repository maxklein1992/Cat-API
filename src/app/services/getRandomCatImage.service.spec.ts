import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GetRandomCatImage } from './getRandomCatImage.service';

describe('GetRandomCatImageService', () => {
  let service: GetRandomCatImage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetRandomCatImage],
    });
    service = TestBed.inject(GetRandomCatImage);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
