import { Component, Input } from '@angular/core';
import { Education } from '../../models/education.model';
import { WithoutData } from '../without-data/without-data';

@Component({
  selector: 'app-estudios',
  imports: [WithoutData],
  templateUrl: './estudios.html',
  styleUrl: './estudios.css',
})
export class Estudios {

  @Input() public listaEstudios: Education[] = [];

}
