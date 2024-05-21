import { Injectable } from '@angular/core';

// This interface is optional, showing how you can add strong typings for custom globals.
// Just use "Window" as the type if you don't have custom global stuff
export interface ICustomWindow extends Window {
    [x: string]: any;
    // [x: string]: any;
    __custom_global_stuff: string;
}

function getWindow (): any {
    return window;
}

@Injectable({
    providedIn:'root'
})
export class WindowRefService {
    get nativeWindow (): ICustomWindow {
        return getWindow();
    }
}
