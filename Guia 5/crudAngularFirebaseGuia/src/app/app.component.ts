import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Alumno } from './models/alumno';
import { AlumnoService } from './services/alumno.service'

// toastr
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crudAngular';
  //arreglo del tippo alumno con 3 registros almacenados
  alumnoList: Alumno[];

  constructor(
    public alumnoService: AlumnoService,
    public toastr: ToastrService
  ) { }

  ngOnInit() {
    return this.alumnoService.getAlumnos()
      .snapshotChanges().subscribe(item => {
        this.alumnoList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.alumnoList.push(x as Alumno);
        });
      });

      this.resetForm();
  }

  //atributo selecAlumno del tipo Alumno, por lo tanto, puede almacenar un objeto
  /*selectedAlumno: Alumno = { $key: '', name: '', lastname: '', age: 0, direccion:'', telefono: '', correo: ''};
  //un método que no retorna nada “void”, recibe como parámetro una variable del
  //tipo Alumno, para ser asignada al atributo selectAlumno y poder ser mostrado
  // en pantalla.
  openForEdit(alumno: Alumno): void {
    this.selectedAlumno = alumno;
    this.myForm.reset();
  }*/

  onSubmit(alumnoForm: NgForm) {
    if (alumnoForm.value.$key == null)
      this.alumnoService.insertProduct(alumnoForm.value);
    else
      this.alumnoService.updateProduct(alumnoForm.value);

    this.resetForm(alumnoForm);
    this.toastr.success('Operacion exitosa!', 'Alumno registrado');
  }

  onEdit(product: Alumno) {
    this.alumnoService.selectedAlumno = Object.assign({}, product);
  }

  /* 
   Recibe la llave '$key' para eliminar el registro, invocando el metodo 'deleteProduct' del servicio de firebase
   ademas muestra un 'warning' con toastr
*/
  onDelete($key: string) {
    if (confirm('Seguro que quieres eliminarlo?')) {
      this.alumnoService.deleteProduct($key);
      this.toastr.warning('Operacion exitoso!', 'Alumno Removido');
    }
  }

  // Para limpiar el formulario
  resetForm(alumnoForm?: NgForm) {
    if (alumnoForm != null)
    alumnoForm.reset();
    this.alumnoService.selectedAlumno = new Alumno();
  }

}