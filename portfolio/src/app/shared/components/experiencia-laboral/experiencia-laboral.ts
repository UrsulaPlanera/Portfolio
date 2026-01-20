import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../models/work-experience.interface';
import { WithoutData } from '../without-data/without-data';

@Component({
  selector: 'app-experiencia-laboral',
  imports: [WithoutData],
  templateUrl: './experiencia-laboral.html',
  styleUrl: './experiencia-laboral.css',
})
export class ExperienciaLaboral {
  
  @Input() public listaWorkExp: WorkExperience[] = [];

}
