import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  getHobbies() {
    return [{"id": 1,"name": "Rajev","hobbie":"dancing" },
   {"id": 2,"name": "sri","hobbie":"singing"}
      ];
 
     }
 }
    // Create simple angular service method
    // servicemethod(){
    // return 'Its just a simple service method';
    // }
    // }
    
