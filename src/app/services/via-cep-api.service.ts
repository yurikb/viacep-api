import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ViaCepModel } from '../models/via-cep-model';

@Injectable({
  providedIn: 'root'
})
export class ViaCepApiService {

  constructor(private http: HttpClient) { }

  getCep(cep: string) {
    const urlGet = `${environment.urlApiViaCep}${cep}/json`;
    return this.http.get<ViaCepModel>(urlGet);
  }

}
