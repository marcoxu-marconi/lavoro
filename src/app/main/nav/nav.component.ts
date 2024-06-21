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
  
@Output() selectedWeek = new EventEmitter<WorkWeek>();


constructor(private infoService: InfoProviderService) { }

data!: WorkWeek[];
mondayDate!: Date;
sundayDate!: Date;
currentWeek=0;

  moveToNextWeek():void {
    if(this.currentWeek<this.data.length-1){
      this.currentWeek++;
      this.setWeekDay();
      this.selectedWeek.emit(this.data[this.currentWeek]);
    }
  }
  

  moveToPreviousWeek():void {
    if(this.currentWeek>0){
      this.currentWeek--;
      this.setWeekDay();
      this.selectedWeek.emit(this.data[this.currentWeek]);
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
      this.currentWeek = 0;
      this.setWeekDay();
      this.selectedWeek.emit(data[this.currentWeek]);
    });

    
  }

}
