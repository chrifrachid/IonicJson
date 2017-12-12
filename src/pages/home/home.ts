import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlaceData } from '../../providers/place-data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
   items: any;


  constructor(
    public navCtrl: NavController,
    public placesService: PlaceData,
    public navParams: NavParams
   ) {

  }



  ionViewDidLoad(){
    //this.placesService.getData();
    this.placesService.getData().then(data => {
      this.items = data;

    });
  }

}
