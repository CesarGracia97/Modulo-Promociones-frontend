import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvinciasService } from '../../services/provincias.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  miForm:FormGroup = this.fb.group({
    provincia:['',Validators.required],
    //ciudad:['',Validators.required],
    //sector:['',Validators.required],
    //subsector:['',Validators.required]
  });
  
  provincias:string[]=[];
  constructor(private ProvinciasSvc:ProvinciasService , private fb: FormBuilder) { }

  ngOnInit(){
    this.provincias =this.ProvinciasSvc.Get_Provincias;
  }

  guardar(){
    console.log('Funcion Guardar', this.miForm.value)
  }

}
