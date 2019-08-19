import { Component, OnInit } from "@angular/core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Observable, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

import {
  GitHubInfo,
  GitHubRepoSearchService
} from "./github-repo-search.service";

@Component({
  selector: "app-github-repo-search",
  templateUrl: "./github-repo-search.component.html",
  styleUrls: ["./github-repo-search.component.css"],
  providers: [GitHubRepoSearchService]
})
export class GithubRepoSearchComponent implements OnInit {
  faCircle = faCircle;
  faStar = faStar;
  faSearch = faSearch;
  githubInfo$: Observable<GitHubInfo[]>;
  private searchText$ = new Subject<string>();

  search(githubRepo: string) {
    this.searchText$.next(githubRepo);
  }

  constructor(private searchService: GitHubRepoSearchService) {}

  ngOnInit() {
    this.githubInfo$ = this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(githubRepo => this.searchService.search(githubRepo))
    );
  }
}
