const path = require('path');
const fs = require('fs');

//---Junk Script---//

const dir = '/Users/itopplus/Downloads/postoffice/test';
const newjunk = 'Mailbox-JunkReport-Status=1\r\n';

const MSF1 = 'MailBox-SpamFilteringStatus=1\r\n';
const MSF2 = 'MailBox-SpamFilteringAction-Low=junk\r\n';
const MSF3 = 'MailBox-SpamFilteringData-Low=\\Inbox\r\n';
const MSF4 = 'MailBox-SpamFilteringAction-Medium=junk\r\n';
const MSF5 = 'MailBox-SpamFilteringData-Medium=\\Inbox\r\n';
const MSF6 = 'MailBox-SpamFilteringAction-High=junk\r\n';
const MSF7 = 'MailBox-SpamFilteringData-High=\\Inbox\r\n';

function getDirectories(dir) {
    return fs.readdirSync(dir)
        .filter(dirname => fs.lstatSync(path.join(dir, dirname)).isDirectory())
}

let userDir = new getDirectories(dir);
userDir.forEach((userdir) => {
    fs.readFile(dir + '/' + userdir + '/' + 'postoffice.sys', 'utf-8', (err, postoffice) => {
        if (err) {
            // console.log(err)
        }
        let pArray = postoffice;
        let array = pArray.replace(/\nMailbox-JunkReport-Status.*.\r/gm, '\n\r');
        fs.writeFile(dir + '/' + userdir + '/' + 'postoffice.sys', array, 'utf-8', (err) => {
            if (err) {
                // console.log(err)
            }
            fs.appendFile(dir + '/' + userdir + '/' + 'postoffice.sys', newjunk, (err) => {
                if (err) {
                    console.log(err);
                }
                console.log('Mailbox-JunkReport-Status of ' + userdir + ' already change to 1');
            });
        });
    });
    fs.readdir(dir + '/' + userdir + '/' + 'MAILBOXES', 'utf-8', (err, filename) => {
        if (err) {
            // console.log(err);
        }
        for (let i = 0, len = filename.length; i < len; i++) {

            let match = filename[i].match(/.*.SYS/);
            if (match != null) {
                fs.readFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, 'utf-8', (err, dataUser) => {
                    if (err) {
                        // console.log(err);
                    }
                    let sArray = dataUser;
                    let array = sArray.replace(/\nMailBox-SpamFiltering.*.\r/gm, '\n\r');

                    fs.writeFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, array, 'utf-8', (err) => {
                        if (err) {
                            //
                        }
                        fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF1, (err) => {
                            if (err) { console.log(err); }
                            fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF2, (err) => {
                                if (err) { console.log(err); }
                                fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF3, (err) => {
                                    if (err) { console.log(err); }
                                    fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF4, (err) => {
                                        if (err) { console.log(err); }
                                        fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF5, (err) => {
                                            if (err) { console.log(err); }
                                            fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF6, (err) => {
                                                if (err) { console.log(err); }
                                                fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF7, (err) => {
                                                    if (err) { console.log(err); }

                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });

            }
        }
    });
});

//-----------------//

