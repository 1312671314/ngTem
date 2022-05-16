import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent {
  // tableType;
  allChecked = false;
  indeterminate = false;
  displayData: any;
  @Input() dataList: any;
  @Input() tableType: any;
  @Input() theadList: any;
  @Input() total: any;
  @Input() pageIndex: any;
  @Input() pageSize: any;
  @Input() keyNameList: any;
  @Input() showPages: any;
  @Input() NoDataResult: any;
  @Input() content: any;
  @Output() pageIndexOut = new EventEmitter();
  @Output() checkOut = new EventEmitter();
  @Output() editFuncOut = new EventEmitter();
  @Output() viewFuncOut = new EventEmitter();
  @Output() checkBoxOut = new EventEmitter();
  @Output() popUpFunOut = new EventEmitter();
  @Output() spreadOutFun = new EventEmitter();
  @Output() viewImgOut = new EventEmitter();

  constructor() {
    this.tableType = this.tableType ? this.tableType : 'ajaxTable';
    this.NoDataResult = this.NoDataResult ? this.NoDataResult : '未查询到数据';
    console.log(this.content);
  }

  searchData() {
    this.pageIndexOut.emit(this.pageIndex);
  }
  checkFun(item: any) {
    // 启用停用
    this.checkOut.emit(item);
  }
  editFun(item: any, index = null) {
    item.btnIndex = index;
    this.editFuncOut.emit(item);
  }

  viewImg(item: any, imgType: any) {
    // item.imgList = imgList;
    item.imgType = imgType;
    this.viewImgOut.emit(item);
  }

  popUpFun(item: any) {
    this.popUpFunOut.emit(item);
  }

  spreadFun(list: any) {
    this.spreadOutFun.emit(list);
  }

  viewFun(item: any, type = null) {
    if (type) {
      item.btnType = type;
    }
    this.viewFuncOut.emit(item);
  }

  checkBoxFun(list: any) {
    // console.log(list);
    this.checkBoxOut.emit(list);
  }

  currentPageDataChange($event: any): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  setNameLineClass(len: number) {
    console.log(len);
    return len * 100 + 'px';
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter((value: any) => !value.disabled).every((value: any) => value.checked === true);
    const allUnChecked = this.displayData.filter((value: any) => !value.disabled).every((value: any) => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
    this.checkBoxFun(this.displayData);
  }

  onlyCheckBoxFun(item: any) {
    console.log(item);
    this.checkBoxFun(item);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach((data: { disabled: any; checked: boolean }) => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  call(item: any, btn?: any, index?: any) {
    // console.log(item);
    // console.log(btn);
    // console.log(index);
    this.callFunc(btn.click, item);
  }

  callFunc(func: any, arg?: any) {
    func.call(this.content, arg);
  }
}
