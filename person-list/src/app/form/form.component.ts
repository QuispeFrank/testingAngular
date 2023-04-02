import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Person } from '../person.model';
import { LoggingService } from '../LoggingService.service';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('lastNameInput') lastNameInput: ElementRef;

  constructor(private loggingService: LoggingService,
              private peopleService: PeopleService) { }

  addPerson() {
    let person = new Person(this.nameInput.nativeElement.value, this.lastNameInput.nativeElement.value);
    this.loggingService.sendMessageToConsole(`person added: ${person.firstName}`)
    this.peopleService.addPerson(person)
  }
}
