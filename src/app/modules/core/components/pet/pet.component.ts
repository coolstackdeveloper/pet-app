import { Component, OnInit, Input } from '@angular/core';
import { IPet } from 'src/app/store/model';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  @Input() pet: IPet = {} as IPet;

  constructor() { }

  ngOnInit(): void {
  }

}
