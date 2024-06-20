import{A as H,B as R,C as G,D as L,E as $,F as q,G as z,H as U,M as J,a as j,b,c as h,d as i,e as E,f as x,g as u,h as e,i as t,j as S,k as T,l as F,m as I,n as O,o as y,p as V,q as f,r,s as k,t as v,u as P,v as _,w as K,x as A,y as B,z as N}from"./chunk-XFEUOPKG.js";var W=n=>({"disabled d-none":n}),X=n=>({col:"tanggal",title:"Filter berdasarkan tanggal transaksi",target:n}),Q=n=>({disabled:n}),Y=n=>({col:"uraian",title:"Cari kata dalam uraian yang mengandung suatu kalimat",target:n}),Z=n=>({"text-danger":n}),ee=n=>[n,"IDR","symbol","0.0","id-ID"];function te(n,p){n&1&&(T(0),e(1,"div",24)(2,"div",25)(3,"div",26)(4,"h1"),r(5,"Getting data from"),t(),e(6,"h1"),r(7,"Google Sheets..."),t()()()(),F())}function ne(n,p){if(n&1){let s=O();e(0,"div",27)(1,"input",28,7),y("input",function(){let l=b(s),a=l.col,o=l.target,g=f(2);return V().checkChanged(a,g.checked),h(o.ariaDisabled=!g.checked)}),t(),e(3,"label",29),r(4),t()()}if(n&2){let s=p.col,m=p.title,l=f(2);i(),u("id","filter_"+s)("name",s),i(2),u("for",l.id),i(),v(" ",m," ")}}function ie(n,p){if(n&1&&(e(0,"span"),r(1),t()),n&2){let s=V().$implicit;i(),v(" (",s.jurnalrekening,") ")}}function ae(n,p){if(n&1&&(T(0),e(1,"div",30)(2,"div",15)(3,"div",31)(4,"div",32),r(5,"Tanggal"),t(),e(6,"div",15),r(7),K(8,"date"),t()(),e(9,"div",31)(10,"div",32),r(11,"Usaha"),t(),e(12,"div",15),r(13),t()()(),e(14,"div",15)(15,"div",31)(16,"div",32),r(17,"Sumber"),t(),e(18,"div",15),r(19),x(20,ie,2,1,"span",8),t()(),e(21,"div",31)(22,"div",32),r(23,"Penerima"),t(),e(24,"div",15),r(25),t()()(),e(26,"div",15)(27,"div",31)(28,"div",32),r(29,"Kategori"),t(),e(30,"div",15),r(31),t()(),e(32,"div",31)(33,"div",32),r(34,"Akun"),t(),e(35,"div",15),r(36),t()()()(),e(37,"div",33)(38,"div",34)(39,"div",35)(40,"i")(41,"q"),r(42),t()()(),e(43,"div",36),r(44),K(45,"currency"),t()()(),S(46,"hr",37),F()),n&2){let s=p.$implicit;i(7),k(A(8,10,s.tanggal,"dd MMM yyyy","undefined","id-ID")),i(6),k(s.jurnalusaha),i(6),v(" ",s.sumber," "),i(),u("ngIf",s.jurnalrekening!=""),i(5),v(" ",s.penerima==null||s.penerima=="unknown"?"-":s.penerima," "),i(6),v(" ",s.kategori," "),i(5),v(" ",s.akun," "),i(6),k(s.uraian),i(),u("ngClass",_(21,Z,s.transaksi<0)),i(),v(" ",B(45,15,_(23,ee,s.transaksi))," ")}}var se=(()=>{let p=class p{constructor(m,l){this.app=m,this.cd=l,this.data=[],this.filtered=[],this.filter={uraian:{enable:!1,value:null},tanggal:{enable:!1,start:null,end:null}}}ngOnInit(){this.app.DataCollected.subscribe(m=>{let l=m.find(a=>a.table=="kas");l!=null&&(this.data=l.values,this.cd.detectChanges())})}getTable(m){m.preventDefault(),this.filtered=[];let l=this.filter.uraian,a=this.filter.tanggal,o={uraian:l.enable&&l.value!=null?l.value.toLowerCase():null,start:null,end:null};if(a.enable){if(a.start!=null){let d=new Date(a.start);d.setHours(0,0,0),o.start=d}if(a.end!=null){let d=new Date(a.end);d.setHours(23,59,59),o.end=d}}if(Object.values(o).filter(d=>d!=null).length==0){this.filtered=[];return}o.start==null&&(o.start=new Date(1970,0,1)),o.end==null&&(o.end=new Date);let c=this.data.filter((d,M)=>{if(d.tanggal==null||d.uraian==null)return;let C;if(typeof d.tanggal=="string"){let D=d.tanggal.split("/");C=new Date(D[2],D[1]-1,D[0],0,0,0),d.tanggal=C}else C=d.tanggal;let w={uraian:o.uraian!=null&&d.uraian.toString().toLowerCase().includes(o.uraian),start:C>=o.start,end:C<=o.end};if(!(!w.start||!w.end)&&(l==null||l!=null&&w.uraian))return d});c.sort((d,M)=>d.tanggal-M.tanggal),console.log(c),this.filtered=c}checkChanged(m,l){this.filter[m].enable=l}};p.\u0275fac=function(l){return new(l||p)(E(J),E(H))},p.\u0275cmp=j({type:p,selectors:[["app-kas"]],standalone:!0,features:[P],decls:36,vars:25,consts:[["detail",""],["ctlDate",""],["start",""],["end",""],["ctlSearch",""],["uraian",""],["tmpFilter",""],["ctlTitle",""],[4,"ngIf"],[1,"container","autofit","overflow-auto","text-body",3,"ngClass"],["tabindex","-1",1,"p-2","bg-body-secondary","bg-opacity-75","rounded","sticky-top"],[1,"border","border-secondary","rounded","bg-body-tertiary",3,"submit"],[1,"p-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"row",3,"ariaDisabled","ngClass"],[1,"col"],["type","date",1,"form-control",3,"input","valueAsDate"],[1,"mx-5","my-2"],[3,"ariaDisabled","ngClass"],["type","search","placeholder","Kalimat yang akan dicari...",1,"form-control",3,"input","value"],[1,"d-flex","justify-content-center","mb-3"],["type","submit",1,"btn","btn-primary"],[1,"border","rounded","bg-black","bg-opacity-75","overflow-auto"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"position-absolute","vw-100","vh-100","start-0","top-0","text-body","z-3"],[1,"d-grid","justify-content-center","align-content-center","h-100","w-100"],[1,"text-center"],[1,"form-check","fw-medium"],["type","checkbox",1,"form-check-input",3,"input","id","name"],[1,"form-check-label",3,"for"],[1,"px-3","pt-3","row","mx-0","parent","text-secondary"],[1,"row","column-gap-2","mb-2","mb-md-0"],[1,"col-12","col-md-4","col-lg-3","col-xl-2"],[1,"px-3","m-2"],[1,"hstack","justify-content-between"],[1,"text-light"],[1,"fw-bolder",3,"ngClass"],[1,"my-0","mx-5"]],template:function(l,a){if(l&1){let o=O();x(0,te,8,0,"ng-container",8),e(1,"div",9)(2,"details",10,0)(4,"summary"),r(5,"Filter untuk mengambil data"),t(),e(6,"form",11),y("submit",function(c){b(o);let d=f(3);return d.open=!1,h(a.getTable(c))}),e(7,"div",12),I(8,13),e(9,"div",14,1)(11,"div",15)(12,"div"),r(13,"Dari"),t(),e(14,"input",16,2),y("input",function(){b(o);let c=f(15);return h(a.filter.tanggal.start=c.valueAsDate)}),t()(),e(16,"div",15)(17,"div"),r(18,"Hingga"),t(),e(19,"input",16,3),y("input",function(){b(o);let c=f(20);return h(a.filter.tanggal.end=c.valueAsDate)}),t()()()(),S(21,"hr",17),e(22,"div",12),I(23,13),e(24,"div",18,4)(26,"input",19,5),y("input",function(){b(o);let c=f(27);return h(a.filter.uraian.value=c.value)}),t()()(),e(28,"div",20)(29,"button",21),r(30," Terapkan! "),t()()(),x(31,ne,5,4,"ng-template",null,6,N),t(),S(33,"br"),e(34,"div",22),x(35,ae,47,25,"ng-container",23),t()()}if(l&2){let o=f(10),g=f(25),c=f(32);u("ngIf",a.data.length==0),i(),u("ngClass",_(15,W,a.data.length==0)),i(7),u("ngTemplateOutlet",c)("ngTemplateOutletContext",_(17,X,o)),i(),u("ariaDisabled",!a.filter.tanggal.enable)("ngClass",_(19,Q,o.ariaDisabled=="true")),i(5),u("valueAsDate",a.filter.tanggal.start),i(5),u("valueAsDate",a.filter.tanggal.end),i(4),u("ngTemplateOutlet",c)("ngTemplateOutletContext",_(21,Y,g)),i(),u("ariaDisabled",!a.filter.uraian.enable)("ngClass",_(23,Q,g.ariaDisabled=="true")),i(2),u("value",a.filter.uraian.value),i(9),u("ngForOf",a.filtered)("ngForTrackBy",a.app.tracker)}},dependencies:[U,R,G,L,$,z,q],styles:[".autofit[_ngcontent-%COMP%]{height:88%}.parent[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:has([class*=col]) > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{font-weight:600}"],changeDetection:0});let n=p;return n})();export{se as KasComponent};