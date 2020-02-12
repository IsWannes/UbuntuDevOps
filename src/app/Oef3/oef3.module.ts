import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//primeNG
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
//Voeg in deze module de oef3 componenten toe !
//doe dit als volgt =>  ng generate component oef3/Naam3

//Componenten
import { Oef3PageComponent } from '../Oef3-page/oef3-page.component';
import { Abrar3Component } from './abrar3/abrar3.component';
import { Aouraghe3Component } from './aouraghe3/aouraghe3.component';
import { Baeten3Component } from './baeten3/baeten3.component';
import { Bernaerts3Component } from './bernaerts3/bernaerts3.component';
import { Boeckx3Component } from './boeckx3/boeckx3.component';
import { Broos3Component } from './broos3/broos3.component';
import { Buchhausel3Component } from './buchhausel3/buchhausel3.component';
import { Christianen3Component } from './christianen3/christianen3.component';
import { Claes3Component } from './claes3/claes3.component';
import { Coenen3Component } from './coenen3/coenen3.component';
import { Coucke3Component } from './coucke3/coucke3.component';
import { Dejonghe3Component } from './dejonghe3/dejonghe3.component';
import { Elmoufid3Component } from './elmoufid3/elmoufid3.component';
import { Elmurzayev3Component } from './elmurzayev3/elmurzayev3.component';
import { Faes3Component } from './faes3/faes3.component';
import { Lobet3Component } from './lobet3/lobet3.component';
import { Martens3Component } from './martens3/martens3.component';
import { Minta3Component } from './minta3/minta3.component';
import { Shani3Component } from './shani3/shani3.component';
import { Swolfs3Component } from './swolfs3/swolfs3.component';
import { Tobback3Component } from './tobback3/tobback3.component';
import { Uenk3Component } from './uenk3/uenk3.component';
import { Vandenheuvel3Component } from './vandenheuvel3/vandenheuvel3.component';
import { Vandriel3Component } from './vandriel3/vandriel3.component';
import { Vangoethem3Component } from './vangoethem3/vangoethem3.component';
import { Vanopstal3Component } from './vanopstal3/vanopstal3.component';
import { Vanriel3Component } from './vanriel3/vanriel3.component';
import { Vanrysselberghe3Component } from './vanrysselberghe3/vanrysselberghe3.component';
import { Verschooren3Component } from './verschooren3/verschooren3.component';
import { Vinken3Component } from './vinken3/vinken3.component';
import { Wieselblad3Component } from './wieselblad3/wieselblad3.component';
import { Yilmaz3Component } from './yilmaz3/yilmaz3.component';
import { Yoncalik3Component } from './yoncalik3/yoncalik3.component';
import { AbrarChildComponent } from './abrar3/abrar-child/abrar-child.component';
import { AouragheChildComponent } from './aouraghe3/aouraghe-child/aouraghe-child.component';
import { BaetenChildComponent } from './baeten3/baeten-child/baeten-child.component';
import { BernaertsChildComponent } from './bernaerts3/bernaerts-child/bernaerts-child.component';
import { BoeckxChildComponent } from './boeckx3/boeckx-child/boeckx-child.component';
import { BroosChildComponent } from './broos3/broos-child/broos-child.component';
import { BuchhauselChildComponent } from './buchhausel3/buchhausel-child/buchhausel-child.component';
import { ChristianenChildComponent } from './christianen3/christianen-child/christianen-child.component';
import { ClaesChildComponent } from './claes3/claes-child/claes-child.component';
import { CoenenChildComponent } from './coenen3/coenen-child/coenen-child.component';
import { CouckeChildComponent } from './coucke3/coucke-child/coucke-child.component';
import { DejongheChildComponent } from './dejonghe3/dejonghe-child/dejonghe-child.component';
import { ElmoufidChildComponent } from './elmoufid3/elmoufid-child/elmoufid-child.component';
import { ElmurzayevChildComponent } from './elmurzayev3/elmurzayev-child/elmurzayev-child.component';
import { FaesChildComponent } from './faes3/faes-child/faes-child.component';
import { LobetChildComponent } from './lobet3/lobet-child/lobet-child.component';
import { MartensChildComponent } from './martens3/martens-child/martens-child.component';
import { MintaChildComponent } from './minta3/minta-child/minta-child.component';
import { ShaniChildComponent } from './shani3/shani-child/shani-child.component';
import { SwolfsChildComponent } from './swolfs3/swolfs-child/swolfs-child.component';
import { TobbackChildComponent } from './tobback3/tobback-child/tobback-child.component';
import { UenkChildComponent } from './uenk3/uenk-child/uenk-child.component';
import { VandenheuvelChildComponent } from './vandenheuvel3/vandenheuvel-child/vandenheuvel-child.component';
import { VandrielChildComponent } from './vandriel3/vandriel-child/vandriel-child.component';
import { VangoethemChildComponent } from './vangoethem3/vangoethem-child/vangoethem-child.component';
import { VanopstalChildComponent } from './vanopstal3/vanopstal-child/vanopstal-child.component';
import { VanrielChildComponent } from './vanriel3/vanriel-child/vanriel-child.component';
import { VanrysselbergheChildComponent } from './vanrysselberghe3/vanrysselberghe-child/vanrysselberghe-child.component';
import { VerschoorenChildComponent } from './verschooren3/verschooren-child/verschooren-child.component';
import { VinkenChildComponent } from './vinken3/vinken-child/vinken-child.component';
import { WieselbladChildComponent } from './wieselblad3/wieselblad-child/wieselblad-child.component';
import { YilmazChildComponent } from './yilmaz3/yilmaz-child/yilmaz-child.component';
import { YoncalikChildComponent } from './yoncalik3/yoncalik-child/yoncalik-child.component';
import { Fruhschulz3Component } from './fruhschulz3/fruhschulz3.component';
import { Gokce3Component } from './gokce3/gokce3.component';
import { FruhschulzChildComponent } from './fruhschulz3/fruhschulz-child/fruhschulz-child.component';
import { GokceChildComponent } from './gokce3/gokce-child/gokce-child.component';


