import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieListComponent } from 'src/app/star-war/specie/specie-list/specie-list.component';
import { SpecieService } from 'src/app/star-war/services/specie.service';
import { SearchData } from 'src/app/star-war/models';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-specie-list-page',
  standalone: true,
  imports: [CommonModule, SpecieListComponent],
  templateUrl: './specie-list-page.component.html',
  styleUrls: ['./specie-list-page.component.scss'],
})
export class SpecieListPageComponent {
  private readonly specieService = inject(SpecieService);
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
