import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Moises Almeida";
  public age = 20;
  public condition = this.age > 1 ? "Sim" : "Não";

  public isDisabled = true;

  public srcValue = 'https://www.designi.com.br/images/preview/10665323.jpg';

  public sum (v1: number, v2: number){
    return v1 + v2;
  }
}
