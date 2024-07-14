import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { OverlayModule } from '@angular/cdk/overlay';
import { SearchBarService } from '../../services/search-bar.service';
import { CommonModule } from '@angular/common';
import { SearchOverlayComponent } from './search-overlay/search-overlay.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    OverlayModule,
    CommonModule,
    SearchOverlayComponent,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchBarService = inject(SearchBarService);

  isActive = false;

  overlayOpen = this.searchBarService.overlayOpen;
  searchTerm = this.searchBarService.searchTerm;
  search(searchTerm: string) {
    if (!searchTerm) return;

    this.searchBarService.search(searchTerm);
  }
  clearSearch() {
    this.searchBarService.clearSearch();
  }
}
