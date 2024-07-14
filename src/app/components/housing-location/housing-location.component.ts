import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../model/housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocationIn!: HousingLocation;
}
