import { Component, OnInit, Input } from '@angular/core';
import { Gender } from 'src/app/store/model';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {
  @Input() gender: Gender;
  
  constructor() { }

  ngOnInit(): void {
  }

}
