const express = require('express');
const compress = require('compression');
const expressLayouts = require('express-ejs-layouts');
// var livereload = require('connect-livereload');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')('Junkmail');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(compress());
app.use(expressLayouts);
//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// app.use(livereload({port: 35729}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(path.resolve('./node_modules')));

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});


//---Junk Script---//

// const testDir = '/Users/itopplus/Downloads/postoffice';
const dir = '/Users/itopplus/Downloads/postoffice/Postoffices';

const oldjunk = 'Mailbox-JunkReport-Status=0';
const newjunk = 'Mailbox-JunkReport-Status=1';

const MSF1 = '\nMailBox-SpamFilteringStatus=1';
const MSF2 = '\nMailBox-SpamFilteringAction-Low=junk';
const MSF3 = '\nMailBox-SpamFilteringData-Low=\\Inbox';
const MSF4 = '\nMailBox-SpamFilteringAction-Medium=junk';
const MSF5 = '\nMailBox-SpamFilteringData-Medium=\\Inbox';
const MSF6 = '\nMailBox-SpamFilteringAction-High=junk';
const MSF7 = '\nMailBox-SpamFilteringData-High=\\Inbox';




fs.readdir(dir, (err, dirname) => {
    if (err) {
        //
    }
    dirname.forEach((userdir) => {
        fs.readFile(dir + '/' + userdir + '/' + 'postoffice.sys', 'utf-8', (err, postoffice) => {
            if (err) {
                // console.log(err)
            }
            let array = postoffice.replace(oldjunk, newjunk);
            fs.writeFile(dir + '/' + userdir + '/' + 'postoffice.sys', array, 'utf-8', (err) => {
                if (err) {
                    // console.log(err)
                }
                console.log('Mailbox-JunkReport-Status of '+ userdir +' already change to 1');
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
                        let array = sArray.replace(/\nMailBox-SpamFiltering.*./gm, '');

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
});
//-----------------//

module.exports = app;