@NgModule({
  declarations: [
    Oef3PageComponent,
    Abrar3Component,
    Aouraghe3Component,
    Baeten3Component,
    Bernaerts3Component,
    Boeckx3Component,
    Broos3Component,
    Buchhausel3Component,
    Christianen3Component,
    Claes3Component,
    Coenen3Component,
    Coucke3Component,
    Dejonghe3Component,
    Elmoufid3Component,
    Elmurzayev3Component,
    Faes3Component,
    Lobet3Component,
    Martens3Component,
    Minta3Component,
    Shani3Component,
    Swolfs3Component,
    Tobback3Component,
    Uenk3Component,
    Vandenheuvel3Component,
    Vandriel3Component,
    Vangoethem3Component,
    Vanopstal3Component,
    Vanriel3Component,
    Vanrysselberghe3Component,
    Verschooren3Component,
    Vinken3Component,
    Wieselblad3Component,
    Yilmaz3Component,
    Yoncalik3Component,
    AbrarChildComponent,
    AouragheChildComponent,
    BaetenChildComponent,
    BernaertsChildComponent,
    BoeckxChildComponent,
    BroosChildComponent,
    BuchhauselChildComponent,
    ChristianenChildComponent,
    ClaesChildComponent,
    CoenenChildComponent,
    CouckeChildComponent,
    DejongheChildComponent,
    ElmoufidChildComponent,
    ElmurzayevChildComponent,
    FaesChildComponent,
    LobetChildComponent,
    MartensChildComponent,
    MintaChildComponent,
    ShaniChildComponent,
    SwolfsChildComponent,
    TobbackChildComponent,
    UenkChildComponent,
    VandenheuvelChildComponent,
    VandrielChildComponent,
    VangoethemChildComponent,
    VanopstalChildComponent,
    VanrielChildComponent,
    VanrysselbergheChildComponent,
    VerschoorenChildComponent,
    VinkenChildComponent,
    WieselbladChildComponent,
    YilmazChildComponent,
    YoncalikChildComponent,
    Fruhschulz3Component,
    Gokce3Component,
    FruhschulzChildComponent,
    GokceChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    HttpClientModule,
    PanelModule,
    ButtonModule,
    GalleriaModule,
    CardModule,
    InputTextModule
  ],
  exports: [
    Oef3PageComponent
  ]
})
export class Oef3Module { }
