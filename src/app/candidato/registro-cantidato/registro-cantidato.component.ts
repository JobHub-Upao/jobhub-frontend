import { Component, inject } from '@angular/core';
import { CandidatoService } from '../../services/candidato.service';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CandidatoRequest } from '../../models/candidato-request.model';

@Component({
  selector: 'app-registro-cantidato',
  templateUrl: './registro-cantidato.component.html',
  styleUrl: './registro-cantidato.component.css'
})
export class RegistroCantidatoComponent {

  private candidatoService = inject(CandidatoService);
  private formBuilder = inject(NonNullableFormBuilder);

  candidatoForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      profesion: ['', Validators.required],
      email: ['', Validators.required],
  });

  get nombreField(){
    return this.candidatoForm.value.nombre;
  }

  get profesionField(){
    return this.candidatoForm.value.profesion;
  }

  get emailField(){
    return this.candidatoForm.value.email;
  }

  registerCandidato(): void{

    const candidatoRequest: CandidatoRequest= {
     nombre : this.candidatoForm.value.nombre,
     profesion : this.candidatoForm.value.profesion,
     email : this.candidatoForm.value.email,

    };

    console.log(candidatoRequest);
    
    this.candidatoService.create(candidatoRequest).subscribe({
      next: (data)=>{
        console.log(data);
        
      },error:(e)=> console.error(e)
    });
    //console.log(this.candidatoForm.value);
  }

}
