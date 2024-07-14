import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private readonly baseUrl = 'https://images.pexels.com/photos';

  private housingLocationList: HousingLocation[] = [
    // {
    //   id: 111,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/221457/pexels-photo-221457.jpeg`,
    //     `${this.baseUrl}/221457/pexels-photo-221457.jpeg`,
    //   ],
    //   price: 40000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 112,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //   ],
    //   price: 45000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 113,
    //   name: 'Test Home',
    //   city: 'mumbai',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/774042/pexels-photo-774042.jpeg`,
    //     `${this.baseUrl}/774042/pexels-photo-774042.jpeg`,
    //   ],
    //   price: 30000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 114,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/1375383/pexels-photo-1375383.jpeg`,
    //     `${this.baseUrl}/1375383/pexels-photo-1375383.jpeg`,
    //   ],
    //   price: 35000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 115,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //   ],
    //   price: 28000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 116,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //   ],
    //   price: 50000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 117,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //     `${this.baseUrl}/258154/pexels-photo-258154.jpeg`,
    //   ],
    //   price: 40000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 118,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/1102402/pexels-photo-1102402.jpeg`,
    //     `${this.baseUrl}/1102402/pexels-photo-1102402.jpeg`,
    //   ],
    //   price: 42000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 119,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //   ],
    //   price: 40000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
    // {
    //   id: 120,
    //   name: 'Test Home',
    //   city: 'Pune',
    //   state: 'Maharashtra',
    //   photo: [
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //     `${this.baseUrl}/1134176/pexels-photo-1134176.jpeg`,
    //   ],
    //   price: 30000,
    //   availableUnits: 7,
    //   wifi: true,
    //   laundry: false,
    //   airConditioning: true,
    // },
  ];
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((housingLocation) => {
      return housingLocation.id === id;
    });
  }
  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received ${firstName}, ${lastName} with your email ${email}. Thanks for appling, we'll provide the details to contact the owner.`
    );
  }
}
