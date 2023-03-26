import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsletterModel } from 'src/app/models/newslettermodel';
import { NewsletterService } from 'src/app/service/newsletter.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatemodel: NewsletterModel = new NewsletterModel();
  constructor(
    private _activated: ActivatedRoute,
    private _news:NewsletterService
  ) { }
  ngOnInit(): void {
    this._activated.params.subscribe({
      next: (res: any) =>this._news.getbyid(res.value,(res)=> this.updatemodel=res)
    })

  }
  update(){

  }
}