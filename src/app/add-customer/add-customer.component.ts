import { Component, EventEmitter, Inject, OnInit, Output, VERSION, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  public breakpoint: number; // Breakpoint observer code
  public fname: string = `Ramesh`;
  public lname: string = `Suresh`;
  public addCusForm: FormGroup;
  datos: any;

  data_copy = ELEMENT_DATA
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  columns = [
    { prop: 'acciones', name: 'Acciones' },
    { prop: 'empresa', name: 'Empresa' },
    { prop: 'codigo', name: 'TIpo' },
    { prop: 'nombre', name: 'Nmbre' },
    { prop: 'unidad_medida', name: 'Unidad medida' },
    { prop: 'tipo_medidor', name: 'Tipo medidor' }

  ];


  wasFormChanged = false;

  controlTipos = new FormControl('');
  controlMedidas = new FormControl('');
  controlSistemas = new FormControl('');
  filtered_tipos: Observable<string[]>;
  filtered_medidas: Observable<string[]>;
  filtered_sistemas: Observable<string[]>;


  empresas = [ 'empresa1', 'empresa2', 'empresa3']

  tipos = ['tipo1', 'tipo2', 'tipo3'];
  medidas = ['medidas1', 'medidas2', 'medidas3'];
  sistemas = ['sistemas1', 'sistemas2', 'sistemas3'];

  datos_empresa = 'aaaaaa'

  codigo = '';
  nombre = '';
  empresa = '';
  tipo_medicion = '';
  unidad_medida = '';
  tipo_medidor = '';
  descripcion = '';
  codigo_instantaneo = '';
  codigo_diario_horario = '';
  orden = 1;
  search = ''
  medidores = [
    {value: '1', viewValue: 'medidor1'},
    {value: '2', viewValue: 'medidor2'},
    {value: '3', viewValue: 'medidas3'},
  ];
  minimo_volumen_flujo = 0
  maximo_volumen_flujo = 0

  dataSource = ELEMENT_DATA;


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) private data: any
    ) {
    this.datos = data.datos;
    if (this.datos) {
      this.codigo = this.datos.codigo
      this.nombre = this.datos.nombre
      this.empresa = this.datos.empresa
      this.tipo_medicion = this.datos.tipo
      this.unidad_medida = this.datos.unidad_medida
      this.tipo_medidor = this.datos.tipo_medidor

    }

    }

  public ngOnInit(): void {
    this.addCusForm = this.fb.group({
      IdProof: null,
      firstname: [this.fname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      lastname: [this.lname, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      email: [null, [Validators.required, Validators.email]],
    });
    this.breakpoint = window.innerWidth <= 600 ? 1 : 2; // Breakpoint observer code

    this.filtered_tipos = this.controlTipos.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_tipos(value || '')),
    );
    this.filtered_medidas = this.controlMedidas.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_medidas(value || '')),
    );
    this.filtered_sistemas = this.controlSistemas.valueChanges.pipe(
      startWith(''),
      map(value => this._filter_sistemas(value || '')),
    );
  }
  private _filter_tipos(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.tipos.filter(tipo => tipo.toLowerCase().includes(filterValue));
  }
  private _filter_medidas(value: string): any {
    const filterValue = value.toLowerCase();
    return this.medidas.filter(medida => medida.toLowerCase().includes(filterValue));
  }
  private _filter_sistemas(value: string): any {
    const filterValue = value.toLowerCase();
    return this.sistemas.filter(sistema => sistema.toLowerCase().includes(filterValue));
  }

  valueChanged(){
    console.log('hola')
  }

  cerrarPopup(): void {
    this.dialog.closeAll();
  }

  // tslint:disable-next-line:no-any
  public onResize(event: any): void {
    this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
  }

  private markAsDirty(group: FormGroup): void {
    group.markAsDirty();
    // tslint:disable-next-line:forin
    for (const i in group.controls) {
      group.controls[i].markAsDirty();
    }
  }

  formChanged() {
    this.wasFormChanged = true;
  }

}

export interface PeriodicElement {
  empresa: string;
  codigo: string;
  nombre: string;
  tipo: string;
  unidad_medida: string;
  tipo_medidor: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { empresa: 'empresa1', codigo: 'codigo1', nombre: 'nombre1', tipo: 'tipo1', unidad_medida: 'unidadMedida1', tipo_medidor: "tipoMeidor1" },
  { empresa: 'empresa2', codigo: 'codigo2', nombre: 'nombre2', tipo: 'tipo2', unidad_medida: 'unidadMedida2', tipo_medidor: "tipoMeidor2" },

];
