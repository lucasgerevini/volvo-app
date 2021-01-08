import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaminhoesService } from './caminhoes.service';

export interface Caminhao {
  id: number;
  anoFabricacao: number;
  anoModelo: number;
  siglaModelo: string;
}

@Component({
  selector: 'app-caminhoes',
  templateUrl: './caminhoes.component.html',
  styleUrls: ['./caminhoes.component.css']
})

export class CaminhoesComponent implements OnInit {
  formCaminhao!: FormGroup;
  id: Number = 0;

  constructor(
    private caminhaoService: CaminhoesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id ?? 0;
    if (this.id > 0) {
      this.caminhaoService.obterCaminhao(this.id)
        .subscribe(
          data => {
            this.onSucess(data);
          }
        );
    } else {
      this.formCaminhao = this.formBuilder.group({
        id: this.id,
        anoModelo: ['', Validators.required],
        anoFabricacao: ['', Validators.required],
        siglaModelo: ['', Validators.required],
      });
    }
  }
  dialogConfirm(arg: string) {
    alert(arg);
  }
  onSucess(data: Caminhao) {
    this.formCaminhao = this.formBuilder.group({
      id: [data.id],
      anoModelo: [data.anoModelo, Validators.required],
      anoFabricacao: [data.anoFabricacao, Validators.required],
      siglaModelo: [data.siglaModelo, Validators.required],
    });
  }

  public onSubmit() {

    if (this.formCaminhao.value.id > 0 && this.formCaminhao.value.id !== null) {
      this.caminhaoService.editarCaminhao(this.formCaminhao.value)
        .subscribe(
          data => {
            this.onSucess(data);
            this.dialogConfirm('Salvo com sucesso!');
            this.router.navigate([`/caminhoes`]);
          },
          err => {
            this.dialogConfirm('Erro');
            this.router.navigate([`/caminhoes`]);
          }
        );
    }
    else {
      this.caminhaoService.salvarCaminhao(this.formCaminhao.value)
        .subscribe(
          data => {
            this.onSucess(data);
            this.dialogConfirm('Salvo com sucesso!');
            this.router.navigate([`/caminhoes`]);
          },
          err => {
            this.dialogConfirm('Erro');
            this.router.navigate([`/caminhoes`]);
          },
        );
    }
  }
}
