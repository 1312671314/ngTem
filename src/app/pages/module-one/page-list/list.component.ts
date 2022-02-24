import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/common/services/api.service';
import { EnumService } from 'src/app/common/services/enum.serveice';

@Component({
  selector: 'app-module-one-page-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PageListComponent implements OnInit {
  public teadList: any;
  public keyNameList: any;
  public total: number;
  public dataSet: any;
  public isVisible: boolean;
  pageIndex = 0;
  pageSize = 10
  constructor(
    private msg: NzMessageService,
    private router: Router,
    private modal: ModalHelper,
    private apiService: ApiService,
    private enumService: EnumService
  ) {
    
      this.teadList=[{"name":"序号","type":"index"},{"name":"表头1"},{"name":"表头2"},{"name":"表头3"},{"name":"表头4"},{"name":"表头5"},{"name":"表头6"},{"name":"表头7"},{"name":"表头8"},{"name":"表头9"},{"name":"操作","oneBtn":true}];
      this.keyNameList=[{"type":"index","name":"index"},{"type":"text","name":"parameter1"},{"type":"text","name":"parameter2"},{"type":"text","name":"parameter3"},{"type":"time","name":"parameter4"},{"type":"text","name":"parameter5"},{"type":"text","name":"parameter6"},{"type":"text","name":"parameter7"},{"type":"text","name":"parameter8"},{"type":"text","name":"parameter9"},{"type":"buttonList","buttons":[{"text":"详情","index":3}]}];
      this.total=0;
      this.dataSet=[];
      this.isVisible=false;
  }

  ngOnInit(): void {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };
    this.getList(data);
    this.search();
  }
  search() {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };
    this.getData(data)
  }

  rest() {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };
  }

  getData(data: any){
    console.log(data)
  }

  turnPage(page:number){

  }

  editFun(item:any){

  }

  getList(data:any){
  }


  
}
