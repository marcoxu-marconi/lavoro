import { Component, Input } from '@angular/core';
import { InfoProviderService } from '../../info-provider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(private infoService: InfoProviderService) { }

  @Input() selectedWeek: any;

  ResList: any = [];
  JobList: any = [];
  JobTaskList: any = [];
  selectedCommessa:any;
  selectedAttivita:any;
  note!: string;

  showModal: boolean = false;

  Days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  timeForm = new FormGroup({
    time: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}(\\.25|\\.50|\\.75|\\.00)?$')]),
  });

  selectCommessa(commessa:any):void{
    this.selectedCommessa=commessa;
    console.log(this.timeForm.controls['time'].valid);
  }
  selectAttivita(attivita:any):void{
    this.selectedAttivita=attivita;
  }


  openModal(row: any, day: any) {
  this.note = row[`${day}Note`];
  this.showModal = true;
  }
  
  closeModal() {
  this.showModal = false;
  }

  ngOnInit() {
    this.infoService.getResList().subscribe(data => {
      this.ResList = data;
    });
    this.infoService.getJobList().subscribe(data => {
      this.JobList = data;
    });
    this.infoService.getJobTaskList().subscribe(data => {
      this.JobTaskList = data;
    });
  }
}
