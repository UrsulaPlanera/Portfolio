import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../models/education.model';
import { WorkExperience } from '../../models/work-experience.interface';
@Injectable({
  providedIn: 'root',
})

export class DataService {
  // ruta de json
  private jsonEducation = 'data/education.json';
  private jsonWorkExperience= 'data/workExperience.json';

  constructor(private http: HttpClient) { }

  getDataEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(this.jsonEducation);
  }

  getDataWorkExperience(): Observable<WorkExperience[]> {
    return this.http.get<WorkExperience[]>(this.jsonWorkExperience);
  }
}
