import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class InterconnectService {

  selected = new Subject<string>();
  selectedStream = this.selected.asObservable();

  // Service message commands
  interconnectionStream(mission) {
    console.log(mission)
    // this.selected.next(mission);
  }
}

/* import { Component, Injectable,Input,Output,EventEmitter} from '@angular/core'

// Name Service
export interface myData {
   name:string;
}

@Injectable()
export class SharedService {
  sharingData: myData = {name:"asdf"};
  saveData(str){
    console.log(str)
    console.log('save data function called' + str + this.sharingData.name);
    this.sharingData.name = str; 
  }
  getData(){
    console.log('get data function called');
    console.log('HEYYYYYY' + this.sharingData.name)
    return this.sharingData.name;
  }
}  */