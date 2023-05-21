import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private autenticacionService: AutenticacionService, private ruta: Router ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId: [''],
        deviceType: [''],
        notificationToken: ['']
      })
    })
  }

  ngOnInit(): void {
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onEnviar(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.autenticacionService.iniciarSesion(this.form.value).subscribe(data => {
        console.log("Data:" + JSON.stringify(data));
        this.ruta.navigate(['/portfolio']);
      }, error => {
        console.log(error);
      });
    }
  }

}
