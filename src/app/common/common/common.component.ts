import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CommonComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeWindow() {
    this.dialogRef.close({ message: '0' });
  }

}
