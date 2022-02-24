import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';
import { Global } from 'src/app/common/services/global.service';
import { SocketHandler } from 'src/app/common/services/socket-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/common/services/api.service';
@Component({
  selector: 'layout-basic',
  templateUrl: './basic.component.html'
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/header-logo1.png`,
    logoCollapsed: `./assets/header-logo.png`
  };
  searchToggleStatus = false;
  showSettingDrawer = !environment.production;
  centerName = '';
  get user(): User {
    return this.settings.user;
  }
  public type = 'platform';
  status: any;
  title: any;
  constructor(
    private settings: SettingsService,
    private socketHandler: SocketHandler,
    private global: Global,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    if (this.global.isLogin()) {
      // switch (this.global.getUserInfo().category) {
      //   case 'OP':
      //     this.type = 'operate';
      //     break;
      //   case 'ORG':
      //     this.type = 'org';
      //     this.centerName = '消易云消防数字化SaaS服务平台——' + '[' + this.global.getUserInfo().orgName + ']';
      //     break;
      //   case 'PLATFORM':
      //     this.centerName = '消易云消防数字化SaaS服务平台';
      //     break;
      // }
      this.centerName = '管理后台名称';
    }
  }

  showMap() {
    this.router.navigate([this.type + '/real-time-map'], {
      relativeTo: this.activatedRoute
    });
  }

  goMessage() {
    this.router.navigateByUrl('../setting/message');
  }
}
