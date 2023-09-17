import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA, columns, empresas, medidas, medidores, productos, tipos } from './constantes';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medidores';

  columns = columns

  data: Observable<any>;
  reorderable: boolean = true;
  loadingIndicator: boolean = true;

  empresas = empresas;
  productos = productos;
  tipos = tipos
  medidas = medidas
  medidores = medidores

  codigo = '';
  nombre = '';

  filtros = {
    empresa: '',
    producto: '',
    codigo: '',
    nombre: '',
    tipo: '',
    unidad_medida: '',
    tipo_medidor: '',
  }


  public data_copy = ELEMENT_DATA

  dataSource = new MatTableDataSource(this.data_copy);

  constructor(public dialog: MatDialog) {}

  openDialog(element: any): void {

    const dialogRef = this.dialog.open(AddCustomerComponent,{data: {datos: element},
      width: '1100px',disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });

  }


  applyFilter(filterValue: any) {
    filterValue.target.value = filterValue.target.value.trim(); // Remove whitespace
    filterValue.target.value = filterValue.target.value.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue.target.value;
  }

  changeSelect(select: string) {
    this.dataSource.filter = select;
  }

  eliminarDato(elemento: any) {
    this.dataSource.data = this.dataSource.data.filter(dato => dato.id !== elemento.id)
  }

  selectBtn(parameter: any, event: any) {
    const target = event.target.innerText;
    console.log(parameter, target);
  }

  edit() {
    console.log('edit')
  }

  displayCounter(pepe: any) {
    console.log(pepe)
  }

  buscar() {
    console.log('Datos ', this.data_copy)

    console.log('Filtros: ', this.filtros);

  }
}