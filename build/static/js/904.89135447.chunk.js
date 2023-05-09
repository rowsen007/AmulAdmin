"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[904],{4032:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(3433),a=n(9439),l=n(2791),s=n(4651),i=n(8617),u=n(2916),o=n(7035),d={default:n(3014),pdf:u,png:o},c=n(184),x=function(e){var t=(0,l.useRef)(null),n=(0,l.useState)([]),u=(0,a.Z)(n,2),o=u[0],x=u[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{ref:t,onDragEnter:function(){return t.current.classList.add("dragover")},onDragLeave:function(){return t.current.classList.remove("dragover")},onDrop:function(){return t.current.classList.remove("dragover")},className:"w-full shadow-[0_0_6px_0_rgba(23,23,23,0.1)] text-[#b0adad] outline-none p-3 rounded-md h-52 border-dashed border-[#b0adad] hover:border-blue border-2 flex justify-center flex-col items-center hover:text-blue my-auto relative",children:[(0,c.jsx)(i.qX3,{size:100}),(0,c.jsx)("span",{className:"  w-1/2 mx-auto  mt-6",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c, \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430 \u200b\u200b\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438: PNG, PDF, WORD"}),(0,c.jsx)("input",{type:"file",value:"",onChange:function(t){var n=t.target.files[0];if(console.log("newFile",n),n){var a=[].concat((0,r.Z)(o),[n]);x(a),e.onFileChange(a)}},className:"absolute opacity-0 w-full h-full cursor-pointer"})]}),o.length>0?(0,c.jsx)("div",{className:"mt-12 w-full",children:o.map((function(t,n,a){return(0,c.jsx)("div",{children:(0,c.jsxs)("div",{className:"relative flex mb-2.5 bg-gray/10 p-4 rounded-xl w-full justify-between",children:[(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("img",{src:d[t.type.split("/")[1]]||d.default,alt:"",width:50,height:50}),(0,c.jsxs)("div",{className:"ml-6",children:[(0,c.jsx)("p",{children:t.name}),(0,c.jsx)("span",{className:"flex",children:(0,c.jsxs)("p",{children:[t.size,"\xa0b"]})})]})]}),(0,c.jsx)("div",{className:"flex",children:(0,c.jsx)("span",{className:"my-auto cursor-pointer",onClick:function(){return function(t){var n=(0,r.Z)(o);n.splice(o.indexOf(t),1),x(n),e.onFileChange(n)}(t)},children:(0,c.jsx)(s.S1K,{})})})]})},n)}))}):null]})}},904:function(e,t,n){n.r(t);var r=n(1413),a=n(9439),l=n(7309),s=n(8787),i=n(3775),u=n(4447),o=n(1798),d=n(2791),c=n(3519),x=(n(1943),n(4032)),p=n(2911),m=n(7441),h=n(184);t.default=function(){var e=(0,d.useContext)(m.Y).dil,t=((0,p.k6)(),(0,d.useState)([])),n=(0,a.Z)(t,2),b=n[0],f=n[1],g=(0,d.useState)(!1),v=(0,a.Z)(g,2),F=v[0],w=v[1],A=(0,d.useState)({}),j=(0,a.Z)(A,2),E=j[0],_=j[1],Z=(0,d.useState)([]),y=(0,a.Z)(Z,2),N=y[0],C=y[1],k=(0,d.useState)(!1),S=(0,a.Z)(k,2),P=S[0],R=S[1],H=(0,d.useState)(""),D=(0,a.Z)(H,2),L=(D[0],D[1],(0,d.useState)("")),U=(0,a.Z)(L,2),I=(U[0],U[1],(0,d.useState)("")),T=(0,a.Z)(I,2),z=(T[0],T[1],(0,d.useState)(!1)),X=(0,a.Z)(z,2),B=(X[0],X[1],(0,d.useState)(!1)),M=(0,a.Z)(B,2),Q=M[0],Y=M[1],q=(0,d.useState)(!1),J=(0,a.Z)(q,2),O=J[0],V=J[1],W=(0,d.useState)(),G=(0,a.Z)(W,2),K=G[0],$=G[1],ee=(0,d.useState)(!1),te=(0,a.Z)(ee,2),ne=te[0],re=te[1],ae=(0,d.useState)(),le=(0,a.Z)(ae,2),se=le[0],ie=le[1];(0,d.useEffect)((function(){ue()}),[]);var ue=function(){c.b.get("/api/news?active=true").then((function(e){console.log(e.data),f(e.data)})).catch((function(e){console.log(e)}))},oe=[{title:"tm"===e?"Ady":"ru"===e?"\u0418\u043c\u044f":"Name",dataIndex:"title_tm"},{title:"tm"===e?"Tazelik":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438":"News",dataIndex:"text_tm"},{title:"tm"===e?"Surat":"ru"===e?"\u041a\u0430\u0440\u0442\u0438\u043d\u0430":"Picture",dataIndex:"uploaded",render:function(e,t){return(0,h.jsx)("div",{children:(0,h.jsx)("img",{className:"object-contain h-[100px]",src:c._+"/"+t.picture,alt:"surat"})})}},{title:"tm"===e?"Hereket":"ru"===e?"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435":"Action",render:function(t,n){return(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)(l.Z,{onClick:function(){w(!0),_(n)},type:"primary",style:{borderRadius:"7px"},children:"tm"===e?"Maglumat":"ru"===e?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"Information"}),(0,h.jsx)(s.Z,{placement:"top",title:"Are you sure",onConfirm:function(){return ce(n.id)},okText:"Yes",cancelText:"No",children:(0,h.jsx)(l.Z,{type:"danger",style:{borderRadius:"7px",marginLeft:"10px"},children:"tm"===e?"Dis Aktiw et":"ru"===e?"He \u0410\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"Dis Activete"})})]})}}],de=function(e){console.log(e),e.length>0&&R(!0),0==e.length&&R(!0),C(e)},ce=function(e){c.b.patch("/api/news/disActive/"+e).then((function(e){i.ZP.success("Yatyryldy!"),ue()})).catch((function(e){console.log(e),i.ZP.warn("Gaytadan Barlan!")}))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Z,{width:500,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){return w(!1)},visible:F,children:(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:["tm"===e?"Maglumat":"ru"===e?"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f":"Information",":"]}),(0,h.jsxs)("p",{className:"mb-0",children:["tm"===e?"Ady tm":"ru"===e?"\u0418\u043c\u044f \u0442\u043c":"Name tm",": ",null===E||void 0===E?void 0:E.title_tm]}),(0,h.jsxs)("p",{className:"mb-0",children:["tm"===e?"Ady ru":"ru"===e?"\u0418\u043c\u044f \u0440\u0443":"Name ru",": ",null===E||void 0===E?void 0:E.title_ru]}),(0,h.jsxs)("p",{children:["ru"===e?"Ady en":"ru"===e?"\u0418\u043c\u044f \u0435\u043d":"Name en",": ",null===E||void 0===E?void 0:E.title_en]}),(0,h.jsxs)("p",{className:"mb-0",children:["tm"===e?"Habar tm":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0442\u043c":"news tm",": ",null===E||void 0===E?void 0:E.text_tm]}),(0,h.jsxs)("p",{className:"mb-0",children:["tm"===e?"Habar ru":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0440\u0443":"news ru",": ",null===E||void 0===E?void 0:E.text_ru]}),(0,h.jsxs)("p",{children:["tm"===e?"Habar en":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0435\u043d":"news en",": ",null===E||void 0===E?void 0:E.text_en]}),(0,h.jsx)("img",{className:"object-contain h-[300px]",src:c._+"/"+(null===E||void 0===E?void 0:E.picture)}),(0,h.jsxs)("div",{className:"w-full mt-4 flex justify-start",children:[(0,h.jsx)(l.Z,{onClick:function(){Y(!0),$(E)},className:"mr-[30px]",type:"primary",style:{borderRadius:"7px"},children:"tm"===e?"Uytget":"ru"===e?"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"Edit"}),(0,h.jsx)(l.Z,{onClick:function(){return V(!0)},type:"primary",style:{borderRadius:"7px"},children:"tm"===e?"Surat":"ru"===e?"\u041a\u0430\u0440\u0442\u0438\u043d\u0430":"Picture"})]})]})}),(0,h.jsx)(u.Z,{width:500,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){Y(!1)},visible:Q,children:(0,h.jsxs)("div",{style:{width:"100%"},children:[(0,h.jsx)("input",{value:null===K||void 0===K?void 0:K.title_tm,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{title_tm:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady tm":"ru"===e?"\u0418\u043c\u044f \u0442\u043c":"Name tm"}),(0,h.jsx)("input",{value:null===K||void 0===K?void 0:K.title_ru,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{title_ru:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady ru":"ru"===e?"\u0418\u043c\u044f \u0440\u0443":"Name ru"}),(0,h.jsx)("input",{value:null===K||void 0===K?void 0:K.title_en,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{title_en:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady en":"ru"===e?"\u0418\u043c\u044f \u0435\u043d":"Name en"}),(0,h.jsx)("textarea",{rows:5,value:null===K||void 0===K?void 0:K.text_tm,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{text_tm:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar tm":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0442\u043c":"news tm"}),(0,h.jsx)("textarea",{rows:5,value:null===K||void 0===K?void 0:K.text_ru,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{text_ru:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar ru":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0440\u0443":"news ru"}),(0,h.jsx)("textarea",{rows:5,value:null===K||void 0===K?void 0:K.text_en,onChange:function(e){return $((0,r.Z)((0,r.Z)({},K),{},{text_en:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar en":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0435\u043d":"news en"}),(0,h.jsx)("button",{onClick:function(){P&&c.b.patch("/api/news/update",{title_tm:K.title_tm,title_ru:K.title_ru,title_en:K.title_en,text_tm:K.text_tm,text_ru:K.text_ru,text_en:K.text_en,id:null===E||void 0===E?void 0:E.id}).then((function(e){i.ZP.success("Maglumatlar Uytgedildi!"),ue(),Y(!1),w(!1)}))},className:"".concat(P&&"!bg-blue !text-white "," bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue"),children:"tm"===e?"Ugrat":"ru"===e?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c":"Send"})]})}),(0,h.jsxs)(u.Z,{width:500,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){return V(!1)},visible:O,children:[(0,h.jsx)(x.Z,{onFileChange:function(e){return de(e)}}),(0,h.jsx)("button",{onClick:function(){P&&function(){var e=new FormData;e.append("picture",N[0]),e.append("id",null===E||void 0===E?void 0:E.id),c.b.post("/api/news/update/file",e).then((function(e){i.ZP.success("Surat Tazelendi!"),ue(),V(!1),w(!1)})).catch((function(e){console.log(e),i.ZP.warn("Tazeden Barlan!")}))}()},className:"".concat(P&&"!bg-blue !text-white "," bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue"),children:"tm"===e?"Ugrat":"ru"===e?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c":"Send"})]}),(0,h.jsxs)(u.Z,{width:500,placement:"right",closable:!0,mask:!0,maskClosable:!0,onClose:function(){return re(!1)},visible:ne,children:[(0,h.jsx)("input",{value:null===se||void 0===se?void 0:se.title_tm,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{title_tm:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady tm":"ru"===e?"\u0418\u043c\u044f \u0442\u043c":"Name tm"}),(0,h.jsx)("input",{value:null===se||void 0===se?void 0:se.title_ru,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{title_ru:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady ru":"ru"===e?"\u0418\u043c\u044f \u0440\u0443":"Name ru"}),(0,h.jsx)("input",{value:null===se||void 0===se?void 0:se.title_en,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{title_en:e.target.value}))},className:"h-[50px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Ady en":"ru"===e?"\u0418\u043c\u044f \u0435\u043d":"Name en"}),(0,h.jsx)("textarea",{rows:5,value:null===se||void 0===se?void 0:se.text_tm,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{text_tm:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar tm":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0442\u043c":"news tm"}),(0,h.jsx)("textarea",{rows:5,value:null===se||void 0===se?void 0:se.text_ru,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{text_ru:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar ru":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0440\u0443":"news ru"}),(0,h.jsx)("textarea",{rows:5,value:null===se||void 0===se?void 0:se.text_en,onChange:function(e){return ie((0,r.Z)((0,r.Z)({},se),{},{text_en:e.target.value}))},className:"h-[100px] rounded-[6px] bg-[#FFFFFF] w-[100%] border-[1px] border-[#E3E7EE] text-[#999999] pl-[12px] text-[16px] font-sans mb-4",type:"text",placeholder:"tm"===e?"Habar en":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438 \u0435\u043d":"news en"}),(0,h.jsx)(x.Z,{onFileChange:function(e){return de(e)}}),(0,h.jsx)("button",{onClick:function(){P&&function(){if(se.title_tm&&se.title_ru&&se.title_en&&se.text_en&&se.text_ru&&se.text_tm){var e=new FormData;e.append("title_tm",se.title_tm),e.append("title_ru",se.title_ru),e.append("title_en",se.title_en),e.append("text_en",se.text_en),e.append("text_ru",se.text_ru),e.append("text_tm",se.text_tm),e.append("picture",N[0]),c.b.post("/api/news/create",e).then((function(e){i.ZP.success("Doredildi!"),ue(),re(!1),ie()})).catch((function(e){console.log(e),i.ZP.warn("Tazeden Barlan!")}))}else i.ZP.warn("Maglumatlary doly Girizin!")}()},className:"".concat(P&&"!bg-blue !text-white "," bg-[#DEE6F9] h-[50px] rounded-[5px] w-full mt-4 text-[18px] font-sans text-blue"),children:"tm"===e?"Ugrat":"ru"===e?"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c":"Send"})]}),(0,h.jsxs)("div",{className:"w-full h-[50px] p-0 flex justify-between ",children:[(0,h.jsx)("h2",{className:"leading-[50px] ml-[50px] text-sans text-[24px]",children:"tm"===e?"Tazelikler":"ru"===e?"\u041d\u043e\u0432\u043e\u0441\u0442\u0438":"News"}),(0,h.jsx)(l.Z,{onClick:function(){re(!0)},className:"h-[40px] mt-[10px] mr-[50px] !rounded-[12px]",type:"primary",children:"tm"===e?"Tazelik Gosh":"ru"===e?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c":"Add news"})]}),(0,h.jsx)(o.Z,{columns:oe,dataSource:b,pagination:{pageSize:50},scroll:{y:"72vh"}})]})}},3519:function(e,t,n){n.d(t,{_:function(){return a},b:function(){return l}});var r=n(4569),a="http://216.250.8.203:8181/",l=n.n(r)().create({baseURL:a,timeout:1e4,headers:{"Content-Type":"application/json",Accept:"*/*"}})},3014:function(e,t,n){e.exports=n.p+"static/media/defaultFile.840d835451bb23f7433a.png"},1943:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAsCAYAAAAATWqyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADXSURBVHgB7di7DcIwFIXhY4PIAHRIbEHJCKwRsQWvLVCq7ELJFhSskCAR40ipjgCbh+2A7l+lcPHFcq6lqLIsx3VdT5VSA4Rpkef51rVIV1U1CYhA0zSboijWrnXaNkLgfDAakXJhokHgwESF4AkmOgQPMEkguINJBgFhhkhchwkPsXNq5rUOPUkgnEA4gXAC4QTC9QbivPRW+8MRb7Zbzr0uvLbf2ZFX3uqT5LByAuH+Z45866uSOcLJYeUEwgmEEwinjTFXJM7+rLnoLMtO7QMS1W3E+QYP0Fq68a+ubQAAAABJRU5ErkJggg=="},2916:function(e,t,n){e.exports=n.p+"static/media/pdfFile.47193a0b066fe0caeac1.png"},7035:function(e,t,n){e.exports=n.p+"static/media/pngFile.2dc25e979dd8733dae5d.png"}}]);
//# sourceMappingURL=904.89135447.chunk.js.map