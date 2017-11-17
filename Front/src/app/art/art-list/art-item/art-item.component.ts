import { Component, OnInit, Input } from '@angular/core';

import {Art} from '../../../shared/art.model'

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css']
})
export class ArtItemComponent implements OnInit {

  constructor() { }

  @Input() art: Art;
  @Input() index: number;

  ngOnInit() {
  }

}
