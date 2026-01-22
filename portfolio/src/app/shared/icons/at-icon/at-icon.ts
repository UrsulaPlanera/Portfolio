import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-at-icon',
  imports: [],
  templateUrl: './at-icon.html',
  styleUrl: './at-icon.css',
})
export class AtIcon {

  @Input() tamanio : number = 24;
  @Input() color : string = "ffffff";

}
