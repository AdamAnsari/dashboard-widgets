import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonComponent } from 'src/app/common/common/common.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openModal() {
    console.log('*****************OPEN MODAL*****************', '/about');
    const dialogRef = this.dialog.open(CommonComponent, {
      width: '95%',
      height: '95%',
      data: {
        imgUrl: '../assets/img/single-chart.PNG'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result.message}`);
    });
  }

}
