import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ApiService } from 'src/app/common/services/api.service';
import { EnumService } from 'src/app/common/services/enum.serveice';
import { ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-module-one-page-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class PageEditComponent implements OnInit {
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
    
      this.teadList=[{"name":"序号","type":"index"},{"name":"表头1"},{"name":"表头2"},{"name":"表头3"},{"name":"表头4"},{"name":"表头5"},{"name":"表头6"},{"name":"表头7"},{"name":"表头8"},{"name":"表头9"},{"name":"操作","oneBtn":true}];
      this.keyNameList=[{"type":"index","name":"index"},{"type":"text","name":"parameter1"},{"type":"text","name":"parameter2"},{"type":"text","name":"parameter3"},{"type":"time","name":"parameter4"},{"type":"text","name":"parameter5"},{"type":"text","name":"parameter6"},{"type":"text","name":"parameter7"},{"type":"text","name":"parameter8"},{"type":"text","name":"parameter9"},{"type":"buttonList","buttons":[{"text":"详情","index":3}]}];
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



