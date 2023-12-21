enum Gender {
    Male = 'Male',
    Female = 'Female'
}

enum PetType {
    Cat = 'Cat',
    Dog = 'Dog'
}

interface IPet {
    name: string;
    type: PetType;
}

interface IPetOwner {
    name: string;
    age: number;
    gender: Gender,
    pets: Array<IPet>;
}

export { Gender, PetType, IPet, IPetOwner };