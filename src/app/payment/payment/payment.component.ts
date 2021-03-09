import { Component, OnInit } from '@angular/core';
import { CloseService } from 'src/app/_services/close.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    private closeService: CloseService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.closeService.close();
  }

}
