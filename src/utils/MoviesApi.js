class MoviesApi {
  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers,
    }).then(res => this._getResponseData(res));
  }
}

const moviesApi = new MoviesApi();

export default moviesApi;
