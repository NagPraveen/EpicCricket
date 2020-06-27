import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.components.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EpicCricket';
  members = [
    { name: "Member 1", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 2", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 3", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 4", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 5", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 6", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 7", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 8", img: "../assets/temp.jpg", role: 'founder' },
    { name: "Member 9", img: "../assets/temp.jpg", role: 'founder' },
  ]
}
