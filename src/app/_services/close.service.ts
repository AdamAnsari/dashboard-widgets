import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CloseService {
  public closeMessage = new Subject<any>();

  constructor(
    private router: Router
  ) { }
    
  close() {
    this.closeMessage.next(
      this.router.navigate(['/'])
    )
  }

}
