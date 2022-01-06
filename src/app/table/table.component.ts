import { HistogramaService } from './../histograma.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  histograma: Array<any> | undefined;

  constructor(private HistogramaService: HistogramaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.HistogramaService.listar().subscribe(dados => this.histograma = dados);
  }
}
