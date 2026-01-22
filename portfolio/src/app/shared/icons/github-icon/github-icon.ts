import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-icon',
  imports: [],
  templateUrl: './github-icon.html',
  styleUrl: './github-icon.css',
})
export class GithubIcon {
@Input() tamanio : number = 24;
  @Input() color : string = "ffffff";
}
