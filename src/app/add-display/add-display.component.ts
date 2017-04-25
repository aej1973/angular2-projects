import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IArtist } from './add-display'; //interface
import { artistList } from './add-display.component.data'; //data
import { AddDisplayService } from './add-display.service'
@Component({
    selector:'app-adddisplay',
    templateUrl: 'add-display.component.html',
    styleUrls:[
        'add-display.css',
    ]
})
export class AddAndDisplayComponent implements OnInit {
    
    name : string;
    my_list : IArtist[];
    
    onClick(e){
        console.log(e.target.innerHTML);
        //alert(e.target.innerHTML);
        this.name = e.target.innnerHTML;
        alert(this.name);
    }
    addNewArtist(value){
        if(value!==''){
            this.my_list.push({
                name : value,
                school : 'Yale',
                description : 'New student'
            })
        }
    }
    constructor(private items_added : AddDisplayService){}
    ngOnInit() : any {
       this.name="AJ"; 
       this.my_list = this.items_added.getAddDisplay();
   }
    
}