import * as fs from 'node:fs';

fetch('http://localhost:3000/api/docs/json')
  .then(res => res.json())
  .then(res => {
    fs.writeFileSync('api-specs/openapi.json', JSON.stringify(res));
  })
  .catch(() => {
    console.error('Back-end might not be running');
  });
