import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Produtos } from '../../models/Produtos';

@Component({
  selector: 'app-formulario',
  imports: [RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  @Input() btnAcao!: string;

  @Input() descTitulo!: string;

  @Input() dadosProduto: Produtos | null = null;

  @Output() onSubmit = new EventEmitter<Produtos>();

  produtoForm!: FormGroup;

  ngOnInit(): void {
    console.log(3);

    this.produtoForm = new FormGroup({
      id: new FormControl(this.dadosProduto ? this.dadosProduto.id : 0),
      nome: new FormControl(this.dadosProduto ? this.dadosProduto.descricao : ''),
      email: new FormControl(this.dadosProduto ? this.dadosProduto.validade : ''),
      salario: new FormControl(this.dadosProduto ? this.dadosProduto.cadastro : ''),
      cpf: new FormControl(this.dadosProduto ? this.dadosProduto.preco : ''),
      situacao: new FormControl(this.dadosProduto ? this.dadosProduto.ativo : true),
    });
  }

  submit() {
    this.onSubmit.emit(this.produtoForm.value);
  }

}
