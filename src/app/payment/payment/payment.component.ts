import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonComponent } from 'src/app/common/common/common.component';
import { NgDialogAnimationService } from "ng-dialog-animation";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    public dialog: NgDialogAnimationService,
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    console.log('*****************OPEN MODAL*****************', '/about');
    const dialogRef = this.dialog.open(CommonComponent, {
      width: '95%',
      height: '95%',
      disableClose: true,
      animation:{to:"top"},
      data: {
        imgUrl: '../assets/img/single-chart.PNG'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
       console.log(`Dialog result: ${result.message}`);
    });
  }

}
