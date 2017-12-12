import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceData {

  constructor(public http: Http) {
  }

// method to pass through json data
  getData(){
      return new Promise(resolve => {
        this.http.get('assets/data.json')
          .subscribe(res => resolve(res.json()));
    });
  }

}
