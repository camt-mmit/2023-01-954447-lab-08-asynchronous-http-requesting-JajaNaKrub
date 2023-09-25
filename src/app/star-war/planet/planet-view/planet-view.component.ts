import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetListComponent } from 'src/app/star-war/planet/planet-list/planet-list.component';
import { PlanetService } from 'src/app/star-war/services/planet.service';
import { SearchData } from 'src/app/star-war/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-planet-view',
  standalone: true,
  imports: [CommonModule, PlanetListComponent],
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.scss'],
})
export class PlanetViewComponent {
  private readonly specieService = inject(PlanetService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly data$ = this.route.queryParams.pipe(
    switchMap((params) =>
      this.specieService.getAll(params).pipe(
        map((data) => ({
          params,
          data,
        })),
      ),
    ),
  );

  protected doSearchDataChange(searchData: SearchData): void {
    this.router.navigate([], {
      replaceUrl: true,
      queryParams: searchData,
    });
  }
}
