import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonComponent } from 'src/app/common/common/common.component';
import { NgDialogAnimationService } from "ng-dialog-animation";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    public dialog: NgDialogAnimationService,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  openModal() {
    console.log('*****************OPEN MODAL*****************', '/about');
    const dialogRef = this.dialog.open(CommonComponent, {
      width: '95%',
      height: '98%',
      disableClose: true,
      animation:{to:"top"},
      data: {
        imgUrl: '../assets/img/open-interest.PNG'
      },
      panelClass: "mat-dialog-height-transition"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
      console.log(`Dialog result: ${result.message}`);
    });
  }

}
