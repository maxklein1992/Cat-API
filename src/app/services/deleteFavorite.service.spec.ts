import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DeleteFavorite } from './deleteFavorite.service';

describe('DeleteFavoriteService', () => {
  let service: DeleteFavorite;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeleteFavorite],
    });
    service = TestBed.inject(DeleteFavorite);
  });

  it('should be created', async () => {
    expect(service).toBeTruthy();
  });
});
