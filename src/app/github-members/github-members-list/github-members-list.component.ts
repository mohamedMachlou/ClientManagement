import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-github-members-list',
  templateUrl: './github-members-list.component.html',
  styleUrl: './github-members-list.component.css',
})
export class GithubMembersListComponent implements OnInit {
  users: Member[] = [];
  search: string = ' ';
  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.getAllMemebers();
  }

  getAllMemebers() {
    this.membersService.getMmembers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }

  searchUsers() {
    if (this.search) {
      this.membersService.searchMember(this.search).subscribe((res) => {
        this.users = res.items;
      });
      this.getAllMemebers();
      this.search = '';
    } else {
      this.getAllMemebers();
    }
  }
}
