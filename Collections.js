'use strict';

const arr = [
    { name: 'Tyler', phone: '+380637823490' },
    { name: 'Creator', phone: '+1039293930' }
];

const findPhoneByName = (name) => {
    for (const tylers of arr) {
        if (tylers.name === name) {
            return tylers.phone};
    }
};
console.log(findPhoneByName('Tyler'));


const hash = {
    Tyler: '+380637823490',
    Creator: '+1039293930'
};

const hashFind = (name) => hash[name];
console.log(hashFind("Creator"));