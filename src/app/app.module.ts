import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { BrowserModule } from '@angular/platform-browser';
import { RebirthNGModule } from 'rebirth-ng';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
// NoopAnimationsModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ROUTER_CONFIG } from './app.route';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RebirthRouterReuseStrategy } from 'rebirth-ng';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PortalComponent } from './page/portal/portal.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
  ],
  imports: [
    BrowserModule,
    // ServiceWorkerModule.register('/rebirth-ng/ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    SharedModule.forRoot(),
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


