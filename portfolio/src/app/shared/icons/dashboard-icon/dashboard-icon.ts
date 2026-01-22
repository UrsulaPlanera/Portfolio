import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-icon',
  imports: [],
  templateUrl: './dashboard-icon.html',
  styleUrl: './dashboard-icon.css',
})
export class DashboardIcon {

  @Input() tamanio : number = 24;
  @Input() color : string = "#ffffff";

}
