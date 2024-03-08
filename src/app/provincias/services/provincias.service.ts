import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {
  private _provincias:string[]=['Esmeraldas','Manabi','Santa Elena','Guayas','El Oro','Carchi','Imbabura','Pichincha','Santo Domingo'];
  
  get Get_Provincias():string[]{
    return[...this._provincias] ;
  }
  constructor() { }
}
