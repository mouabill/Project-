import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastService } from '../toast/toast.service';
import {Requests} from '../nav-bar/requests.model';
import { DISABLED } from '@angular/forms/src/model';

export interface IRequest {
  title: string;
  time: string;
  editMode: boolean;
}

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  disableAddButton = false;
  requests: Array<Requests> = [];
  constructor(private toastService: ToastService) { }

 async ngOnInit() {

    this.requests = [
      {
        title: 'Spiderman Homecoming',
        time: '5/10/2019',
        editMode: false
      },
      {
        title: 'How to Kill a Mocking Bird',
        time: '6/7/2019',
        editMode: false
      }
    ];
    const requests = JSON.parse(localStorage.getItem('requests'));
    if (requests && requests.length > 0) {
      this.requests = requests;
    }
  }

  addRequest() {
   this.requests.unshift({
    title: null,
    time: null,
    editMode: true
   });

   this.disableAddButton = true;

  }

  delete(index: number) {
    this.requests.splice(index, 1);
    this.saveToLocalStorage();
  }

  deleteAll(index: number) {
    this.requests.splice(index, 1000000000000000);
    this.saveToLocalStorage();
  }

  edit(index: number) {
    this.requests[0].editMode = true;
    this.saveToLocalStorage();
  }

  save() {
    this.requests[0].editMode = false;
    this.disableAddButton = false;
    this.saveToLocalStorage();
    this.toastService.showToasts('success', 4000, 'Thanks for submitting your requests!');
  }

  saveToLocalStorage() {
    const requests = localStorage.setItem('requests', JSON.stringify(this.requests));
  }

}
