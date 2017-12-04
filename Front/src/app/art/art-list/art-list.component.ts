import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Art } from '../../shared/art.model';
import { ArtService } from '../../shared/service/art.service';
import {StorageService} from '../../shared/service/storage.service'

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css'],
  providers: [StorageService]
})
export class ArtListComponent implements OnInit, OnDestroy {
  private arts: Art[];
  subscription: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private storageService: StorageService,
              private artService: ArtService) {
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.storageService.getArts().subscribe(
    //   (data) => {this.arts = data});
    // });
    // this.artService.getArts();
    this.route.params.subscribe((params: Params) => {
      this.storageService.getArts()
    });
    this.artService.artChanged.subscribe( (artss: Art[]) => {this.arts = artss;});
    this.arts = this.artService.getArts();
  }

  onNewArt() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}