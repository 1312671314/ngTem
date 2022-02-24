import { Injectable } from '@angular/core';
import { Global } from './global.service';
import { HttpHandler } from './httpHandler.service';

@Injectable()
export class ApiService {
  constructor(private httpHandler: HttpHandler, private global: Global) {}
    getUnbindGateway(data = { page: 0, size: 10 }): Promise<any> {
      return this.httpHandler.post(
        Global.getApiHost().api + 'deviceInfo/searchUnbind?page=' + data.page + '&size=' + data.size,
        data,
        this.global.getHeader()
      );
    }
    

    
    createDeviceInfo(id: any): Promise<any> {
      return this.httpHandler.get(
        Global.getApiHost().api + 'gatewayInfo/findById/'+id,this.global.getHeader()
      );
    }
    getList(data = { page: 0, size: 10 }): Promise<any> {
      return this.httpHandler.post(
        Global.getApiHost().api + 'gateway/serach?page=' + data.page + '&size=' + data.size,
        data,
        this.global.getHeader()
      );
    }
    


  login(loginInfo: any): Promise<any> {
    return this.httpHandler.post(Global.getApiHost().api + 'account/login', loginInfo, this.global.getHeader());
  }

  uploadFile(data: any): Promise<any> {
    return this.httpHandler.post(Global.getApiHost().api + 'fileUpload/uploadByFormData', data, this.global.getHeader());
  }

  searchDataAddId(data: any) {
    if (this.global.getUserInfo()) {
      switch (this.global.getUserInfo().category) {
        case 'ORG':
          data.orgId = this.global.getUserInfo().orgId;
          break;
        case 'OP':
          data.operateId = this.global.getUserInfo().operateId;
          break;
      }
      return data;
    } else {
      return data;
    }
  }
  
}
