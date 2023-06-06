import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ola-app';

  selectedCab: any = {};

  tabs: any[] = [
    {
      slug: 'daily-rides',
      label: 'Daily Rides',
    },
    {
      slug: 'outstation',
      label: 'Outstation',
    },
    {
      slug: 'rentals',
      label: 'Rentals',
    },
  ];
  activeTab: string = 'daily-rides';
  activeCab: string = '';

  cabs: any[] = [
    {
      icon: 'assets/images/v1/cabs/sl/ic_auto@2x.png',
      name: 'Auto',
      desc: 'Get an auto at your doorstep',
      duration: '5 min',
      slug: 'auto',
      fare: 280.8,
      currency: 'INR',
    },
    {
      icon: 'assets/images/v1/cabs/sl/ic_mini@2x.png',
      name: 'Mini',
      desc: 'Comfy hatchbacks at pocket-friendly fares',
      duration: '3 min',
      slug: 'mini',
      fare: 450.0,
      currency: 'INR',
    },
    {
      icon: 'assets/images/v1/cabs/sl/ic_bike@2x.png',
      name: 'Bike',
      desc: 'Zip through traffic at affordable fares',
      duration: '2 min',
      slug: 'bike',
      fare: 70.9,
      currency: 'INR',
    },
    {
      icon: 'assets/images/v1/cabs/sl/ic_prime@2x.png',
      name: 'Prime Sedan',
      desc: 'Sedans with free wifi and top drivers',
      duration: '3 min',
      slug: 'prime-sedan',
      fare: 1880.12,
      currency: 'INR',
    },
  ];

  changeTab(slug: string) {
    this.activeTab = slug;
  }

  changeCab(slug: string) {
    this.activeCab = slug;
    this.selectedCab = this.getDataByAttr(this.cabs, 'slug', slug);
  }

  getDataByAttr(arr: any[], attr: string, value: any) {
    var index = arr.findIndex((x) => x[attr] === value);
    return arr[index];
  }
}
