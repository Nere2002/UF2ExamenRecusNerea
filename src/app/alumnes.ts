export class Alumnes {
  public ALUMN_DNI!: string;
  public ALUMN_NOM!: string ;
  public ALUMN_COGNOM_1!: string ;
  public ALUMN_COGNOM_2!: string ;
  public ALUMN_ADRECA!: string ;
  public ALUMN_CODI_POSTAL!: string;
  public ALUMN_POBLACIO!: string;
  public ALUMN_COMARCA!: string ;
  public ALUMN_TELEFON!: string ;
  public ALUMN_DATA_NAIXEMENT!: string;
  public ALUMN_CASAT!: number;
  public ALUMN_E_MAIL!: string | null;
  constructor(
    alumn_dni: string,
    alumn_nom: string ,
    alumn_cognom_1: string ,
    alumn_cognom_2: string ,
    alumn_adreca: string,
    alumn_codi_postal: string ,
    alumn_poblacio: string ,
    alumn_comarca: string ,
    alumn_telefon: string ,
    alumn_data_naixement: string,
    alumn_casat: number,
    alumn_e_mail: string|null
  ){this.ALUMN_DNI = alumn_dni;
    this.ALUMN_NOM = alumn_nom;
    this.ALUMN_COGNOM_1 = alumn_cognom_1;
    this.ALUMN_COGNOM_2 = alumn_cognom_2;
    this.ALUMN_ADRECA = alumn_adreca;
    this.ALUMN_CODI_POSTAL = alumn_codi_postal;
    this.ALUMN_POBLACIO = alumn_poblacio;
    this.ALUMN_COMARCA = alumn_comarca;
    this.ALUMN_TELEFON = alumn_telefon;
    this.ALUMN_DATA_NAIXEMENT = alumn_data_naixement;
    this.ALUMN_CASAT = alumn_casat;
    this.ALUMN_E_MAIL = alumn_e_mail;}
}
