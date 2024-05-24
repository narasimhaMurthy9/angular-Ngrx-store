import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss']
})
export class CounterOutputComponent {
// @Input() counter !:number 
counter$ !: Observable<number>
constructor(private store:Store<{counter :counterState}>){}
ngOnInit():void {
this.counter$ = this.store.select(getCounter)
}

}
