import { Component, OnInit } from '@angular/core';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'testCali';
  constructor(private spinnerService:NgxSpinnerService){

  }
  ngOnInit(): void {
   // this.spinner();
  }
  spinner(){
    this.spinnerService.show();
    setTimeout(
      ()=>{
        this.spinnerService.hide()
      },3000
    )
  }
}
