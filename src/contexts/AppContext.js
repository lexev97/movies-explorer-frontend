import React, { useState } from 'react';

const AppContext = React.createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  movies: [],
  getMovies: () => {},
  isLoading: false,
  onIsLoading: () => {},
  offIsLoading: () => {},
  searchResultsMsg: null,
  getSearchResultsMsg: () => {},
  foundMovies: [],
  getFoundMovies: () => {},
  foundSavedMovies: [],
  getFoundSavedMovies: () => {},
  removeFromFoundSavedMovies: () => {},
  renderedCards: [],
  getRenderedCards: () => {},
  updateRenderedCards: () => {},
  clearRenderedCards: () => {},
  userInfo: {},
  getUserInfo: () => {},
  clearUserInfo: () => {},
  savedMovies: [],
  getSavedMovies: () => {},
  addToSavedMovies: () => {},
  removeFromSavedMovies: () => {},
});

export const AppContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchResultsMsg, setSearchResultsMsg] = useState(null);
  const [foundMovies, setFoundMovies] = useState([]);
  const [foundSavedMovies, setFoundSavedMovies] = useState([]);
  const [renderedCards, setRenderedCards] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    setMovies([]);
    setSearchResultsMsg(null);
    setFoundMovies([]);
    setRenderedCards([]);
    setSavedMovies([]);
    setUserInfo({});
  };

  const getMovies = (movies) => {
    setMovies(movies);
  };

  const onIsLoading = () => {
    setIsLoading(true);
  };
  const offIsLoading = () => {
    setIsLoading(false);
  };

  const getSearchResultsMsg = (msg) => {
    setSearchResultsMsg(msg);
  };

  const getFoundMovies = (searchResult) => {
    setFoundMovies(searchResult);
  };

  const getRenderedCards = (cardSet) => {
    setRenderedCards(cardSet);
  };
  const updateRenderedCards = (additionalCardSet) => {
    setRenderedCards((prevState) => [...prevState, ...additionalCardSet]);
  };
  const clearRenderedCards = () => {
    setRenderedCards([]);
  };

  const getUserInfo = (userInfo) => {
    setUserInfo((prevState) => ({ ...prevState, ...userInfo }));
  };

  const clearUserInfo = () => {
    setUserInfo({});
  };

  const getSavedMovies = (movies) => {
    setSavedMovies(movies);
  };

  const getFoundSavedMovies = (movies) => {
    setFoundSavedMovies(movies);
  };
  const removeFromFoundSavedMovies = (movieId) => {
    setFoundSavedMovies((prevState) =>
      prevState.filter((item) => item.movieId !== movieId)
    );
  };
  const addToSavedMovies = (movie) => {
    setSavedMovies((prevState) => {
      return [...prevState, movie];
    });
  };
  const removeFromSavedMovies = (movieId) => {
    setSavedMovies((prevState) =>
      prevState.filter((item) => item.movieId !== movieId)
    );
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        movies: movies,
        getMovies: getMovies,
        isLoading: isLoading,
        onIsLoading: onIsLoading,
        offIsLoading: offIsLoading,
        searchResultsMsg: searchResultsMsg,
        getSearchResultsMsg: getSearchResultsMsg,
        foundMovies: foundMovies,
        getFoundMovies: getFoundMovies,
        removeFromFoundSavedMovies: removeFromFoundSavedMovies,
        foundSavedMovies: foundSavedMovies,
        getFoundSavedMovies: getFoundSavedMovies,
        renderedCards: renderedCards,
        getRenderedCards: getRenderedCards,
        updateRenderedCards: updateRenderedCards,
        clearRenderedCards: clearRenderedCards,
        userInfo: userInfo,
        getUserInfo: getUserInfo,
        clearUserInfo: clearUserInfo,
        savedMovies: savedMovies,
        getSavedMovies: getSavedMovies,
        addToSavedMovies: addToSavedMovies,
        removeFromSavedMovies: removeFromSavedMovies,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
