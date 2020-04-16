import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';

import { SharedModule } from './modules/shared/shared.module';
import { IPetOwner } from './store/model';
import { PetApiService } from './services/pet-api.service';

import MockData from '../mockdata';
import { CoreModule } from './modules/core/core.module';

describe('AppComponent', () => {
  let store: MockStore;
  const initialState: Array<IPetOwner> = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, CoreModule],
      declarations: [
        AppComponent
      ],
      providers: [provideMockStore({ initialState }), PetApiService]
    }).compileComponents();

    store = TestBed.inject(MockStore);
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a default pet search teram as 'Cat'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.petFilterSearchTerm).toEqual('Cat');
  });

  it(`should render correct gender groups`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.petOwners = MockData as Array<IPetOwner>;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.gender').length).toEqual(2);
  });

  it(`should render correct number of pets across all genders groups`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.petOwners = MockData as Array<IPetOwner>;
    fixture.detectChanges();
    console.log(fixture.nativeElement);
    expect(fixture.nativeElement.querySelectorAll('.pet').length).toEqual(7);
  });
});
