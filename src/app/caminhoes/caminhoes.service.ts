import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Caminhao {
  id: number;
  anoFabricacao: number;
  anoModelo: number;
  siglaModelo: string;
}

@Injectable({
  providedIn: 'root'
})


export class CaminhoesService {

  constructor(private http: HttpClient) { }

  protected UrlServiceV1: string = "http://localhost:5000/";

  obterCaminhoes(): Observable<Caminhao[]> {
    return this.http
      .get<Caminhao[]>(this.UrlServiceV1 + "Volvo");
  }

  obterCaminhao(id: Number): Observable<Caminhao> {
    return this.http
      .get<Caminhao>(`${this.UrlServiceV1}Volvo/${id}`);
  }

  salvarCaminhao(caminhao: Caminhao): Observable<any> {
    return this.http
      .post<any>(`${this.UrlServiceV1}Volvo`, caminhao);
  }

  editarCaminhao(caminhao: Caminhao): Observable<any> {
    return this.http
      .put<any>(`${this.UrlServiceV1}Volvo/${caminhao.id}`, caminhao);
  }
}