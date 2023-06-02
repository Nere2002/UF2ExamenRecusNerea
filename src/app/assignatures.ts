export class Assignatures {
  public ASSIG_CODI!: string;
  public ASSIG_NOM!: string;
  public ASSIG_CREDITS!: number ;
  public ASSIG_DNI_PROFESSOR_RESP!: string;
  public ASSIG_SEMESTRE!: number ;
  public ASSIG_CURS!: number ;
  public ASSIG_TIPUS!: string ;
  public ASSIG_CARRERA!: string ;

  constructor(
    assig_codi: string,
    assig_nom: string ,
    assig_credits: number ,
    assig_dni_professor_resp: string ,
    assig_semestre: number ,
    assig_curs: number ,
    assig_tipus: string ,
    assig_carrera: string
  ) {
    this.ASSIG_CODI = assig_codi;
    this.ASSIG_NOM = assig_nom;
    this.ASSIG_CREDITS = assig_credits;
    this.ASSIG_DNI_PROFESSOR_RESP = assig_dni_professor_resp;
    this.ASSIG_SEMESTRE = assig_semestre;
    this.ASSIG_CURS = assig_curs;
    this.ASSIG_TIPUS = assig_tipus;
    this.ASSIG_CARRERA = assig_carrera;
  }
}
