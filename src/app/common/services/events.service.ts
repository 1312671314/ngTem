import { Injectable } from '@angular/core';
import { from, Subject } from 'rxjs';

/**
 * Send and receive events with the .on .broadcast syntax.
 */
@Injectable()
export class EventsService {
  constructor() {
    this.listeners = {};
    this.eventsSubject = new Subject();
    this.events = from(this.eventsSubject);
    this.events.subscribe(({ name, args }: any) => {
      if (this.listeners[name]) {
        for (const listener of this.listeners[name]) {
          listener(...args);
        }
      }
    });
  }

  static EVENT_NDEF = 'ndef-mime';
  private listeners: any;
  private eventsSubject: Subject<any>;
  private events: any;

  /**
   * Listens an event and broadcasts it to the listeners.
   * @param  {string} name Event name
   * @param  {any} listener Function to call when receiving an event
   */
  on(name: string, listener: any): void {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }
    this.listeners[name].push(listener);
  }

  /**
   * Emits an event to all the listeners.
   * @param {string} name Name of the event to broadcast
   * @param {Array<any>} args Payload of arguments to send.
   */
  broadcast(name: string, ...args: Array<any>): void {
    this.eventsSubject.next({
      name,
      args
    });
  }

  /**
   * Destroys the listener from the listener list.
   * @param  {string} name Event name
   * @param  {any} listener Callback function to delete
   */
  destroyListener(name: string, listener: any): void {
    if (this.listeners[name] && this.listeners[name].indexOf(listener) > -1) {
      this.listeners[name].splice(this.listeners[name].indexOf(listener), 1);
    }
  }
}
