"use strict";

const fs = require('fs');

fs.readFile('./triangle.json','utf8',(e,d) => {
  if (e) {
    console.error(e);
  } else {
    const data = JSON.parse(d);
    let max = data.map(r => r[0]).reduce((a,b) => a + b, 0);
    const paths = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (j === 0) {
          paths.push([i]);
        } else {
          paths[i].push(j);
        }
        }
      }

    fs.writeFile('./test.json', JSON.stringify(paths), (e,d) => {
      if (e) {
        console.log(e);
      }
    })
  }
});
