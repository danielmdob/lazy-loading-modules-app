import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver-test',
  templateUrl: './resolver-test.component.html',
  styleUrls: ['./resolver-test.component.css']
})
export class ResolverTestComponent implements OnInit {

  resolverInformation: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.resolverInformation = this.route.snapshot.data.infoString;
  }

}
