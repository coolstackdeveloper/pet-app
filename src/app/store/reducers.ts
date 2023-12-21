import { createReducer, on } from '@ngrx/store';

import { IPetOwner } from './model';
import { addPetOwners, AddPetOwnerActionArgument } from './actions';

const initialState: Array<IPetOwner> = [];

export default createReducer(initialState, on(addPetOwners, (state, args: AddPetOwnerActionArgument) => {
    let newState: Array<IPetOwner> = [...args.petOwners];
    return newState;
}));


