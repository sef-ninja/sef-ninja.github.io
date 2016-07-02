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
               <li>Text James after landing.  Follow the signs near luggage claim to passenger pickup area.</li>
               <li>Visit with James and kids!!</li>
               <li>Activity</li>
           </ul>
           <h2>Monday</h2>
           <ul>
               <li>Take bus (FF1, US 36 & Church Ranch Station to Union Station, pay cash with exact change on bus) from Westin Westminster to:  Snooze an AM Eatery</li>
               <li>Eat breakfast and then walk to Denver office (2300 15TH STREET Denver, CO 80202).  You can walk through the park and then over the South Platt River on the (pedestrian) Highland Bridge.",
                "Take bus (FF1, US 36 & Church Ranch Station to Boulder, pay cash with exact change on bus) from Westin Westminster to:  Pearl St. Mall</li>
               <li>Sit on driver-side of bus to see mountains!!</li>
               <li>Buy souvenirs and eat dinner</li>
           </ul>           
           <h2>Tuesday</h2>
           <ul>
               <li>Application development with Docker, Kubernetes, and OpenShift</li>
               <li>Dinner/Keynote</li>
               <li>Outdoor reception</li>
           </ul>           
           <h2>Wednesday</h2>
           <ul>
               <li>5K</li>
               <li>Identity</li>
               <li>Privilege</li>
               <li>Reactive Systems with RXJava</li>
               <li>Reactive Systems with Akka and Java</li>
               <li>HTML5 Revisited</li>
               <li>Keynote: Why does Yesterday's Best Practice Become Tomorrow's Antipattern?</li>
               <li>Fun for all ages: Modding & Hacking Minecraft with ScriptCraft</li>
           </ul>           
           <h2>Thursday</h2>
           <ul>
               <li>Refactoring to Functional Style using Java 8 (Venkat Subramaniam)</li>
               <li>Foundational Front-End Architecture: Getting the Most out of Frameworks, Libraries, Events, and the Browser Platform (Without Losing Your Mind)</li>
               <li>Building a Continuous Delivery Pipeline With Jenkins (and Gradle, Git, Gerrit, Artifactory, Sonar, Jacoco, and Docker)</li>
               <li>Building a Continuous Delivery Pipeline With Jenkins (and Gradle, Git, Gerrit, Artifactory, Sonar, Jacoco, and Docker) (continued)</li>
               <li>15 Best Practices for designing superior RESTful APIs</li>
           </ul>           
           <h2>Friday</h2>
           <ul>
               <li>Call Lyft to get ride to Denver International Airport.</li>
               <li>Modular Architecture - Refactoring the Monolith</li>
           </ul>
        </tab>
        <tab tabTitle="Flights">Denver Trip Flight Information</tab>
      </tabs>
    `,
    directives: [Tabs, Tab]
})
export class App { }