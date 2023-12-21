import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderComponent } from './gender.component';
import { Gender } from 'src/app/store/model';

describe('GenderComponent', () => {
  let component: GenderComponent;
  let fixture: ComponentFixture<GenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render gender', () => {
    component.gender = Gender.Female;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.gender').innerText).toEqual(Gender.Female);
  });  
});
