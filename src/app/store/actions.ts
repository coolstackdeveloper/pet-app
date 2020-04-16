import { createAction, props } from '@ngrx/store';
import { IPetOwner } from './model';

export interface AddPetOwnerActionArgument {
    petOwners: Array<IPetOwner>
}

export const addPetOwners = createAction('Add pet owners', props<AddPetOwnerActionArgument>());
