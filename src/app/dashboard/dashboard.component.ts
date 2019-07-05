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
  usersData : UserDetailsConfig[];
  userDetailsSubscription: Subscription; 
  errorDetails : String ;
  constructor(private route: ActivatedRoute,
    private userDetailService: UserdetailService) {
   }

  ngOnInit() {
    this.userName= this.route.snapshot.params["name"] ;
   this.userDetailsSubscription= this.userDetailService.getUserDetails()
    .subscribe(data => this.usersData = data,
      error => this.errorHandler()
    )}
    //Method for handling Error
    errorHandler(){
      this.errorDetails  = "Something went wrong, Please try again later";
    }
    //unsubscribing observable to prevent memory leaks
    ngOnDestroy(){
      this.userDetailsSubscription.unsubscribe();
   }

}
