const fs = require('fs');
const path = require('path');

const oldjunk = 'Mailbox-JunkReport-Status=0';
const newjunk = 'Mailbox-JunkReport-Status=1';

const MSF1 = 'MailBox-SpamFilteringStatus=1';
const MSF2 = '\nMailBox-SpamFilteringAction-Low=junk';
const MSF3 = '\nMailBox-SpamFilteringData-Low=\\Inbox';
const MSF4 = '\nMailBox-SpamFilteringAction-Medium=junk';
const MSF5 = '\nMailBox-SpamFilteringData-Medium=\\Inbox';
const MSF6 = '\nMailBox-SpamFilteringAction-High=junk';
const MSF7 = '\nMailBox-SpamFilteringData-High=\\Inbox';




class Junkmail {

    getDirectories(dir) {
        return new Promise((resolve, reject) => {
            return fs.readdirSync(dir)
                .filter(dirname => fs.lstatSync(path.join(dir, dirname)).isDirectory())
        });
    }

    updateCustomer(dir) {
        return new Promise((resolve, reject) => {
            fs.readdir(dir, (err, dirname) => {
                if (err) {
                    reject(undefined);
                }
                dirname.forEach((userdir) => {
                    fs.readFile(dir + '/' + userdir + '/' + 'postoffice.sys', 'utf-8', (err, postoffice) => {
                        if (err) {
                            //
                        }
                        let pArray = postoffice;
                        let array = pArray.replace(/\nMailbox-JunkReport-Status.*.\r/gm, '');
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
                            //
                        }
                        for (let i = 0, len = filename.length; i < len; i++) {

                            let match = filename[i].match(/.*.SYS/);
                            if (match != null) {
                                fs.readFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, 'utf-8', (err, dataUser) => {
                                    if (err) {
                                        //
                                    }
                                    let sArray = dataUser;
                                    let array = sArray.replace(/\nMailBox-SpamFiltering.*./gm, '');

                                    fs.writeFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, array, 'utf-8', () => {

                                        fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF1, (err) => {
                                            if (err) {  //
                                            }
                                            fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF2, (err) => {
                                                if (err) { //
                                                }
                                                fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF3, (err) => {
                                                    if (err) { //
                                                    }
                                                    fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF4, (err) => {
                                                        if (err) { //
                                                        }
                                                        fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF5, (err) => {
                                                            if (err) { //
                                                            }
                                                            fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF6, (err) => {
                                                                if (err) { //
                                                                }
                                                                fs.appendFile(dir + '/' + userdir + '/' + 'MAILBOXES' + '/' + match, MSF7, (err) => {
                                                                    if (err) { //
                                                                    }
                                                                    resolve(true);
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

            });


        });
    }

}
module.exports = new Junkmail();