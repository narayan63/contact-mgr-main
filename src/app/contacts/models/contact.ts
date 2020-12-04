import { Injectable } from '@angular/core';

// model is a schema for the front end
export interface IContact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

// facilitates dependency injectable
@Injectable({
  providedIn: 'root'
})
export class Contact implements IContact{
  id: number;
  name: string;
  phone: string;
  email: string;

}
