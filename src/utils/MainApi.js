class MainApi {
  constructor() {
    this._baseUrl = 'https://api.ypdiploma.nomoreparties.co';
    // this._baseUrl = 'http://localhost:5000';
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res);
    }
  }

  getUserinfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }

  updateUserInfo(userData) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
      }),
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }

  createUser(userData) {
    return fetch(this._baseUrl + '/signup', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        name: userData.name,
        email: userData.email,
        password: userData.password,
      }),
    }).then((res) => this._getResponseData(res));
  }

  loginUser(userData) {
    return fetch(this._baseUrl + '/signin', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    }).then((res) => this._getResponseData(res));
  }

  logoutUser() {
    return fetch(this._baseUrl + '/signout', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(this._baseUrl + '/movies', {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    }).then((res) => this._getResponseData(res));
  }

  addMovie(movieInfo) {
    return fetch(this._baseUrl + '/movies', {
      method: 'POST',
      headers: this._headers,
      credentials: 'include',
      body: JSON.stringify({
        country: movieInfo.country,
        director: movieInfo.director,
        duration: movieInfo.duration,
        year: movieInfo.year,
        description: movieInfo.description,
        image: movieInfo.image,
        trailerLink: movieInfo.trailerLink,
        nameRU: movieInfo.nameRU,
        nameEN: movieInfo.nameEN,
        thumbnail: movieInfo.thumbnail,
        movieId: movieInfo.movieId,
      }),
    }).then((res) => this._getResponseData(res));
  }

  deleteMovie(movieId) {
    return fetch(this._baseUrl + `/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }
}

const mainApi = new MainApi();

export default mainApi;
