import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  faqs: Faq[] = [
    {
      title: "Why is it important that QryptoBank is regulated ?",
      content: "lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum ",
      visible: false
    },
    {
      title: "Why is it important that QryptoBank is regulated ?",
      content: "lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum ",
      visible: false
    },
    {
      title: "Why is it important that QryptoBank is regulated ?",
      content: "lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum lorem lorem lorem lorem lorem lorem lorem lorem ipsum ipsum ",
      visible: false
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  currentFaqIndex: number = -1;
  openFAQ(faq: Faq) {
    // uncollpase the previous one
    if (this.currentFaqIndex != -1) {
      if (this.currentFaqIndex != this.faqs.indexOf(faq)) {
        if (this.faqs[this.currentFaqIndex].visible) {
          this.faqs[this.currentFaqIndex].visible = false;
        }
      }
    }
    this.currentFaqIndex = this.faqs.indexOf(faq);

    faq.visible = !faq.visible;
  }

}

interface Faq {
  title: string;
  content: string;
  visible: boolean;
}