import Ajv from 'ajv';
import { Injectable } from '@angular/core';
import { petOwnerSchema, petOwnerCollectionSchema } from '../schemas';

@Injectable({
  providedIn: 'root'
})
export class SchemaValidationService {
  ajv: any = new Ajv();

  constructor() { }

  petOwnerIsValid(petOwner) {
    return this.ajv.validate(petOwnerSchema, petOwner);
  }
  
  petOwnerCollectionIsValid(petOwnerCollection) {
    return this.ajv.validate(petOwnerCollectionSchema, petOwnerCollection);
  }
}



