import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxPaginationModule } from "ngx-pagination";
import { GithubRepoSearchComponent } from "../app/github-repo-search/github-repo-search.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, GithubRepoSearchComponent],
      imports: [HttpClientModule, NgxPaginationModule, FontAwesomeModule]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'githubRepoSearch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Github Search");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h2").textContent).toContain(
      "Github Search"
    );
  });
});
