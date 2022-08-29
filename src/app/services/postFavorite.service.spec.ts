import { TestBed } from '@angular/core/testing';

import { PostFavorite } from './postFavorite.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostFavoriteService', () => {
  let service: PostFavorite;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostFavorite],
    });
    service = TestBed.inject(PostFavorite);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
