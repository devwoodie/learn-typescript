interface PhoneNumberDictionary {
    [phone: string]: {
        num: number;
    };
}

interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary;
}

enum PhoneType{
    Home = 'Home',
    Office = 'office',
    Studio = 'studio'
};

export { Contact, PhoneType }