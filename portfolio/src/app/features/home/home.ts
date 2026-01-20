import { Component } from '@angular/core';
import { Socials } from "../../shared/components/socials/socials";
import { Education } from '../../shared/models/education.model';
import { DataService } from '../../shared/services/data/data';
import { WorkExperience } from '../../shared/models/work-experience.interface';
import { ExperienciaLaboral } from "../../shared/components/experiencia-laboral/experiencia-laboral";
import { Estudios } from '../../shared/components/estudios/estudios';

@Component({
  selector: 'app-home',
  imports: [Socials, ExperienciaLaboral, Estudios],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public educationList: Education[] = [];
  public workList: WorkExperience[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getDataEducation().subscribe({next: (data) => {
      // Aquí asignas lo que viene del JSON a tus variables
      this.educationList = data;
    },
    error: (e) => {
      console.log(`No se ha podido recuperar la informacion referida a Educacion correctamente.`)
    }
  });

    this.dataService.getDataWorkExperience().subscribe({
      next: (data) => {
      // Aquí asignas lo que viene del JSON a tus variables
      this.workList = data;
      },
      error: (e) => {
      console.log(`No se ha podido recuperar la informacion referida a Experiencia Laboral correctamente.`)
    }
    });

  }

}
