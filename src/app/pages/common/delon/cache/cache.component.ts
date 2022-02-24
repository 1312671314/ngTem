import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/common/services/api.service';
import { EnumService } from 'src/app/common/services/enum.serveice';

@Component({
  selector: 'app-delon-cache',
  templateUrl: './cache.component.html',
  styleUrls: ['./cache.component.css']
})
export class CacheComponent implements OnInit {
  public teadList: any;
  public keyNameList: any;
  public total: number;
  public dataSet: any;
  public isVisible: boolean;
  pageIndex = 0;
  pageSize = 10;
  constructor(
    private msg: NzMessageService,
    private router: Router,
    private modal: ModalHelper,
    private apiService: ApiService,
    private enumService: EnumService
  ) {
    this.teadList = [
      { name: '序号', type: 'index' },
      { name: '联网单位' },
      { name: '设备类型' },
      { name: '安装位置' },
      { name: '上报时间' },
      { name: '消息类型' },
      { name: '处理状态' },
      { name: '最新处理人' },
      { name: '故障次数' },
      { name: '处理结果' },
      { name: '操作', oneBtn: true }
    ];
    this.keyNameList = [
      { type: 'index', name: 'index' },
      { type: 'text', name: 'orgName' },
      { type: 'text', name: 'type' },
      { type: 'text', name: 'place' },
      { type: 'time', name: 'lastReportTime' },
      { type: 'text', name: 'name' },
      { type: 'text', name: 'checkResultText' },
      { type: 'text', name: 'checkUserName' },
      { type: 'text', name: 'count' },
      { type: 'tooltip', name: 'checkRemark', allText: 'checkRemark' },
      { type: 'buttonList', buttons: [{ text: '详情', index: 3 }] }
    ];
    this.total = 0;
    this.dataSet = [];
    this.isVisible = false;
  }

  ngOnInit(): void {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize
    };
    this.getList(data);
    this.search();
  }
  search() {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize
    };
    this.getData(data);
  }

  rest() {
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize
    };
  }

  getData(data: any) {
    console.log(data);
  }

  turnPage(page: number) {}

  editFun(item: any) {}

  getList(data: any) {
    this.apiService.getList(data).then(res => {
      console.log(res);
    });
  }
}
