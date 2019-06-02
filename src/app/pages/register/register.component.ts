import { Component, OnInit } from '@angular/core';
import {ExampleVO} from '../../shared/ExampleVO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public example: ExampleVO;
  constructor() { }

  ngOnInit() {
  }

}
