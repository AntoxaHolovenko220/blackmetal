import{d as a,j as t,B as n,D as l}from"./index-B8B5z-CU.js";import d from"./TestingCenterHeader-BnRCIJVq.js";import c from"./TestingCenterContent-CKPasuMn.js";import p from"./TestingCenterContacts-DkiK_9IV.js";const s=()=>{const{data:e}=a("testing-center");return e?t.jsxs(n,{sx:{pb:"30px",pl:{xxs:"0px",md:"50px"}},children:[t.jsx(l,{title:e.title,search:!1}),t.jsxs(n,{sx:{mt:"32px",maxWidth:"1200px"},children:[t.jsx(d,{subtitle:e.subtitle,institute:e.institute}),t.jsx(n,{sx:{mb:"32px",mt:"16px"},children:t.jsxs("video",{controls:!0,style:{width:"100%",height:"60vh"},preload:"metadata",onLoadStart:()=>console.log("Video loading started"),onLoadedData:()=>console.log("Video data loaded"),onCanPlay:()=>console.log("Video can play"),onError:r=>{console.error("Video error details:",r);const o=r.target;console.log("Video element:",o),console.log("Video src:",o.src),console.log("Video error code:",o.error);const i=o.parentElement;i&&(i.innerHTML=`
									<div style="
										padding: 40px; 
										text-align: center; 
										background-color: #f5f5f5;
										min-height: 450px;
										display: flex;
										flex-direction: column;
										justify-content: center;
										align-items: center;
									">
										<a href="/blackmetal/video/file_692.mp4" download style="
											text-decoration: none;
											padding: 10px 20px;
										">
											Завантажити відео
										</a>
									</div>
								`)},children:[t.jsx("source",{src:"/blackmetal/video/3.mp4",type:"video/mp4"}),"Ваш браузер не поддерживает видео."]})}),t.jsx(c,{description:e.description,tests:e.tests,certification:e.certification}),t.jsx(p,{deputy:e.deputy,deputyName:e.deputyName,contacts:e.contacts,documents:e.documents})]})]}):null},f=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}));export{f as T,j as i};
