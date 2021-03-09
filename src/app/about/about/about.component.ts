import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloseService } from 'src/app/_services/close.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private router: Router,
    private closeService: CloseService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.closeService.close();
  }

}
