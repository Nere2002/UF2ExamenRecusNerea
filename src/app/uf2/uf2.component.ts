import {Component, OnInit} from '@angular/core';
import {ProfessorsService} from "../professors.service";
import { Alumnes } from '../alumnes';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-uf2',
  templateUrl: './uf2.component.html',
  styleUrls: ['./uf2.component.css']
})
export class UF2Component implements OnInit{
  alumnes: any[]=[];
  professors: any[]=[];
  public alumnoConNota10: any;

  constructor(private http: HttpClient, private professorsService: ProfessorsService) {}
//EX1 ---------------------------------------------------
  ngOnInit() {
    this.professorsService.getProfessors().subscribe(
      (data) => {
        this.professors = data;
      },
      (error) => {
        console.error('Error al obtener los profesores: ', error);
      }
    );
    this.naiDe10(); // Llamar a naiDe10() en ngOnInit()

  }
//EX2 ---------------------------------------------------
  addAlumnVirgenField() {
    this.professorsService.addAlumnVirgenField()
      .then(() => {
        console.log('El campo ALUMN_VIRGEN se ha agregado correctamente.');
      })
      .catch((error) => {
        console.error('Error al agregar el campo ALUMN_VIRGEN:', error);
      });
  }

  //EX3 ---------------------------------------------------


  naiDe10() {
    this.http.get<any>('http://localhost:3000/alumnes/nota10').subscribe(
      (response) => {
        this.alumnoConNota10 = response[0]; // Asignar el primer alumno de la respuesta
        console.log(this.alumnoConNota10); // Mostrar la respuesta en la consola para verificar
      },
      (error) => {
        console.error('Error al obtener el alumno con nota 10: ', error);
      }
    );
  }

  //EX4 ---------------------------------------------------



}
