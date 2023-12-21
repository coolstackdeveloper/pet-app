import { flattenDeep } from 'lodash';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import Constants from '../constants';
import { IPetOwner } from '../store/model';
import { addPetOwners } from '../store/actions.js';
import { SchemaValidationService } from './schema-validation.service';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetApiService {
  subject: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient, private schemaValidator: SchemaValidationService, private store: Store<any>) {
  }

  loadPetOwners() {
    this.http.get<Array<IPetOwner>>(Constants.PeopleApiUrl).subscribe((petOwners = []) => {
      this.store.dispatch(addPetOwners({ petOwners: this.getValidPetOwners(petOwners) }));
    },
      error => this.subject.next(error.message));
  }

  getErrorStream() {
    return this.subject;
  }
  getPetOwnerStream() {
    return this.store.pipe(select('petOwners'));
  }

  getValidPetOwners(petOwners: Array<IPetOwner>) {
    return petOwners.filter(petOwner => this.schemaValidator.petOwnerIsValid(petOwner));
  }

  getPets(petOwners: Array<IPetOwner>) {
    return flattenDeep(petOwners.map(p => p.pets || []));
  }
}
