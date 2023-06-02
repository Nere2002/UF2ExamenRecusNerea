export class Departament {
  public DEPT_CODI!: number;
  public DEPT_NOM!: string ;
  public DEPT_UBICACIO!: string ;
  public DEPT_TELEFON!: string ;
  public DEPT_PROF_DNI!: string ;

  constructor(
    dept_codi: number,
    dept_nom: string ,
    dept_ubicacio: string ,
    dept_telefon: string ,
    dept_prof_dni: string
  ) {
    this.DEPT_CODI = dept_codi;
    this.DEPT_NOM = dept_nom;
    this.DEPT_UBICACIO = dept_ubicacio;
    this.DEPT_TELEFON = dept_telefon;
    this.DEPT_PROF_DNI = dept_prof_dni;
  }
}
