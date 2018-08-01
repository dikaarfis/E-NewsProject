import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  pages = [
    { pageName: 'NewsPage', title:'Hot News', icon:'book', id:'newsTab'},
    { pageName: 'PopulerPage', title:'Populer', icon:'information-circle', id:'populerTab'},
    { pageName: 'HumorPage', title:'Humor', icon:'star', id:'humorTab'},
    { pageName: 'VideoPage', title:'Video', icon:'play', id:'videoTab'},
  ];

  selectedTab = 0;

  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCrtl:AlertController) {
  }

  onTabSelect(ev:any) {
    if(ev.index === 9){
      let alert = this.alertCrtl.create({
        title:'Secret Page !',
        message:'Are You Sure ?',
        buttons: [
          {
            text:'No',
            handler: () => {
              this.superTabs.slideTo(this.selectedTab);
            }
          },{
            text:'Yes',
            handler: () => {
              this.selectedTab = ev.index;
            }
          }
        ]
      });
      alert.present();
    } else{
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    }
  }

}
