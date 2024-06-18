import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

mondayDate: Date = new Date('1753-01-01');
sundayDate: Date = new Date('1753-01-07');


  moveToNextWeek() {
    console.log('moveToNextWeek');
    /* 
    mondayDate =
    sundayDate =
     */
  }

  moveToPreviousWeek() {
    console.log('moveToPreviousWeek');
  }

}
