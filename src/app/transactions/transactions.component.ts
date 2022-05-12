import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
//import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
//import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions: any;
  countTransactions:any
  accounts: any;
  countAccounts:any;
  owners:any;
  countOwners:any;
  balances:any;
  dashboard: any;
  linkid:any;
  opc:any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {


  }

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
    this.logout();
  }

  logout() {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

  linkidFunction(data:any){
    this.linkid=data;//aqui cambiar por data en lugar de id "a0192337-b8a7-45b0-832d-0eb8aa076d0b"
    this.getTransactions();
    this. getAccounts();
    this.getOwners();
    this.getBalance();
  }

  getTransactions(){
    fetch(`/api/transaction/${this.linkid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {this.transactions=data;this.countTransactions=Object.keys(this.transactions).length;console.log(this.transactions)})
    .catch(error => console.error('Error:', error))

  }

  getAccounts(){
    fetch(`/api/account/${this.linkid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {this.accounts=data;this.countAccounts=Object.keys(this.accounts).length;console.log(this.accounts)})
    .catch(error => console.error('Error:', error))

    
  }

  getOwners(){
    fetch(`/api/owner/${this.linkid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {this.owners=data;this.countOwners=Object.keys(this.owners).length;console.log(this.owners)})
    .catch(error => console.error('Error:', error))

  }

  getBalance(){
    fetch(`/api/balance/${this.linkid}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {this.balances=data;console.log(this.balances)})
    .catch(error => console.error('Error:', error))
  }

  setFlag(opc:any){
    this.opc=opc;
  }
}




