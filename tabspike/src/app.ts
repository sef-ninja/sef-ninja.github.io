//our root app component
import {Component} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Tabs} from './tabs';
import {Tab} from './tab';

@Component({
    selector: 'app'
    template: `
      <tabs>
        <tab [tabTitle]="'Plan'">Denver Trip Plan</tab>
        <tab tabTitle="Flights">Denver Trip Flight Information</tab>
      </tabs>
    `,
    directives: [Tabs, Tab]
})
export class App { }