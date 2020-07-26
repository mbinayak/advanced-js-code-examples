'use strict';
/**
 * Event handler
 */

class EventHandler {
    events;

    constructor() {
        this.events = {};
    }
    
    registerEventHandler(event, eventHandler) {
        if (!event) {
            throw new Error('Event name cannot be empty');
        }

        if (typeof eventHandler !== 'function') {
            throw new Error('eventHandler must be a function');
        }

        this.events[event] = this.events[event] || {};
        const handlerId = Symbol(event);
        this.events[event][handlerId] = eventHandler;

        return handlerId;
    }

    unregisterEventHandler(event, handlerId) {
        success = false;
        if (this.events[event] && this.events[event][handlerId]) {
            delete this.events[event][handlerId];
            success = true;
        }

        return success;
    }

    on(event, callback) {
        return this.registerEventHandler(event, callback);
    }
    
    emit(event) {
        if (!this.events[event]) {
            return;
        }
        
        for (handlerId in this.events[event]) {
            this.events[event][handlerId](); // call callback
        }
    }
}
 
const eventHandler = new EventLoop();

eventHandler.on('event1', () => {

});