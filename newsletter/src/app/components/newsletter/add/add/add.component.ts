import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsletterService } from 'src/app/service/newsletter.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  constructor(
    private _news:NewsletterService
  ){}
  ngOnInit(): void {
    
  }
add(addform:NgForm){
this._news.post(addform.value,()=>addform.reset())
}
}