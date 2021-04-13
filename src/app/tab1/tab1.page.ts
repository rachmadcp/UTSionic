import { Component } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
  cek = false;

  addNote(){
    this.datatambah = {
      judul : this.judul,
      tanggal : this.mergetgl,
      isi : this.isi,
      nilai : this.nilai
    }
    this.datatemp.push(this.datatambah);
    this.globalvar.setData(this.datatemp);
    this.dataglobal = this.globalvar.getData();
    this.cek = true;
  }

  ngOnInit() {
    this.cek = false;
  }

}
