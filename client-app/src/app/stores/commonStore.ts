import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/serverError";

export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = window.localStorage.getItem('jwt');
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    // This reaction is only called after token changes
    reaction(
      () => this.token,
      token => {
        if (token) {
          window.localStorage.setItme('jwt', token)
        } else {
          window.localStorage.remoeItem('jwt')
        }
      }
    )
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  }

  setToken = (token: string | null) => {
    if (token) window.localStorage.setItem('jwt', token);
    this.token = token;
  }

  setAppLoaded = () => {
    this.appLoaded = true;
  }
}
