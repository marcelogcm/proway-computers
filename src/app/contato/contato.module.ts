import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe,  } from 'ngx-mask';
import { IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    ContatoComponent
  ],
  imports: [
    CommonModule,
    ContatoRoutingModule, 
    ReactiveFormsModule,
    NgxMaskDirective, 
    NgxMaskPipe
   
    
  ]
})
export class ContatoModule { }

