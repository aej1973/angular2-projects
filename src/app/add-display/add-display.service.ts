import { artistList } from './add-display.component.data'; //data
import { IArtist } from './add-display' //interface

import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http'

@Injectable()
export class AddDisplayService {

    getAddDisplay(){
        return artistList;
    }
   
}