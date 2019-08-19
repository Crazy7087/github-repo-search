import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { GithubRepoSearchComponent } from "../app/github-repo-search/github-repo-search.component";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, GithubRepoSearchComponent]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(GithubRepoSearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'githubRepoSearch'`, () => {
    const fixture = TestBed.createComponent(GithubRepoSearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("githubRepoSearch");
  });

  it("should render title in a h1 tag", () => {
    const fixture = TestBed.createComponent(GithubRepoSearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      "githubRepoSearch!"
    );
  });
});
