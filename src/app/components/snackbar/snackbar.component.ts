import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations' ;
import { timer } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators'
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: '0px'
      })),
      state('visible', style({
        opacity: 1,
        bottom: '30px'
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-out'))
    ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello'
  snackVisibility: string = 'hidden'

  constructor(private ns: NotificationService) { }

  ngOnInit() {
    this.ns.notifier
      .pipe(
        tap(message => {
          this.message = message
          this.snackVisibility = 'visible'
        }),
        switchMap(message => timer(3000))
      ).subscribe(timer => this.snackVisibility = 'hidden')
  }

}
