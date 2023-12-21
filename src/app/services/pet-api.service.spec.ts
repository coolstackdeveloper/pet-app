import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { PetApiService } from './pet-api.service';
import { IPetOwner } from '../store/model';

describe('PetApiService', () => {
  let store: MockStore;
  let service: PetApiService;
  const initialState: Array<IPetOwner> = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockStore({ initialState })]
    });

    store = TestBed.inject(MockStore);
    service = TestBed.inject(PetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
