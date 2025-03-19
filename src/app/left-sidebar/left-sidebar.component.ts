import { Component } from '@angular/core';
import {navbarData} from './nav-data';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})

export class LeftSidebarComponent {
  navData = navbarData;
  constructor() {
  }
}
