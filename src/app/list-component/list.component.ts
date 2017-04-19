import { IList } from './list-interface';
import { Component } from '@angular/core';
@Component({
    selector:'app-list',
    templateUrl: 'list.component.html',
    styleUrls: [
        'list.style.css'
    ]
})
export class ListComponent {

     userList : IList[] = [
         {
             firstName:"Arun",
             lastName: "Jayaprakash",
             email: "arunj@nr.com",
             address: "4116 Choctaw Dr",
             phone: "800-123-1234"
            },
            {
             firstName:"Mary",
             lastName: "Jayaprakash",
             email: "arunj@nr.com",
             address: "4116 Choctaw Dr",
             phone: "800-123-1234"
            },
            {
             firstName:"Sarah",
             lastName: "Jayaprakash",
             email: "arunj@nr.com",
             address: "4116 Choctaw Dr",
             phone: "800-123-1234"
            },
            {
             firstName:"Hannah",
             lastName: "Jayaprakash",
             email: "arunj@nr.com",
             address: "4116 Choctaw Dr",
             phone: "800-123-1234"
            },
    ]
}