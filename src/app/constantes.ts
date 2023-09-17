
export interface PeriodicElement {
  id: number;
  empresa: string;
  codigo: string;
  nombre: string;
  tipo: string;
  unidad_medida: string;
  tipo_medidor: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, empresa: 'empresa1', codigo: 'codigo1', nombre: 'nombre1', tipo: 'tipo1', unidad_medida: 'medida1', tipo_medidor: "medidor1" },
  { id: 2, empresa: 'empresa2', codigo: 'codigo2', nombre: 'nombre2', tipo: 'tipo2', unidad_medida: 'medida2', tipo_medidor: "medidor2" },
  { id: 3, empresa: 'empresa3', codigo: 'codigo3', nombre: 'nombre3', tipo: 'tipo3', unidad_medida: 'medida3', tipo_medidor: "medidor3" },
  { id: 4, empresa: 'empresa4', codigo: 'codigo4', nombre: 'nombre4', tipo: 'tipo4', unidad_medida: 'medida4', tipo_medidor: "medidor4" },
  { id: 5, empresa: 'empresa5', codigo: 'codigo5', nombre: 'nombre5', tipo: 'tipo5', unidad_medida: 'medida5', tipo_medidor: "medidor5" },
  { id: 6, empresa: 'empresa6', codigo: 'codigo6', nombre: 'nombre6', tipo: 'tipo6', unidad_medida: 'medida6', tipo_medidor: "medidor6" },

];

export const columns = [
  { prop: 'acciones', name: 'Acciones' },
  { prop: 'empresa', name: 'Empresa' },
  { prop: 'codigo', name: 'TIpo' },
  { prop: 'nombre', name: 'Nmbre' },
  { prop: 'unidad_medida', name: 'Unidad medida' },
  { prop: 'tipo_medidor', name: 'Tipo medidor' }

];

export const empresas = [
  {viewValue: 'Ninguno'},
  {value: '1', viewValue: 'empresa1'},
  {value: '2', viewValue: 'empresa2'},
  { value: '3', viewValue: 'empresa3' },
  { value: '4', viewValue: 'empresa4' },
  { value: '5', viewValue: 'empresa5' },
  {value: '6', viewValue: 'empresa6'},
];

export const productos = [
  {viewValue: 'Ninguno'},
  {value: '1', viewValue: 'prod1'},
  {value: '2', viewValue: 'prod2'},
  {value: '3', viewValue: 'prod3'},
];

export const tipos = [
  {viewValue: 'Ninguno'},
  {value: '1', viewValue: 'tipo1'},
  {value: '2', viewValue: 'tipo2'},
  { value: '3', viewValue: 'tipo3' },
  { value: '4', viewValue: 'tipo4' },
  { value: '5', viewValue: 'tipo5' },
  {value: '6', viewValue: 'tipo6'},
];

export const  medidas = [
  {viewValue: 'Ninguno'},
  {value: '1', viewValue: 'medida1'},
  {value: '2', viewValue: 'medida2'},
  { value: '3', viewValue: 'medida3' },
  { value: '4', viewValue: 'medida4' },
  { value: '5', viewValue: 'medida5' },
  {value: '6', viewValue: 'medida6'},
];

export const medidores = [
  {viewValue: 'Ninguno'},
  {value: '1', viewValue: 'medidor1'},
  {value: '2', viewValue: 'medidor2'},
  {value: '3', viewValue: 'medidas3'},
];
