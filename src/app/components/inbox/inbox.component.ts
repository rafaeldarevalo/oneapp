import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public  inbox: {
    date: string;
    nameDocument: string;
    subject: string;
  }[] = [
    {
      date: 'Jun 2',
      nameDocument: 'pixar.pdf',
      subject: 'Event invitation',
    },
    {
      date: 'Jun 4',
      nameDocument: 'banck_star_way.pdf',
      subject: 'Common Infomartion',
    }
    ,
    {
      date: 'Sep 12',
      nameDocument: 'banck_star_way.pdf',
      subject: 'Common Infomartion',
    },
    {
      date: 'Sep 25',
      nameDocument: 'pixar.pdf',
      subject: 'Event invitation',
    }
  ];
  getTotalIbox = this.inbox.length;
  constructor() {
    let open:any = document.querySelector('.js-open');
    console.log(open);
  }

  ngOnInit(): void {

  }

}
