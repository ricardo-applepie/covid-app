const axios = require('axios');

export class Client {
    constructor(){
    }

    get(url:any){
      return axios.get(url); 
    }
}