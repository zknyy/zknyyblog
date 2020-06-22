import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ZknyyblogSharedModule } from 'app/shared/shared.module';
import { ZknyyblogCoreModule } from 'app/core/core.module';
import { ZknyyblogAppRoutingModule } from './app-routing.module';
import { ZknyyblogHomeModule } from './home/home.module';
import { ZknyyblogEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ZknyyblogSharedModule,
    ZknyyblogCoreModule,
    ZknyyblogHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ZknyyblogEntityModule,
    ZknyyblogAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class ZknyyblogAppModule {}
