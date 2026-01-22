import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-briefcase-icon',
  imports: [],
  templateUrl: './briefcase-icon.html',
  styleUrl: './briefcase-icon.css',
})
export class BriefcaseIcon {

  @Input() tamanio : number = 24;
  @Input() color : string = "#ffffff";

}
