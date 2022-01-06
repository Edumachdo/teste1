import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistogramaService {

  histogramaUrl='https://ico-fullstack-test.herokuapp.com/v1/histograma';

  constructor(private http:HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.histogramaUrl}`)
  }
}
