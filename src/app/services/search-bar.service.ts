import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  overlayOpen = signal(false);
  recentSearches = signal<string[]>(
    JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]')
  );
  searchTerm = signal('');

  constructor() {}

  search(searchTerm: string) {
    // perform search
    this.searchTerm.set(searchTerm);
    this.overlayOpen.set(false);
    this.addToRecentSearches(searchTerm);
  }

  clearSearch() {
    this.searchTerm.set('');
    this.overlayOpen.set(true);
  }

  deleteRecentSearch(searchTerm: string) {
    this.recentSearches.set([
      ...this.recentSearches().filter((s) => s !== searchTerm),
    ]);
  }

  private addToRecentSearches(searchTerm: string) {
    const lowerCaseTerm = searchTerm.toLowerCase();

    this.recentSearches.set([
      lowerCaseTerm,
      ...this.recentSearches().filter((s) => s !== lowerCaseTerm),
    ]);
  }

  saveLocalStorage = effect(() => {
    window.localStorage.setItem(
      'recentSearches',
      JSON.stringify(this.recentSearches())
    );
  });
}

// betty bought some butter but the butter was bitter so betty bought some better butter to make the bitter butter better

// i wish to wash my irish wristwatch
