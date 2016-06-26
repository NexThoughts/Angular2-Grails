/**
 * Created by hitenpratap on 23/06/16.
 */
/// <reference path="typings/angular2/angular2.d.ts" />

import {
    Component,
    View,
    bootstrap,
} from "angular2/angular2";

@Component({
    selector: 'hello-world'
})
@View({
    template: '<h1>Hello HPS {{ name }}</h1>'
})
class HelloWorld {
    name:string;
    constructor() {
        this.name = 'World! Angular2 is just AWESOME!!!';
    }
}

bootstrap(HelloWorld);
