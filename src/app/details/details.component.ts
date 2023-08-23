import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  constructor(private activatedroute: ActivatedRoute) {}
  name: String = '';
  ngOnInit(): void {
    const productid = this.activatedroute.snapshot.params['productid'];
    if (productid == 1) {
      this.name = 'Iced Latte';
    } else if (productid == 2) {
      this.name = 'Cappuchino';
    } else if (productid == 3) {
      this.name = 'Espresso';
    } else {
      this.name = 'Americano';
    }

    this.activatedroute.paramMap.subscribe((params) => {
      console.log(params);
    }); //Observable => Subscribe
  }
}
