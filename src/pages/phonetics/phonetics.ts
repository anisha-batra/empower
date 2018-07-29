import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phonetics',
  templateUrl: 'phonetics.html',
})
export class PhoneticsPage {

  userText:String;
  phonetics:String[];
  phoneticValuesNATO = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliet',
    K: 'King',
    L: 'Lincoln',
    M: 'Mary',
    N: 'New York',
    O: 'Ocean',
    P: 'Peter',
    Q: 'Queen',
    R: 'Roger',
    S: 'Sugar',
    T: 'Thomas',
    U: 'Union',
    V: 'Victor',
    W: 'William',
    X: 'X-Ray',
    Y: 'Young',
    Z: 'Zero'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  } 

  onUserTextInput() {
    this.phonetics = [];
    for (var i=0; i<this.userText.length; i++) {
      var userChar = this.userText.charAt(i).toUpperCase();
      if (userChar in this.phoneticValuesNATO) {
        var phoneticValue = this.phoneticValuesNATO[userChar];
        this.phonetics.push(userChar + ' - ' + phoneticValue);
      } else {
        this.phonetics.push(userChar);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneticsPage');
  }

}
