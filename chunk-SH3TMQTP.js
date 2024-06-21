import{A as F,B as _,C as O,D as U,E as R,F as $,G as V,H as q,I as Q,J as W,K as X,L as Y,M as Z,N as M,S as ee,T as te,a as T,b as z,c as x,d as w,e as N,f as o,g as I,h as k,i as u,j as G,k as n,l as r,m as v,n as j,o as K,p as A,q as B,r as g,s as P,t as H,u as J,v as b,w as d,x as D,y as h,z as L}from"./chunk-CLNNWBWW.js";var le=["*"],E=(()=>{let m=class m{constructor(i){this.cd=i,this.cssPagination="",this.byItem=10,this.byItemPlaceholder="0",this.paginatedData=new N,this.pageChanged=new N,this.pageCtl={total:1,current:1}}ngOnChanges(i){let t=i;t.resetSignal&&this.resetSignal&&(this.pageCtl.current=1),(t.data!=null||t.byItem!=null)&&this.paginated()}pagingChanged(i){this.byItem=i.target.value,this.paginated(),this.pageChanged.emit(this.pageCtl.current)}tracker(i,t){return t}paginated(){let i=this.data,t=i.length,e=this.byItem,l=this.pageCtl,c=Math.ceil(t/e);l.total=c<l.current?l.current:c;let a=(l.current-1)*e,C=a+Number(e)-1;C>t&&(C=t);let f=i.filter((y,S)=>S>=a&&S<=C);return typeof this.rowIndexName<"u"&&f.forEach((y,S)=>{let ae=S+a+1;y[this.rowIndexName]=ae}),console.log({rows:{total:i.length+" rows",start:"from row "+a,end:"to row "+C},page:{dividedBy:e+" rows",total:c+" pages",current:"page "+l.current},data:{raw:i,result:f}}),this.paginatedData.emit(f),f}onIncrement(i,t){let e=this.pageCtl.current,l=this.pageCtl.total,c=i=="back"?-1:1,a=e+c;a<1||t=="fast"&&i=="back"?a=1:(a>l||t=="fast"&&i=="next")&&(a=l),this.pageCtl.current=a,this.pageChanged.emit(this.pageCtl.current)}};m.\u0275fac=function(t){return new(t||m)(I(V))},m.\u0275cmp=T({type:m,selectors:[["api-pagination"]],inputs:{data:"data",cssPagination:"cssPagination",byItem:"byItem",byItemPlaceholder:"byItemPlaceholder",rowIndexName:"rowIndexName",resetSignal:"resetSignal"},outputs:{paginatedData:"paginatedData",pageChanged:"pageChanged"},standalone:!0,features:[z,F],ngContentSelectors:le,decls:22,vars:7,consts:[[1,"p-2","mx-0","text-nowrap","bg-body-secondary","hstack","justify-content-between"],[1,"input-group"],[1,"input-group-text"],["type","number","min","1","inputmode","numeric",1,"form-control","ctl-num",3,"input","value","placeholder"],[1,"hstack"],[1,"btn-group"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"bi","bi-chevron-double-left"],["type","button",1,"btn","btn-secondary","rounded-0",3,"click"],[1,"bi","bi-chevron-left"],["type","number","inputmode","numeric","min","1",1,"form-control","inp-page","rounded-0",3,"max","value"],[1,"input-group-text","rounded-0"],[1,"bi","bi-chevron-right"],[1,"bi","bi-chevron-double-right"]],template:function(t,e){t&1&&(H(),J(0),n(1,"div",0)(2,"div")(3,"div",1)(4,"span",2),d(5," Items/Page "),r(),n(6,"input",3),g("input",function(c){return e.pagingChanged(c)}),r()()(),n(7,"div",4)(8,"div",5)(9,"button",6),g("click",function(){return e.onIncrement("back","fast")}),v(10,"i",7),r(),n(11,"button",8),g("click",function(){return e.onIncrement("back","normal")}),v(12,"i",9),r()(),n(13,"div",1),v(14,"input",10),n(15,"div",11),d(16),r()(),n(17,"div",5)(18,"button",8),g("click",function(){return e.onIncrement("next","normal")}),v(19,"i",12),r(),n(20,"button",6),g("click",function(){return e.onIncrement("next","fast")}),v(21,"i",13),r()()()()),t&2&&(o(),G(e.cssPagination),o(5),u("value",e.byItem)("placeholder",e.byItemPlaceholder),o(8),u("max",e.pageCtl.total)("value",e.pageCtl.current),o(2),h(" / ",e.pageCtl.total," "))},dependencies:[M],styles:[".ctl-num[_ngcontent-%COMP%]{width:75px;flex:0 0 auto}.inp-page[_ngcontent-%COMP%]{max-width:6rem}"]});let s=m;return s})();var se=s=>({"disabled d-none":s}),de=s=>({col:"tanggal",title:"Filter berdasarkan tanggal transaksi",target:s}),ne=s=>({disabled:s}),ce=s=>({col:"uraian",title:"Cari kata dalam uraian yang mengandung suatu kalimat",target:s}),ie=s=>({"text-danger":s}),pe=s=>[s,"IDR","symbol","1.0-0","id-ID"],me=s=>[s,"IDR","symbol","0.0","id-ID"];function ue(s,m){if(s&1&&(j(0),n(1,"div",26)(2,"div",27)(3,"div",28)(4,"h1"),d(5),r()()()(),K()),s&2){let p=P();o(5),h(" ",p.info," ")}}function ge(s,m){if(s&1){let p=B();n(0,"div",29)(1,"input",30,7),g("input",function(){let t=x(p),e=t.col,l=t.target,c=b(2);return P().checkChanged(e,c.checked),w(l.ariaDisabled=!c.checked)}),r(),n(3,"label",31),d(4),r()()}if(s&2){let p=m.col,i=m.title,t=b(2);o(),u("id","filter_"+p)("name",p),o(2),u("for",t.id),o(),h(" ",i," ")}}function fe(s,m){if(s&1&&(n(0,"span"),d(1),r()),s&2){let p=P().$implicit;o(),h(" (",p.jurnalrekening,") ")}}function he(s,m){if(s&1&&(j(0),n(1,"div",32)(2,"div",33),d(3),r(),n(4,"div",34)(5,"div",35)(6,"div",36)(7,"div",37),d(8,"Tanggal"),r(),n(9,"div",15),d(10),O(11,"date"),r()(),n(12,"div",36)(13,"div",37),d(14,"Usaha"),r(),n(15,"div",15),d(16),r()()(),n(17,"div",35)(18,"div",36)(19,"div",37),d(20,"Sumber"),r(),n(21,"div",15),d(22),k(23,fe,2,1,"span",8),r()(),n(24,"div",36)(25,"div",37),d(26,"Penerima"),r(),n(27,"div",15),d(28),r()()(),n(29,"div",38)(30,"div",36)(31,"div",39),d(32,"Kategori"),r(),n(33,"div",40),d(34),r()(),n(35,"div",36)(36,"div",39),d(37,"Akun"),r(),n(38,"div",40),d(39),r()()()()(),n(40,"div",41)(41,"div",42)(42,"div")(43,"i")(44,"q"),d(45),r()()(),n(46,"div",43),d(47),O(48,"currency"),r()()(),v(49,"hr",44),K()),s&2){let p=m.$implicit;o(3),h("",p.idx,". "),o(7),D(U(11,11,p.tanggal,"dd MMM yyyy","undefined","id-ID")),o(6),D(p.jurnalusaha),o(6),h(" ",p.sumber," "),o(),u("ngIf",p.jurnalrekening!=""),o(5),h(" ",p.penerima==null||p.penerima=="unknown"?"-":p.penerima," "),o(6),h(" ",p.kategori," "),o(5),h(" ",p.akun," "),o(6),D(p.uraian),o(),u("ngClass",_(22,ie,p.transaksi<0)),o(),h(" ",R(48,16,_(24,me,p.transaksi))," ")}}var Ee=(()=>{let m=class m{constructor(i,t,e,l){this.app=i,this.pagination=t,this.cd=e,this.gs=l,this.info="Initialize Bos ND...",this.data=[],this.currentPage=1,this.filtered=[],this.paginated=[],this.total=0,this.resetSignal=!1,this.filter={uraian:{enable:!1,value:null},tanggal:{enable:!1,start:null,end:null}}}ngOnInit(){this.app.ProcessInfo.subscribe(i=>{this.info=i,this.cd.detectChanges()}),this.gs.eventSignedIn.subscribe(i=>{this.info=i?"Getting Sheets Data...":"Unauthorized Access!",this.cd.detectChanges()}),this.app.DataCollected.subscribe(i=>{let t=i.find(e=>e.table=="kas");t!=null&&(this.data=t.values,this.getTable()),this.cd.detectChanges()})}getTable(i){i!=null&&(i.preventDefault(),this.cd.detach(),this.resetSignal=!0),this.filtered=[];let t=this.filter.uraian,e=this.filter.tanggal,l={uraian:t.enable&&t.value!=null?t.value.toLowerCase():null,start:null,end:null};if(e.enable){if(e.start!=null){let a=new Date(e.start);a.setHours(0,0,0),l.start=a}if(e.end!=null){let a=new Date(e.end);a.setHours(23,59,59),l.end=a}}l.start==null&&(l.start=new Date(1970,0,1)),l.end==null&&(l.end=new Date);let c=this.data.filter((a,C)=>{let f;if(typeof a.tanggal=="string"){let S=a.tanggal.split("/");f=new Date(S[2],S[1]-1,S[0],0,0,0),a.tanggal=f}else f=a.tanggal;let y={uraian:l.uraian!=null&&a.uraian?.toString().toLowerCase().includes(l.uraian),start:f>=l.start,end:f<=l.end};if(!(!y.start||!y.end)&&(t==null||t!=null&&y.uraian))return a});c.length==0&&(c=JSON.parse(JSON.stringify(this.data))),c.sort((a,C)=>{let f=Number(new Date(a.tanggal)),y=Number(new Date(C.tanggal));return f-y}),this.filtered=c,this.sumTotal(),this.cd.reattach(),this.cd.detectChanges()}sumTotal(){let i=0;this.filtered.forEach(t=>{typeof t.transaksi=="number"&&(i+=t.transaksi)}),this.total=i}onData(i){this.paginated=i}onPageChanged(i){this.currentPage=i,this.getTable()}checkChanged(i,t){this.filter[i].enable=t}};m.\u0275fac=function(t){return new(t||m)(I(te),I(E),I(V),I(ee))},m.\u0275cmp=T({type:m,selectors:[["app-kas"]],standalone:!0,features:[L([E]),F],decls:44,vars:39,consts:[["detail",""],["ctlDate",""],["start",""],["end",""],["ctlSearch",""],["uraian",""],["tmpFilter",""],["ctlTitle",""],[4,"ngIf"],[1,"container","h-container","text-body",3,"ngClass"],["tabindex","-1",1,"p-2","bg-body-secondary","bg-opacity-75","rounded","sticky-top"],[1,"border","border-secondary","rounded","bg-body-tertiary",3,"submit"],[1,"p-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"row",3,"ariaDisabled","ngClass"],[1,"col"],["type","date",1,"form-control",3,"input","valueAsDate"],[1,"mx-5","my-2"],[3,"ariaDisabled","ngClass"],["type","search","placeholder","Kalimat yang akan dicari...",1,"form-control",3,"input","value"],[1,"d-flex","justify-content-center","mb-3"],["type","submit",1,"btn","btn-primary"],["rowIndexName","idx",3,"paginatedData","pageChanged","data","resetSignal"],["data-bs-theme","light",1,"border","rounded","bg-body","bg-opacity-custom","h-container","overflow-auto"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"hstack","justify-content-between",3,"ngClass"],[1,"position-absolute","vw-100","vh-100","start-0","top-0","text-body","z-3"],[1,"d-grid","justify-content-center","align-content-center","h-100","w-100"],[1,"text-center"],[1,"form-check","fw-medium"],["type","checkbox",1,"form-check-input",3,"input","id","name"],[1,"form-check-label",3,"for"],[1,"hstack","gap-1","text-body-tertiary"],[1,"mx-2","text-end"],[1,"px-3","pt-3","row","mx-0","parent","w-100"],[1,"col-6","col-lg"],[1,"row","column-gap-2","mb-2","mb-lg-0"],[1,"col-12","col-md-5","col-lg-4","col-xl-3","title"],[1,"col-12","col-lg"],[1,"col-3","col-md-2","col-lg-4","col-xl-3","title"],[1,"col","col-lg"],[1,"px-3","m-2"],[1,"hstack","justify-content-between","text-body"],[1,"fw-bolder",3,"ngClass"],[1,"my-0","mx-5","border-dark"]],template:function(t,e){if(t&1){let l=B();k(0,ue,6,1,"ng-container",8),n(1,"div",9)(2,"details",10,0)(4,"summary"),d(5,"Filter untuk mengambil data"),r(),n(6,"form",11),g("submit",function(a){x(l);let C=b(3);return C.open=!1,w(e.getTable(a))}),n(7,"div",12),A(8,13),n(9,"div",14,1)(11,"div",15)(12,"div"),d(13,"Dari"),r(),n(14,"input",16,2),g("input",function(){x(l);let a=b(15);return w(e.filter.tanggal.start=a.valueAsDate)}),r()(),n(16,"div",15)(17,"div"),d(18,"Hingga"),r(),n(19,"input",16,3),g("input",function(){x(l);let a=b(20);return w(e.filter.tanggal.end=a.valueAsDate)}),r()()()(),v(21,"hr",17),n(22,"div",12),A(23,13),n(24,"div",18,4)(26,"input",19,5),g("input",function(){x(l);let a=b(27);return w(e.filter.uraian.value=a.value)}),r()()(),n(28,"div",20)(29,"button",21),d(30," Terapkan! "),r()()(),k(31,ge,5,4,"ng-template",null,6,$),r(),v(33,"br"),n(34,"api-pagination",22),g("paginatedData",function(a){return x(l),w(e.onData(a))})("pageChanged",function(a){return x(l),w(e.onPageChanged(a))}),n(35,"div",23),k(36,he,50,26,"ng-container",24),r(),n(37,"div")(38,"div",25)(39,"h2"),d(40,"Grand Total"),r(),n(41,"h2"),d(42),O(43,"currency"),r()()()()()}if(t&2){let l=b(10),c=b(25),a=b(32);u("ngIf",e.data.length==0),o(),u("ngClass",_(25,se,e.data.length==0)),o(7),u("ngTemplateOutlet",a)("ngTemplateOutletContext",_(27,de,l)),o(),u("ariaDisabled",!e.filter.tanggal.enable)("ngClass",_(29,ne,l.ariaDisabled=="true")),o(5),u("valueAsDate",e.filter.tanggal.start),o(5),u("valueAsDate",e.filter.tanggal.end),o(4),u("ngTemplateOutlet",a)("ngTemplateOutletContext",_(31,ce,c)),o(),u("ariaDisabled",!e.filter.uraian.enable)("ngClass",_(33,ne,c.ariaDisabled=="true")),o(2),u("value",e.filter.uraian.value),o(8),u("data",e.filtered)("resetSignal",e.resetSignal),o(2),u("ngForOf",e.paginated)("ngForTrackBy",e.app.tracker),o(2),u("ngClass",_(35,ie,e.total<0)),o(4),D(R(43,19,_(37,pe,e.total)))}},dependencies:[M,q,Q,W,X,Z,Y,E],styles:[".parent[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600}.h-container[_ngcontent-%COMP%]{transition:all 1s ease-in-out;height:83%}.h-container[_ngcontent-%COMP%]:has(details[open]){height:45%}.bg-opacity-custom[_ngcontent-%COMP%]{--bs-bg-opacity: .85}"]});let s=m;return s})();export{Ee as KasComponent};
