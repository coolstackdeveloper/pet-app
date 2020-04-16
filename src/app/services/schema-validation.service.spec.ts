import { TestBed } from '@angular/core/testing';

import { SchemaValidationService } from './schema-validation.service';

describe('SchemaValidationService', () => {
  let service: SchemaValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchemaValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return true for valid pet owner', () => {
    const testPetOwner = {
      "name": "Bob",
      "gender": "Male",
      "age": 23,
      "pets": [
        {
          "name": "Garfield",
          "type": "Cat"
        },
        {
          "name": "Fido",
          "type": "Dog"
        }
      ]
    };

    expect(service.petOwnerIsValid(testPetOwner)).toBeTrue();
  });

  it('should return false when pet owner schema does not have pets', () => {
    const testPetOwner = {
      "name": "Bob",
      "gender": "Male",
      "age": 23
    };

    expect(service.petOwnerIsValid(testPetOwner)).toBeFalse();
  });

  it('should return false when pet owner schema does not have gender', () => {
    const testPetOwner = {
      "name": "Bob",
      "age": 23,
      "pets": [
        {
          "name": "Garfield",
          "type": "Cat"
        },
        {
          "name": "Fido",
          "type": "Dog"
        }
      ]
    };

    expect(service.petOwnerIsValid(testPetOwner)).toBeFalse();
  });

  it('should return true for empty pet owner collection', () => {
    const testPetOwners = [];
    expect(service.petOwnerCollectionIsValid(testPetOwners)).toBeTrue();
  });

  it('should return true for valid pet owner collection', () => {
    const testPetOwners = [{
      "name": "Bob",
      "gender": "Male",
      "age": 23,
      "pets": [
        {
          "name": "Garfield",
          "type": "Cat"
        },
        {
          "name": "Fido",
          "type": "Dog"
        }
      ]
    },
    {
      "name": "Jennifer",
      "gender": "Female",
      "age": 18,
      "pets": [
        {
          "name": "Garfield",
          "type": "Cat"
        }
      ]
    }]

    expect(service.petOwnerCollectionIsValid(testPetOwners)).toBeTrue();
  });

  it('should return false for invalid entry in pet owner collection', () => {
    const testPetOwners = [{
      "name": "Bob",
      "gender": "Male",
      "age": 23,
      "pets": [
        {
          "name": "Garfield",
          "type": "Cat"
        },
        {
          "name": "Fido",
          "type": "Dog"
        }
      ]
    },
    {
      "name": "Jennifer",
      "gender": "Female",
      "age": 18
    }]

    expect(service.petOwnerCollectionIsValid(testPetOwners)).toBeFalse();
  });
});
