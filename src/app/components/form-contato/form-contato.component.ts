import { Component, OnInit } from '@angular/core';
import { ViaCepModel } from 'src/app/models/via-cep-model';
import { ViaCepApiService } from 'src/app/services/via-cep-api.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss']
})
export class FormContatoComponent implements OnInit {

  formContato: ViaCepModel = {};

  showForm: boolean = false;

  constructor(private cepService: ViaCepApiService) { }

  ngOnInit(): void {
  }

  getViaCEP(cep:any) {
    console.log(cep);
    this.cepService
      .getCep(cep)
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

}
