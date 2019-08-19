import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { GithubRepoSearchComponent } from "./github-repo-search/github-repo-search.component";

@NgModule({
  declarations: [AppComponent, GithubRepoSearchComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    FontAwesomeModule
  ],
  exports: [NgxPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
