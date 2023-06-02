import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Alumnes } from '../app/alumnes';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  private apiUrl = 'http://localhost:3000/api';
  private apiUrl1 = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getProfessors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/professors`);
  }

  addAlumnVirgenField(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.http.get(`${this.apiUrl1}/virgenSanta`)
        .subscribe(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  getAlumneNaiDE(): Observable<Alumnes> {
    return this.http.get<Alumnes>(`${this.apiUrl1}/naiDE`);
  }
}
