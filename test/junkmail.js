let Junkmail = require('../junkmail.js');
let fs = require('fs');

let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;

// let dirtest = '/Users/itopplus/Downloads/postoffice/test2';
let dir = '/Users/itopplus/Downloads/postoffice/test';
let dir1 = '/Users/itopplus/Downloads/postoffice/123456';
let dir2 = '/Users/itopplus/Downloads/postoffice/test2';
let sdff = 'asdasdasdasdasdasd';
const oldjunk = 'Mailbox-JunkReport-Status=0';
const newjunk = 'Mailbox-JunkReport-Status=1';



// Junkmail.updateCustomer = () => {
//     return new Promise((resolve, reject) => {
//         fs.readdir(dir, (err, dirname) => {
//             resolve(true);
//     });
// });
// };


describe('Junk Mail Unit Test', () => {
    it('Get only Directory', async () => {
        let testgetD = Junkmail.getDirectories(dir);
        await testgetD.then((result) => {
            console.log(result);
        });
    });
    it('Cant Get Directory', async () => {
        let cGetD = Junkmail.getDirectories();
        await cGetD.then((result) => {console.log('ITs Disastaaa!!')}).catch((rejectM) => {
            console.log('ITs Error');

        })
    })


    it('Junkmail function can use', async () => {
        let testupdate = Junkmail.updateCustomer(dir2);
        await testupdate.then((result) => {
            console.log(result);
        });
    });
    it('Junkmail function cant use', async () => {
        let cUpdate = Junkmail.updateCustomer();
        await cUpdate.then((result) => {console.log('ITs Disastaaa!!')}).catch((rejectM) => {
            console.log('ITs Error');
        });
    });
});