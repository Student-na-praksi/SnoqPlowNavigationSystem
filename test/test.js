import request from 'supertest';

describe('Home Page', () => {
  it('User Authentication', (done) => {
    request('http://127.0.0.1:5000') // replace with your server's URL and port
      .get('/')
      .expect(/<h2>User Authentication<\/h2>/i, done);
  });

//   it('Display paragraph "A veš, da ti verjetno ne veš ..."', (done) => {
//     request('http://localhost:5000') // replace with your server's URL and port
//       .get('/')
//       .expect(/<p>A veš, da ti verjetno ne veš, da jaz vem, da ti uporabljaš naslednji spletni brskalnik\?<\/p>/i, done);
//   });
});