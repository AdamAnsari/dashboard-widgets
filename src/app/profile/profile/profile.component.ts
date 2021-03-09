import { Component, OnInit } from '@angular/core';
import { CloseService } from 'src/app/_services/close.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private closeService: CloseService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.closeService.close();
  }

}
