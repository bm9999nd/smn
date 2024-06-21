import{A as z,B as H,C as R,D as G,E as L,F as U,G as $,H as q,M as J,N as Q,a as M,b,c as h,d as a,e as S,f as x,g as p,h as e,i as t,j as D,k as I,l as F,m as O,n as V,o as y,p as k,q as f,r as l,s as w,t as v,u as A,v as _,w as K,x as P,y as B,z as N}from"./chunk-Y4G64RRB.js";var X=n=>({"disabled d-none":n}),Y=n=>({col:"tanggal",title:"Filter berdasarkan tanggal transaksi",target:n}),W=n=>({disabled:n}),Z=n=>({col:"uraian",title:"Cari kata dalam uraian yang mengandung suatu kalimat",target:n}),ee=n=>({"text-danger":n}),te=n=>[n,"IDR","symbol","0.0","id-ID"];function ne(n,m){if(n&1&&(I(0),e(1,"div",24)(2,"div",25)(3,"div",26)(4,"h1"),l(5),t()()()(),F()),n&2){let o=k();a(5),v(" ",o.info," ")}}function ie(n,m){if(n&1){let o=V();e(0,"div",27)(1,"input",28,7),y("input",function(){let r=b(o),i=r.col,s=r.target,g=f(2);return k().checkChanged(i,g.checked),h(s.ariaDisabled=!g.checked)}),t(),e(3,"label",29),l(4),t()()}if(n&2){let o=m.col,c=m.title,r=f(2);a(),p("id","filter_"+o)("name",o),a(2),p("for",r.id),a(),v(" ",c," ")}}function ae(n,m){if(n&1&&(e(0,"span"),l(1),t()),n&2){let o=k().$implicit;a(),v(" (",o.jurnalrekening,") ")}}function re(n,m){if(n&1&&(I(0),e(1,"div",30)(2,"div",31)(3,"div",32)(4,"div",33),l(5,"Tanggal"),t(),e(6,"div",15),l(7),K(8,"date"),t()(),e(9,"div",32)(10,"div",33),l(11,"Usaha"),t(),e(12,"div",15),l(13),t()()(),e(14,"div",31)(15,"div",32)(16,"div",33),l(17,"Sumber"),t(),e(18,"div",15),l(19),x(20,ae,2,1,"span",8),t()(),e(21,"div",32)(22,"div",33),l(23,"Penerima"),t(),e(24,"div",15),l(25),t()()(),e(26,"div",34)(27,"div",32)(28,"div",35),l(29,"Kategori"),t(),e(30,"div",36),l(31),t()(),e(32,"div",32)(33,"div",35),l(34,"Akun"),t(),e(35,"div",36),l(36),t()()()(),e(37,"div",37)(38,"div",38)(39,"div")(40,"i")(41,"q"),l(42),t()()(),e(43,"div",39),l(44),K(45,"currency"),t()()(),D(46,"hr",40),F()),n&2){let o=m.$implicit;a(7),w(P(8,10,o.tanggal,"dd MMM yyyy","undefined","id-ID")),a(6),w(o.jurnalusaha),a(6),v(" ",o.sumber," "),a(),p("ngIf",o.jurnalrekening!=""),a(5),v(" ",o.penerima==null||o.penerima=="unknown"?"-":o.penerima," "),a(6),v(" ",o.kategori," "),a(5),v(" ",o.akun," "),a(6),w(o.uraian),a(),p("ngClass",_(21,ee,o.transaksi<0)),a(),v(" ",B(45,15,_(23,te,o.transaksi))," ")}}var ue=(()=>{let m=class m{constructor(c,r,i){this.app=c,this.cd=r,this.gs=i,this.info="Initialize Bos ND...",this.data=[],this.filtered=[],this.filter={uraian:{enable:!1,value:null},tanggal:{enable:!1,start:null,end:null}}}ngOnInit(){this.app.ProcessInfo.subscribe(c=>{this.info=c,this.cd.detectChanges()}),this.gs.eventSignedIn.subscribe(c=>{this.info=c?"Getting Sheets Data...":"Unauthorized Access!",this.cd.detectChanges()}),this.app.DataCollected.subscribe(c=>{let r=c.find(i=>i.table=="kas");r!=null&&(this.data=r.values),this.cd.detectChanges()})}getTable(c){c.preventDefault(),this.filtered=[];let r=this.filter.uraian,i=this.filter.tanggal,s={uraian:r.enable&&r.value!=null?r.value.toLowerCase():null,start:null,end:null};if(i.enable){if(i.start!=null){let d=new Date(i.start);d.setHours(0,0,0),s.start=d}if(i.end!=null){let d=new Date(i.end);d.setHours(23,59,59),s.end=d}}if(Object.values(s).filter(d=>d!=null).length==0){this.filtered=[];return}s.start==null&&(s.start=new Date(1970,0,1)),s.end==null&&(s.end=new Date);let u=this.data.filter((d,j)=>{if(d.tanggal==null||d.uraian==null)return;let C;if(typeof d.tanggal=="string"){let T=d.tanggal.split("/");C=new Date(T[2],T[1]-1,T[0],0,0,0),d.tanggal=C}else C=d.tanggal;let E={uraian:s.uraian!=null&&d.uraian.toString().toLowerCase().includes(s.uraian),start:C>=s.start,end:C<=s.end};if(!(!E.start||!E.end)&&(r==null||r!=null&&E.uraian))return d});u.sort((d,j)=>d.tanggal-j.tanggal),console.log(u),this.filtered=u}checkChanged(c,r){this.filter[c].enable=r}};m.\u0275fac=function(r){return new(r||m)(S(Q),S(z),S(J))},m.\u0275cmp=M({type:m,selectors:[["app-kas"]],standalone:!0,features:[A],decls:36,vars:25,consts:[["detail",""],["ctlDate",""],["start",""],["end",""],["ctlSearch",""],["uraian",""],["tmpFilter",""],["ctlTitle",""],[4,"ngIf"],[1,"container","autofit","overflow-auto","text-body",3,"ngClass"],["tabindex","-1",1,"p-2","bg-body-secondary","bg-opacity-75","rounded","sticky-top"],[1,"border","border-secondary","rounded","bg-body-tertiary",3,"submit"],[1,"p-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"row",3,"ariaDisabled","ngClass"],[1,"col"],["type","date",1,"form-control",3,"input","valueAsDate"],[1,"mx-5","my-2"],[3,"ariaDisabled","ngClass"],["type","search","placeholder","Kalimat yang akan dicari...",1,"form-control",3,"input","value"],[1,"d-flex","justify-content-center","mb-3"],["type","submit",1,"btn","btn-primary"],["data-bs-theme","light",1,"border","rounded","bg-body","bg-opacity-custom","overflow-auto"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"position-absolute","vw-100","vh-100","start-0","top-0","text-body","z-3"],[1,"d-grid","justify-content-center","align-content-center","h-100","w-100"],[1,"text-center"],[1,"form-check","fw-medium"],["type","checkbox",1,"form-check-input",3,"input","id","name"],[1,"form-check-label",3,"for"],[1,"px-3","pt-3","row","mx-0","parent","text-body-tertiary"],[1,"col-6","col-lg"],[1,"row","column-gap-2","mb-2","mb-lg-0"],[1,"col-12","col-lg-4","col-lg-3","col-xl-2","title"],[1,"col-12","col-lg"],[1,"col-3","col-lg-4","col-lg-3","col-xl-2","title"],[1,"col","text-end","text-sm-start","col-lg"],[1,"px-3","m-2"],[1,"hstack","justify-content-between","text-body"],[1,"fw-bolder",3,"ngClass"],[1,"my-0","mx-5","border-dark"]],template:function(r,i){if(r&1){let s=V();x(0,ne,6,1,"ng-container",8),e(1,"div",9)(2,"details",10,0)(4,"summary"),l(5,"Filter untuk mengambil data"),t(),e(6,"form",11),y("submit",function(u){b(s);let d=f(3);return d.open=!1,h(i.getTable(u))}),e(7,"div",12),O(8,13),e(9,"div",14,1)(11,"div",15)(12,"div"),l(13,"Dari"),t(),e(14,"input",16,2),y("input",function(){b(s);let u=f(15);return h(i.filter.tanggal.start=u.valueAsDate)}),t()(),e(16,"div",15)(17,"div"),l(18,"Hingga"),t(),e(19,"input",16,3),y("input",function(){b(s);let u=f(20);return h(i.filter.tanggal.end=u.valueAsDate)}),t()()()(),D(21,"hr",17),e(22,"div",12),O(23,13),e(24,"div",18,4)(26,"input",19,5),y("input",function(){b(s);let u=f(27);return h(i.filter.uraian.value=u.value)}),t()()(),e(28,"div",20)(29,"button",21),l(30," Terapkan! "),t()()(),x(31,ie,5,4,"ng-template",null,6,N),t(),D(33,"br"),e(34,"div",22),x(35,re,47,25,"ng-container",23),t()()}if(r&2){let s=f(10),g=f(25),u=f(32);p("ngIf",i.data.length==0),a(),p("ngClass",_(15,X,i.data.length==0)),a(7),p("ngTemplateOutlet",u)("ngTemplateOutletContext",_(17,Y,s)),a(),p("ariaDisabled",!i.filter.tanggal.enable)("ngClass",_(19,W,s.ariaDisabled=="true")),a(5),p("valueAsDate",i.filter.tanggal.start),a(5),p("valueAsDate",i.filter.tanggal.end),a(4),p("ngTemplateOutlet",u)("ngTemplateOutletContext",_(21,Z,g)),a(),p("ariaDisabled",!i.filter.uraian.enable)("ngClass",_(23,W,g.ariaDisabled=="true")),a(2),p("value",i.filter.uraian.value),a(9),p("ngForOf",i.filtered)("ngForTrackBy",i.app.tracker)}},dependencies:[q,H,R,G,L,$,U],styles:[".autofit[_ngcontent-%COMP%]{height:88%}.parent[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600}.bg-opacity-custom[_ngcontent-%COMP%]{--bs-bg-opacity: .85}"],changeDetection:0});let n=m;return n})();export{ue as KasComponent};