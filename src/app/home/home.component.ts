import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../model/housing-location';
import { HousingService } from '../services/housing.service';
import { HeaderComponent } from '../common-components/header/header.component';
import { HousingLocationComponent } from '../components/housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocations: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocations = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocations;
  }
}
