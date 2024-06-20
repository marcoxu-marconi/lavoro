import { Component } from '@angular/core';
import { InfoProviderService } from '../../info-provider.service';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
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

  selectCommessa(commessa:any):void{
    this.selectedCommessa=commessa;
  }

  modal(){
    this.showModal = !this.showModal;
    console.log(this.showModal);
  }

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
