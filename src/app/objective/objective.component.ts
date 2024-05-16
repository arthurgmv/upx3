import { Component } from '@angular/core';
@Component({
  selector: 'app-objective',
  standalone: true,
  imports: [],
  templateUrl: './objective.component.html',
  styleUrl: './objective.component.css'
})
export class ObjectiveComponent {
objTitle:string = "Energia Solar Inteligente";
objText:string = `No século XXI, a questão energética tornou-se uma das principais preocupações globais,
impulsionada pela necessidade de mitigar as mudanças climáticas, garantir o acesso
universal à energia e promover o desenvolvimento econômico sustentável.
Nesse contexto, as energias renováveis emergem como uma solução promissora,
oferecendo uma fonte de energia limpa, abundante e acessível.

A energia solar é uma forma limpa de energia, pois não emite poluentes atmosféricos durante a geração de eletricidade.
 O uso de placas fotovoltaicas, conforme destacado na figura 1, ajuda a reduzir as emissões de gases de efeito estufa,
 contribuindo assim para mitigar as mudanças climáticas e seus impactos negativos.

 Ao gerar eletricidade a partir da luz solar, os sistemas fotovoltaicos oferecem uma fonte de energia descentralizada
 e independente da rede elétrica. Isso pode ser especialmente útil em áreas remotas ou rurais, onde a conexão à rede é difícil ou cara.

 Para alcançar o objetivo de obter energia solar através de uma placa fotovoltaica de maneira portátil e prática, foi utilizado
 o Arduino UNO`;

objUpd:string = "Last updated 3 mins ago"
}

