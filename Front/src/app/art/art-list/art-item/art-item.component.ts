import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Observable} from 'rxjs';

import {Art} from '../../../shared/art.model'

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.css'],
  outputs: ['childData : sendID']
})
export class ArtItemComponent implements OnInit {

  constructor() { }

  @Input() art: Art;
  @Input() index: number;

  @Output() idArt = new EventEmitter();
  

  ngOnInit() { /* console.log(this.art.id) */
  }

  // sendID(id: number){
  //   console.log(id)
  //   this.idArt.emit(id)
  // }

  sendID(id: number){
    // console.log(id)
    this.idArt.emit(id)
  }

}
