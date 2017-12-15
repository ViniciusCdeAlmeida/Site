import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Art} from '../../shared/art.model'
import {StorageService} from '../../shared/service/storage.service'
import {ArtService} from '../../shared/service/art.service'

@Component({
  selector: 'app-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css'],
  providers: [StorageService]
})
export class ArtDetailComponent implements OnInit {

  art: any = this.storageService.getArts();
  arts: Art[] = []
  artID:number

  constructor(
    private artService: ArtService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.art)
    this.route.params.subscribe((params: Params) => {
      this.artID = +params['id'];
      // console.log(this.artID)
      this.storageService.getArt(this.artID).subscribe(
          art => this.art = art);
          // console.log(this.art)
    });
    

  }

  deleteArt(arts){
  //  var index = this.art.indexOf(arts);
  //   this.arts.splice(index, 1);
  // console.log(this.artID)

    this.storageService.deleteArt(this.artID).subscribe(null);
  }

}
