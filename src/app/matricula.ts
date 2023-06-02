export class Matricula {
  public MATR_ALUM_DNI!: string;
  public MATR_ASSIG_CODI!: string;
  public MATR_CONVOCATORIA!: number;
  public MATR_NOTA!: number ;

  constructor(
    matr_alum_dni: string,
    matr_assig_codi: string,
    matr_convocatoria: number,
    matr_nota: number
  ) {
    this.MATR_ALUM_DNI = matr_alum_dni;
    this.MATR_ASSIG_CODI = matr_assig_codi;
    this.MATR_CONVOCATORIA = matr_convocatoria;
    this.MATR_NOTA = matr_nota;
  }
}
