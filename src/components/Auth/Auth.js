import request from "./../../api/spotifyFetch";

let ClientOAuth2 = require('client-oauth2')

class Auth {
  constructor() {
    this.oauth = new ClientOAuth2({
        clientId: 'fb07724a56c446ef95ddae1a0d3d3d0c',
        authorizationUri: 'https://accounts.spotify.com/authorize',
        redirectUri: 'http://localhost:3000/callback',
        scopes: ['user-read-recently-played', 'user-top-read']
      })
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    window.location.href = this.oauth.token.getUri()
  }

  handleAuthentication(uri) {
    return new Promise((resolve, reject) => {
      this.oauth.token.getToken(window.location.href).then(async (data) => {
        this.accessToken = data.accessToken
        this.tokenType = data.tokenType
        this.expiresAt = data.expires

        this.profile = await request.get('/me')

        console.log(this.profile)

        resolve();
      })
    })
  }

  signOut() {
    // clear id token, profile, and expiration
    this.accessToken = null;
    this.profile = null;
    this.expiresAt = null;
  }
}

const auth = new Auth();

export default auth;