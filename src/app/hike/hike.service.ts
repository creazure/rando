import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

import { Hike } from '../shared/hike';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {

  private hikesUrl = 'app/api/hikes.json';  // URL to web api

  constructor(private _http: Http) {

  }

  // getHikes() {
        //   return this.hikes;
        // }

  getHikesFromAPI() {
    return this._http.get(this.hikesUrl)
                     .do(x => console.log(x))
                     .map(hikes => hikes.json());
  }
}
