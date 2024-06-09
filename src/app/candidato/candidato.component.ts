import { Component, inject } from '@angular/core';
import { CandidatoService } from '../services/candidato.service';
import { CandidatoResponse } from '../models/candidato-response.model';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrl: './candidato.component.css'
})
export class CandidatoComponent {

  candidatos: CandidatoResponse[] =[];

  private candidatoService = inject(CandidatoService);

  ngOnInit(): void {   
    console.log("ngOnInit")
    this.getAllCandidatos();
  }

  getAllCandidatos(){
    this.candidatoService.getAllCandidatos().subscribe({
      next: (data)=>{
        //console.log(data);
        this.candidatos = data;
      },error:(e)=> console.error(e)
    });
  }

 

}
