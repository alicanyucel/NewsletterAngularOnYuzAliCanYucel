import { Component, OnInit } from '@angular/core';
import { NewsletterModel } from 'src/app/models/newslettermodel';
import { NewsletterService } from 'src/app/service/newsletter.service';
import { SwalService } from 'src/app/service/swal.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  newsletters: NewsletterModel[] = [];
  filtertext: string = "";
  constructor(
    private _news: NewsletterService,
    private _swall: SwalService
  ) { }
  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this._news.getList((res) => this.newsletters = res)
  }

  delete(id: number) {
    this._swall.callSwal("Sil", "silmek istediğinizden emin misiniz?").then
      ((next) => {
        if (next.isConfirmed) {
          this._news.delete(id, () => this.getList())}
        }
      )
  }
}