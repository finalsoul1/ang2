import { Component, OnInit } from '@angular/core';
import { CounterBridgeService } from '../counter.service';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.css']
})
export class CounterDisplayComponent implements OnInit {
  count = 0;

  constructor(private counterBridgeService: CounterBridgeService) { }

  ngOnInit() {
    // 구독자가 먼저 구독 신청을 합니다.
    this.counterBridgeService.getObservable().subscribe(
      // { type: 'increment'}
      message => {
        if (message.type === 'increment') {
          this.count++;
        } else {
          this.count--;
        }
      }
    );
  }

}
