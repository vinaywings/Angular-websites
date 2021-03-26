import { Component, Input, OnInit } from '@angular/core';
import { TwoWayBindingService } from './two-way-binding.service';

export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface UsersData {
  data: Data;
  support: Support;
}

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  // @Input() usersData: string
  userData: UsersData;
  constructor(private toWayBindingService: TwoWayBindingService) {}

  ngOnInit(): void {}

  getUsers() {
    this.toWayBindingService.getUsers().subscribe((user: UsersData) => {
      this.userData = {
        data: {
          id: user.data.id,
          first_name: user.data.first_name,
          last_name: user.data.last_name,
          email: user.data.email,
          avatar: user.data.avatar,
        },
        support: {
          url: user.support.url,
          text: user.support.text,
        },
      };
    });
  }

  getUser = function (data: any) {
    console.log(data);
  };
}
