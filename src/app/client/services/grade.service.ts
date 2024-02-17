import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Grade } from '../models/grade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GradeService {
  apiUrl = 'http://localhost:3000/grade';
  http = inject(HttpClient);

  constructor() {}
  // Get all Grades
  getAllGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(this.apiUrl);
  }

  // Get Grade by id
  getGrade(id: number): Observable<Grade> {
    return this.http.get<Grade>(this.apiUrl + `/${id}`);
  }

  // Persist new Grade
  createGrade(data: Grade): Observable<Grade> {
    return this.http.post<Grade>(this.apiUrl, data);
  }

  // UpdateGrade by id
  updateGrade(id: number, data: Grade): Observable<Grade> {
    return this.http.put<Grade>(this.apiUrl + `/${id}`, data);
  }

  // Delete Grade dy id
  deleteGrade(id: number): Observable<Object> {
    return this.http.delete<Object>(this.apiUrl + `/${id}`);
  }
}
