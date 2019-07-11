import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDetailService } from '../services/user-detail.service';
import { UserDetailsConfig } from '../shared/interfaces/users.config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName: string;
  clientsData: UserDetailsConfig[];
  client: UserDetailsConfig = null;
  userDetailsSubscription: Subscription;
  errorDetails: string;
  constructor(private route: ActivatedRoute,
    private userDetailService: UserDetailService) {
  }

  ngOnInit() {
    this.userName = this.route.snapshot.params["name"];
    this.userDetailsSubscription = this.userDetailService.getUserDetails()
      .subscribe(data => this.clientsData = data,
        error => this.errorHandler(error)
      )
  }
  //Method for handling Error
  errorHandler(error:any) {
    console.log(error);
    this.errorDetails = "Something went wrong, Please try again later";
  }
  // method after clicking on userslist
  onUserClick(user: UserDetailsConfig) {
    this.client = user;
  }

  //unsubscribing observable to prevent memory leaks
  ngOnDestroy() {
    this.userDetailsSubscription.unsubscribe();
  }

}
