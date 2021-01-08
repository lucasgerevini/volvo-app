import { escapeIdentifier } from '@angular/compiler/src/output/abstract_emitter';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CaminhoesService } from '../caminhoes.service';

export interface Caminhao {
  id: number;
  anoFabricacao: number;
  anoModelo: number;
  siglaModelo: string;
}

@Component({
  selector: 'app-lista-caminhoes',
  templateUrl: './lista-caminhoes.component.html',
  styleUrls: ['./lista-caminhoes.component.css']
})

export class ListaCaminhoesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'anoFabricacao', 'anoModelo', 'siglaModelo', 'action'];
  public dataSource = new MatTableDataSource<Caminhao>();

  constructor(private caminhaoService: CaminhoesService, private router: Router) { }
  ngOnInit(): void {
    this.caminhaoService.obterCaminhoes()
      .subscribe(
        caminhoes => {
          console.log('data=>',caminhoes);
          this.dataSource = new MatTableDataSource(caminhoes);
        }
      );
  }

  public edit(element: any) {
    console.log(element);
    this.router.navigate([`/caminhao-detalhe/${element.id}`]);
  }
}