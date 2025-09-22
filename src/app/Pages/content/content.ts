import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, ParamMap } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {

  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";

  // CORRIGIDO: O tipo agora é 'string | null' e a variável é inicializada.
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // CORRIGIDO: Adicionamos o tipo 'ParamMap' para 'value'.
    this.route.paramMap.subscribe( (value: ParamMap) => {
      // Agora o 'id' recebe o valor da rota.
      this.id = value.get("Id");

      // Opcional: Mostra o ID no console para verificar se está funcionando.
      console.log(this.id);
    });
  }

  setValuestoComponent(id: string | null) {
    // Lógica para definir valores ao componente, se necessário.
    const result = dataFake.filter(article => article.id.toString() === id);
    if(result.length > 0) {
      this.contentTitle = result[0].title;
      this.contentDescription = result[0].description;
      this.photoCover = result[0].photoCover;
}
}
}
