import { Component, OnInit } from '@angular/core';
import { CloseService } from 'src/app/_services/close.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private closeService: CloseService
  ) { }

  ngOnInit(): void {
  }

  close() {
    this.closeService.close();
  }

}
