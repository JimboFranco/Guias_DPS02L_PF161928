import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  //arreglo del tippo alumno con 3 registros almacenados
  alumnoArray: Alumno[] = [
    { id: 1, name: "Alex", lastname: "Campos", age: 35, direccion:"Las margaritas", telefono:"7745-7898", correo:"acamposlex@gmail.com"},
    { id: 2, name: "Maria", lastname: "Lopez", age: 20 , direccion:"Lourdes colon", telefono:"2278-8978", correo:"marlopezia@gmail.com"},
    { id: 3, name: "Juan", lastname: "Castro", age: 25 , direccion:"Chalchuapa", telefono:"7745-7898", correo:"jucatroan@gmail.com"}
  ]
  myForm: FormGroup;
  //atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
  selectedAlumno: Alumno = { id: 0, name: '', lastname: '', age: 0, direccion:'', telefono: '', correo: ''};
  //un método que no retorna nada “void”, recibe como parámetro una variable del
  //tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
  // en pantalla.
  openForEdit(alumno: Alumno): void {
    this.selectedAlumno = alumno;
    this.myForm.reset();
  }
  //método que no retorna nada “void”, NO recibe parámetro, pero realiza dos
  //operaciones agregar / editar, si no hay registro seleccionado se guarda,
  //de lo contrario limpia el atributo selectedAlumno en pantalla. [(ngModel)]
  addOrEdit(): void {
    if (this.selectedAlumno.id === 0) // INSERT
    {
      this.selectedAlumno.id = this.alumnoArray.length + 1;
      this.alumnoArray.push(this.selectedAlumno);
    }
    this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0 , direccion:'', telefono: '', correo: ''};
    this.myForm.reset();
  }
  //método que no retorna nada “void”, NO recibe parámetro, elimina del arreglo el
  //registro, pero antes muestra en pantalla un confirmar, se recorre el arreglo
  //realizando un “filter” para no almacenar el registro seleccionado en el nuevo
  //arreglo “alumnoArray” , por eso ocupados el operador “!=” y luego limpiamos
  //el registro seleccionado.
  delete(): void {
    if (confirm('¿Esta seguro de elimiar el Registro?')) {
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = { id: 0, name: '', lastname: '', age: 0 , direccion:'', telefono: '', correo: ''};
      this.myForm.reset();
    }
  }
}