import { Component } from '@angular/core';
import { InfoProviderService } from '../../info-provider.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  constructor(private infoService: InfoProviderService) { }

  ResList: any = [];
  JobList: any = [];
  JobTaskList: any = [];

  selectedCommessa:any;

  showModal: boolean = false;


  timeForm = new FormGroup({
    time: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{1,2}(\\.25|\\.50|\\.75|\\.00)?$')]),
  });

  selectCommessa(commessa:any):void{
    this.selectedCommessa=commessa;
    console.log(this.timeForm.controls['time'].valid);
  }

/*   modal(){
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }
 */
  ngOnInit() {
    this.infoService.getResList().subscribe(data => {
      this.ResList = data;
      console.log(data);
    });
    this.infoService.getJobList().subscribe(data => {
      this.JobList = data;
      console.log(data);
    });
    this.infoService.getJobTaskList().subscribe(data => {
      this.JobTaskList = data;
      console.log(data);
    });
  }
}
