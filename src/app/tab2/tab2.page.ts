import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public globalvar: GlobalvarService,
    private route: ActivatedRoute) {
      this.dataglobal = this.globalvar.getData();
      this.datatemp = this.dataglobal;
    }


  dataglobal : any;
  judul = "";
  mergetgl = "";
  isi = "";
  nilai = "";
  datatambah : any;
  datatemp : any;

  btnfav(i: any) {
    this.datatemp[i].favorite = true;
    this.globalvar.setData(this.datatemp);
    this.dataglobal = this.globalvar.getData();
  }
}
