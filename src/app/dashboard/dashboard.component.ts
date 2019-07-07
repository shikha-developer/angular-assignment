import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserdetailService } from '../services/userdetail.service';
import { UserDetailsConfig } from '../users.config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName:String;
  clientsData : UserDetailsConfig[];
  client:UserDetailsConfig = null;
  userDetailsSubscription: Subscription; 
  errorDetails : String ;
  constructor(private route: ActivatedRoute,
    private userDetailService: UserdetailService) {
   }

  ngOnInit() {
    this.userName= this.route.snapshot.params["name"] ;
   this.userDetailsSubscription= this.userDetailService.getUserDetails()
    .subscribe(data => this.clientsData = data,
      error => this.errorHandler()
    )}
    //Method for handling Error
    errorHandler(){
      this.errorDetails  = "Something went wrong, Please try again later";
    }
    // method after clicking on userslist
    onUserClick(user:UserDetailsConfig){
      this.client = user;
    }

    //unsubscribing observable to prevent memory leaks
    ngOnDestroy(){
      this.userDetailsSubscription.unsubscribe();
    }

}
