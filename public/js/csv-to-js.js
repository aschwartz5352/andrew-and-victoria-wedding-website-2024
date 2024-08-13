const fs = require('fs');
const csv = require('csv-parser'); // You may need to install this package: npm install csv-parser

const results = [];

fs.createReadStream('guest-list.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    // Process the data here
    var count = 0;
    var firstGuestCount = 0;
    var mainGuestMap = [];
    results.map(guest => {
        if (guest.tags.includes("First Round Invites")) {
          firstGuestCount++;
          if(guest['first name'].trim().length > 0){
            mainGuestMap.push(guest['first name'] + " " + guest['last name']);
          }
        } else {
          count++;
        }
        // console.log(guest.email);
        // console.log(guest.tags);
        // console.log(guest.tags.includes("First Round Invites"));
        // console.log(guest['first name']);
        // console.log(guest['last name']);
      }
    );
    console.log("First Round Invites: " + firstGuestCount);
    console.log("Second Round Invites: " + count);
    console.log(mainGuestMap);
  });
