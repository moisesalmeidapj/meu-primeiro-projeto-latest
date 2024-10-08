import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponent, TemplateBindingComponent, ControlFlowComponent],

  template:  `
  <!--  <router-outlet />
    <div class="theme-dark">
      <app-new-component></app-new-component>
    </div>
    <app-new-component> -->

    <h1>Curso de Angular</h1>
    <app-control-flow/>
  `
})
export class AppComponent {
}
