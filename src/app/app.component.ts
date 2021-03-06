import { Component } from '@angular/core';

import { Hike } from './shared/hike';
import { HikeService } from './hike/hike.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hikes: Hike[];
  constructor(private _hikeService: HikeService) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // this.hikes = this._hikeService.getHikes();
    this._hikeService.getHikesFromAPI()
                     .subscribe(
                                res => this.hikes = res,
                                err => console.error(err.status)
                      );
    console.log(this.hikes);
  }
}
