import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/common/services/api.service';
import { EnumService } from 'src/app/common/services/enum.serveice';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-module-three-page-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class PageAddComponent implements OnInit {
  public teadList: any;
  public keyNameList: any;
  public total: number;
  public dataSet: any;
  public isVisible: boolean;
  form!: FormGroup;
  submitting = false;
  pageIndex = 0;
  pageSize = 10;

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private msg: NzMessageService,
    private router: Router,
    private modal: ModalHelper,
    private apiService: ApiService,
    private enumService: EnumService
  ) {
    
      this.teadList=[{"name":"序号","type":"index"},{"name":"联网单位"},{"name":"设备类型"},{"name":"安装位置"},{"name":"上报时间"},{"name":"消息类型"},{"name":"处理状态"},{"name":"最新处理人"},{"name":"故障次数"},{"name":"处理结果"},{"name":"操作","oneBtn":true}];
      this.keyNameList=[{"type":"index","name":"index"},{"type":"text","name":"orgName"},{"type":"text","name":"type"},{"type":"text","name":"place"},{"type":"time","name":"lastReportTime"},{"type":"text","name":"name"},{"type":"text","name":"checkResultText"},{"type":"text","name":"checkUserName"},{"type":"text","name":"count"},{"type":"tooltip","name":"checkRemark","allText":"checkRemark"},{"type":"buttonList","buttons":[{"text":"详情","index":3}]}];
      this.total=0;
      this.dataSet=[];
      this.isVisible=false;
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

  ngOnInit(): void {
    
    const data = {
      page: this.pageIndex - 1,
      size: this.pageSize,
    };

    this.getList(data);
    this.search();

    this.form = this.fb.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      goal: [null, [Validators.required]],
      standard: [null, [Validators.required]],
      client: [null, []],
      invites: [null, []],
      weight: [null, []],
      public: [1, [Validators.min(1), Validators.max(3)]],
      publicUsers: [null, []]
    });
  }

  submit(): void {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.msg.success(`提交成功`);
      this.cdr.detectChanges();
    }, 1000);
  }

  getList(data:any){
  }


  
}



