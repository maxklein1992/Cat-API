import { TestBed } from '@angular/core/testing';
import axios from 'axios';

import { GetRandomCatImage } from './getRandomCatImage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

jest.mock('axios');

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
    // const result = service.getRandomCatImage().subscribe((response) => {});
    // console.log(result);
    const catObj = await service
      .getRandomCatImage()
      .subscribe((response) => {});
    console.log(catObj);
  });
});
