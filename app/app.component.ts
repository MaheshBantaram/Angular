/* * * ./app/comments/app.component.ts * * */
// Imports
import { Component } from '@angular/core';
import { CountryService }          from './country.service';
import { Country }           from './Country';


@Component({
    selector: 'my-app',
    template: `
        Countries
		 <ul>
			<li *ngFor="let item of country">{{country.name}}</li>
		</ul>
        `,
})
export class AppComponent { 

country:Array<any>;

 constructor(private commentService: CountryService){
  this.country = commentService.getCountries();
  }
	

}
