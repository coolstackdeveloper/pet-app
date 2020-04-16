import { Component, OnInit } from '@angular/core';

import { IPetOwner } from './store/model';
import { PetApiService } from './services/pet-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  errorMessage: string = null;
  petFilterSearchTerm: string = 'Cat';
  petOwners: Array<IPetOwner> = [] as Array<IPetOwner>;

  constructor(private petApiService: PetApiService) {
    this.petApiService.getErrorStream().subscribe(errorMessage => this.errorMessage = errorMessage);
    this.petApiService.getPetOwnerStream().subscribe(petOwners => this.petOwners = petOwners);
  }

  ngOnInit() {
    this.petApiService.loadPetOwners();
  }

  getPets(petOwners: Array<IPetOwner>) {
    return this.petApiService.getPets(petOwners);
  }
}
