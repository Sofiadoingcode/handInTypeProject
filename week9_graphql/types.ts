type Person = {
    id: string;
    name: string;
    age: string;
    occupation: string;
    salary: string;
    addressId: string;
};

type Address = {
    id: string;
    zipcode: string;
    street: string;
    number: string;

}

type Context = {
    people: Person[];
    addresses: Address[];
};
type Args = {
    id: string;
    input: Person | Address;
};

export type {Person, Address, Context, Args};