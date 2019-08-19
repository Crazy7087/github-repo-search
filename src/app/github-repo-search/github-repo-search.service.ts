import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export interface GitHubInfo {
  total_count: {};
  name: string;
  description: string;
  updateDate: Date;
  language: string;
  stargazers_count: Number;
}

export const searchUrl =
  "https://api.github.com/search/repositories?per_page=5000";

function createHttpOptions(githubRepo: string) {
  const params = new HttpParams({ fromObject: { q: githubRepo } });
  return { params };
}

@Injectable()
export class GitHubRepoSearchService {
  constructor(private http: HttpClient) {}

  search(githubRepo: string): Observable<GitHubInfo[]> {
    if (!githubRepo.trim()) {
      return of([]);
    }

    const options = createHttpOptions(githubRepo);

    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        console.log(data);

        return data.items.map(
          (entry: any) =>
            ({
              total_count: data.total_count,
              name: entry.full_name,
              description: entry.description,
              updateDate: entry.updated_at,
              language: entry.language,
              stargazers_count: entry.stargazers_count
            } as GitHubInfo)
        );
      })
    );
  }
}
