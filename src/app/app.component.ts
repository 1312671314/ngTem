import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TitleService, VERSION as VERSION_ALAIN } from '@delon/theme';
import { NzModalService } from 'ng-zorro-antd/modal';
import { VERSION as VERSION_ZORRO } from 'ng-zorro-antd/version';
import { filter } from 'rxjs/operators';
import { Global } from './common/services/global.service';
import { SocketHandler } from './common/services/socket-handler.service';

@Component({
  selector: 'app-root',
  template: ` <router-outlet></router-outlet> `
})
export class AppComponent implements OnInit {
  ws: any;
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
    private global: Global,
    private socketHandler: SocketHandler // private eventsService: EventsService
  ) {
    renderer.setAttribute(el.nativeElement, 'ng-alain-version', VERSION_ALAIN.full);
    renderer.setAttribute(el.nativeElement, 'ng-zorro-version', VERSION_ZORRO.full);
    this.global.init();
  }

  ngAfterViewInit() {
    if ('WebSocket' in window) {
      if (this.global.isLogin()) {
        this.socketHandler.init();
      }
    }
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(evt => {
          console.log(evt);
          return evt instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      });
  }
}
