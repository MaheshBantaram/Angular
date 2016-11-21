import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Country }           from './Country';
import {Observable} from 'rxjs/Rx';
//import {COUNTRIES} from "./country.contacts";

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()

//CountryService exposes the getContacts() method that returns the data
export class CountryService {

 constructor (private http: Http) {

 }
 private baseUrl = 'http://localhost:8080/ggk/countries';
 
   country : Country[];
	

getCountries() {
return	this.http.get('http://127.0.0.1:8080/ggk/countries')
.map((data: any) => data.json())
.subscribe(
        (data: any) => {
            //this.country =  console.log(data);			
                this.country = data;				
        },
        err => console.log(err), // error
        () => console.log('country Complete') // complete
    );
}

logError(err) {
  console.error('There was an error: ' + err);
}


	 
   
}