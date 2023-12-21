let petOwnerSchema = {
    "properties": {
        "name": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "gender": {
            "type": "string",
            "pattern": "(^Male$|^Female$)"
        },
        "pets": {
            "type": ["array"]
        }
    },
    "required": ["name", "age", "gender", "pets"],
};

let petOwnerCollectionSchema = {
    "type": "array",
    "items": petOwnerSchema
};


export { petOwnerCollectionSchema, petOwnerSchema };