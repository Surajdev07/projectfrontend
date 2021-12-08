import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8082/api/Categories/list').subscribe(data => {
      this.categories = data;
  }) 

  }
  images = ['https://th.bing.com/th/id/R.bb1177c367367afa163fdd4456f2c116?rik=XFvGhYAYlh79SA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-24%2fVegetable-Wallpapers-Full-HD-62237.jpg&ehk=E8ldwBq0j71CvRF0smRijf1LnAPsLhte7jgmM0VPmyY%3d&risl=&pid=ImgRaw&r=0',
  'https://img.wallpapersafari.com/desktop/1440/900/41/20/oWE9ql.jpg',
  'https://media.tehrantimes.com/d/t/2020/08/14/4/3523687.jpg',
'https://palatablepastime.com/wp-content/uploads/2017/12/saratoga-chips-wide.jpg'];
}
