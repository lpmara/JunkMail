# JunkMail
1. **ให้ย้าย Folder ที่ชื่อว่า TEST ออกจาก folder ก่อน
2. แก้ไข path ที่ value 'dir' เป็น path ที่เราต้องการ
3. สั่ง run โปรแกรมที่ app.js โดยพิมพ์ "node app.js"
*** ใช้แก้ค่า ที่อยู่ใน path C:\Program Files (x86)\Email Enable\Config\Postoffices

*** โดยทำทีละ Folder ในแต่ละ folder ทำดังนี้

1. แก้ไขไฟล์ postoffice.sys โดยเพิ่มบรรทัด
Mailbox-JunkReport-Status=1

2. เข้าไปที่ Folder MAILBOXES ของแต่ละ Folder และแก้ไฟไฟล์ ที่เป็น *.SYS ทุกไฟล์ โดยเพิ่ม บรรทัดดังนี้
MailBox-SpamFilteringStatus=1
MailBox-SpamFilteringAction-Low=junk
MailBox-SpamFilteringData-Low=\\Inbox
MailBox-SpamFilteringAction-Medium=junk
MailBox-SpamFilteringData-Medium=\\Inbox
MailBox-SpamFilteringAction-High=junk
MailBox-SpamFilteringData-High=\\Inbox

3. ทำวนจนครบทุก Folder


