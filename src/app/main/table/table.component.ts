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

  resList: any = [];
  JobList: any = [];
  JobTaskList: any = [];

  selectedCommessa:any;

  selectCommessa(commessa:any):void{
    this.selectedCommessa=commessa;
  }

  ngOnInit() {
    this.infoService.getResList().subscribe(data => {
      this.resList = data;
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
