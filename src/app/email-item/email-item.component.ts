import { Component, OnInit, Input } from '@angular/core';
import { EmailPass } from '../email-pass';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.scss']
})
export class EmailItemComponent implements OnInit {

  @Input() post: EmailPass;
  fullSummary: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.post.summary;
    this.post.title = this.truncatePipe.transform(this.post.title, 30)
    this.post.summary = this.truncatePipe.transform(this.post.summary, 120);
  }

  showFullSummary(){
    this.post.summary = this.fullSummary;
  }

}
