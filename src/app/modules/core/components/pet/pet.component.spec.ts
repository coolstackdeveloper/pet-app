import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetComponent } from './pet.component';
import { PetType, IPet } from 'src/app/store/model';

describe('PetComponent', () => {
  let component: PetComponent;
  let fixture: ComponentFixture<PetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PetComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render pet name', () => {
    const testPet: IPet = { name: 'Garfield', type: PetType.Cat };

    component.pet = testPet;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.pet').innerText).toEqual(testPet.name);
  });
});
