import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { InfoProviderService } from '../../info-provider.service';
import { OnInit } from '@angular/core';
import { WorkWeek } from '../../../models/PersonReference';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  
@Output() weekChange = new EventEmitter<WorkWeek>();


constructor(private infoService: InfoProviderService) { }

data!: WorkWeek[];
mondayDate!: Date;
sundayDate!: Date;
currentWeek=0;

  moveToNextWeek():void {
    if(this.currentWeek<this.data.length-1){
      this.currentWeek++;
      this.setWeekDay();
      this.currentWeek=0;
    }
  }
  

  moveToPreviousWeek():void {
    if(this.currentWeek>0){
      this.currentWeek--;
      this.setWeekDay();
    }
  }

  setWeekDay():void {
    this.mondayDate = this.data[this.currentWeek].WeekFirstDay;
    this.sundayDate = this.data[this.currentWeek].WeekLastDay;
    console.log(this.mondayDate);
    console.log(this.sundayDate);
  }

  ngOnInit() {
    this.infoService.getWorkWeekList().subscribe(data => {
      this.data = data;
      this.setWeekDay();
      this.weekChange.emit(data);
    });

    
  }

}
