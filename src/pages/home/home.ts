import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    this.items = [
      { title: 'hi', description: 'here You are' },
      { title: 'hello', description: 'Hey' },
      { title: 'hey', description: 'jyane' }
    ]
  }

  addItem(){
    alert('Add Item works')
  }

  viewItem(item){
    alert('This is your item' + JSON.stringify(item) )
  }
}
