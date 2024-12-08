import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input()
  public price: number = 0;
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('componente hijo: ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('componente hijo: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('componente hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
