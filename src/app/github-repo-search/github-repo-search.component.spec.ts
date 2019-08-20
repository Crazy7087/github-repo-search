import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxPaginationModule } from "ngx-pagination";
import { GithubRepoSearchComponent } from "./github-repo-search.component";

describe("GithubRepoSearchComponent", () => {
  let component: GithubRepoSearchComponent;
  let fixture: ComponentFixture<GithubRepoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GithubRepoSearchComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubRepoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
