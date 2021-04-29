const request = require('request'); // "Request" library

const client_id = '583d528feb664d2591ec0db36be20748'; // Your client id
const client_secret = '3a738956a04a477782ecd19af0c9b113'; // Your secret

// your application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

module.exports = (app) => {
  const getToken = (req, res) => {
    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        let token = body.access_token;
        res.json(token)
      }
    });
  }

  app.get("/spotify/token", getToken)
}