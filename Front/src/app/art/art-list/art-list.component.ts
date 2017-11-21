import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Art } from '../../shared/art.model';
import { ArtService } from '../../shared/service/art.service';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.css']
})
export class ArtListComponent implements OnInit, OnDestroy {
  arts: Art[];
  subscription: Subscription;

  constructor(private artService: ArtService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.artService.artChanged
      .subscribe(
        (arts: Art[]) => {
          this.arts = arts;
        }
      );
    this.arts = this.artService.getArts();
  }

  onNewArt() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
