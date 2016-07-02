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
        <tab [tabTitle]="'Plan'">
           <h2>Sunday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>
           <h2>Monday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>           
           <h2>Tuesday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>           
           <h2>Wednesday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>           
           <h2>Thursday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>           
           <h2>Friday</h2>
           <ul>
               <li>Activity</li>
               <li>Activity</li>
               <li>Activity</li>
           </ul>           
        </tab>
        <tab tabTitle="Flights">Denver Trip Flight Information</tab>
      </tabs>
    `,
    directives: [Tabs, Tab]
})
export class App { }