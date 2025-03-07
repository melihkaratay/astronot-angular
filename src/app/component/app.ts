import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../view/app.html'
})
export class App {
  title = 'Astronot 👩‍🚀 Angular';
  menu1 = 'Home';
  menu1url = '/';
  menu2 = 'Blog';
  menu2url = '/blog';
  menu3 = 'Google';
  menu3url = 'https://www.google.com.tr';
  menu4 = 'Pro';
  menu4url = 'https://astronot.axcora.com';
  built = 'built with';
  ng = 'angular';
  ngurl = 'https://angular.io';
  astronot = 'astronot';
  astronoturi = 'https://astronot.axcora.com';
}
