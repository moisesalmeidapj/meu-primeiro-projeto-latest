import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {

  
  public loadingData: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 8'
  ]).pipe(delay(3000));

  public itens = [{ name: 'Moises Almeida '}]

  addNewName(value: string){
    return this.itens.push({
      name : value
    })
  }  
}
