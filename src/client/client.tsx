const axios = require("axios");
// Client class used to make request to by creating an object which has methods ;

export class Client {
  constructor() {}
  get(url: any) {
    return axios.get(url);
  }
}
