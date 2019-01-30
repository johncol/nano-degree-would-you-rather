const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGOUT = 'LOGOUT';

export const AuthActionType = {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
};

const SAVE_USER = 'SAVE_USER';
const SAVE_USER_QUESTION = 'SAVE_USER_QUESTION';
const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER';
const UNSAVE_USER_ANSWER = 'UNSAVE_USER_ANSWER';
const SAVE_ALL_USERS = 'SAVE_ALL_USERS';

export const UserActionType = {
  SAVE_USER,
  SAVE_USER_QUESTION,
  SAVE_USER_ANSWER,
  UNSAVE_USER_ANSWER,
  SAVE_ALL_USERS
};

const SAVE_ALL_QUESTIONS = 'SAVE_ALL_QUESTIONS';
const ADD_QUESTION = 'ADD_QUESTION';
const ANSWER_QUESTION = 'ANSWER_QUESTION';
const UNANSWER_QUESTION = 'UNANSWER_QUESTION';

export const QuestionActionType = {
  SAVE_ALL_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
  UNANSWER_QUESTION
};

const SHOW_LOADER = 'SHOW_LOADER';
const HIDE_LOADER = 'HIDE_LOADER';

export const LoaderActionType = {
  SHOW_LOADER,
  HIDE_LOADER
};
