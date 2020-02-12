import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//PrimeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

//Components for oef 2
import { Oef2PageComponent } from '../oef2-page/oef2-page.component';

import { Marien2Component } from './marien2/marien2.component';
import { Yoncalik2Component } from './yoncalik2/yoncalik2.component';
import { Abrar2Component } from './abrar2/abrar2.component';
import { Vanriel2Component } from './vanriel2/vanriel2.component';
import { Elmoufid2Component } from './elmoufid2/elmoufid2.component';
import { Coucke2Component } from './coucke2/coucke2.component';
import { Martens2Component } from './martens2/martens2.component';
import { VanDriel2Component } from './van-driel2/van-driel2.component';
import { Minta2Component } from './minta2/minta2.component';
import { VanGoethem2Component } from './van-goethem2/van-goethem2.component';
import { Verschooren2Component } from './verschooren2/verschooren2.component';
import { Aouraghe2Component } from './aouraghe2/aouraghe2.component';
import { Yilmaz2Component } from './yilmaz2/yilmaz2.component';
import { Baeten2Component } from './baeten2/baeten2.component';
import { Vandenheuvel2Component } from './vandenheuvel2/vandenheuvel2.component';
import { Claes2Component } from './claes2/claes2.component';
import { Boeckx2Component } from './boeckx2/boeckx2.component';
import { Dejonghe2Component } from './dejonghe2/dejonghe2.component';
import { Fruhschulz2Component } from './fruhschulz2/fruhschulz2.component';
import { Gokce2Component } from './gokce2/gokce2.component';
import { Christianen2Component } from './christianen2/christianen2.component';
import { Uenk2Component } from './uenk2/uenk2.component';
import { VanRysselberghe2Component } from './van-rysselberghe2/van-rysselberghe2.component';
import { Vinken2Component } from './vinken2/vinken2.component';
import { VanOpstal2Component } from './van-opstal2/van-opstal2.component';
import { Faes2Component } from './faes2/faes2.component';
import { Tobback2Component } from './tobback2/tobback2.component';
import { Wieselblad2Component } from './wieselblad2/wieselblad2.component';
import { Shani2Component } from './shani2/shani2.component';
import { Bernaerts2Component } from './bernaerts2/bernaerts2.component';
import { Broos2Component } from './broos2/broos2.component';
import { Elmurzayev2Component } from './elmurzayev2/elmurzayev2.component';
import { Lobet2Component } from './lobet2/lobet2.component';

@NgModule({
  declarations: [
    Oef2PageComponent,
    Marien2Component,
    Yoncalik2Component,
    Abrar2Component,
    Vanriel2Component,
    Elmoufid2Component,
    Coucke2Component,
    Martens2Component,
    VanDriel2Component,
    Minta2Component,
    VanGoethem2Component,
    Verschooren2Component,
    Aouraghe2Component,
    Yilmaz2Component,
    Baeten2Component,
    Vandenheuvel2Component,
    Claes2Component,
    Boeckx2Component,
    Dejonghe2Component,
    Fruhschulz2Component,
    Gokce2Component,
    Christianen2Component,
    Uenk2Component,
    VanRysselberghe2Component,
    Vinken2Component,
    VanOpstal2Component,
    Faes2Component,
    Tobback2Component,
    Wieselblad2Component,
    Shani2Component,
    Bernaerts2Component,
    Broos2Component,
    Elmurzayev2Component,
    Lobet2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    //PrimeNG modules
    PanelModule,
    ButtonModule,
    ToolbarModule,
  ],
  exports: [
    Oef2PageComponent
  ]
})
export class Oef2Module { }
