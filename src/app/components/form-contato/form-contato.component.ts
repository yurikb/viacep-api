import { Component, OnInit } from '@angular/core';
import { ViaCepApiService } from 'src/app/services/via-cep-api.service';

@Component({
  selector: 'app-form-contato',
  templateUrl: './form-contato.component.html',
  styleUrls: ['./form-contato.component.scss'],
})
export class FormContatoComponent implements OnInit {
  constructor(private cepService: ViaCepApiService) {}

  ngOnInit(): void {}

  getViaCEP(cep: any) {
    this.cepService.getCep(cep).subscribe((response) => {
      console.log(response);
    });
  }
}
