import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})

export class HomePage {


  swipeType : String  = "Try to Swipe";

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.initParam();
  }


  initParam(){

  }

 
  /**
   * 
   * @param event 
   */
  onSwipeUp($event){
    this.swipeType = "Swipe Up Ok";
  }
  /**
   * 
   * @param event 
   */
  onSwipeDown($event){
    this.swipeType = "Swipe Down Ok";
  }
  /**
   * 
   * @param event 
   */
  onSwipeLeft($event){
     this.swipeType = "Swipe Left Ok";
  }
  /**
   * 
   * @param event 
   */
  onswipeRight($event){
     this.swipeType = "Swipe Right Ok";
  }
 


}
