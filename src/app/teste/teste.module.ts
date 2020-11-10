// app/feature/feature.module.ts
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { TesteComponent } from "./teste.component"; // Import all components that will be used in the lazy loaded module
import { TesteRoutingModule } from "./teste.routing"; // import the routing module

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        NativeScriptCommonModule,
        TesteRoutingModule
    ],
    declarations: [TesteComponent], // declare all components that will be used within the module
    providers: [ ] // provide all services that will be used within the module
})
export class TesteModule { }