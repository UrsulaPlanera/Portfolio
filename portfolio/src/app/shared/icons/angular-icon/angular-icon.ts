import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-angular-icon',
  imports: [],
  templateUrl: './angular-icon.html',
  styleUrl: './angular-icon.css',
})
export class AngularIcon {
  @Input() tamanio : number = 100;
  @Input() color : string = "#fff";
}
