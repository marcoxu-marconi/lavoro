import { Component, Input } from '@angular/core';
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

  @Input() selectedWeek: any;

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


  showWorkWeek(): void {
    console.log(this.selectedWeek);
  }
/*   modal(){
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }
 */
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
