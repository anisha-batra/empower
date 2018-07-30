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

  userText: String;

  alphabetType: String = 'nato';

  phoneticsNATO: String[];
  phoneticsWesternUnion: String[];
  phoneticsInternational: String[];

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
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-Ray',
    Y: 'Yankee',
    Z: 'Zulu'
  };
  phoneticValuesWesternUnion = {
    A: 'Adams',
    B: 'Boston',
    C: 'Chicago',
    D: 'Denver',
    E: 'Easy',
    F: 'Frank',
    G: 'George',
    H: 'Henry',
    I: 'Ida',
    J: 'John',
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
  phoneticValuesInternational = {
    A: 'Apple',
    B: 'Ball',
    C: 'Cat',
    D: 'Dog',
    E: 'Egg',
    F: 'Fish',
    G: 'Ghost',
    H: 'Hat',
    I: 'Ink',
    J: 'Junk',
    K: 'Kite',
    L: 'Lion',
    M: 'Mouse',
    N: 'Nose',
    O: 'Orange',
    P: 'Pear',
    Q: 'Queen',
    R: 'Rat',
    S: 'Shirt',
    T: 'Table',
    U: 'Umbrella',
    V: 'Violin',
    W: 'Window',
    X: 'Xylophone',
    Y: 'Yatch',
    Z: 'Zebra'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onUserTextInput() {
    this.phoneticsNATO = [];
    this.phoneticsWesternUnion = [];
    this.phoneticsInternational = [];

    for (var i = 0; i < this.userText.length; i++) {
      var userChar = this.userText.charAt(i).toUpperCase();

      if (userChar in this.phoneticValuesNATO) {
        // NATO
        var phoneticValueNATO = this.phoneticValuesNATO[userChar];
        this.phoneticsNATO.push(userChar + ' - ' + phoneticValueNATO);
        // Western Union
        var phoneticValueWesternUnion = this.phoneticValuesWesternUnion[userChar];
        this.phoneticsWesternUnion.push(userChar + ' - ' + phoneticValueWesternUnion);
        // International
        var phoneticValueInternational = this.phoneticValuesInternational[userChar];
        this.phoneticsInternational.push(userChar + ' - ' + phoneticValueInternational);
      } else {
        // NATO
        this.phoneticsNATO.push(userChar);
        // Western Union
        this.phoneticsWesternUnion.push(userChar);
        // International
        this.phoneticsInternational.push(userChar);
      }
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneticsPage');
  }

}
