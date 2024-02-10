import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    // Fetch initial data if needed
    this.onTabClick(2);
  }

  tabIndex: any;
  onTabClick(index: number) {
    this.tabIndex = index;
  }
}