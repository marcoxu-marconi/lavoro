import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [TableComponent,NavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  selectedWeekToChild:any;
  constructor() { }

  receiveWeek(event:any){
    this.selectedWeekToChild=event;
  }


}
