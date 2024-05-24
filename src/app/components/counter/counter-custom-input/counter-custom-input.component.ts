import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, customInput } from '../state/counter.action';
import { counterState } from '../state/counter.state';
import { getLearning } from '../state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.scss']
})
export class CounterCustomInputComponent implements OnInit {
value:number = 0;
learningAbout$ !: Observable<string>;
constructor(private store:Store<{counter:counterState}>){}

ngOnInit(): void {
  this.learningAbout$ = this.store.select(getLearning)
}

addNumber(){
this.store.dispatch(customInput({value : +this.value}))
}
onChangeText(){
  this.store.dispatch(changeText())
}
}


