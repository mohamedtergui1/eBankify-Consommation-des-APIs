import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { addTransaction } from '../actions/transaction.actions';
import { map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../index';
import { selectTransactions } from '../selectors/transaction.selectors';

@Injectable()
export class TransactionEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  limitTransactions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTransaction),
      withLatestFrom(this.store.select(selectTransactions)),
      map(([action, transactions]) => {
        if (transactions.length >= 10) {
          // Afficher un message d'erreur ou empêcher l'ajout
          return { type: '[Transaction] Limit Reached' };
        }
        return action;
      })
    )
  );
}