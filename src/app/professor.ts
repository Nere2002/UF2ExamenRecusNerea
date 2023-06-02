export class Professor {
  public PROF_DNI!: string;
  public PROF_NOM!: string ;
  public PROF_COGNOM_1!: string ;
  public PROF_COGNOM_2!: string ;
  public PROF_ADRECA!: string ;
  public PROF_CODI_POSTAL!: string ;
  public PROF_POBLACIO!: string ;
  public PROF_COMARCA!: string ;
  public PROF_TELEFON!: string ;
  public PROF_DATA_NAIXEMENT!: string;
  public PROF_CASAT!: number;
  public PROF_E_MAIL!: string ;
  public PROF_CATEGORIA!: string ;
  public PROF_SOU!: number ;
  public PROF_DEPT_CODI!: number ;
  public PROF_DATA_ENTRADA!: string;

  constructor(
    prof_dni: string,
    prof_nom: string ,
    prof_cognom_1: string ,
    prof_cognom_2: string ,
    prof_adreca: string ,
    prof_codi_postal: string ,
    prof_poblacio: string ,
    prof_comarca: string ,
    prof_telefon: string ,
    prof_data_naixement: string,
    prof_casat: number,
    prof_e_mail: string ,
    prof_categoria: string ,
    prof_sou: number ,
    prof_dept_codi: number ,
    prof_data_entrada: string
  ) {
    this.PROF_DNI = prof_dni;
    this.PROF_NOM = prof_nom;
    this.PROF_COGNOM_1 = prof_cognom_1;
    this.PROF_COGNOM_2 = prof_cognom_2;
    this.PROF_ADRECA = prof_adreca;
    this.PROF_CODI_POSTAL = prof_codi_postal;
    this.PROF_POBLACIO = prof_poblacio;
    this.PROF_COMARCA = prof_comarca;
    this.PROF_TELEFON = prof_telefon;
    this.PROF_DATA_NAIXEMENT = prof_data_naixement;
    this.PROF_CASAT = prof_casat;
    this.PROF_E_MAIL = prof_e_mail;
    this.PROF_CATEGORIA = prof_categoria;
    this.PROF_SOU = prof_sou;
    this.PROF_DEPT_CODI = prof_dept_codi;
    this.PROF_DATA_ENTRADA = prof_data_entrada;
  }
}
