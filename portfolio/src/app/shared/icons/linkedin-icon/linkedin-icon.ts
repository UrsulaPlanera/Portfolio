import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-linkedin-icon',
  imports: [],
  templateUrl: './linkedin-icon.html',
  styleUrl: './linkedin-icon.css',
})
export class LinkedinIcon {
@Input() tamanio : number = 24;
  @Input() color : string = "ffffff";
}
