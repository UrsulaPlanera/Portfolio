
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Education } from '../../models/education.model';
import { WorkExperience } from '../../models/work-experience.interface';
import  education  from '../../../../../public/data/education.json'
import  workExperience  from '../../../../../public/data/workExperience.json'

@Injectable({
  providedIn: 'root',
})

export class DataService {
  // ruta de json
  private jsonEducation = 'data/education.json';
  private jsonWorkExperience= 'data/workExperience.json';

  constructor() { }

  getDataEducation(): Observable<Education[]> {
    return of(education);
  }

  getDataWorkExperience(): Observable<WorkExperience[]> {
    return of(workExperience);
  }
}
