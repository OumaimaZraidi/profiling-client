import { Component, OnInit } from '@angular/core';
import {urls} from '../urls';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  public links = urls;
  constructor() { }

  ngOnInit() {
  }

}
