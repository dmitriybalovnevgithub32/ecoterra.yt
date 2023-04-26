"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{14456:function(e,o,t){let n,r,i;t.d(o,{bO:function(){return ia},tE:function(){return T},x3:function(){return ij}});var a,s,c=t(44475),d=t(69077),l=t(24484),p=t(25078),h=t(85900),u=t(90935),x=t(31181),b=t(48153),g=t(9786),f=t(42375),k=t(81202),v=t(85893),m=t(67294),C=t(48764),w=t(58561),y=t(21190),j=t(93093),E=t(14141),L=t(73935),F=t(43631),_=t(92777),S=t(73460),I=t(91033),M=t(92592);let A=()=>r,N=()=>i,O=()=>n,W=[l.RJ,l.yu,l.v4,l.yX],R=({chains:e,appName:o,walletConnectOptions:t})=>[new p.i({chains:e,options:{shimDisconnect:!0,shimChainChangedDisconnect:!1,UNSTABLE_shimOnConnectSelectAccount:!0}}),new u.D({chains:e,options:{appName:o,headlessMode:!0}}),new h.z({chains:e,options:{qrcode:!1,version:"1"}}),new x._({chains:e,options:{shimDisconnect:!0,name:e=>`Injected (${"string"==typeof e?e:e.join(", ")})`}})],T=({autoConnect:e=!0,appName:o="ConnectKit",appIcon:t,chains:a=W,alchemyId:s,infuraId:d,connectors:l,provider:p,stallTimeout:h,webSocketProvider:u,enableWebSocketProvider:x,walletConnectOptions:v})=>{r=o,t&&(i=t);let m=[];s&&m.push((0,b.G)({apiKey:s,stallTimeout:h})),d&&m.push((0,g.$)({apiKey:d,stallTimeout:h})),m.push((0,f.R)({rpc:e=>({http:e.rpcUrls.default.http[0]}),stallTimeout:h})),m.push((0,k.I)());let{provider:C,chains:w,webSocketProvider:y}=(0,c.QB)(a,m);n=w;let j={autoConnect:e,connectors:null!=l?l:R({chains:w,appName:o,walletConnectOptions:v}),provider:null!=p?p:C,webSocketProvider:x?null!=u?u:y:void 0};return{...j}},B={font:{family:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji'"},text:{primary:{color:"#373737"},secondary:{color:"#999999",hover:{color:"#111111"}},error:"#FC6464",valid:"#32D74B"},buttons:{primary:{borderRadius:16,color:"#000373737000",background:"#FFFFFF",border:"#F0F0F0",hover:{color:"#000000",border:"#1A88F8"}},secondary:{borderRadius:16,background:"#F6F7F9",color:"#000000"}},navigation:{color:"#999999"},modal:{background:"#ffffff",divider:"#f7f6f8"},tooltips:{color:"#999999",background:"#ffffff",hover:{background:"#f6f7f9"}},overlay:{background:"rgba(0, 0, 0, 0.06)"},qrCode:{accentColor:"#F7F6F8"}};"undefined"==typeof window||window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;let D={connectKit:{options:{iconStyle:"light"},theme:{preferred:"dark",light:B,dark:B}}};var z="function"==typeof E.ZP.div?E.ZP:E.ZP.default;let Z=e=>{let o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(null==o)return e;let t={r:parseInt(o[1],16),g:parseInt(o[2],16),b:parseInt(o[3],16)};return`color(display-p3 ${t.r/255} ${t.g/255} ${t.b/255})`};var U={"--ck-font-family":"Lato","--ck-border-radius":"0px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-box-shadow":" 0 0 0 1px #003C74, 2px 2px 0px rgba(255, 255, 255, 0.75), -2px -2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-connectbutton-border-radius":"4.5px","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 0% / 200% 200%, #F5F5F1","--ck-connectbutton-active-background":"linear-gradient(180deg, #F0F0EA 0%, #FFFFFF 50%, #F0F0EA 100%) 100% 100% / 200% 200%, #F5F5F1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"0 0 0 1px #E4E7E7","--ck-connectbutton-balance-hover-box-shadow":"0 0 0 1px #d7dbdb","--ck-connectbutton-balance-active-box-shadow":"0 0 0 1px #bbc0c0","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0, 127,  128, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"#808080","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#F0EDE2","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary-hover-background":"#FAFAFA","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-action-color":"#373737","--ck-body-color-danger":"#FC6464","--ck-body-color-valid":"#32D74B","--ck-body-divider":"#919B9C","--ck-body-divider-box-shadow":"0px 1px 0px #FBFBF8","--ck-primary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-primary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-border-radius":"6px","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 5px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-primary-button-hover-border-radius":"6px","--ck-modal-heading-font-weight":400,"--ck-modal-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 0px 2px 0px #044FD1,
    inset 4px 0px 0px #4283EB,
    inset 0px 4px 0px #4283EB
  `,"--ck-modal-h1-font-weight":400,"--ck-secondary-button-color":"#373737","--ck-secondary-button-border-radius":"6px","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 0px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-secondary-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #003C74, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 0px 4px #97B9EC, inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-body-background-secondary":"rgba(0, 0, 0, 0.1)","--ck-body-background-tertiary":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-body-button-text-align":"left","--ck-body-button-box-shadow":"0 2px 4px rgba(0, 0, 0, 0.05 )","--ck-body-disclaimer-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-body-disclaimer-box-shadow":`
    inset 0px -3px 0px #0F37A9,
    inset -2px 0px 0px #0F37A9,
    inset 0px -4px 0px #0D5DDF,
    inset -4px 0px 0px #0D5DDF,
    inset 2px 0px 0px #0453DD,
    inset 4px 0px 0px #4283EB,
    inset 0 1px 0 0 #919B9C`,"--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-color":"#959594","--ck-body-disclaimer-link-color":"#626262","--ck-body-disclaimer-link-hover-color":"#000000","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#919B9C","--ck-qr-border-radius":"0","--ck-qr-background":"#FFFFFF","--ck-copytoclipboard-stroke":"rgba(55, 55, 55, 0.4)","--ck-tooltip-background":"linear-gradient(270deg, #F7F3E6 7.69%, #F5F7DA 100%)","--ck-tooltip-background-secondary":"#f6f7f9","--ck-tooltip-color":"#000000","--ck-tooltip-shadow":" 0 0 0 1.5px #2b2622, 0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px #A0A0A0, 1px 1px 0px rgba(255, 255, 255, 0.75), -1px -1px 0px rgba(0, 0, 0, 0.05), inset -1px -2px 2px rgba(0, 0, 0, 0.2)","--ck-dropdown-button-background":"linear-gradient(180deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-button-hover-background":"linear-gradient(0deg, #FFFFFF 0%, #F0F0EA 100%), #F5F5F1","--ck-dropdown-pending-color":"#ACA899","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"#ACA899","--ck-dropdown-active-background":"#3F69BF","--ck-dropdown-active-border-radius":"0","--ck-dropdown-active-inset":"-12px","--ck-dropdown-color":"#ACA899","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"inset 0 0 0 1px #ACA899, 2px 2px 7px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"#ACA899","--ck-alert-background":"linear-gradient(180deg, #FBFBFB 0%, #EFEFEE 100%)","--ck-alert-box-shadow":"inset 0 0 0 1px #919B9C, 1px 1px 2px rgba(0, 0, 0, 0.15), inset -2px -2px 0px #FFFFFF","--ck-alert-border-radius":"0","--ck-graphic-primary-color":"#333333","--ck-graphic-primary-background":"#FFFFFF","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#919B9C"},H={base:{light:{"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#373737","--ck-connectbutton-background":"#F6F7F9","--ck-connectbutton-background-secondary":"#FFFFFF","--ck-connectbutton-hover-color":"#373737","--ck-connectbutton-hover-background":"#F0F2F5","--ck-connectbutton-active-color":"#373737","--ck-connectbutton-active-background":"#EAECF1","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#fff","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#F6F7F9","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#F0F2F5","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#F6F7F9","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-color":"#373737","--ck-primary-button-hover-background":"#F0F2F5","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#F6F7F9","--ck-tertiary-button-background":"#FFFFFF","--ck-secondary-button-hover-background":"#e0e4eb","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(71, 88, 107, 0.24)","--ck-body-color":"#373737","--ck-body-color-muted":"#999999","--ck-body-color-muted-hover":"#111111","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F3F4F7","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-siwe-border":"#F0F0F0","--ck-body-disclaimer-color":"#AAAAAB","--ck-body-disclaimer-link-color":"#838485","--ck-body-disclaimer-link-hover-color":"#000000","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0,0,0,0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#f7f6f8","--ck-focus-color":"#1A88F8","--ck-spinner-color":"var(--ck-focus-color)","--ck-copytoclipboard-stroke":"#CCCCCC"},dark:{"--ck-connectbutton-font-size":"15px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#383838","--ck-connectbutton-background-secondary":"#282828","--ck-connectbutton-hover-background":"#404040","--ck-connectbutton-active-background":"#4D4D4D","--ck-connectbutton-balance-color":"#fff","--ck-connectbutton-balance-background":"#282828","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-background)","--ck-connectbutton-balance-hover-background":"#383838","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-hover-background)","--ck-connectbutton-balance-active-background":"#404040","--ck-connectbutton-balance-active-box-shadow":"inset 0 0 0 1px var(--ck-connectbutton-active-background)","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"#383838","--ck-primary-button-border-radius":"16px","--ck-primary-button-font-weight":"600","--ck-primary-button-hover-background":"#404040","--ck-primary-button-active-border-radius":"16px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#333333","--ck-secondary-button-hover-background":"#4D4D4D","--ck-tertiary-button-background":"#424242","--ck-focus-color":"#1A88F8","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-body-color":"#ffffff","--ck-body-color-muted":"rgba(255, 255, 255, 0.4)","--ck-body-color-muted-hover":"rgba(255, 255, 255, 0.8)","--ck-body-background":"#2B2B2B","--ck-body-background-transparent":"rgba(0,0,0,0)","--ck-body-background-secondary":"#333333","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#ffffff","--ck-body-background-tertiary":"#333333","--ck-body-action-color":"#808080","--ck-body-divider":"#383838","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-color":"#858585","--ck-body-disclaimer-link-color":"#ADADAD","--ck-body-disclaimer-link-hover-color":"#FFFFFF","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-background":"#2B2B2B","--ck-tooltip-background-secondary":"#333333","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-dropdown-button-color":"#6C7381","--ck-spinner-color":"var(--ck-focus-color)","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"#3d3d3d"}},web95:U,retro:{"--ck-font-family":'"SF Pro Rounded",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"8px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-hover-background":"#F3EDE8","--ck-connectbutton-active-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-color":"#000000","--ck-connectbutton-balance-background":"#F3EDE8","--ck-connectbutton-balance-box-shadow":"-4px 4px 0px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-hover-background":"#eee5dd","--ck-connectbutton-balance-connectbutton-box-shadow":"-4px 8px 0px -4px #000000, inset 0 0 0 2px #000000","--ck-connectbutton-balance-connectbutton-border-radius":"0px 8px 8px 0","--ck-primary-button-color":"#373737","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #000000, -4px 4px 0 0 #000000","--ck-primary-button-border-radius":"8px","--ck-primary-button-hover-background":"#F3EDE8","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #000000, -0px 0px 0 0 #000000","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#373737","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-secondary-button-hover-background":"#F3EDE8","--ck-secondary-button-hover-box-shadow":"0 0 0 0 #000000, inset 0 0 0 2px #000000","--ck-focus-color":"#3B99FC","--ck-overlay-background":"rgba(133, 120, 122, 0.8)","--ck-body-color":"#373737","--ck-body-color-muted":"rgba(0, 0, 0, 0.5)","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#EBE1D8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"rgba(0,0,0,0.1)","--ck-body-background-secondary-hover-background":"#4D4D4D","--ck-body-background-secondary-hover-outline":"#373737","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"8px","--ck-tertiary-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-body-action-color":"#373737","--ck-body-divider":"#373737","--ck-body-color-danger":"#FF4E4E","--ck-body-disclaimer-background":"#E3D6C9","--ck-body-disclaimer-box-shadow":"-4px 4px 0 0 #000000, inset 2px 0 0 0 #000000, inset -2px 0 0 0 #000000, inset 0 -2px 0 0 #000000","--ck-body-disclaimer-font-weight":"500","--ck-body-disclaimer-color":"#888079","--ck-body-disclaimer-link-color":"#5B5650","--ck-body-disclaimer-link-hover-color":"#000000","--ck-modal-box-shadow":"-10px 10px 0px #000000, inset 0 0 0 2px #000000","--ck-copytoclipboard-stroke":"#555555","--ck-tooltip-border-radius":"8px","--ck-tooltip-color":"#373737","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#EBE1D8","--ck-tooltip-shadow":"-6px 6px 0 0 #000000, 0 0 0 2px #000000","--ck-spinner-color":"#1A88F8","--ck-dropdown-button-color":"#000","--ck-dropdown-button-box-shadow":"-2px 2px 0 2px #000000,  0 0 0 2px #000000","--ck-dropdown-button-background":"#ffffff","--ck-dropdown-button-hover-background":"#F3EDE8","--ck-dropdown-button-hover-box-shadow":"-2px 2px 0 0 #000000,  0 0 0 2px #000000","--ck-dropdown-pending-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-color":"#FFFFFF","--ck-dropdown-active-static-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-active-background":"#3B99FC","--ck-dropdown-active-box-shadow":"inset 0 0 0 2px #000000","--ck-dropdown-active-border-radius":"8px","--ck-dropdown-color":"rgba(0, 0, 0, 0.5)","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"-4px 4px 0 0 #000000, inset 0 0 0 2px #000000","--ck-dropdown-border-radius":"8px","--ck-alert-color":"rgba(0, 0, 0, 0.5)","--ck-alert-background":" #F5F5F5","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"8px","--ck-qr-dot-color":"#000000","--ck-qr-border-color":"#000000","--ck-qr-background":"#ffffff","--ck-graphic-primary-color":"#000000","--ck-graphic-primary-background":"#ffffff","--ck-graphic-compass-background":"#FFFFFF","--ck-siwe-border":"#8E8985"},soft:{"--ck-border-radius":"12px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"12px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F6F7F9","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"12px","--ck-primary-button-color":"#414451","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F6F7F9","--ck-primary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"12px","--ck-secondary-button-color":"#414451","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"0 0 0 1px #E9EAEC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F6F7F9","--ck-secondary-button-hover-box-shadow":"0 0 0 1px #D9DBDD, 0px 0 0 rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#414451","--ck-body-color-muted":"#9196A1","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#F6F8FA","--ck-tertiary-border-radius":"13px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#999999","--ck-body-divider":"#f7f6f8","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-dropdown-color":"rgba(55, 55, 55, 0.4)","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#2E3138","--ck-qr-border-color":"#E9EAEC","--ck-siwe-border":"#EAEBED"},midnight:{"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"10px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"8px","--ck-connectbutton-color":"#ffffff","--ck-connectbutton-background":"#313235","--ck-connectbutton-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-connectbutton-hover-background":"#414144","--ck-connectbutton-active-background":"#4C4D4F","--ck-connectbutton-balance-color":"#ffffff","--ck-connectbutton-balance-background":"#1F2023","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #313235","--ck-connectbutton-balance-hover-background":"#313235","--ck-connectbutton-balance-active-background":"#414144","--ck-primary-button-border-radius":"8px","--ck-primary-button-color":"#ffffff","--ck-primary-button-background":"rgba(255, 255, 255, 0.08)","--ck-primary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-primary-button-hover-background":"rgba(255, 255, 255, 0.2)","--ck-secondary-button-border-radius":"8px","--ck-secondary-button-color":"#ffffff","--ck-secondary-button-background":"#363638","--ck-secondary-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-secondary-button-hover-background":"#3c3c3e","--ck-overlay-background":"rgba(0,0,0,0.4)","--ck-modal-box-shadow":"inset 0 0 0 1px #38393C, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-body-color":"#ffffff","--ck-body-color-muted":"#8B8F97","--ck-body-color-muted-hover":"#ffffff","--ck-body-background":"#1F2023","--ck-body-background-transparent":"rgba(31, 32, 35, 0)","--ck-body-background-secondary":"#313235","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"rgba(255, 255, 255, 0.02)","--ck-body-background-tertiary":"#313235","--ck-tertiary-border-radius":"12px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-body-action-color":"#8B8F97","--ck-body-divider":"rgba(255,255,255,0.1)","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#2B2D31","--ck-body-disclaimer-box-shadow":"none","--ck-body-disclaimer-color":"#808183","--ck-body-disclaimer-link-color":"#AAABAD","--ck-body-disclaimer-link-hover-color":"#ffffff","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#1F2023","--ck-tooltip-background-secondary":"#1F2023","--ck-tooltip-color":"#ffffff","--ck-tooltip-shadow":" 0 0 0 1px rgba(255, 255, 255, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#6C7381","--ck-dropdown-button-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.05)","--ck-dropdown-button-background":"#313235","--ck-dropdown-pending-color":"#8B8F97","--ck-dropdown-active-color":"#FFF","--ck-dropdown-active-static-color":"#FFF","--ck-dropdown-active-background":"rgba(255, 255, 255, 0.07)","--ck-dropdown-color":"#8B8F97","--ck-dropdown-background":"#313235","--ck-dropdown-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.03)","--ck-dropdown-border-radius":"8px","--ck-alert-color":"#8B8F97","--ck-alert-background":"#404145","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(255, 255, 255, 0.02)","--ck-qr-border-radius":"12px","--ck-qr-dot-color":"#ffffff","--ck-qr-border-color":"rgba(255,255,255,0.1)"},minimal:{"--ck-font-family":'"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"0px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-border-radius":"0px","--ck-connectbutton-color":"#414451","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-connectbutton-hover-color":"#111","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #111","--ck-connectbutton-balance-color":"#111111","--ck-connectbutton-balance-background":"#F7F7F7","--ck-connectbutton-balance-box-shadow":"inset 0 0 0 1px #F7F7F7","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-connectbutton-balance-hover-box-shadow":"inset 0 0 0 1px #111","--ck-primary-button-border-radius":"0px","--ck-primary-button-color":"#111111","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-primary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-secondary-button-border-radius":"0px","--ck-secondary-button-color":"#111111","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 1px #111111","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#E7E7E7","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#111111","--ck-body-color-muted":"#A0A0A0","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"0px","--ck-tertiary-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-body-action-color":"#A0A0A0","--ck-body-divider":"#EBEBEB","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#FAFAFA","--ck-body-disclaimer-box-shadow":"inset 0 1px 0 0 #ECECEC","--ck-body-disclaimer-color":"#9D9D9D","--ck-body-disclaimer-link-color":"#6E6E6E","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-border-radius":"0px","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-active-border-radius":"0","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"0","--ck-alert-color":"rgba(17, 17, 17, 0.4)","--ck-alert-background":"#fff","--ck-alert-box-shadow":"inset 0 0 0 1px #EBEBEB","--ck-alert-border-radius":"0","--ck-qr-border-radius":"0px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#EBEBEB","--ck-modal-h1-font-weight":"400","--ck-modal-heading-font-weight":"400","--ck-primary-button-font-weight":"400","--ck-siwe-border":"#EBEBEB"},rounded:{"--ck-font-family":'"Nunito",ui-rounded,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"17px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"14px","--ck-connectbutton-color":"#000000","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 2px #DFE4EC, 0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-hover-background":"#F9FAFB","--ck-connectbutton-balance-color":"#414451","--ck-connectbutton-balance-background":"#F9FAFB","--ck-connectbutton-balance-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-hover-background":"#F5F7F9","--ck-connectbutton-balance-hover-box-shadow":"0 2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-balance-active-box-shadow":"0 0 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-connectbutton-active-background":"#F5F7F9","--ck-connectbutton-active-box-shadow":"inset 0 0 0 2px #CFD7E2, 0 0px 0 0 #CFD7E2, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-border-radius":"18px","--ck-primary-button-color":"#000000","--ck-primary-button-background":"#ffffff","--ck-primary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-primary-button-hover-background":"#F5F7F9","--ck-primary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#000000","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -4px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-secondary-button-hover-background":"#F5F7F9","--ck-secondary-button-hover-box-shadow":"inset 0 0 0 2px #DFE4EC, inset  0 -2px 0 0 #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 3px 16px rgba(0, 0, 0, 0.08)","--ck-body-color":"#000000","--ck-body-color-muted":"#93989F","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#ffffff","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#f6f7f9","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-secondary-hover-outline":"#4282FF","--ck-body-background-tertiary":"#ffffff","--ck-tertiary-border-radius":"22px","--ck-tertiary-box-shadow":"inset 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-body-action-color":"#93989F","--ck-body-divider":"#DFE4EC","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFB","--ck-body-disclaimer-font-size":"14px","--ck-body-disclaimer-font-weight":"700","--ck-body-disclaimer-color":"#959697","--ck-body-disclaimer-link-color":"#646464","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#CCCCCC","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":" 0 0 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 2px #DFE4EC,  0 2px 0 2px #DFE4EC, 0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#F5F7F9","--ck-dropdown-pending-color":"#848D9A","--ck-dropdown-active-color":"#000000","--ck-dropdown-active-static-color":"#848D9A","--ck-dropdown-active-background":"#F5F7F9","--ck-dropdown-color":"#848D9A","--ck-dropdown-background":"#FFFFFF","--ck-dropdown-box-shadow":"0px 2px 15px rgba(0, 0, 0, 0.15)","--ck-dropdown-border-radius":"16px","--ck-alert-color":"#848D9A","--ck-alert-background":"#F5F7F9","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#111111","--ck-qr-border-color":"#DFE4EC","--ck-modal-h1-font-weight":"700","--ck-modal-heading-font-weight":"700","--ck-primary-button-font-weight":"700","--ck-siwe-border":"#DFE4EC"},nouns:{"--ck-font-family":'"PT Root UI",ui-rounded,"Nunito",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,"Apple Color Emoji",Arial,sans-serif,"Segoe UI Emoji","Segoe UI Symbol"',"--ck-border-radius":"24px","--ck-connectbutton-font-size":"16px","--ck-connectbutton-font-weight":"700","--ck-connectbutton-border-radius":"10px","--ck-connectbutton-color":"#151C3B","--ck-connectbutton-background":"#ffffff","--ck-connectbutton-box-shadow":"inset 0 0 0 1px #D6D8E1","--ck-connectbutton-hover-background":"#E9EBF3","--ck-connectbutton-hover-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-active-background":"#D4D8E8","--ck-connectbutton-active-box-shadow":"inset 0 0 0 1px #D4D8E8","--ck-connectbutton-balance-color":"#373737","--ck-connectbutton-balance-background":"#F6F7F9","--ck-connectbutton-balance-box-shadow":"none","--ck-connectbutton-balance-hover-background":"#f1f1f3","--ck-primary-button-border-radius":"16px","--ck-primary-button-color":"#151C3B","--ck-primary-button-background":"#ffffff","--ck-primary-button-font-weight":"700","--ck-primary-button-hover-background":"#DEE1ED","--ck-secondary-button-border-radius":"16px","--ck-secondary-button-color":"#151C3B","--ck-secondary-button-background":"#ffffff","--ck-secondary-button-font-weight":"700","--ck-secondary-button-hover-background":"#DEE1ED","--ck-focus-color":"#1A88F8","--ck-modal-box-shadow":"0px 2px 4px rgba(0, 0, 0, 0.02)","--ck-overlay-background":"rgba(213, 215, 225, 0.8)","--ck-overlay-backdrop-filter":"blur(6px)","--ck-body-color":"#151C3B","--ck-body-color-muted":"#757A8E","--ck-body-color-muted-hover":"#000000","--ck-body-background":"#F4F4F8","--ck-body-background-transparent":"rgba(255,255,255,0)","--ck-body-background-secondary":"#E9E9F1","--ck-body-background-secondary-hover-background":"#e0e4eb","--ck-body-background-tertiary":"#E9E9F1","--ck-tertiary-border-radius":"24px","--ck-body-action-color":"#79809C","--ck-body-divider":"#D9DBE3","--ck-body-color-danger":"#FF4E4E","--ck-body-color-valid":"#32D74B","--ck-body-disclaimer-background":"#F9FAFA","--ck-body-disclaimer-color":"#AFB1B6","--ck-body-disclaimer-link-color":"#787B84","--ck-body-disclaimer-link-hover-color":"#000000","--ck-copytoclipboard-stroke":"#79809C","--ck-tooltip-background":"#ffffff","--ck-tooltip-background-secondary":"#ffffff","--ck-tooltip-color":"#999999","--ck-tooltip-shadow":"0px 2px 10px rgba(0, 0, 0, 0.08)","--ck-spinner-color":"var(--ck-focus-color)","--ck-dropdown-button-color":"#999999","--ck-dropdown-button-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-button-background":"#fff","--ck-dropdown-button-hover-color":"#8B8B8B","--ck-dropdown-button-hover-background":"#DEE1ED","--ck-dropdown-button-hover-box-shadow":"0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-dropdown-color":"#757A8E","--ck-dropdown-box-shadow":"0 0 0 1px rgba(0, 0, 0, 0.01), 0px 0px 7px rgba(0, 0, 0, 0.05)","--ck-alert-color":"#9196A1","--ck-alert-background":"#F6F8FA","--ck-alert-box-shadow":"inset 0 0 0 1px rgba(0, 0, 0, 0.04)","--ck-alert-border-radius":"8px","--ck-qr-border-radius":"24px","--ck-qr-dot-color":"#000000","--ck-qr-background":"#ffffff","--ck-siwe-border":"#DFE4EC","--ck-graphic-primary-background":"#fff","--ck-graphic-compass-background":"#fff","--ck-graphic-primary-box-shadow":"0px 2.94737px 14.7368px rgba(0, 0, 0, 0.1)","--ck-graphic-compass-box-shadow":"0px 2px 9px rgba(0, 0, 0, 0.15)"}};let $={default:{"--ck-font-family":`-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    'Apple Color Emoji', Arial, sans-serif, 'Segoe UI Emoji',
    'Segoe UI Symbol'`,"--ck-border-radius":"20px","--ck-secondary-button-border-radius":"16px"},graphics:{light:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#4E4E4E","--ck-graphic-scaniconwithlogos-02":"#272727","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#F6F7F9","--ck-chain-ethereum-01":"#25292E","--ck-chain-ethereum-02":"#fff","--ck-chain-ethereum-03":"#DFE0E0"},dark:{"--ck-graphic-wave-stop-01":"#E8F17D","--ck-graphic-wave-stop-02":"#A8ECDE","--ck-graphic-wave-stop-03":"#7AA1F2","--ck-graphic-wave-stop-04":"#DEA1E8","--ck-graphic-wave-stop-05":"#F46D98","--ck-graphic-scaniconwithlogos-01":"#AFAFAF","--ck-graphic-scaniconwithlogos-02":"#696969","--ck-graphic-scaniconwithlogos-03":"#F8D74A","--ck-graphic-scaniconwithlogos-04":"#3D3D3D"}},ens:{light:{"--ck-ens-01-start":"#FF3B30","--ck-ens-01-stop":"#FF9500","--ck-ens-02-start":"#FF9500","--ck-ens-02-stop":"#FFCC00","--ck-ens-03-start":"#FFCC00","--ck-ens-03-stop":"#34C759","--ck-ens-04-start":"#5856D6","--ck-ens-04-stop":"#AF52DE","--ck-ens-05-start":"#5AC8FA","--ck-ens-05-stop":"#007AFF","--ck-ens-06-start":"#007AFF","--ck-ens-06-stop":"#5856D6","--ck-ens-07-start":"#5856D6","--ck-ens-07-stop":"#AF52DE","--ck-ens-08-start":"#AF52DE","--ck-ens-08-stop":"#FF2D55"},dark:{"--ck-ens-01-start":"#FF453A","--ck-ens-01-stop":"#FF9F0A","--ck-ens-02-start":"#FF9F0A","--ck-ens-02-stop":"#FFD60A","--ck-ens-03-start":"#FFD60A","--ck-ens-03-stop":"#32D74B","--ck-ens-04-start":"#32D74B","--ck-ens-04-stop":"#64D2FF","--ck-ens-05-start":"#64D2FF","--ck-ens-05-stop":"#0A84FF","--ck-ens-06-start":"#0A84FF","--ck-ens-06-stop":"#5E5CE6","--ck-ens-07-start":"#5E5CE6","--ck-ens-07-stop":"#BF5AF2","--ck-ens-08-start":"#BF5AF2","--ck-ens-08-stop":"#FF2D55"}},brand:{"--ck-family-brand":"#1A88F8","--ck-brand-walletConnect":"#3B99FC","--ck-brand-coinbaseWallet":"#0052FF","--ck-brand-metamask":"#f6851b","--ck-brand-metamask-01":"#F6851B","--ck-brand-metamask-02":"#E2761B","--ck-brand-metamask-03":"#CD6116","--ck-brand-metamask-04":"#161616","--ck-brand-metamask-05":"#763D16","--ck-brand-metamask-06":"#D7C1B3","--ck-brand-metamask-07":"#C0AD9E","--ck-brand-metamask-08":"#E4761B","--ck-brand-metamask-09":"#233447","--ck-brand-metamask-10":"#E4751F","--ck-brand-metamask-11":"#FEF5E7","--ck-brand-metamask-12":"#E3C8AB","--ck-brand-trust-01":"#3375BB","--ck-brand-trust-02":"#ffffff","--ck-brand-trust-01b":"#ffffff","--ck-brand-trust-02b":"#3375BB","--ck-brand-argent":"#f36a3d","--ck-brand-imtoken-01":"#11C4D1","--ck-brand-imtoken-02":"#0062AD"}},V={light:H.base.light,dark:H.base.dark,web95:H.web95,retro:H.retro,soft:H.soft,midnight:H.midnight,minimal:H.minimal,rounded:H.rounded,nouns:H.nouns},G=(e,o)=>E.iv`
    ${Object.keys(e).map(o=>{let t=e[o];return t&&`${o}:${t};`})}
  `,P=(e,o)=>{let t=o?" !important":"";return E.iv`
    ${Object.keys(e).map(o=>{let n=e[o];return n&&`${o}:${n}${t};`})}
    @supports (color: color(display-p3 1 1 1)) {
      ${Object.keys(e).map(o=>{let n=e[o];return`${o}:${Z(n)}${t};`})}
    }
  `},Y={default:G($.default),light:P(V.light),dark:P(V.dark),web95:P(V.web95),retro:P(V.retro),soft:P(V.soft),midnight:P(V.midnight),minimal:P(V.minimal),rounded:P(V.rounded),nouns:P(V.nouns)},J={brand:G($.brand),ensLight:G($.ens.light),ensDark:G($.ens.dark),graphicsLight:G($.graphics.light),graphicsDark:G($.graphics.dark)},q=E.iv`
  ${J.brand}
  ${J.ensLight}
  ${J.graphicsLight}
`,Q=E.iv`
  ${J.brand}
  ${J.ensDark}
  ${J.graphicsDark}
`,X="auto",K=z(w.E.div)`
  ${Y.default}

  ${e=>{switch(e.$useTheme){case"web95":return X="light",Y.web95;case"retro":return X="light",Y.retro;case"soft":return X="light",Y.soft;case"midnight":return X="dark",Y.midnight;case"minimal":return X="light",Y.minimal;case"rounded":return X="light",Y.rounded;case"nouns":return X="light",Y.nouns;default:if("light"===e.$useMode)return X="light",Y.light;if("dark"===e.$useMode)return X="dark",Y.dark;return E.iv`
            @media (prefers-color-scheme: light) {
              ${Y.light}
            }
            @media (prefers-color-scheme: dark) {
              ${Y.dark}
            }
          `}}}

  ${e=>{switch(X){case"light":return q;case"dark":return Q;default:return E.iv`
          ${q}
          @media (prefers-color-scheme: dark) {
            ${Q}
          }
        `}}}


  ${e=>{var o;if(e.$customTheme&&e.$customTheme["--ck-accent-color"]&&["light","dark","auto","",void 0].includes(e.$useTheme)){let t=e.$customTheme["--ck-accent-color"],n=null!==(o=e.$customTheme["--ck-accent-text-color"])&&void 0!==o?o:"#ffffff";return{"--ck-accent-color":t,"--ck-accent-text-color":n,"--ck-secondary-button-background":t,"--ck-secondary-button-hover-background":t,"--ck-secondary-button-color":n,"--ck-button-primary-color":n,"--ck-focus-color":t}}if(e.$customTheme)return P(e.$customTheme,!0)}}

  all: initial;
  text-align: left;
  text-direction: ltr;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.001px transparent;
  text-size-adjust: none;
  font-size: 16px;

  button {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-stroke: 0.001px transparent;
  }

  &,
  * {
    font-family: var(--ck-font-family);
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  /*
  @media (prefers-reduced-motion) {
    * {
      animation-duration: 60ms !important;
      transition-duration: 60ms !important;
    }
  }
  */
  img,
  svg {
    max-width: 100%;
  }
  strong {
    font-weight: 600;
  }
  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--ck-focus-color);
  }
`,ee=e=>{e={selector:"__CONNECTKIT__",...e};let{selector:o,children:t}=e,n=(0,m.useRef)(null),[r,i]=(0,m.useState)(!1);return((0,m.useEffect)(()=>{let e="#"+o.replace(/^#/,"");if(n.current=document.querySelector(e),!n.current){let t=document.createElement("div");t.setAttribute("id",o),document.body.appendChild(t),n.current=t}i(!0)},[o]),n.current&&r)?(0,L.createPortal)(t,n.current):null},eo=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6505 3.64041C15.6501 3.64062 15.6497 3.64083 15.6493 3.64103L6.05165 8.43985L16.2501 13.5391L26.4484 8.43987L16.8508 3.64103C16.8504 3.64083 16.85 3.64063 16.8496 3.64043C16.6632 3.54806 16.458 3.5 16.25 3.5C16.042 3.5 15.8369 3.54806 15.6505 3.64041ZM28 10.4592L17.5001 15.7091L17.5 28.5205L27.248 23.6465L27.2508 23.6452C27.4757 23.5334 27.665 23.3611 27.7973 23.1477C27.9297 22.9342 27.9999 22.6881 28 22.4369V10.4592ZM15 28.527L15.0001 15.7091L4.50006 10.4591V22.4333C4.49831 22.6849 4.56687 22.9319 4.69807 23.1466C4.82896 23.3608 5.01696 23.5342 5.24095 23.6475C5.24148 23.6477 5.242 23.648 5.24253 23.6483L15 28.527ZM14.5207 31.0824L4.12104 25.8826L4.11759 25.8809C3.47681 25.558 2.93902 25.0625 2.56486 24.4502C2.19154 23.8394 1.99597 23.1365 2.00006 22.4207V10.0486C2.00044 9.33234 2.20062 8.62972 2.5781 8.021C2.95529 7.41274 3.49457 6.92167 4.13537 6.60291C4.13585 6.60267 4.13633 6.60243 4.13681 6.60219L14.534 1.40359L14.5368 1.40221C15.0692 1.13767 15.6556 1 16.25 1C16.8445 1 17.4309 1.13767 17.9633 1.40221L17.966 1.40358L28.3633 6.60219C28.3638 6.60245 28.3643 6.6027 28.3648 6.60295C29.0055 6.92171 29.5448 7.41276 29.922 8.021C30.2994 8.62973 30.4996 9.33168 30.5 10.0479V22.4376C30.4996 23.1538 30.2994 23.8565 29.922 24.4652C29.5448 25.0734 29.0056 25.5644 28.365 25.8831C28.3644 25.8834 28.3638 25.8837 28.3633 25.884L17.9664 31.0824C17.9663 31.0825 17.9665 31.0824 17.9664 31.0824C17.4316 31.3499 16.8415 31.4894 16.2435 31.4894C15.6455 31.4894 15.0554 31.3499 14.5207 31.0824C14.5205 31.0824 14.5208 31.0825 14.5207 31.0824Z",fill:"#CCCCCC"})}),et=({background:e=!1,...o})=>(0,v.jsx)("svg",{...o,"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:e?{background:"var(--ck-brand-walletConnect)"}:void 0,children:(0,v.jsx)("path",{d:"M9.58818 11.8556C13.1293 8.31442 18.8706 8.31442 22.4117 11.8556L22.8379 12.2818C23.015 12.4588 23.015 12.7459 22.8379 12.9229L21.3801 14.3808C21.2915 14.4693 21.148 14.4693 21.0595 14.3808L20.473 13.7943C18.0026 11.3239 13.9973 11.3239 11.5269 13.7943L10.8989 14.4223C10.8104 14.5109 10.6668 14.5109 10.5783 14.4223L9.12041 12.9645C8.94336 12.7875 8.94336 12.5004 9.12041 12.3234L9.58818 11.8556ZM25.4268 14.8706L26.7243 16.1682C26.9013 16.3452 26.9013 16.6323 26.7243 16.8093L20.8737 22.6599C20.6966 22.8371 20.4096 22.8371 20.2325 22.6599L16.0802 18.5076C16.0359 18.4634 15.9641 18.4634 15.9199 18.5076L11.7675 22.6599C11.5905 22.8371 11.3034 22.8371 11.1264 22.66C11.1264 22.66 11.1264 22.6599 11.1264 22.6599L5.27561 16.8092C5.09856 16.6322 5.09856 16.3451 5.27561 16.168L6.57313 14.8706C6.75019 14.6934 7.03726 14.6934 7.21431 14.8706L11.3668 19.023C11.411 19.0672 11.4828 19.0672 11.5271 19.023L15.6793 14.8706C15.8563 14.6934 16.1434 14.6934 16.3205 14.8706L20.473 19.023C20.5172 19.0672 20.589 19.0672 20.6332 19.023L24.7856 14.8706C24.9627 14.6935 25.2498 14.6935 25.4268 14.8706Z",fill:e?"white":"var(--ck-brand-walletConnect)"})}),en=({background:e=!1,...o})=>(0,v.jsxs)("svg",{...o,"aria-hidden":"true",style:e?{background:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",borderRadius:"27.5%"}:void 0,width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M27.2684 4.03027L17.5018 11.2841L19.3079 7.00442L27.2684 4.03027Z",fill:"var(--ck-brand-metamask-02)",stroke:"var(--ck-brand-metamask-02)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M4.7218 4.03027L14.4099 11.3528L12.6921 7.00442L4.7218 4.03027Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M23.7544 20.8438L21.1532 24.8289L26.7187 26.3602L28.3187 20.9321L23.7544 20.8438Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M3.69104 20.9321L5.28117 26.3602L10.8467 24.8289L8.24551 20.8438L3.69104 20.9321Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M10.5327 14.1108L8.98181 16.4568L14.5081 16.7022L14.3117 10.7637L10.5327 14.1108Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M21.4576 14.1111L17.6295 10.6953L17.5018 16.7025L23.0182 16.4571L21.4576 14.1111Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M10.8469 24.8292L14.1647 23.2096L11.2984 20.9717L10.8469 24.8292Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M17.8257 23.2096L21.1531 24.8292L20.6918 20.9717L17.8257 23.2096Z",fill:"var(--ck-brand-metamask-08)",stroke:"var(--ck-brand-metamask-08)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M21.1531 24.8296L17.8257 23.21L18.0906 25.3793L18.0612 26.2921L21.1531 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M10.8469 24.8296L13.9388 26.2921L13.9192 25.3793L14.1647 23.21L10.8469 24.8296Z",fill:"var(--ck-brand-metamask-06)",stroke:"var(--ck-brand-metamask-06)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M13.9877 19.5389L11.2196 18.7242L13.1729 17.8311L13.9877 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M18.0023 19.5389L18.8171 17.8311L20.7802 18.7242L18.0023 19.5389Z",fill:"var(--ck-brand-metamask-09)",stroke:"var(--ck-brand-metamask-09)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M10.8468 24.8289L11.3179 20.8438L8.24561 20.9321L10.8468 24.8289Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M20.6821 20.8438L21.1532 24.8289L23.7544 20.9321L20.6821 20.8438Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M23.0182 16.4565L17.5018 16.7019L18.0122 19.5387L18.827 17.8308L20.7902 18.7239L23.0182 16.4565Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M11.2198 18.7239L13.1829 17.8308L13.9878 19.5387L14.5081 16.7019L8.98181 16.4565L11.2198 18.7239Z",fill:"var(--ck-brand-metamask-03)",stroke:"var(--ck-brand-metamask-03)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M8.98181 16.4565L11.2983 20.9718L11.2198 18.7239L8.98181 16.4565Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M20.7901 18.7239L20.6919 20.9718L23.0181 16.4565L20.7901 18.7239Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M14.508 16.7021L13.9878 19.5389L14.6356 22.886L14.7828 18.4788L14.508 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M17.5017 16.7021L17.2367 18.4689L17.3545 22.886L18.0121 19.5389L17.5017 16.7021Z",fill:"var(--ck-brand-metamask-10)",stroke:"var(--ck-brand-metamask-10)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M18.0121 19.5388L17.3545 22.886L17.8257 23.2099L20.6918 20.972L20.79 18.7241L18.0121 19.5388Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M11.2196 18.7241L11.2981 20.972L14.1644 23.2099L14.6355 22.886L13.9877 19.5388L11.2196 18.7241Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M18.0615 26.2917L18.0908 25.3788L17.8455 25.1628H14.145L13.9192 25.3788L13.9388 26.2917L10.8469 24.8291L11.9267 25.7126L14.1155 27.234H17.875L20.0736 25.7126L21.1533 24.8291L18.0615 26.2917Z",fill:"var(--ck-brand-metamask-07)",stroke:"var(--ck-brand-metamask-07)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M17.8258 23.2096L17.3546 22.8857H14.6357L14.1646 23.2096L13.9191 25.379L14.1449 25.163H17.8454L18.0907 25.379L17.8258 23.2096Z",fill:"var(--ck-brand-metamask-04)",stroke:"var(--ck-brand-metamask-04)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M27.6806 11.7552L28.5149 7.75041L27.2683 4.03027L17.8257 11.0387L21.4575 14.1109L26.591 15.6128L27.7296 14.2876L27.2389 13.9342L28.0241 13.2178L27.4156 12.7465L28.2007 12.1478L27.6806 11.7552Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M3.48486 7.75041L4.3192 11.7552L3.78916 12.1478L4.57441 12.7465L3.97566 13.2178L4.7609 13.9342L4.27012 14.2876L5.39892 15.6128L10.5325 14.1109L14.1644 11.0387L4.72164 4.03027L3.48486 7.75041Z",fill:"var(--ck-brand-metamask-05)",stroke:"var(--ck-brand-metamask-05)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M26.591 15.6122L21.4575 14.1104L23.0181 16.4564L20.6919 20.9716L23.7544 20.9323H28.3186L26.591 15.6122Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M10.5326 14.1104L5.39897 15.6122L3.69104 20.9323H8.24551L11.2982 20.9716L8.98168 16.4564L10.5326 14.1104Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M17.5018 16.7018L17.8258 11.0381L19.3177 7.00391H12.6921L14.1645 11.0381L14.5081 16.7018L14.6258 18.4883L14.6356 22.8856H17.3546L17.3742 18.4883L17.5018 16.7018Z",fill:"var(--ck-brand-metamask-01)",stroke:"var(--ck-brand-metamask-01)",strokeWidth:"0.269931",strokeLinecap:"round",strokeLinejoin:"round"})]}),er=({background:e=!1,...o})=>(0,v.jsxs)("svg",{...o,"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"var(--ck-brand-coinbaseWallet)"}),e&&(0,v.jsx)("rect",{rx:"27%",width:"20",height:"20",fill:"var(--ck-brand-coinbaseWallet)"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.0001 17C13.8661 17 17.0001 13.866 17.0001 10C17.0001 6.13401 13.8661 3 10.0001 3C6.13413 3 3.00012 6.13401 3.00012 10C3.00012 13.866 6.13413 17 10.0001 17ZM8.25012 7.71429C7.95427 7.71429 7.71441 7.95414 7.71441 8.25V11.75C7.71441 12.0459 7.95427 12.2857 8.25012 12.2857H11.7501C12.046 12.2857 12.2858 12.0459 12.2858 11.75V8.25C12.2858 7.95414 12.046 7.71429 11.7501 7.71429H8.25012Z",fill:"white"})]}),ei=({background:e=!1,...o})=>(0,v.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACwCAYAAACvt+ReAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiMSURBVHgB7Z0/TNVXFMfPr+lUTXHQFVjFwFI3QVexbrgo0Y5FHJq0g2B0soEydCzapEtpjQtsBJx5OtUukMAqpJsOOthuvv6+75dfpLTYB7x3/tz7/STkGWPi43c/77xzz7333OL41XdNISQoHwkhgaHAJDQUmISGApPQUGASGgpMQkOBSWgoMAkNBSahocAkNBSYhIYCk9BQYBIaCkxCQ4FJaCgwCQ0FJqGhwCQ0FJiEhgKT0FBgEhoKTEJDgUloKDAJDQUmoflYyJHoPVlI36nytfzp+aT8OVb9fd/Jf/677VfV65u35c+fIjsvRV6XrxvbbIx0FChwm0DUkQGRoX78WWSwT1riHp1C1rcrsTd2RBqbldTbL4W0QcHeaP/NiTKafn62lPa0yPBAp2RtH0ToxlYl9NMtCr0fFHgXkPba+UIun5VWtPUERH60Rpn3kr3AkPbc6UJujfqTdj9qmR+tMfZkKzDEvTlaiYvJV0TqNGN2Kd+onJ3AyGWnxwoZPy9JgYico8jZCJyquHvJTeTkBU4hVTgMM0si86vNVs05ZZIW+HJZBpu7Xi0y5AhyZIic8mQvSYGRLjz4sghTVeg2KacVyQk8XtZx527klS60Q6rROBmBketOjVW5Ltmf+SelyIvp5MZJCIyUYeVukW2ue1AQjS99m0ZKEX475XC5ivZslvIeBDwrPDMsmUcntMCTFwtZvcd89zDgmT3+umjVxiMTdjslHvydMSFHpHqGRatKEZGQEZjydhY8y6iROJzAlLc7RJU4lMCUt7tElDiMwJRXh2gShxCY8uqCZz05GkNi9wJjQw7l1QeboHAe0DuuBcYK28MJIUY8/qZQP8x6UNwKjL0NWB7mIoUdPQHGwK3A2JjD5WF7MAZ3rvjNh10KjC2R3FXmh8mL4vYoljuBkXNx0uaPuRs+82F3Ak8zdXAJ8uAHE/5SCVcCI3VI/dRwZFBW87YF043AqDowdfDP3HVfVQk3AuPoO1MH/2CMPK3SuRCYE7dYoELkZULnQuDopwJyAymElzEzFxifZE7c4oEx8xCFzQVm9I2Lh7EzFZjRNzYYO+uKhKnAjL7xsa5ImAocYb8p+TDWXT/NBMaqG+u+8YG8OHRghaHAQhJh/IKYYdLYBJO3KK1PrfuHeT8RAZAKIhJbNAw0ERj9zDyDGzSnFpqy/FzMuzhWX9HlhPdK8a/bPz0xfqFodYTXxiSF8Jw+4ErYc9PNVlNoDy1I8R7wXi7d990S1WqXmrrA3tOH2cVmq/2oN/Cebi/47V9WpxHaqAvsPX1A2uAVz+8NWFQj1AX2HH0R5Tx/Tde33HvFYmz1BebiRbJYjK2qwMh/uXiRLr0G46sq8GAv9z6kzojyHEdV4GHe25Y8g/2iiqrAQ31CEkd7sUVV4BPsc5Y82kFKNwfuF5I4yU7imD7kg6bEagJ/+gkrELmgmQerCRxhWyDpDL2n9IKVmsBsVJ0PPcdEDT2BFX8pYotmsAp/2TfxR5IRmHsg8uEEIzAh7UGBSWgoMAmNmsCeTxKQzqLZioARmIRGTeA3b4Vkgua5Qj2BHR+WJJ1FM1ipCWzdoonosfNSr3+F3iTuld+mHKSzvP5L1GAVgnScjReihmoVghKnz/q2qKIqsPYvR/TRrjapCsyJXPqs74gqqgJvMAInz9NN3cm6qsCNLVYiUifpHBiTOE7k0gXNwbXHV30vxNqWkER5uinqqAts8Uu2C06NeD58ivfm+WRLYzODOzKWn/vOg3FZiVcs72Nrh4bBt6u6wNjU03CcRtwZ89nDAu8J780rjU2b+Y3JfuDl38Qt+JpeuVu0bhL10IwQ72HyYiHPZn3fbPpozeabtTh+9Z36/wxJ/vgpRqspXnTYHme+srndyeSiwzqNiHBfBlti/T9W6QMwO1I0v8JFjVSwSh+AmcCIwDylER8sXuAmUSvMBIa8P6wKCY51Xd/0VLLF5dCks8ws2Y6hqcD1RdYkJhg7670t5n0hrD/B5PB4GDtzgfEJZhSOh4foC1x05sEnmRWJWHj55nQhMD7JrEjEYXap6WZft5veaKhIoKZIfIMx8hRs3AiMFGLqZ07ovDO76Cvdc9Wdcvl331stcwcTN28TbnftVSceckLnEaQOHkue7gTG5OD2AlMJbyB18Hgg12WDa3xNzbMq4Yb5J023tXq3HdrxdcWqhD2t1GFR3OJWYOTBl+4zH7bkdYAxcH1HBnKuq98zH7bi5kOfee9u3F/ygrIaJ3X6YLVt+bm4x73AYP5J9UCJDnjWM0sSghACAzxQStx9IskLwggMKHF3iSYvCCUwoMTdIaK8IJzAgBJ3lqjyApPGJp2geuBNmR6L0eHHK1O/NEPvxTZpLdVJLn8m8t0XhfSdFHIAsEhxrayxR9/9F15ggKZ3K/cocbtgeRgrbCl0yw+ZA+8FA3FuqskNQG2AjTl4Vqlc9ZBEBN7N+HmR6SuMxntByjBdrmj+mtgJ8OQEBr2tZtBFS2ZSdY+c+DGdqLubJAWuyT0aI9edWoixp+GwJC0wQDPtW6OSVbkN6cKD1ao8lvp21OQFrsklrcDJiRlHfRu6TTYC16Qqcm7i1mQncE0t8vCAhM2Rc0oV9iNbgXeDaIxbiUYGJASoKqCtPyZnuR+5osC7QFTGxTMeZYa0uCQSqQLPCb6HAu9DLfPIgE2ageu90L6/scVI+yEocJtA6KHeUugzhQz2VuW5oX7pCJB1Y7tcEi/rtusvmi1x2VKgPSjwERnqe38JN157jlX15r0RuxbyzdvqmDqqBfihqEeDApPQJLEbjeQLBSahocAkNBSYhIYCk9BQYBIaCkxCQ4FJaCgwCQ0FJqGhwCQ0FJiEhgKT0FBgEhoKTEJDgUloKDAJDQUmoaHAJDQUmISGApPQUGASGgpMQkOBSWgoMAnN37++xPTCBdwUAAAAAElFTkSuQmCC"}),ea=({theme:e="light",...o})=>(0,v.jsxs)("svg",{...o,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("rect",{width:"44",height:"44",fill:"light"===e?"var(--ck-brand-trust-02)":"var(--ck-brand-trust-02b)"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.0246 11.8662C33.4096 11.8662 33.774 12.0243 34.0421 12.2925C34.3102 12.5675 34.4615 12.9387 34.4546 13.3168C34.3859 17.4143 34.2277 20.5493 33.9321 23.0312C33.6433 25.5131 33.2102 27.3556 32.5571 28.8475C32.1171 29.8443 31.574 30.6693 30.9346 31.3706C30.0752 32.2987 29.0921 32.9725 28.0196 33.6119C27.561 33.8861 27.0843 34.1568 26.5842 34.4408C25.5172 35.0468 24.3441 35.713 23.0146 36.6025C22.5333 36.9256 21.9077 36.9256 21.4265 36.6025C20.0766 35.7026 18.8879 35.0281 17.8112 34.4173C17.5718 34.2815 17.3379 34.1488 17.109 34.0175C15.8509 33.2887 14.7165 32.5943 13.7265 31.5906C13.0665 30.9306 12.4959 30.1262 12.0421 29.1706C11.4234 27.8918 11.004 26.345 10.6946 24.3443C10.2821 21.67 10.0759 18.1706 10.0002 13.3168C9.99336 12.9387 10.1377 12.5675 10.4059 12.2925C10.674 12.0243 11.0452 11.8662 11.4302 11.8662H12.0215C13.8433 11.8731 17.8652 11.6943 21.344 8.98559C21.8596 8.58683 22.5815 8.58683 23.0971 8.98559C26.5759 11.6943 30.5977 11.8731 32.4265 11.8662H33.0246ZM29.8277 27.9331C30.2746 27.0118 30.6459 25.74 30.9277 23.9112C31.2646 21.725 31.4709 18.755 31.5671 14.7125C29.4221 14.6506 25.7371 14.2381 22.224 11.8731C18.7109 14.2312 15.0259 14.6437 12.8877 14.7125C12.9633 18.0537 13.1146 20.6525 13.3552 22.6943C13.6302 25.0181 14.0221 26.5925 14.5102 27.6993C14.8333 28.435 15.1909 28.9643 15.6171 29.4318C16.1877 30.0575 16.9096 30.5731 17.8927 31.1643C18.3005 31.409 18.7502 31.6635 19.2396 31.9406C20.1116 32.4341 21.1099 32.9991 22.224 33.7081C23.3175 33.0107 24.3014 32.4515 25.1633 31.9616C25.4231 31.8139 25.6717 31.6725 25.909 31.5356C27.119 30.8412 28.0127 30.2637 28.6796 29.59C29.1265 29.1293 29.4909 28.6275 29.8277 27.9331Z",fill:"light"===e?"var(--ck-brand-trust-01)":"var(--ck-brand-trust-01b)"})]}),es=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("rect",{width:"32",height:"32",fill:"white"}),(0,v.jsx)("path",{d:"M18.3242 7.63647H13.6516C13.4955 7.63647 13.3704 7.76611 13.367 7.92726C13.2726 12.4568 10.9768 16.7559 7.02532 19.8009C6.89986 19.8976 6.87128 20.0792 6.963 20.21L9.69685 24.112C9.78986 24.2448 9.97107 24.2747 10.0986 24.1772C12.5694 22.2856 14.5567 20.0038 15.9879 17.4746C17.4191 20.0038 19.4065 22.2856 21.8773 24.1772C22.0047 24.2747 22.186 24.2448 22.2791 24.112L25.013 20.21C25.1045 20.0792 25.0759 19.8976 24.9506 19.8009C20.999 16.7559 18.7033 12.4568 18.609 7.92726C18.6056 7.76611 18.4803 7.63647 18.3242 7.63647Z",fill:"var(--ck-brand-argent)"})]}),ec=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:`linear-gradient(
      180deg,
      var(--ck-brand-imtoken-01) 0%,
      var(--ck-brand-imtoken-02) 100%
    )`},children:(0,v.jsx)("path",{d:"M26.8543 9.96509C27.5498 19.3857 21.4942 23.8384 16.0655 24.3132C11.0184 24.7546 6.26765 21.6534 5.85087 16.8885C5.50707 12.952 7.94004 11.2761 9.8516 11.109C11.8177 10.9367 13.4698 12.2925 13.6132 13.9342C13.7512 15.5125 12.7664 16.2308 12.0815 16.2906C11.5398 16.3381 10.8584 16.0093 10.7968 15.3032C10.7441 14.6965 10.9744 14.6138 10.9182 13.9693C10.8179 12.8219 9.81731 12.6882 9.26951 12.7357C8.60654 12.7937 7.40368 13.5675 7.5725 15.4949C7.7422 17.439 9.60628 18.9751 12.0498 18.7614C14.6868 18.531 16.5227 16.4779 16.6608 13.5983C16.6595 13.4458 16.6916 13.2948 16.7548 13.156L16.7557 13.1525C16.7841 13.0922 16.8174 13.0342 16.8551 12.9793C16.9113 12.8949 16.9835 12.8016 17.0767 12.6997C17.0775 12.697 17.0775 12.697 17.0793 12.697C17.147 12.6205 17.2288 12.5379 17.3211 12.4491C18.473 11.3623 22.6214 8.79916 26.5448 9.61074C26.6277 9.62851 26.7026 9.67262 26.7584 9.73649C26.8142 9.80035 26.8478 9.88054 26.8543 9.96509",fill:"white"})}),ed=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{backgroundSize:"100% 100%",backgroundImage:'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzhIMjZDNTYuOTI3OSAzOCA4MiA2My4wNzIxIDgyIDk0VjEwMEg5NEM5Ny4zMTM3IDEwMCAxMDAgOTcuMzEzNyAxMDAgOTRDMTAwIDUzLjEzMDkgNjYuODY5MSAyMCAyNiAyMEMyMi42ODYzIDIwIDIwIDIyLjY4NjMgMjAgMjZWMzhaIiBmaWxsPSJ1cmwoI3BhaW50MV9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNODQgOTRIMTAwQzEwMCA5Ny4zMTM3IDk3LjMxMzcgMTAwIDk0IDEwMEg4NFY5NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiAyMEwyNiAzNkgyMEwyMCAyNkMyMCAyMi42ODYzIDIyLjY4NjMgMjAgMjYgMjBaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXJfNjJfMzI5KSIvPgo8cGF0aCBkPSJNMjAgMzZIMjZDNTguMDMyNSAzNiA4NCA2MS45Njc1IDg0IDk0VjEwMEg2NlY5NEM2NiA3MS45MDg2IDQ4LjA5MTQgNTQgMjYgNTRIMjBWMzZaIiBmaWxsPSJ1cmwoI3BhaW50NF9yYWRpYWxfNjJfMzI5KSIvPgo8cGF0aCBkPSJNNjggOTRIODRWMTAwSDY4Vjk0WiIgZmlsbD0idXJsKCNwYWludDVfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDUyTDIwIDM2TDI2IDM2TDI2IDUySDIwWiIgZmlsbD0idXJsKCNwYWludDZfbGluZWFyXzYyXzMyOSkiLz4KPHBhdGggZD0iTTIwIDYyQzIwIDY1LjMxMzcgMjIuNjg2MyA2OCAyNiA2OEM0MC4zNTk0IDY4IDUyIDc5LjY0MDYgNTIgOTRDNTIgOTcuMzEzNyA1NC42ODYzIDEwMCA1OCAxMDBINjhWOTRDNjggNzAuODA0IDQ5LjE5NiA1MiAyNiA1MkgyMFY2MloiIGZpbGw9InVybCgjcGFpbnQ3X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik01MiA5NEg2OFYxMDBINThDNTQuNjg2MyAxMDAgNTIgOTcuMzEzNyA1MiA5NFoiIGZpbGw9InVybCgjcGFpbnQ4X3JhZGlhbF82Ml8zMjkpIi8+CjxwYXRoIGQ9Ik0yNiA2OEMyMi42ODYzIDY4IDIwIDY1LjMxMzcgMjAgNjJMMjAgNTJMMjYgNTJMMjYgNjhaIiBmaWxsPSJ1cmwoI3BhaW50OV9yYWRpYWxfNjJfMzI5KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzYyXzMyOSIgeDE9IjYwIiB5MT0iMCIgeDI9IjYwIiB5Mj0iMTIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxNzQyOTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDAxRTU5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQxX3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDc0KSI+CjxzdG9wIG9mZnNldD0iMC43NzAyNzciIHN0b3AtY29sb3I9IiNGRjQwMDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODc1NEM5Ii8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl82Ml8zMjkiIHgxPSI4MyIgeTE9Ijk3IiB4Mj0iMTAwIiB5Mj0iOTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGNDAwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDNfbGluZWFyXzYyXzMyOSIgeDE9IjIzIiB5MT0iMjAiIHgyPSIyMyIgeTI9IjM3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM4NzU0QzkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY0MDAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ0X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjYgOTQpIHJvdGF0ZSgtOTApIHNjYWxlKDU4KSI+CjxzdG9wIG9mZnNldD0iMC43MjM5MjkiIHN0b3AtY29sb3I9IiNGRkY3MDAiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRkY5OTAxIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQ1X2xpbmVhcl82Ml8zMjkiIHgxPSI2OCIgeTE9Ijk3IiB4Mj0iODQiIHkyPSI5NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkZGNzAwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGOTkwMSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50Nl9saW5lYXJfNjJfMzI5IiB4MT0iMjMiIHkxPSI1MiIgeDI9IjIzIiB5Mj0iMzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRjcwMCIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjk5MDEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDdfcmFkaWFsXzYyXzMyOSIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgyNiA5NCkgcm90YXRlKC05MCkgc2NhbGUoNDIpIj4KPHN0b3Agb2Zmc2V0PSIwLjU5NTEzIiBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50OF9yYWRpYWxfNjJfMzI5IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDUxIDk3KSBzY2FsZSgxNyA0NS4zMzMzKSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwMEFBRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDFEQTQwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQ5X3JhZGlhbF82Ml8zMjkiIGN4PSIwIiBjeT0iMCIgcj0iMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMgNjkpIHJvdGF0ZSgtOTApIHNjYWxlKDE3IDMyMi4zNykiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMDBBQUZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAxREE0MCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=")'}}),el=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("rect",{rx:"27%",width:"88",height:"88",fill:"white"}),(0,v.jsx)("path",{d:"M69.0892 28.2123L70.5781 24.5643L66.3594 20.1967C64.0763 17.9136 59.2123 19.2537 59.2123 19.2537L53.7031 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967L17.3722 24.5395L18.8612 28.1875L17 33.5974L23.204 57.2472C24.4945 62.3097 25.3631 64.2702 29.011 66.8511L40.352 74.5441C41.4439 75.2142 42.784 76.3805 44 76.3805C45.216 76.3805 46.5561 75.2142 47.648 74.5441L58.989 66.8511C62.6369 64.2702 63.5055 62.3097 64.796 57.2472L71 33.5974L69.0892 28.2123Z",fill:"url(#paint0_linear_2183_5890)"}),(0,v.jsx)("path",{d:"M57.6737 23.2739C57.6737 23.2739 64.796 31.8851 64.796 33.6967C64.796 35.5579 63.9026 36.0294 63.0092 36.9972L57.6737 42.705C57.1774 43.2013 56.1103 44.045 56.7307 45.5092C57.3511 46.9982 58.2197 48.8346 57.227 50.7206C56.2344 52.6314 54.4972 53.8971 53.3805 53.6985C51.7195 53.1594 50.1348 52.4088 48.6654 51.4651C47.7224 50.8447 44.6949 48.3382 44.6949 47.3704C44.6949 46.4026 47.8217 44.6406 48.4173 44.2932C48.9881 43.8961 51.6434 42.3575 51.693 41.7619C51.7427 41.1664 51.7427 41.0175 50.9485 39.5285C50.1544 38.0395 48.7647 36.0542 48.9632 34.7638C49.2114 33.4733 51.4449 32.7785 53.1075 32.1581L58.2445 30.2224C58.6415 30.0239 58.5423 29.8502 57.3511 29.7261C56.1599 29.6268 52.8097 29.1801 51.296 29.602C49.7822 30.0239 47.2509 30.6691 47.0028 31.0165C46.8042 31.364 46.6057 31.364 46.829 32.5551L48.2684 40.3722C48.3677 41.3649 48.5662 42.0349 47.5239 42.2831C46.432 42.5313 44.6204 42.9531 44 42.9531C43.3796 42.9531 41.5432 42.5313 40.4761 42.2831C39.409 42.0349 39.6075 41.3649 39.7316 40.3722C39.8309 39.3796 40.9228 33.7215 41.1461 32.5551C41.3943 31.364 41.171 31.364 40.9724 31.0165C40.7243 30.6691 38.1682 30.0239 36.6544 29.602C35.1654 29.1801 31.7904 29.6268 30.5993 29.7509C29.4081 29.8502 29.3088 29.9991 29.7059 30.2472L34.8428 32.1581C36.4807 32.7785 38.7638 33.4733 38.9871 34.7638C39.2353 36.079 37.8208 38.0395 37.0018 39.5285C36.1829 41.0175 36.2077 41.1664 36.2574 41.7619C36.307 42.3575 38.9871 43.8961 39.5331 44.2932C40.1287 44.6654 43.2555 46.4026 43.2555 47.3704C43.2555 48.3382 40.3024 50.8447 39.3097 51.4651C37.8404 52.4088 36.2557 53.1594 34.5947 53.6985C33.4779 53.8971 31.7408 52.6314 30.7233 50.7206C29.7307 48.8346 30.6241 46.9982 31.2197 45.5092C31.8401 44.0202 30.7978 43.2261 30.2767 42.705L24.9412 36.9972C24.0726 36.079 23.1792 35.5827 23.1792 33.7463C23.1792 31.9099 30.3015 23.3235 30.3015 23.3235L37.0763 24.4154C37.8704 24.4154 39.6324 23.7454 41.2454 23.1746C42.8585 22.6783 43.9752 22.6287 43.9752 22.6287C43.9752 22.6287 45.0671 22.6287 46.705 23.1746C48.3428 23.7206 50.08 24.4154 50.8741 24.4154C51.693 24.4154 57.6985 23.2491 57.6985 23.2491L57.6737 23.2739ZM52.3382 56.2298C52.7849 56.4779 52.512 57.0239 52.0901 57.3217L45.7868 62.2353C45.2904 62.7316 44.4963 63.4761 43.9752 63.4761C43.454 63.4761 42.6847 62.7316 42.1636 62.2353C40.0743 60.5717 37.9648 58.9337 35.8355 57.3217C35.4384 57.0239 35.1654 56.5028 35.5873 56.2298L39.3097 54.2445C40.7894 53.4618 42.3551 52.8539 43.9752 52.4329C44.3474 52.4329 46.705 53.2767 48.6158 54.2445L52.3382 56.2298Z",fill:"white"}),(0,v.jsx)("path",{d:"M59.262 19.2785L53.7032 13H34.2721L28.7381 19.2785C28.7381 19.2785 23.8741 17.9632 21.591 20.1967C21.591 20.1967 28.0432 19.6259 30.2767 23.2491L37.126 24.4154C37.9201 24.4154 39.682 23.7454 41.2951 23.1746C42.9081 22.6783 44.0249 22.6287 44.0249 22.6287C44.0249 22.6287 45.1168 22.6287 46.7546 23.1746C48.3925 23.7206 50.1296 24.4154 50.9238 24.4154C51.7427 24.4154 57.7482 23.2491 57.7482 23.2491C59.9817 19.6259 66.4339 20.1967 66.4339 20.1967C64.1508 17.9136 59.2868 19.2537 59.2868 19.2537",fill:"url(#paint1_linear_2183_5890)"}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_2183_5890",x1:"17",y1:"45.3241",x2:"71",y2:"45.3241",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{offset:"0.4",stopColor:"#FF5500"}),(0,v.jsx)("stop",{offset:"0.6",stopColor:"#FF2000"})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_2183_5890",x1:"22.4879",y1:"18.8219",x2:"66.4339",y2:"18.8219",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#FF452A"}),(0,v.jsx)("stop",{offset:"1",stopColor:"#FF2000"})]})]})]}),ep=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:[(0,v.jsx)("mask",{id:"mask0_2091_4394",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"13",y:"9",width:"62",height:"71",children:(0,v.jsx)("path",{d:"M44 9L13 26.75V62.25L44 80L75 62.25V26.75L44 9ZM31.7577 24.3492H56.1513L59.0935 36.684H28.9307L31.7577 24.3492ZM41.5613 61.2993L36.2955 66.161H31.8427L20.6924 46.9369L28.8701 40.9079L36.0953 45.4627V53.6578L41.5552 58.8504V61.2993H41.5613ZM37.9759 53.1584L38.7888 45.4326L36.1256 38.5432H51.9229L49.3204 45.4326L50.0787 53.1283L44 53.1584H37.9759ZM56.2059 66.1069H51.8076L46.5419 61.2993V58.8564L52.0018 53.6638V45.4627L59.1421 40.8537L67.2955 46.9369L56.2059 66.1069Z",fill:"#002D74"})}),(0,v.jsxs)("g",{mask:"url(#mask0_2091_4394)",children:[(0,v.jsx)("rect",{y:"8",width:"44",height:"72",fill:"url(#paint0_linear_2091_4394)"}),(0,v.jsx)("rect",{x:"88",y:"80",width:"44",height:"72",transform:"rotate(-180 88 80)",fill:"url(#paint1_linear_2091_4394)"})]}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_2091_4394",x1:"22",y1:"8",x2:"22",y2:"80",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#010935"}),(0,v.jsx)("stop",{offset:"1",stopColor:"#142C70"})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_2091_4394",x1:"110",y1:"80",x2:"110",y2:"152",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#010935"}),(0,v.jsx)("stop",{offset:"1",stopColor:"#142C70"})]})]})]}),eh=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.2106 16H16V29.4577H19.2182V19.2182L37.2106 19.1011V16ZM37.3568 33.4073V54.6179H50.8146V51.3997H40.575L40.458 33.4073H37.3568ZM16 72.1714H37.2106V69.0703L19.2182 68.9533V58.7137H16V72.1714ZM50.9609 16H72.1714V29.4577H68.9533V19.2182L50.9609 19.1011V16ZM72.1714 72.1714H50.9609V69.0703L68.9533 68.9533V58.7137H72.1714V72.1714Z",fill:"white"})}),eu=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"600",height:"600",viewBox:"0 0 600 600",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"black"},children:[(0,v.jsx)("path",{d:"M470.747 209.191C462.305 192.354 448.646 178.695 431.808 170.253C413.337 161 389.233 161 341.006 161C331.236 161 307.916 161 300 161C292.084 161 268.728 161 258.994 161C210.856 161 186.662 161 168.191 170.253C151.354 178.69 137.7 192.35 129.27 209.191C119.999 227.662 120 251.767 120 299.976C120 348.185 119.999 372.308 129.27 390.778C137.7 407.619 151.354 421.279 168.191 429.716C186.662 438.97 210.784 438.97 258.994 438.97C268.764 438.97 292.084 438.97 300 438.97C307.916 438.97 331.272 438.97 341.006 438.97C389.144 438.97 413.337 438.97 431.808 429.716C448.646 421.274 462.305 407.616 470.747 390.778C480 372.308 480 348.203 480 299.976C480 251.749 480 227.662 470.747 209.191Z",fill:"#FFCEAA"}),(0,v.jsx)("path",{d:"M218.557 350.342C216.323 345.957 212.922 342.274 208.729 339.698C204.536 337.121 199.713 335.752 194.791 335.741H166.747C163.876 335.755 161.041 336.37 158.422 337.548C155.804 338.725 153.462 340.439 151.547 342.577C149.632 344.716 148.186 347.232 147.303 349.964C146.42 352.696 146.12 355.582 146.422 358.437C147.385 367.476 148.954 374.34 151.575 379.564C157.629 391.573 167.378 401.323 179.388 407.377C188.195 411.798 201.674 413.26 222.444 413.742C225.415 413.812 228.353 413.109 230.97 411.702C233.587 410.295 235.793 408.232 237.373 405.715C238.953 403.199 239.852 400.315 239.982 397.346C240.113 394.378 239.47 391.427 238.116 388.781L218.557 350.342Z",fill:"#FF3B9A"}),(0,v.jsx)("path",{d:"M180.618 312.563C189.852 312.562 198.95 310.335 207.14 306.071C215.33 301.806 222.371 295.63 227.668 288.066L254.856 249.253C259.761 242.25 262.839 234.134 263.81 225.64C264.782 217.146 263.616 208.545 260.419 200.616V200.384C258.913 196.555 256.409 193.2 253.167 190.666C249.925 188.133 246.064 186.514 241.985 185.978C209.732 186.085 190.726 186.887 179.405 192.575C167.37 198.586 157.611 208.339 151.592 220.37C146.725 230.247 145.227 258.007 144.87 280.507C144.797 284.698 145.56 288.862 147.114 292.754C148.668 296.647 150.983 300.191 153.923 303.179C156.863 306.167 160.369 308.539 164.236 310.156C168.103 311.774 172.254 312.604 176.445 312.599L180.618 312.563Z",fill:"#FF3B9A"}),(0,v.jsx)("path",{d:"M449.702 220.356C443.655 208.365 433.909 198.639 421.906 192.614C409.89 186.588 389.262 186.053 353.337 186C304.664 186 289.528 242 279.134 256.834L248.556 300.497C243.645 307.51 240.729 315.725 240.12 324.266C239.511 332.806 241.231 341.352 245.098 348.991L267.758 393.813C270.842 399.931 275.578 405.063 281.43 408.627C287.282 412.191 294.016 414.045 300.867 413.978H301.49C309.495 413.978 334.171 413.978 342.283 413.978C385.072 413.978 408.713 413.977 421.906 407.381C433.914 401.331 443.66 391.58 449.702 379.568C456.317 366.374 456.316 342.787 456.316 299.944C456.316 257.101 456.317 233.621 449.702 220.356Z",fill:"#FF3B9A"})]}),ex=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)"},children:(0,v.jsx)("path",{d:"M47.4 43.7163C47.4 45.6251 45.8781 47.1714 44.0001 47.1714C42.1219 47.1714 40.6 45.6251 40.6 43.7163L40.6 -7H27L27 43.7163C27 53.2612 34.6106 61 44.0001 61C53.3882 61 61 53.2612 61 43.7163V-7H47.4V43.7163Z",fill:"#1F2129"})}),eb=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"white"},children:(0,v.jsx)("path",{d:"M20 16L28.675 24.677C32.1885 21.8644 36.4154 20.0873 40.8816 19.545C45.348 19.0026 49.8769 19.7164 53.9604 21.6063C58.0438 23.4963 61.5207 26.4876 64.0005 30.2447C66.4804 34.0019 67.8653 38.3763 68 42.8772V43.5854V72L59.3367 63.3231C55.8263 66.1389 51.6014 67.9196 47.1361 68.4655C42.6708 69.0112 38.1419 68.3007 34.0577 66.4135C29.9734 64.5262 26.4956 61.537 24.0144 57.7813C21.5333 54.0255 20.1472 49.6521 20.0115 45.1515V44.4433L20 16ZM25.931 30.3311V44.4146C25.9323 47.7294 26.8335 50.9817 28.5384 53.8236C30.2432 56.6655 32.6875 58.9902 35.6101 60.5497C38.5328 62.1089 41.8238 62.8439 45.1313 62.6764C48.439 62.5087 51.639 61.4445 54.3894 59.5978L54.8611 59.2754L27.0873 31.4884L25.931 30.3311ZM33.6223 28.4022L33.1505 28.7304L60.9186 56.5117L62.069 57.6632V43.5854C62.0683 40.2717 61.1679 37.0204 59.464 34.179C57.7603 31.3377 55.3171 29.0132 52.3957 27.4539C49.4742 25.8946 46.1844 25.1592 42.8777 25.3262C39.5712 25.4933 36.372 26.5565 33.6223 28.4022Z",fill:"#23262F"})}),eg=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#6C67F1"},children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M50.6667 24.3696L34.8872 40.1864L24.0001 37.7402L37.3334 24.3696L48.4438 13.3798C49.268 12.5646 50.6667 13.1484 50.6667 14.3077V24.3696ZM37.3339 51.0358L50.6672 37.74V24.3694L35.2001 39.8737L37.3339 51.0358Z",fill:"url(#paint0_linear_2593_6077)"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M37.3337 64.2947V50.9617L50.667 37.6284L55.7849 45.8435L55.9822 45.6463L64 50.9616L39.5582 75.2343C38.7347 76.0521 37.3336 75.4687 37.3336 74.3082V64.2949L37.3337 64.2947Z",fill:"url(#paint1_linear_2593_6077)"}),(0,v.jsx)("path",{d:"M24 37.7405H32.573C35.202 37.7405 37.3333 39.8718 37.3333 42.5009V51.0359H28.7602C26.1313 51.0359 24 48.9046 24 46.2757V37.7405Z",fill:"#F1F0FF"}),(0,v.jsx)("path",{d:"M50.6667 37.7405H59.2398C61.8688 37.7405 64 39.8718 64 42.5009V51.0359H55.4271C52.798 51.0359 50.6667 48.9046 50.6667 46.2757V37.7405Z",fill:"#F1F0FF"}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_2593_6077",x1:"37.3336",y1:"13",x2:"37.3336",y2:"51.0358",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#A8ADFF"}),(0,v.jsx)("stop",{offset:"0.648556",stopColor:"white"})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_2593_6077",x1:"50.6668",y1:"37.6284",x2:"50.6668",y2:"75.616",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{offset:"0.260784",stopColor:"#B6BAFF"}),(0,v.jsx)("stop",{offset:"1",stopColor:"#E4E2FF"})]})]})]}),ef=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#12FF80"},children:[(0,v.jsx)("path",{d:"M68.7186 44H62.6472C60.8339 44 59.3646 45.4686 59.3646 47.281V56.0888C59.3646 57.9012 57.8952 59.3697 56.0819 59.3697H31.9278C30.1145 59.3697 28.6452 60.8383 28.6452 62.6507V68.719C28.6452 70.5314 30.1145 72 31.9278 72H57.48C59.2933 72 60.7417 70.5314 60.7417 68.719V63.8504C60.7417 62.038 62.2111 60.7524 64.0244 60.7524H68.7174C70.5307 60.7524 72 59.2838 72 57.4714V47.2429C72 45.4305 70.5307 44 68.7174 44H68.7186Z",fill:"#121312"}),(0,v.jsx)("path",{d:"M28.6406 31.9308C28.6406 30.1162 30.1104 28.6458 31.9243 28.6458H56.0712C57.8851 28.6458 59.3548 27.1754 59.3548 25.3608V19.285C59.3548 17.4704 57.8851 16 56.0712 16H30.5245C28.7107 16 27.2409 17.4704 27.2409 19.285V23.9666C27.2409 25.7813 25.7711 27.2516 23.9572 27.2516H19.2837C17.4698 27.2516 16 28.722 16 30.5366V40.7888C16 42.6034 17.4759 44 19.2898 44H25.3631C27.177 44 28.6468 42.5296 28.6468 40.715L28.6406 31.932V31.9308Z",fill:"#121312"}),(0,v.jsx)("path",{d:"M41.1004 37.6774H46.8995C48.7894 37.6774 50.3226 39.2117 50.3226 41.1004V46.8995C50.3226 48.7894 48.7882 50.3225 46.8995 50.3225H41.1004C39.2106 50.3225 37.6774 48.7882 37.6774 46.8995V41.1004C37.6774 39.2105 39.2118 37.6774 41.1004 37.6774V37.6774Z",fill:"#121312"})]}),ek=({...e})=>(0,v.jsx)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"#CC703C"},children:(0,v.jsx)("path",{d:"M63.6429 20L63.3645 20.7254L62.4521 23.0445L61.8461 24.5395C57.2427 35.7491 53.6629 41.0688 49.8557 41.0688C48.8938 41.0936 47.9371 40.9212 47.0465 40.5625C46.156 40.2038 45.3512 39.6667 44.6834 38.9852L44.1979 38.5518C42.9885 37.4538 42.4799 37.1831 41.3154 37.1832C40.7094 37.1832 39.6238 37.9435 38.2521 39.7303C36.4147 42.2912 34.8522 45.0327 33.59 47.9106L33.4353 48.2482L49.7645 48.2483L47.7312 52.4075H32.4845L32.4843 69.44L28 69.44L28.0001 20L63.6429 20ZM57.2889 24.1518L32.4843 24.1518L32.4843 40.6262C35.4564 35.5545 38.2816 33.0086 41.32 33.0086C42.3421 32.9765 43.3595 33.1534 44.3082 33.5284C45.2569 33.9034 46.1159 34.468 46.8311 35.1865L47.3323 35.6335C48.4611 36.6585 48.8956 36.8941 49.8604 36.8941C50.9211 36.8957 53.7433 32.4855 57.2889 24.1518Z",fill:"white"})}),ev=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"88",height:"88",viewBox:"0 0 88 88",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(120.22deg, #2962EF 0%, #255CE5 100%)"},children:[(0,v.jsx)("path",{d:"M19.0864 22C17.5783 22 16.9973 23.8648 18.2628 24.6438L49.9199 43.732C50.709 44.2178 51.7614 44.0258 52.3048 43.2969L66.2236 25.024C67.17 23.7545 66.2138 22 64.5757 22H19.0864Z",fill:"white"}),(0,v.jsx)("path",{d:"M68.8425 66C70.3503 66 70.9466 64.1252 69.6814 63.3464L38.015 44.2605C37.2259 43.7748 36.1989 43.991 35.6558 44.7198L21.7099 62.9891C20.7639 64.2582 21.7499 66 23.3877 66H68.8425Z",fill:"white"})]}),em=()=>(0,v.jsx)("div",{style:{width:80,height:80,background:"#555"}}),eC=({...e})=>{let o={position:"relative",display:"flex",gap:2},t={width:"50%",overflow:"hidden",borderRadius:"27.5%"};return(0,v.jsxs)("div",{style:{position:"relative",display:"flex",flexDirection:"column",gap:2},...e,children:[(0,v.jsxs)("div",{style:o,children:[(0,v.jsx)("div",{style:t,children:(0,v.jsx)(et,{background:!0})}),(0,v.jsx)("div",{style:t,children:(0,v.jsx)(ev,{})})]}),(0,v.jsxs)("div",{style:o,children:[(0,v.jsx)("div",{style:t,children:(0,v.jsx)(ed,{})}),(0,v.jsx)("div",{style:t,children:(0,v.jsx)(ec,{})})]})]})};var ew={Injected:eo,OtherWallets:eC,WalletConnect:et,MetaMask:en,Coinbase:er,CoinbaseImage:ei,Trust:ea,Argent:es,ImToken:ec,Rainbow:ed,Crypto:ep,Ledger:eh,Brave:el,Steak:eu,Unstoppable:ex,ONTO:eb,Slope:eg,GnosisSafe:ef,Frontier:ek,Zerion:ev,PlaceHolder:em};let ey=[];if("undefined"!=typeof window){let{ethereum:ej}=window;ey=[{id:"injected",name:"Browser Wallet",shortName:"Browser",logos:{default:(0,v.jsx)(ew.Injected,{}),mobile:(0,v.jsx)("div",{style:{padding:5,background:"var(--ck-body-background-tertiary)",borderRadius:"27%",boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.02)"},children:(0,v.jsx)("div",{style:{transform:"scale(0.75)",position:"relative",width:"100%"},children:(0,v.jsx)(ew.Injected,{})})}),transparent:(0,v.jsx)(ew.Injected,{})},scannable:!1,extensionIsInstalled:()=>Boolean(ej)},{id:"walletConnect",name:"Other Wallets",shortName:"Other",logos:{default:(0,v.jsx)(ew.WalletConnect,{}),mobile:(0,v.jsx)("div",{style:{padding:5,background:"var(--ck-body-background-secondary)",borderRadius:"21%",boxShadow:"inset 0 0 0 1px rgba(0, 0, 0, 0.02)"},children:(0,v.jsx)(ew.OtherWallets,{})}),transparent:(0,v.jsx)(ew.WalletConnect,{background:!1}),connectorButton:(0,v.jsx)(ew.OtherWallets,{}),qrCode:(0,v.jsx)(ew.WalletConnect,{background:!0})},logoBackground:"var(--ck-brand-walletConnect)",scannable:!0,defaultConnect:()=>{}},{id:"metaMask",name:"MetaMask",logos:{default:(0,v.jsx)(ew.MetaMask,{background:!0}),mobile:(0,v.jsx)(ew.MetaMask,{background:!0}),transparent:(0,v.jsx)("div",{style:{transform:"scale(0.86)",position:"relative",width:"100%"},children:(0,v.jsx)(ew.MetaMask,{})}),connectorButton:(0,v.jsx)("div",{style:{transform:"scale(1.1)"},children:(0,v.jsx)(ew.MetaMask,{})})},logoBackground:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",scannable:!1,extensions:{chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},appUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202"},extensionIsInstalled:()=>eW()},{id:"coinbaseWallet",name:"Coinbase Wallet",shortName:"Coinbase",logos:{default:(0,v.jsx)(ew.Coinbase,{}),mobile:(0,v.jsx)(ew.Coinbase,{background:!0}),transparent:(0,v.jsx)(ew.Coinbase,{background:!1}),appIcon:(0,v.jsx)(ew.Coinbase,{background:!1}),connectorButton:(0,v.jsx)(ew.Coinbase,{background:!0}),qrCode:(0,v.jsx)(ew.Coinbase,{background:!0})},logoBackground:"var(--ck-brand-coinbaseWallet)",scannable:!0,extensions:{chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},appUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455"},extensionIsInstalled:()=>Boolean(ej&&((null==ej?void 0:ej.isCoinbaseWallet)||ej.providers&&ej.providers.find(e=>e.isCoinbaseWallet)))}]}var eE=ey;let eL=/^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/,eF=(e,o="••••")=>{if(!e)return"";let t=e.match(eL);return t?`${t[1]}${o}${t[2]}`:e},e_=(e,o)=>e.length>o?e.replace(".eth","").slice(0,o)+"...":e,eS=(e,o=2)=>{if(e<1e4)return e.toFixed(2);var t=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"m"},{value:1e9,symbol:"g"},{value:1e12,symbol:"t"},{value:1e15,symbol:"p"},{value:1e18,symbol:"e"}].reverse().find(function(o){return e>=o.value});return t?(e/t.value).toFixed(o).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t.symbol:"0"},eI=()=>{var e;let o=(0,F.qY)();return null!==(e=null==o?void 0:o.name)&&void 0!==e?e:""},eM=()=>{var e;let o=(0,F.qY)();return null!==(e=null==o?void 0:o.os)&&void 0!==e?e:""},eA=()=>{let e=eM();return e.toLowerCase().includes("ios")},eN=()=>{let e=eM();return e.toLowerCase().includes("android")},eO=()=>eN()||eA(),eW=()=>{if("undefined"==typeof window)return!1;let{ethereum:e}=window;if(!e)return!1;let o=Boolean(e.isMetaMask);if(!o)return!1;let t=Boolean(e.isBraveWallet);if(t)return!1;let n=Boolean(e.isTokenary);return!n},eR=()=>{if("undefined"==typeof window)return!1;let{ethereum:e}=window;return!!((null==e?void 0:e.isCoinbaseWallet)||(null==e?void 0:e.providers)&&(null==e?void 0:e.providers.find(e=>e.isCoinbaseWallet)))};function eT(e){let o=m.Children.toArray(e);return o.reduce((e,o)=>o.type===m.Fragment?e.concat(eT(o.props.children)):(e.push(o),e),[])}var eB={mobileWidth:560};let eD=z(w.E.div)`
  z-index: -1;
  pointer-events: auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: var(--width);
  top: 64px;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  background: var(--ck-body-color-danger);
  border-radius: 20px;
  padding: 24px 46px 82px 24px;
  transition: width var(--duration) var(--ease);
  a {
    font-weight: 700;
    text-decoration: underline;
  }
  code {
    font-size: 0.9em;
    display: inline-block;
    font-family: monospace;
    margin: 1px;
    padding: 0 4px;
    border-radius: 8px;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.1);
  }
`,ez=E.F4`
from { opacity: 0; }
  to { opacity: 1; }
`,eZ=E.F4`
from { opacity: 0; transform: scale(0.85); }
  to { opacity: 1; transform: scale(1); }
`,eU=E.F4`
from { opacity: 0; transform: scale(1.1); }
  to { opacity: 1; transform: scale(1); }
`,eH=E.F4`
from { opacity: 1; }
  to { opacity: 0; }
`,e$=E.F4`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(1.1); }
`,eV=E.F4`
from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.85); }
`,eG=z(w.E.div)`
  max-width: 100%;
  width: 295px;
  padding-top: 48px;
`,eP=z(w.E.div)`
  user-select: none;
  position: relative;
  display: block;
  text-align: center;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  span {
    z-index: 2;
    position: relative;
    display: inline-block;
    user-select: none;
    pointer-events: none;
    padding: 0 14px;
    background: var(--ck-body-background);
    transition: background-color 200ms ease;
  }
  &:before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    transform: translateY(-1px);
    background: var(--ck-body-divider);
    box-shadow: var(--ck-body-divider-box-shadow);
  }
`,eY=z(w.E.div)`
  z-index: 3;
  pointer-events: none;
  user-select: none;
  position: absolute;
  top: 25px;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  transform: translateX(-50%);
  width: var(--width);
  text-align: center;
  font-size: 17px;
  line-height: 20px;
  font-weight: var(--ck-modal-heading-font-weight, 600);
  color: var(--ck-body-color);
  span {
    display: inline-block;
  }
`,eJ=z(w.E.div)`
  position: relative;
  padding: 0;
`,eq=z(w.E.div)`
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    display: block;
  }
`,eQ=z(w.E.h1)`
  margin: 0;
  padding: 0;
  line-height: ${e=>e.$small?20:22}px;
  font-size: ${e=>e.$small?17:19}px;
  font-weight: var(--ck-modal-h1-font-weight, 600);
  color: ${e=>e.$error?"var(--ck-body-color-danger)":e.$valid?"var(--ck-body-color-valid)":"var(--ck-body-color)"};
  > svg {
    position: relative;
    top: -2px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 6px;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    margin-bottom: 6px;
    font-size: 17px;
  }
`,eX=z.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;z.div`
  padding: 0 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  color: var(--ck-body-color-muted);
  strong {
    font-weight: 500;
    color: var(--ck-body-color);
  }
`;let eK=z(w.E.div)`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--ck-overlay-background, rgba(71, 88, 107, 0.24));
  backdrop-filter: var(--ck-overlay-backdrop-filter, none);
  opacity: 0;
  animation: ${e=>e.$active?ez:eH} 150ms ease-out
    both;
`,e1=E.F4`
  from{ opacity: 0; transform: scale(0.97); }
  to{ opacity: 1; transform: scale(1); }
`,e0=E.F4`
  from{ opacity: 1; transform: scale(1); }
  to{ opacity: 0; transform: scale(0.97); }
`,e2=E.F4`
  from { transform: translate3d(0, 100%, 0); }
  to { transform: translate3d(0, 0%, 0); }
`,e5=E.F4`
  from { opacity: 1; }
  to { opacity: 0; }
`,e3=z(w.E.div)`
  z-index: 2;
  position: relative;
  color: var(--ck-body-color);

  animation: 150ms ease both;
  animation-name: ${e0};
  &.active {
    animation-name: ${e1};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: var(--width);
    height: var(--height);
    transform: translateX(-50%);
    backface-visibility: hidden;
    transition: all 200ms ease;
    border-radius: var(--ck-border-radius, 20px);
    background: var(--ck-body-background);
    box-shadow: var(--ck-modal-box-shadow);
  }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    animation-name: ${e5};
    animation-duration: 130ms;
    animation-timing-function: ease;

    &.active {
      animation-name: ${e2};
      animation-duration: 300ms;
      animation-delay: 32ms;
      animation-timing-function: cubic-bezier(0.15, 1.15, 0.6, 1);
    }

    &:before {
      width: 100%;
      transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
      will-change: height;
    }
  }
`,e4=z(w.E.div)`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 50%;
  height: 64px;
  transform: translateX(-50%);
  backface-visibility: hidden;
  width: var(--width);
  transition: 0.2s ease width;
  pointer-events: auto;
  //border-bottom: 1px solid var(--ck-body-divider);
`,e8=z(w.E.div)`
  position: relative;
  overflow: hidden;
  height: var(--height);
  transition: 0.2s ease height;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    transition: 0ms height cubic-bezier(0.15, 1.15, 0.6, 1);
    /* animation-delay: 34ms; */
  }
`,e7=z(w.E.div)`
  z-index: 2;
  position: relative;
  top: 0;
  left: 50%;
  margin-left: calc(var(--width) / -2);
  width: var(--width);
  /* left: 0; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  animation: 200ms ease both;

  &.active {
    animation-name: ${eU};
  }
  &.active-scale-up {
    animation-name: ${eZ};
  }
  &.exit-scale-down {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    animation-name: ${eV};
  }
  &.exit {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    /* left: 50%; */
    /* transform: translateX(-50%); */
    animation-name: ${e$};
    animation-delay: 16.6667ms;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    /* animation: 0ms ease both; */
    /* animation-delay: 35ms; */
    animation: 0ms cubic-bezier(0.15, 1.15, 0.6, 1) both;

    &.active {
      animation-name: ${ez};
    }
    &.active-scale-up {
      animation-name: ${ez};
    }
    &.exit-scale-down {
      z-index: 3;
      animation-name: ${eH};
    }
    &.exit {
      z-index: 3;
      animation-name: ${eH};
      animation-delay: 0ms;
    }
  }
`,e6=z(w.E.div)`
  margin: 0 auto;
  width: fit-content;
  padding: 29px 24px 24px;
  backface-visibility: hidden;
`,e9=z.div`
  z-index: 2147483646; // z-index set one below max (2147483647) for if we wish to layer things ontop of the modal in a seperate Portal
  position: fixed;
  inset: 0;
`,oe=z(w.E.button)`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 17px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
  }

  &:hover {
    background: var(--ck-body-background-secondary);
  }
  &:active {
    transform: scale(0.9);
  }
`,oo=z(w.E.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,ot=z(w.E.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
    left: -1px;
  }

  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,on=z(w.E.button)`
  z-index: 3;
  position: absolute;
  inset: 0;
  transform: translateX(-1px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  padding: 0;
  margin: 0;
  color: var(--ck-body-action-color);
  background: var(--ck-body-background);
  transition: background-color 200ms ease, transform 100ms ease;
  /* will-change: transform; */
  svg {
    display: block;
    position: relative;
  }
  &:enabled {
    cursor: pointer;
    &:hover {
      background: var(--ck-body-background-secondary);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`,or=z(w.E.div)`
  --ease: cubic-bezier(0.25, 0.1, 0.25, 1);
  --duration: 200ms;
  --transition: height var(--duration) var(--ease),
    width var(--duration) var(--ease);
  z-index: 3;
  display: block;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    pointer-events: auto;
    left: 0;
    top: auto;
    bottom: -5px;
    transform: none;
    ${e3} {
      max-width: 448px;
      margin: 0 auto;
      &:before {
        width: 100%;
        border-radius: var(--ck-border-radius, 30px)
          var(--ck-border-radius, 30px) 0 0;
      }
    }
    ${e7} {
      left: 0;
      right: 0;
      margin: 0 auto;
      width: auto;
    }
    ${eG} {
      margin: 0 auto;
      width: 100% !important;
    }
    ${eY} {
      top: 29px;
    }
    ${eq} {
      gap: 12px;
    }
    ${eX} {
      margin: 0 auto;
      max-width: 295px;
    }
    ${e6} {
      width: 100%;
      padding: 31px 24px;
    }
    ${e4} {
      width: 100%;
      top: 4px;
      border-bottom: 0;
    }
    ${oe} {
      right: 22px;
    }
    ${ot} {
      top: -1px;
      left: -3px;
    }
    ${on} {
      top: -1px;
      left: -3px;
      svg {
        width: 65%;
        height: auto;
      }
    }
    ${oe},
    ${ot},
    ${on} {
      // Quick hack for bigger tappable area on mobile
      transform: scale(1.4) !important;
      background: transparent !important;
      svg {
        transform: scale(0.8) !important;
      }
    }
  }
`,oi=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px -24px -24px -24px;
  padding: 15px 40px 18px;
  font-size: var(--ck-body-disclaimer-font-size, 13px);
  font-weight: var(--ck-body-disclaimer-font-weight, 400);
  text-align: center;
  line-height: 19px;
  color: var(--ck-body-disclaimer-color, var(--ck-body-color-muted, inherit));

  & a {
    color: var(--ck-body-disclaimer-link-color, inherit);
    font-weight: var(--ck-body-disclaimer-font-weight, 400);
    text-decoration: none;
    transition: color 200ms ease;
    &:hover {
      color: var(--ck-body-disclaimer-link-hover-color, inherit);
    }
  }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    margin: 24px -24px -26px -24px;
    padding: 20px 42px 22px 42px;
  }
`,oa=z(w.E.div)`
  pointer-events: all;
  z-index: 9;
  position: absolute;
  bottom: 0;
  left: 50%;
  width: var(--width);
  backface-visibility: hidden;
  transform: translateX(-50%);
  transform-origin: bottom center;

  border-radius: var(--ck-border-radius, 30px);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: width 200ms ease;

  background: var(
    --ck-body-disclaimer-background,
    var(--ck-body-background-secondary)
  );
  box-shadow: var(--ck-body-disclaimer-box-shadow);

  ${oi} {
    margin: 0 !important;
    /* visibility: hidden; */
  }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    border-radius: 0;
  }
`,os=z(w.E.div)`
  z-index: 2;
  position: absolute;
  top: 100%;
  white-space: nowrap;
  padding: 8px 16px;
  color: #fff;
  font-size: 13px;
  line-height: 1.5;
  background: #1a88f8;
  border-radius: calc(var(--ck-border-radius) * 0.75);
  transform: translateY(8px) translateX(-48px);
  box-shadow: var(--ck-modal-box-shadow);
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: 18px;
    height: 18px;
    transform: translate(215%, -75%) rotate(45deg);
    background: inherit;
    border-radius: 3px 0 0 0;
  }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    transform: translateY(8px) translateX(-16px);
    &:before {
      transform: translate(40%, -75%) rotate(45deg);
    }
  }
`,oc="undefined"!=typeof window?m.useLayoutEffect:m.useEffect;function od(e){let[o,t]=(0,m.useState)(e),n=is();return oc(()=>{var e;if(!o)return;let t={overflow:document.body.style.overflow,position:document.body.style.position,touchAction:document.body.style.touchAction,paddingRight:document.body.style.paddingRight},r=getComputedStyle(document.body),i=parseInt(r.marginRight)+parseInt(r.paddingRight)+parseInt(r.borderRight)+parseInt(r.marginLeft)+parseInt(r.paddingLeft)+parseInt(r.borderLeft),a=window.innerWidth-document.body.offsetWidth-i;return document.documentElement.style.setProperty("--ck-scrollbar-width",`${a}px`),document.body.style.overflow="hidden",document.body.style.position="relative",document.body.style.touchAction="none",(null===(e=n.options)||void 0===e?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=`${a}px`),()=>{var e;document.documentElement.style.removeProperty("--ck-scrollbar-width"),document.body.style.overflow=t.overflow,document.body.style.position=t.position,document.body.style.touchAction=t.touchAction,(null===(e=n.options)||void 0===e?void 0:e.avoidLayoutShift)&&(document.body.style.paddingRight=t.paddingRight)}},[o]),(0,m.useEffect)(()=>{o!==e&&t(e)},[e]),[o,t]}function ol(e){let o=function(){let e=(0,m.useRef)(null);function o(o){if(e.current){var t=e.current.querySelectorAll(`
        a[href]:not(:disabled),
        button:not(:disabled),
        textarea:not(:disabled),
        input[type="text"]:not(:disabled),
        input[type="radio"]:not(:disabled),
        input[type="checkbox"]:not(:disabled),
        select:not(:disabled)
      `),n=t[0],r=t[t.length-1];("Tab"===o.key||9===o.keyCode)&&(o.shiftKey?document.activeElement===n&&(r.focus(),o.preventDefault()):document.activeElement===r&&(n.focus(),o.preventDefault()))}}return(0,m.useEffect)(()=>(e.current&&(e.current.addEventListener("keydown",o),e.current.focus({preventScroll:!0})),()=>{e.current&&e.current.removeEventListener("keydown",o)}),[]),e}();return(0,m.useEffect)(()=>{o.current&&o.current.focus({preventScroll:!0})},[]),(0,v.jsx)("div",{ref:o,tabIndex:0,children:e.children})}function op(e,o){let t=(0,m.useRef)({target:e,previous:o});return t.current.target!==e&&(t.current.previous=t.current.target,t.current.target=e),t.current.previous}let oh=(0,m.createContext)(null),ou=({children:e,theme:o="auto",mode:t="auto",customTheme:n})=>(0,m.createElement)(oh.Provider,{value:{theme:o,mode:t,customTheme:n}},(0,v.jsx)(v.Fragment,{children:e})),ox=()=>{let e=m.useContext(oh);if(!e)throw Error("ConnectKitThemeProvider must be inside a Provider.");return e},ob=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 2.82561C0 1.26507 1.26507 0 2.82561 0H4.59161C6.15215 0 7.41722 1.26507 7.41722 2.82561V4.59161C7.41722 6.15215 6.15215 7.41722 4.59161 7.41722H2.82561C1.26507 7.41722 0 6.15215 0 4.59161V2.82561ZM2.82561 1.69536C2.20139 1.69536 1.69536 2.20139 1.69536 2.82561V4.59161C1.69536 5.21583 2.20139 5.72185 2.82561 5.72185H4.59161C5.21583 5.72185 5.72185 5.21583 5.72185 4.59161V2.82561C5.72185 2.20139 5.21583 1.69536 4.59161 1.69536H2.82561ZM0 11.4084C0 9.84791 1.26507 8.58284 2.82561 8.58284H4.59161C6.15215 8.58284 7.41722 9.8479 7.41722 11.4084V13.1744C7.41722 14.735 6.15215 16.0001 4.59161 16.0001H2.82561C1.26507 16.0001 0 14.735 0 13.1744V11.4084ZM2.82561 10.2782C2.20139 10.2782 1.69536 10.7842 1.69536 11.4084V13.1744C1.69536 13.7987 2.20139 14.3047 2.82561 14.3047H4.59161C5.21583 14.3047 5.72185 13.7987 5.72185 13.1744V11.4084C5.72185 10.7842 5.21583 10.2782 4.59161 10.2782H2.82561ZM11.4083 0C9.84779 0 8.58272 1.26507 8.58272 2.82561V4.59161C8.58272 6.15215 9.84779 7.41722 11.4083 7.41722H13.1743C14.7349 7.41722 15.9999 6.15215 15.9999 4.59161V2.82561C15.9999 1.26507 14.7349 0 13.1743 0H11.4083ZM10.2781 2.82561C10.2781 2.20139 10.7841 1.69536 11.4083 1.69536H13.1743C13.7985 1.69536 14.3046 2.20139 14.3046 2.82561V4.59161C14.3046 5.21583 13.7985 5.72185 13.1743 5.72185H11.4083C10.7841 5.72185 10.2781 5.21583 10.2781 4.59161V2.82561ZM15.7351 9.96026C15.7351 10.7795 15.0709 11.4437 14.2516 11.4437C13.4323 11.4437 12.7682 10.7795 12.7682 9.96026C12.7682 9.14098 13.4323 8.47682 14.2516 8.47682C15.0709 8.47682 15.7351 9.14098 15.7351 9.96026ZM9.96026 11.4437C10.7795 11.4437 11.4437 10.7795 11.4437 9.96026C11.4437 9.14098 10.7795 8.47682 9.96026 8.47682C9.14098 8.47682 8.47682 9.14098 8.47682 9.96026C8.47682 10.7795 9.14098 11.4437 9.96026 11.4437ZM15.7351 14.2517C15.7351 15.071 15.0709 15.7352 14.2516 15.7352C13.4323 15.7352 12.7682 15.071 12.7682 14.2517C12.7682 13.4325 13.4323 12.7683 14.2516 12.7683C15.0709 12.7683 15.7351 13.4325 15.7351 14.2517ZM9.96026 15.7352C10.7795 15.7352 11.4437 15.071 11.4437 14.2517C11.4437 13.4325 10.7795 12.7683 9.96026 12.7683C9.14098 12.7683 8.47682 13.4325 8.47682 14.2517C8.47682 15.071 9.14098 15.7352 9.96026 15.7352Z",fill:"currentColor",fillOpacity:"0.3"})}),og=({...e})=>(0,v.jsxs)("svg",{"aria-hidden":"true",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 4C2.89543 4 2 4.89543 2 6V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V9.66667C12 9.11438 12.4477 8.66667 13 8.66667C13.5523 8.66667 14 9.11438 14 9.66667V12C14 14.2091 12.2091 16 10 16H4C1.79086 16 0 14.2091 0 12V6C0 3.79086 1.79086 2 4 2H6.33333C6.88562 2 7.33333 2.44772 7.33333 3C7.33333 3.55228 6.88562 4 6.33333 4H4Z",fill:"currentColor",fillOpacity:.3}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.5 1C9.5 0.447715 9.94772 0 10.5 0H15C15.5523 0 16 0.447715 16 1V5.5C16 6.05228 15.5523 6.5 15 6.5C14.4477 6.5 14 6.05228 14 5.5V3.41421L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711C6.90237 8.31658 6.90237 7.68342 7.29289 7.29289L12.5858 2H10.5C9.94772 2 9.5 1.55228 9.5 1Z",fill:"currentColor",fillOpacity:.3})]}),of=({...e})=>(0,v.jsxs)("svg",{"aria-hidden":"true",width:"19",height:"18",viewBox:"0 0 19 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.81753 1.60122C7.39283 0.530035 8.46953 0 9.50409 0C10.5507 0 11.6022 0.539558 12.1805 1.59767L18.6047 13.3334C18.882 13.8283 19 14.3568 19 14.8622C19 16.5296 17.7949 18 15.9149 18H3.08514C1.20508 18 0 16.5296 0 14.8622C0 14.3454 0.131445 13.8172 0.405555 13.3379L6.81753 1.60122ZM9.50409 2C9.13355 2 8.77256 2.18675 8.57866 2.54907L8.57458 2.5567L2.14992 14.3166L2.144 14.3268C2.04638 14.4959 2 14.6817 2 14.8622C2 15.5497 2.43032 16 3.08514 16H15.9149C16.5697 16 17 15.5497 17 14.8622C17 14.6681 16.9554 14.4805 16.8588 14.309L16.8529 14.2986L10.4259 2.55741C10.2191 2.1792 9.86395 2 9.50409 2Z",fill:"currentColor"}),(0,v.jsx)("path",{d:"M9.5 11.2297C9.01639 11.2297 8.7459 10.9419 8.72951 10.4186L8.60656 6.4157C8.59016 5.88372 8.95902 5.5 9.4918 5.5C10.0164 5.5 10.4016 5.89244 10.3852 6.42442L10.2623 10.4099C10.2377 10.9419 9.96721 11.2297 9.5 11.2297ZM9.5 14.5C8.95082 14.5 8.5 14.0901 8.5 13.5058C8.5 12.9215 8.95082 12.5116 9.5 12.5116C10.0492 12.5116 10.5 12.9128 10.5 13.5058C10.5 14.0988 10.041 14.5 9.5 14.5Z",fill:"currentColor"})]}),ok=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"15",height:"14",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{left:0,top:0},...e,children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H6C6.55228 14 7 13.5523 7 13C7 12.4477 6.55228 12 6 12H4C2.89543 12 2 11.1046 2 10V4C2 2.89543 2.89543 2 4 2H6C6.55228 2 7 1.55228 7 1C7 0.447715 6.55228 0 6 0H4ZM11.7071 3.29289C11.3166 2.90237 10.6834 2.90237 10.2929 3.29289C9.90237 3.68342 9.90237 4.31658 10.2929 4.70711L11.5858 6H9.5H6C5.44772 6 5 6.44772 5 7C5 7.55228 5.44772 8 6 8H9.5H11.5858L10.2929 9.29289C9.90237 9.68342 9.90237 10.3166 10.2929 10.7071C10.6834 11.0976 11.3166 11.0976 11.7071 10.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289L11.7071 3.29289Z",fill:"currentColor",fillOpacity:"0.4"})}),ov=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM13.274 7.13324C13.6237 6.70579 13.5607 6.07577 13.1332 5.72604C12.7058 5.37632 12.0758 5.43932 11.726 5.86676L7.92576 10.5115L6.20711 8.79289C5.81658 8.40237 5.18342 8.40237 4.79289 8.79289C4.40237 9.18342 4.40237 9.81658 4.79289 10.2071L7.29289 12.7071C7.49267 12.9069 7.76764 13.0128 8.04981 12.9988C8.33199 12.9847 8.59505 12.8519 8.77396 12.6332L13.274 7.13324Z",fill:"currentColor"})}),om=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM24.5001 8.74263C25.0834 8.74263 25.5563 9.21551 25.5563 9.79883V14.5997C25.5563 15.183 25.0834 15.6559 24.5001 15.6559H19.6992C19.1159 15.6559 18.643 15.183 18.643 14.5997C18.643 14.0164 19.1159 13.5435 19.6992 13.5435H21.8378L20.071 11.8798C20.0632 11.8724 20.0555 11.865 20.048 11.8574C19.1061 10.915 17.8835 10.3042 16.5643 10.1171C15.2452 9.92999 13.9009 10.1767 12.7341 10.82C11.5674 11.4634 10.6413 12.4685 10.0955 13.684C9.54968 14.8994 9.41368 16.2593 9.70801 17.5588C10.0023 18.8583 10.711 20.0269 11.7273 20.8885C12.7436 21.7502 14.0124 22.2582 15.3425 22.336C16.6726 22.4138 17.9919 22.0572 19.1017 21.3199C19.5088 21.0495 19.8795 20.7333 20.2078 20.3793C20.6043 19.9515 21.2726 19.9262 21.7004 20.3228C22.1282 20.7194 22.1534 21.3876 21.7569 21.8154C21.3158 22.2912 20.8176 22.7161 20.2706 23.0795C18.7793 24.0702 17.0064 24.5493 15.2191 24.4448C13.4318 24.3402 11.7268 23.6576 10.3612 22.4998C8.9956 21.3419 8.0433 19.7716 7.6478 18.0254C7.2523 16.2793 7.43504 14.4519 8.16848 12.8186C8.90192 11.1854 10.1463 9.83471 11.7142 8.97021C13.282 8.10572 15.0884 7.77421 16.861 8.02565C18.6282 8.27631 20.2664 9.09278 21.5304 10.3525L23.4439 12.1544V9.79883C23.4439 9.21551 23.9168 8.74263 24.5001 8.74263Z",fill:"currentColor"})}),oC=({...e})=>(0,v.jsxs)("svg",{"aria-hidden":"true",width:"16",height:"14",viewBox:"0 0 16 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,v.jsx)("path",{d:"M14.5 2V6H10.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M14 5.66537L10.9899 2.75871C10.0931 1.83853 8.92897 1.24216 7.6729 1.05947C6.41683 0.876774 5.13688 1.11765 4.02592 1.7458C2.91497 2.37395 2.0332 3.35534 1.5135 4.54208C0.993792 5.72883 0.864305 7.05663 1.14455 8.3254C1.42479 9.59418 2.09958 10.7352 3.06724 11.5765C4.03489 12.4178 5.24298 12.9138 6.50946 12.9898C7.77594 13.0657 9.03219 12.7176 10.0889 11.9977C10.4765 11.7337 10.8295 11.4249 11.142 11.0792",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),ow=({...e})=>(0,v.jsxs)("svg",{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,v.jsx)("path",{d:"M14 9.5V7C14 5.89543 13.1046 5 12 5H7C5.89543 5 5 5.89543 5 7V12C5 13.1046 5.89543 14 7 14H9.5",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,v.jsx)("rect",{x:"10",y:"10",width:"9",height:"9",rx:"2",stroke:"var(--ck-body-color-muted)",strokeWidth:"2"}),(0,v.jsx)("path",{d:"M1 3L3 5L7 1",stroke:"var(--ck-body-color)",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round"})]}),oy=({...e})=>(0,v.jsx)("div",{...e,style:{zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",bottom:0,right:0,background:"#34C759",borderRadius:10,boxShadow:"0 0 0 1.5px var(--background)",width:10,height:10,...null==e?void 0:e.style},children:(0,v.jsx)("svg",{"aria-hidden":"true",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M0.75 3L2.25 4.5L5.25 1.5",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),oj={connectWallet:"Connect Wallet",disconnect:"Disconnect",connected:"Connected",wrongNetwork:"Wrong Network",switchNetworks:"Switch Networks",chainNetwork:"{{ CHAIN }} Network",copyToClipboard:"Copy to Clipboard",copyCode:"Copy Code",moreInformation:"More Information",back:"Back",close:"Close",or:"or",more:"More",tryAgain:"Try Again",tryAgainQuestion:"Try Again?",dontHaveTheApp:"Don't have the app?",scanTheQRCode:"Scan the QR code",useWalletConnectModal:"Use WalletConnect Modal",useModal:"Use Modal",installTheExtension:"Install the Extension",getWalletName:"Get {{ CONNECTORNAME }}",otherWallets:"Other Wallets",learnMore:"Learn More",getWallet:"Get a Wallet",approveInWallet:"Approve in Wallet",confirmInWallet:"Confirm in Wallet",awaitingConfirmation:"Awaiting Confirmation",signIn:"Sign In",signOut:"Sign Out",signedIn:"Signed In",signedOut:"Signed Out",walletNotConnected:"Wallet Not Connected",warnings_walletSwitchingUnsupported:"Your wallet does not support switching networks from this app.",warnings_walletSwitchingUnsupportedResolve:"Try switching networks from within your wallet instead.",warnings_chainUnsupported:"This app does not support the current connected network.",warnings_chainUnsupportedResolve:"Switch or disconnect to continue.",onboardingScreen_heading:"Get a Wallet",onboardingScreen_h1:"Start Exploring Web3",onboardingScreen_p:"Your wallet is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.",onboardingScreen_ctaText:"Choose Your First Wallet",onboardingScreen_ctaUrl:"https://ethereum.org/en/wallets/find-wallet/",aboutScreen_heading:"About Wallets",aboutScreen_a_h1:"For your digital assets",aboutScreen_a_p:"Wallets let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.",aboutScreen_b_h1:"A better way to login",aboutScreen_b_p:"With modern apps, your wallet can be used as an easy way to login, instead of having to remember a password.",aboutScreen_c_h1:"Explore the world of web3",aboutScreen_c_p:"Your wallet is an essential utility that lets you explore and participate in the fast evolving world of web3.",aboutScreen_ctaText:"Learn More",aboutScreen_ctaUrl:"https://ethereum.org/en/wallets/",connectorsScreen_heading:"Connect Wallet",connectorsScreen_newcomer:`I don’t have a wallet`,connectorsScreen_h1:"What is a wallet?",connectorsScreen_p:"Wallets are used to send, receive, and store digital assets. Connecting a wallet lets you interact with apps.",mobileConnectorsScreen_heading:"Choose Wallet",scanScreen_heading:"Scan with Phone",scanScreen_heading_withConnector:"Scan with {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:`Open a [WALLETCONNECTLOGO] WalletConnect 
supported wallet to scan`,scanScreen_tooltip_default:`Open {{ CONNECTORNAME }} on 
your mobile phone to scan`,downloadAppScreen_heading:"Get {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:"Scan with your phone camera to download on iOS or Android.",downloadAppScreen_ios:"Scan with your phone camera to download on iOS.",downloadAppScreen_android:"Scan with your phone camera to download Android.",injectionScreen_unavailable_h1:"Unsupported Browser",injectionScreen_unavailable_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the extension on {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Install {{ CONNECTORNAME }}",injectionScreen_install_p:`To connect your {{ CONNECTORSHORTNAME }} wallet,
install the browser extension.`,injectionScreen_connecting_h1:"Requesting Connection",injectionScreen_connecting_p:`Open the {{ CONNECTORSHORTNAME }} browser 
extension to connect your wallet.`,injectionScreen_connecting_injected_h1:"Requesting Connection",injectionScreen_connecting_injected_p:"Accept the request through your wallet to connect to this app.",injectionScreen_connected_h1:"Already Connected",injectionScreen_connected_p:"It is now okay to close this popup",injectionScreen_rejected_h1:"Request Cancelled",injectionScreen_rejected_p:`You cancelled the request.
Click above to try again.`,injectionScreen_failed_h1:"Connection Failed",injectionScreen_failed_p:`Sorry, something went wrong.
Please try connecting again.`,injectionScreen_notconnected_h1:"Login to {{ CONNECTORNAME }}",injectionScreen_notconnected_p:"To continue, please login to your {{ CONNECTORNAME }} extension.",profileScreen_heading:"Connected",switchNetworkScreen_heading:"Switch Networks",signInWithEthereumScreen_tooltip:"You’re not signed in to this app.\n**Sign In With Ethereum** to continue.",signInWithEthereumScreen_signedOut_heading:"Sign In With Ethereum",signInWithEthereumScreen_signedOut_h1:"This app would like to verify you \n as the owner of this wallet.",signInWithEthereumScreen_signedOut_p:`Please sign the message request 
 in your wallet to continue.`,signInWithEthereumScreen_signedOut_button:"Sign In",signInWithEthereumScreen_signedIn_heading:"Signed In With Ethereum",signInWithEthereumScreen_signedIn_h1:"You successfully verified yourself \n as the owner of this wallet.",signInWithEthereumScreen_signedIn_p:`Signing out will require you to 
 authenticate again in the future.`,signInWithEthereumScreen_signedIn_button:"Sign Out"},oE={connectWallet:"Conecta una cartera",disconnect:"Desconectar",connected:"Conectado",wrongNetwork:"Red incorrecta",switchNetworks:"Cambio de red",chainNetwork:"Red {{ CHAIN }}",copyToClipboard:"Copiar al portapapeles",copyCode:"Copiar c\xf3digo",moreInformation:"M\xe1s informaci\xf3n",back:"Atr\xe1s",close:"Cerrar",or:"o",more:"M\xe1s",tryAgain:"Intentar de nuevo",tryAgainQuestion:"\xbfIntentar de nuevo?",dontHaveTheApp:"\xbfNo tienes la aplicaci\xf3n?",scanTheQRCode:"Escanea el c\xf3digo QR",useWalletConnectModal:"Utilizar WalletConnect Modal",useModal:"Utilizar Modal",installTheExtension:"Instalar la extensi\xf3n",getWalletName:"Obt\xe9n {{ CONNECTORNAME }}",otherWallets:"Otras carteras",learnMore:"M\xe1s informaci\xf3n",getWallet:"Obt\xe9n una cartera",approveInWallet:"Aprobar en la cartera",confirmInWallet:"Confirmar en la cartera",awaitingConfirmation:"A la espera de confirmaci\xf3n",signIn:"Iniciar sesi\xf3n",signOut:"Cerrar sesi\xf3n",signedIn:"Sesi\xf3n iniciada",signedOut:"Sesi\xf3n cerrada",walletNotConnected:"Cartera no conectada",warnings_walletSwitchingUnsupported:`Tu cartera no permite cambiar de red desde esta aplicaci\xf3n.`,warnings_walletSwitchingUnsupportedResolve:"Prueba a cambiar de red desde tu cartera.",warnings_chainUnsupported:`Esta aplicaci\xf3n no es compatible con la red conectada actualmente.`,warnings_chainUnsupportedResolve:"Cambia o desconecta para continuar.",onboardingScreen_heading:`Obt\xe9n una cartera`,onboardingScreen_h1:"Comienza a explorar la Web3",onboardingScreen_p:`Tu cartera es el portal de acceso a todo lo relacionado con Ethereum, la tecnolog\xeda m\xe1gica que permite explorar la Web3.`,onboardingScreen_ctaText:"Elige tu primera cartera",onboardingScreen_ctaUrl:"https://ethereum.org/es/wallets/find-wallet/",aboutScreen_heading:"Acerca de las carteras",aboutScreen_a_h1:"Para tus activos digitales",aboutScreen_a_p:"Las carteras te permiten enviar, recibir, almacenar e interactuar con activos digitales como los NFT y otros tokens de Ethereum.",aboutScreen_b_h1:`Una manera mejor de iniciar sesi\xf3n`,aboutScreen_b_p:`Con las aplicaciones modernas, puedes utilizar tu cartera para iniciar sesi\xf3n f\xe1cilmente, en vez de tener que recordar una contrase\xf1a.`,aboutScreen_c_h1:"Explora el mundo de la Web3",aboutScreen_c_p:`Tu cartera es una herramienta esencial que te permite explorar y participar en el mundo en r\xe1pida evoluci\xf3n de la Web3.`,aboutScreen_ctaText:`M\xe1s informaci\xf3n`,aboutScreen_ctaUrl:"https://ethereum.org/es/wallets/",connectorsScreen_heading:"Conecta una cartera",connectorsScreen_newcomer:"No tengo una cartera",connectorsScreen_h1:`\xbfQu\xe9 es una cartera?`,connectorsScreen_p:`Las carteras se utilizan para enviar, recibir y almacenar activos digitales. Si conectas una cartera, podr\xe1s interactuar con las aplicaciones.`,mobileConnectorsScreen_heading:"Elige una cartera",scanScreen_heading:`Escanea con el tel\xe9fono`,scanScreen_heading_withConnector:"Escanea con {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Abre una cartera compatible con WalletConnect [WALLETCONNECTLOGO] para escanear",scanScreen_tooltip_default:`Abre {{ CONNECTORNAME }} en tu tel\xe9fono m\xf3vil para escanear`,downloadAppScreen_heading:`Obt\xe9n {{ CONNECTORNAME }}`,downloadAppScreen_iosAndroid:`Escanea con la c\xe1mara de tu tel\xe9fono para descargarla en iOS o Android.`,downloadAppScreen_ios:`Escanea con la c\xe1mara de tu tel\xe9fono para descargarla en iOS.`,downloadAppScreen_android:`Escanea con la c\xe1mara de tu tel\xe9fono para descargarla en Android.`,injectionScreen_unavailable_h1:"Navegador no compatible",injectionScreen_unavailable_p:`Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensi\xf3n en {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Instala {{ CONNECTORNAME }}",injectionScreen_install_p:`Para conectar tu cartera de {{ CONNECTORSHORTNAME }}, instala la extensi\xf3n del navegador.`,injectionScreen_connecting_h1:`Solicitud de conexi\xf3n`,injectionScreen_connecting_p:`Abre la extensi\xf3n del navegador de {{ CONNECTORSHORTNAME }}  para conectar tu cartera.`,injectionScreen_connecting_injected_h1:`Solicitud de conexi\xf3n`,injectionScreen_connecting_injected_p:`Acepta la solicitud a trav\xe9s de tu cartera para conectarte a esta aplicaci\xf3n.`,injectionScreen_connected_h1:"Ya conectada",injectionScreen_connected_p:"Ya puedes cerrar esta ventana emergente",injectionScreen_rejected_h1:"Solicitud cancelada",injectionScreen_rejected_p:"Has cancelado la solicitud. Haz clic arriba para intentarlo de nuevo.",injectionScreen_failed_h1:`Error de conexi\xf3n`,injectionScreen_failed_p:"Lo sentimos, ha habido un problema. Intenta conectarte de nuevo.",injectionScreen_notconnected_h1:`Inicia sesi\xf3n en {{ CONNECTORNAME }}`,injectionScreen_notconnected_p:`Para continuar, inicia sesi\xf3n en tu extensi\xf3n de {{ CONNECTORNAME }}.`,profileScreen_heading:"Conectado",switchNetworkScreen_heading:"Cambio de red",signInWithEthereumScreen_tooltip:"No has iniciado sesi\xf3n en esta aplicaci\xf3n.\n**Inicia sesi\xf3n con Ethereum** para continuar.",signInWithEthereumScreen_signedOut_heading:"Inicia sesi\xf3n con Ethereum",signInWithEthereumScreen_signedOut_h1:"Esta aplicaci\xf3n desea verificar que eres el propietario de esta cartera.",signInWithEthereumScreen_signedOut_p:"Firma la solicitud de mensaje en tu cartera para continuar.",signInWithEthereumScreen_signedOut_button:"Iniciar sesi\xf3n",signInWithEthereumScreen_signedIn_heading:"Sesi\xf3n iniciada con Ethereum",signInWithEthereumScreen_signedIn_h1:"Te has verificado correctamente como propietario de esta cartera.",signInWithEthereumScreen_signedIn_p:`Si cierras la sesi\xf3n, tendr\xe1s que volver a autenticarte m\xe1s adelante.`,signInWithEthereumScreen_signedIn_button:"Cerrar sesi\xf3n"},oL={connectWallet:"Connecter le portefeuille",disconnect:"D\xe9connecter",connected:"Connect\xe9",wrongNetwork:"R\xe9seau incorrect",switchNetworks:"Changer de r\xe9seau",chainNetwork:"R\xe9seau {{ CHAIN }}",copyToClipboard:"Copier dans le presse-papiers",copyCode:"Copier le code",moreInformation:"Plus d’informations",back:"Retour",close:"Fermer",or:"ou",more:"Plus",tryAgain:"R\xe9essayer",tryAgainQuestion:"R\xe9essayer\xa0?",dontHaveTheApp:"Vous n’avez pas l’application ?",scanTheQRCode:"Scannez le code QR",useWalletConnectModal:"Utiliser la modale WalletConnect",useModal:"Utiliser la modale",installTheExtension:"Installer l’extension",getWalletName:"Obtenez {{ CONNECTORNAME }}",otherWallets:"Autres portefeuilles",learnMore:"En savoir plus",getWallet:"Obtenir un portefeuille",approveInWallet:"Approuver dans le portefeuille",confirmInWallet:"Confirmer dans le portefeuille",awaitingConfirmation:"En attente de confirmation",signIn:"Se connecter",signOut:"Se d\xe9connecter",signedIn:"Connect\xe9",signedOut:"D\xe9connect\xe9",walletNotConnected:"Portefeuille non connect\xe9",warnings_walletSwitchingUnsupported:`Votre portefeuille ne prend pas en charge le changement de r\xe9seau \xe0 partir de cette application.`,warnings_walletSwitchingUnsupportedResolve:`Essayez plut\xf4t de changer de r\xe9seau \xe0 partir de votre portefeuille.`,warnings_chainUnsupported:`Cette application ne prend pas en charge le r\xe9seau connect\xe9 actuel.`,warnings_chainUnsupportedResolve:`Changez ou d\xe9connectez-vous pour continuer.`,onboardingScreen_heading:"Obtenez un portefeuille",onboardingScreen_h1:`Commencez \xe0 explorer le Web3`,onboardingScreen_p:`Votre portefeuille est la porte d'entr\xe9e vers tout ce qui concerne l'Ethereum, la technologie magique qui permet d'explorer le Web3.`,onboardingScreen_ctaText:"Choisissez votre premier portefeuille",onboardingScreen_ctaUrl:"https://ethereum.org/fr/wallets/find-wallet/",aboutScreen_heading:`\xc0 propos des portefeuilles`,aboutScreen_a_h1:`Pour vos actifs num\xe9riques`,aboutScreen_a_p:`Les portefeuilles vous permettent d'envoyer, de recevoir, de stocker et d'interagir avec des actifs num\xe9riques tels que des NFT et d'autres jetons Ethereum.`,aboutScreen_b_h1:`Une meilleure fa\xe7on de se connecter`,aboutScreen_b_p:`Avec les applications modernes, votre portefeuille peut s'utiliser pour vous connecter facilement, au lieu d'avoir \xe0 m\xe9moriser un mot de passe.`,aboutScreen_c_h1:"Explorez le monde du Web3",aboutScreen_c_p:`Votre portefeuille est un utilitaire essentiel qui vous permet d'explorer et de participer au monde en \xe9volution rapide du Web3.`,aboutScreen_ctaText:"En savoir plus",aboutScreen_ctaUrl:"https://ethereum.org/fr/wallets/",connectorsScreen_heading:"Connectez le portefeuille",connectorsScreen_newcomer:`Je n’ai pas de portefeuille`,connectorsScreen_h1:`Qu’est-ce qu’un portefeuille ?`,connectorsScreen_p:`Les portefeuilles s'utilisent pour envoyer, recevoir et stocker des actifs num\xe9riques. La connexion d'un portefeuille vous permet d'interagir avec les applications.`,mobileConnectorsScreen_heading:"Choisissez le portefeuille",scanScreen_heading:`Scannez avec le t\xe9l\xe9phone`,scanScreen_heading_withConnector:"Scannez avec {{ CONNECTORNAME }}",scanScreen_tooltip_walletConnect:"Ouvrez un portefeuille pris en charge par WalletConnect [WALLETCONNECTLOGO] pour scanner",scanScreen_tooltip_default:`Ouvrez {{ CONNECTORNAME }} sur votre t\xe9l\xe9phone mobile pour scanner`,downloadAppScreen_heading:"Obtenez {{ CONNECTORNAME }}",downloadAppScreen_iosAndroid:`Scannez avec l'appareil photo de votre t\xe9l\xe9phone pour le t\xe9l\xe9charger sur iOS ou Android.`,downloadAppScreen_ios:`Scannez avec l'appareil photo de votre t\xe9l\xe9phone pour le t\xe9l\xe9charger sur iOS.`,downloadAppScreen_android:`Scannez avec l'appareil photo de votre t\xe9l\xe9phone pour le t\xe9l\xe9charger sur Android.`,injectionScreen_unavailable_h1:"Navigateur non pris en charge",injectionScreen_unavailable_p:`Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension sur {{ SUGGESTEDEXTENSIONBROWSER }}.`,injectionScreen_install_h1:"Installez {{ CONNECTORNAME }}",injectionScreen_install_p:`Pour connecter votre portefeuille {{ CONNECTORSHORTNAME }}, installez l’extension de navigateur.`,injectionScreen_connecting_h1:"Demande de connexion",injectionScreen_connecting_p:`Ouvrez l’extension de navigateur {{ CONNECTORSHORTNAME }} pour connecter votre portefeuille.`,injectionScreen_connecting_injected_h1:"Demande de connexion",injectionScreen_connecting_injected_p:`Acceptez la demande via votre portefeuille pour vous connecter \xe0 cette application.`,injectionScreen_connected_h1:`D\xe9j\xe0 connect\xe9`,injectionScreen_connected_p:"Vous pouvez maintenant fermer ce pop-up",injectionScreen_rejected_h1:`Demande annul\xe9e`,injectionScreen_rejected_p:`Vous avez annul\xe9 la demande. Cliquez ci-dessus pour r\xe9essayer.`,injectionScreen_failed_h1:`\xc9chec de la connexion`,injectionScreen_failed_p:`Malheureusement, un probl\xe8me est survenu. Veuillez r\xe9essayer de vous connecter.`,injectionScreen_notconnected_h1:`Connectez-vous \xe0 {{ CONNECTORNAME }}`,injectionScreen_notconnected_p:`Pour continuer, veuillez vous connecter \xe0 votre extension {{ CONNECTORNAME }} .`,profileScreen_heading:"Connect\xe9",switchNetworkScreen_heading:"Changer de r\xe9seau",signInWithEthereumScreen_tooltip:"Vous n’\xeates pas connect\xe9 \xe0 cette application.\n**Connectez-vous avec Ethereum** pour continuer.",signInWithEthereumScreen_signedOut_heading:"Connectez-vous avec Ethereum",signInWithEthereumScreen_signedOut_h1:"Cette application souhaite v\xe9rifier que vous \xeates bien le propri\xe9taire de ce portefeuille.",signInWithEthereumScreen_signedOut_p:"Veuillez signer la demande de message dans votre portefeuille pour continuer.",signInWithEthereumScreen_signedOut_button:"Se connecter",signInWithEthereumScreen_signedIn_heading:"Connect\xe9 avec Ethereum",signInWithEthereumScreen_signedIn_h1:"Vous avez r\xe9ussi \xe0 vous identifier en tant que propri\xe9taire de ce portefeuille.",signInWithEthereumScreen_signedIn_p:`La d\xe9connexion vous obligera \xe0 vous authentifier \xe0 nouveau \xe0 l'avenir.`,signInWithEthereumScreen_signedIn_button:"Se d\xe9connecter"};var oF={connectWallet:"ウォレットの接続",disconnect:"切断",connected:"接続されました",wrongNetwork:"間違ったネットワーク",switchNetworks:"ネットワークの切り替え",chainNetwork:"{{ CHAIN }} ネットワーク",copyToClipboard:"クリップボードにコピー",copyCode:"コードをコピー",moreInformation:"詳細情報",back:"戻る",close:"閉じる",or:"または",more:"その他",tryAgain:"再試行",tryAgainQuestion:"もう一度試しますか？",dontHaveTheApp:"アプリをお持ちではありませんか？",scanTheQRCode:"QR コードをスキャン",useWalletConnectModal:"WalletConnect モーダルを使用",useModal:"モーダルを使用",installTheExtension:"拡張機能をインストール",getWalletName:"{{ CONNECTORNAME }} を取得",otherWallets:"その他のウォレット",learnMore:"詳細情報",getWallet:"ウォレットを入手",approveInWallet:"ウォレットで承認",confirmInWallet:"ウォレットで確認",awaitingConfirmation:"確認を待っています",signIn:"サインイン",signOut:"サインアウト",signedIn:"サインインしました",signedOut:"サインアウトしました",walletNotConnected:"ウォレットが接続されていません",warnings_walletSwitchingUnsupported:`お使いのウォレットは、このアプリからのネットワークの切り替えをサポートしていません。`,warnings_walletSwitchingUnsupportedResolve:`代わりにウォレット内からネットワークを切り替えてみてください。`,warnings_chainUnsupported:`このアプリは、現在接続されているネットワークをサポートしていません。`,warnings_chainUnsupportedResolve:`切り替えるか切断して続行します。`,onboardingScreen_heading:`ウォレットを入手`,onboardingScreen_h1:`Web3 の探索を開始`,onboardingScreen_p:`ウォレットは、web3 の探索を可能にする魔法のテクノロジーであるイーサリアムのすべてへのゲートウェイです。`,onboardingScreen_ctaText:`最初のウォレットを選択してください`,onboardingScreen_ctaUrl:"https://ethereum.org/ja/wallets/find-wallet/",aboutScreen_heading:`ウォレットについて`,aboutScreen_a_h1:`デジタル資産用`,aboutScreen_a_p:`ウォレットを使用すると、NFT やその他のイーサリアム トークンなどのデジタル資産を送信、受信、保存、および操作できます。`,aboutScreen_b_h1:`より良いログイン方法`,aboutScreen_b_p:`最新のアプリでは、パスワードを覚える必要がなく、ウォレットを簡単なログイン方法として使用できます。`,aboutScreen_c_h1:`web3 の世界を探索`,aboutScreen_c_p:`ウォレットは、急速に進化する web3 の世界を探索し、参加するために不可欠なユーティリティです。`,aboutScreen_ctaText:`詳細情報`,aboutScreen_ctaUrl:"https://ethereum.org/ja/wallets/",connectorsScreen_heading:`ウォレットの接続`,connectorsScreen_newcomer:`ウォレットを持っていません`,connectorsScreen_h1:`ウォレットとは何ですか？`,connectorsScreen_p:`ウォレットは、デジタル資産の送信、受信、および保存に使用されます。 ウォレットを接続すると、アプリとやり取りできます。`,mobileConnectorsScreen_heading:`ウォレットを選択`,scanScreen_heading:`電話でスキャンする`,scanScreen_heading_withConnector:`{{ CONNECTORNAME }}でスキャンする`,scanScreen_tooltip_walletConnect:`[WALLETCONNECTLOGO] WalletConnect 対応の ウォレットを開いてスキャンします`,scanScreen_tooltip_default:`携帯電話で {{ CONNECTORNAME }} を 開いてスキャンします`,downloadAppScreen_heading:`{{ CONNECTORNAME }} を取得`,downloadAppScreen_iosAndroid:`携帯電話のカメラでスキャンして、iOS または Android にダウンロードします。`,downloadAppScreen_ios:`携帯電話のカメラでスキャンして、iOS にダウンロードします。`,downloadAppScreen_android:`携帯電話のカメラでスキャンして、Android にダウンロードします。`,injectionScreen_unavailable_h1:`サポートされていないブラウザ`,injectionScreen_unavailable_p:`{{ CONNECTORSHORTNAME }} ウォレットを接続するには、{{ SUGGESTEDEXTENSIONBROWSER }} に拡張機能をインストールします。`,injectionScreen_install_h1:`{{ CONNECTORNAME }} をインストール`,injectionScreen_install_p:`{{ CONNECTORSHORTNAME }} ウォレットを接続するには、ブラウザ拡張機能をインストールします。`,injectionScreen_connecting_h1:`接続を要求`,injectionScreen_connecting_p:`{{ CONNECTORSHORTNAME }} ブラウザ拡張機能を 開いて、ウォレットを接続します。`,injectionScreen_connecting_injected_h1:`接続を要求`,injectionScreen_connecting_injected_p:`このアプリに接続するには、ウォレットを介して要求を受け入れます。`,injectionScreen_connected_h1:`すでに接続済み`,injectionScreen_connected_p:`このポップアップを閉じてもかまいません`,injectionScreen_rejected_h1:`要求がキャンセルされました`,injectionScreen_rejected_p:`要求をキャンセルしました。上をクリックしてもう一度お試しください。`,injectionScreen_failed_h1:`接続に失敗しました`,injectionScreen_failed_p:`申し訳ありませんが、問題が発生しました。もう一度接続してみてください。`,injectionScreen_notconnected_h1:`{{ CONNECTORNAME }} にログイン`,injectionScreen_notconnected_p:`続行するには、 {{ CONNECTORNAME }} 拡張機能にログインしてください。`,profileScreen_heading:"接続されました",switchNetworkScreen_heading:"ネットワークの切り替え",signInWithEthereumScreen_tooltip:"このアプリにサインインしていません。\n続行するには、**イーサリアムでサインイン**してください。",signInWithEthereumScreen_signedOut_heading:"イーサリアムでサインイン",signInWithEthereumScreen_signedOut_h1:"このアプリは、あなたがこのウォレットの 所有者であることを確認しようとしています。",signInWithEthereumScreen_signedOut_p:`続行するには、ウォレットで メッセージ リクエストに署名してください。`,signInWithEthereumScreen_signedOut_button:"サインイン",signInWithEthereumScreen_signedIn_heading:"イーサリアムでサインインしました",signInWithEthereumScreen_signedIn_h1:"このウォレットの所有者であることが 正常に確認されました。",signInWithEthereumScreen_signedIn_p:`サインアウトすると、今後 再度認証する必要があります。`,signInWithEthereumScreen_signedIn_button:"サインアウト"};let o_={connectWallet:"绑定钱包",disconnect:"解除绑定",connected:"已绑定",wrongNetwork:"错误网络",switchNetworks:"切换网络",chainNetwork:"{{ CHAIN }}网络",copyToClipboard:"复制到剪贴板",copyCode:"复制代码",moreInformation:"更多信息",back:"返回",close:"关闭",or:"或",more:"更多",tryAgain:"重试",tryAgainQuestion:"重试？",dontHaveTheApp:"没有该应用？",scanTheQRCode:"扫描二维码",useWalletConnectModal:"使用 WalletConnect 模态窗",useModal:"使用模态窗",installTheExtension:"安装扩展程序",getWalletName:"获取{{ CONNECTORNAME }}",otherWallets:"其他钱包",learnMore:"了解更多",getWallet:"获取钱包",approveInWallet:"在钱包中批准",confirmInWallet:"在钱包中确认",awaitingConfirmation:"等待确认",signIn:"登录",signOut:"登出",signedIn:"已登录",signedOut:"已登出",walletNotConnected:"钱包未绑定",warnings_walletSwitchingUnsupported:`您的钱包不支持从此应用切换网络。`,warnings_walletSwitchingUnsupportedResolve:`请尝试从钱包中切换网络。`,warnings_chainUnsupported:`此应用不支持当前连接的网络。`,warnings_chainUnsupportedResolve:`请切换网络或断开连接以继续。`,onboardingScreen_heading:`获取钱包`,onboardingScreen_h1:`开始探索 Web3`,onboardingScreen_p:`您的钱包是通往以太坊的一扇大门，而以太坊是探索 Web3 的一项神奇技术。`,onboardingScreen_ctaText:`选择您的第一钱包`,onboardingScreen_ctaUrl:"https://ethereum.org/zh/wallets/find-wallet/",aboutScreen_heading:`关于钱包`,aboutScreen_a_h1:`对于您的数字资产`,aboutScreen_a_p:`有了钱包，您可以发送、接收、存储数字资产及使用数字资产进行交互，例如 NFT 和其他以太坊通证等。`,aboutScreen_b_h1:`更好的登录方式`,aboutScreen_b_p:`使用现代应用，您的钱包可以用作简便的登录方法，而不必记住密码。`,aboutScreen_c_h1:`探索 Web3 世界`,aboutScreen_c_p:`您的钱包是一个重要的工具，可以让您探索并参与到快速发展的 Web3 世界。`,aboutScreen_ctaText:`了解更多`,aboutScreen_ctaUrl:"https://ethereum.org/zh/wallets/",connectorsScreen_heading:`绑定钱包`,connectorsScreen_newcomer:`我没有钱包`,connectorsScreen_h1:`什么是钱包？`,connectorsScreen_p:`钱包可用于发送、接收和存储数字资产。通过绑定钱包，您可以与应用进行交互。`,mobileConnectorsScreen_heading:`选择钱包`,scanScreen_heading:`手机扫描`,scanScreen_heading_withConnector:`手机扫描{{ CONNECTORNAME }}`,scanScreen_tooltip_walletConnect:`打开 [WALLETCONNECTLOGO] WalletConnect 支持的钱包进行扫描`,scanScreen_tooltip_default:`打开您手机上的{{ CONNECTORNAME }} 进行扫描`,downloadAppScreen_heading:`获取{{ CONNECTORNAME }}`,downloadAppScreen_iosAndroid:`使用手机相机扫描以下载 iOS 或 Android 应用。`,downloadAppScreen_ios:`使用手机相机扫描以下载 iOS 应用。`,downloadAppScreen_android:`使用手机相机扫描以下载 Android 应用。`,injectionScreen_unavailable_h1:`不支持的浏览器`,injectionScreen_unavailable_p:`要绑定您的{{ CONNECTORSHORTNAME }}钱包，请在{{ SUGGESTEDEXTENSIONBROWSER }}上安装此扩展程序。`,injectionScreen_install_h1:`安装{{ CONNECTORNAME }}`,injectionScreen_install_p:`要绑定您的{{ CONNECTORSHORTNAME }}钱包，请安装此浏览器扩展程序。`,injectionScreen_connecting_h1:`请求绑定`,injectionScreen_connecting_p:`打开{{ CONNECTORSHORTNAME }}浏览器 扩展程序以绑定您的钱包。`,injectionScreen_connecting_injected_h1:`请求绑定`,injectionScreen_connecting_injected_p:`通过您的钱包接受请求，以绑定到此应用。`,injectionScreen_connected_h1:`已绑定`,injectionScreen_connected_p:`现在可以关闭此弹窗`,injectionScreen_rejected_h1:`请求已取消`,injectionScreen_rejected_p:`您已取消请求。n点击上面可重试。`,injectionScreen_failed_h1:`绑定失败`,injectionScreen_failed_p:`抱歉，发生错误。请尝试重新绑定。`,injectionScreen_notconnected_h1:`登录{{ CONNECTORNAME }}`,injectionScreen_notconnected_p:`要继续，请登录到您的{{ CONNECTORNAME }}扩展程序。`,profileScreen_heading:"已绑定",switchNetworkScreen_heading:"切换网络",signInWithEthereumScreen_tooltip:"您尚未登录到此应用。\n请选择**使用以太坊登录**以继续。",signInWithEthereumScreen_signedOut_heading:"使用以太坊登录",signInWithEthereumScreen_signedOut_h1:"此应用希望验证您是 此钱包的所有者。",signInWithEthereumScreen_signedOut_p:`请签署钱包中的消息请求 以继续。`,signInWithEthereumScreen_signedOut_button:"登录",signInWithEthereumScreen_signedIn_heading:"已使用以太坊登录",signInWithEthereumScreen_signedIn_h1:"您已成功验证自己 是此钱包的所有者。",signInWithEthereumScreen_signedIn_p:`登出后，将来您还需要 再次进行身份验证。`,signInWithEthereumScreen_signedIn_button:"登出"},oS=e=>{switch(e){case"es-ES":return oE;case"fr-FR":return oL;case"ja-JP":return oF;case"zh-CN":return o_;default:return oj}};function oI(e){var o,t;let n=is(),r=null!==(t=null===(o=n.options)||void 0===o?void 0:o.language)&&void 0!==t?t:"en-US",i=(0,m.useMemo)(()=>oS(r),[r]);if(!i)return console.error(`Missing translations for: ${r}`),`Missing translations for: ${r}`;let a={};return Object.keys(i).map(o=>{let t=i[o];return a[o]=oM(t,e)}),a}let oM=(e,o)=>{let t=e;return o&&Object.keys(o).forEach(e=>{t=t.replaceAll(`{{ ${e} }}`,o[e])}),oA(t)},oA=e=>{let o=e;return o=(o=o.split("\n")).map((e,t)=>(0,v.jsxs)(m.Fragment,{children:[oN(e),t<o.length-1&&(0,v.jsx)("br",{})]},t))},oN=e=>{let o=e.split(/(\*\*[^\*]*\*\*)/g);return o.map((e,o)=>/(\*\*.*\*\*)/g.test(e)?(0,v.jsx)("strong",{children:e.replaceAll("**","")},o):`${e}`).map(e=>"string"==typeof e?e.split(/(\[WALLETCONNECTLOGO\])/g).map(e=>"[WALLETCONNECTLOGO]"===e?(0,v.jsx)("span",{className:"ck-tt-logo",children:(0,v.jsx)(ew.WalletConnect,{})}):e):e)},oO={debug:10,info:20,warn:30,error:40,none:100},oW="undefined"!=typeof window&&window.document&&void 0!==window.document.createElement?m.useLayoutEffect:m.useEffect,oR=({logLevel:e="info",maxFontSize:o=100,minFontSize:t=20,onFinish:n,onStart:r,resolution:i=5}={})=>{let a=oO[e],s=(0,m.useCallback)(()=>({calcKey:0,fontSize:o,fontSizePrev:t,fontSizeMax:o,fontSizeMin:t}),[o,t]),c=(0,m.useRef)(null),d=(0,m.useRef)(),l=(0,m.useRef)(!1),[p,h]=(0,m.useState)(s),{calcKey:u,fontSize:x,fontSizeMax:b,fontSizeMin:g,fontSizePrev:f}=p,k=null,[v]=(0,m.useState)(()=>new I.Z(()=>{k=window.requestAnimationFrame(()=>{l.current||(r&&r(),l.current=!0,h({...s(),calcKey:u+1}))})}));(0,m.useEffect)(()=>(c.current&&v.observe(c.current),()=>{k&&window.cancelAnimationFrame(k),v.disconnect()}),[k,v]);let C=c.current&&c.current.innerHTML;return(0,m.useEffect)(()=>{0===u||l.current||(C!==d.current&&(r&&r(),h({...s(),calcKey:u+1})),d.current=C)},[u,s,C,r]),oW(()=>{let e;if(0===u)return;let o=!!c.current&&(c.current.scrollHeight>c.current.offsetHeight||c.current.scrollWidth>c.current.offsetWidth),r=x>f;if(Math.abs(x-f)<=i){o&&x===f?(l.current=!1,a<=oO.info&&console.info(`[use-fit-text] reached \`minFontSize = ${t}\` without fitting text`)):o?h({fontSize:r?f:g,fontSizeMax:b,fontSizeMin:g,fontSizePrev:f,calcKey:u}):(l.current=!1,n&&n(x));return}let s=b,d=g;o?(e=r?f-x:g-x,s=Math.min(b,x)):(e=r?b-x:f-x,d=Math.max(g,x)),h({calcKey:u,fontSize:x+e/2,fontSizeMax:s,fontSizeMin:d,fontSizePrev:x})},[u,x,b,g,f,n,c,i]),{fontSize:x,ref:c}},oT=m.forwardRef(({children:e},o)=>{let[t,n]=m.useState(!1),{fontSize:r,ref:i}=oR({logLevel:"none",maxFontSize:100,minFontSize:70,onStart:()=>n(!0),onFinish:()=>n(!0)});return(0,v.jsx)("div",{ref:i,style:{visibility:t?"visible":"hidden",fontSize:`${r}%`,maxHeight:"100%",maxWidth:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:e})});oT.displayName="FitText";let oB=({signedIn:e})=>(0,v.jsxs)("div",{style:{position:"relative"},children:[e?(0,v.jsx)(oy,{style:{bottom:-1,right:-1}}):(0,v.jsx)("div",{style:{zIndex:2,position:"absolute",top:-2,right:-2,background:"#1A88F8",borderRadius:8,boxShadow:"0 0 0 2px var(--ck-body-background)",width:8,height:8}}),(0,v.jsxs)("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{overflow:"visible"},children:[(0,v.jsx)("circle",{cx:"10",cy:"10",r:"9",stroke:"currentColor",strokeWidth:"2"}),(0,v.jsx)("path",{d:"M16.5 16.775C14.8618 15.0649 12.5552 14 10 14C7.44477 14 5.13825 15.0649 3.5 16.775",stroke:"currentColor",strokeWidth:"2"}),(0,v.jsx)("circle",{cx:"10",cy:"8",r:"3",stroke:"currentColor",strokeWidth:"2"})]})]}),oD=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 11C20 15.9706 15.9706 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11.6445 12.7051C11.6445 13.1348 11.3223 13.4678 10.7744 13.4678C10.2266 13.4678 9.92578 13.1885 9.92578 12.6191V12.4795C9.92578 11.4268 10.4951 10.8574 11.2686 10.3203C12.2031 9.67578 12.665 9.32129 12.665 8.59082C12.665 7.76367 12.0205 7.21582 11.043 7.21582C10.3232 7.21582 9.80762 7.57031 9.45312 8.16113C9.38282 8.24242 9.32286 8.32101 9.2667 8.39461C9.04826 8.68087 8.88747 8.8916 8.40039 8.8916C8.0459 8.8916 7.66992 8.62305 7.66992 8.15039C7.66992 7.96777 7.70215 7.7959 7.75586 7.61328C8.05664 6.625 9.27051 5.75488 11.1182 5.75488C12.9336 5.75488 14.5234 6.71094 14.5234 8.50488C14.5234 9.7832 13.7822 10.417 12.7402 11.1045C11.999 11.5986 11.6445 11.9746 11.6445 12.5762V12.7051ZM11.9131 15.5625C11.9131 16.1855 11.376 16.6797 10.7529 16.6797C10.1299 16.6797 9.59277 16.1748 9.59277 15.5625C9.59277 14.9395 10.1191 14.4453 10.7529 14.4453C11.3867 14.4453 11.9131 14.9287 11.9131 15.5625Z",fill:"currentColor"})}),oz=({...e})=>(0,v.jsxs)(w.E.svg,{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,v.jsx)("path",{d:"M1 13L13 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),(0,v.jsx)("path",{d:"M1 0.999999L13 13",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),oZ=({...e})=>(0,v.jsx)(w.E.svg,{width:9,height:16,viewBox:"0 0 9 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,v.jsx)("path",{d:"M8 1L1 8L8 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),oU={initial:{zIndex:2,opacity:0},animate:{opacity:1,scale:1,transition:{duration:.165,delay:.055,ease:[.26,.08,.25,1]}},exit:{zIndex:1,opacity:0,pointerEvents:"none",position:"absolute",left:["50%","50%"],x:["-50%","-50%"],transition:{duration:.22,ease:[.26,.08,.25,1]}}},oH=({open:e,pages:o,pageId:t,positionInside:n,inline:r,demo:i,onClose:a,onBack:s,onInfo:c})=>{var l,p,h,u,x,b;let g;let f=is(),k=ox(),C=eO(),{signedIn:j}=r8(),E=eE.find(e=>e.id===f.connector),L=oI({CONNECTORNAME:null==E?void 0:E.name}),[F,S]=(0,_.Y)({timeout:160,preEnter:!0,mountOnEnter:!0,unmountOnExit:!0}),I=!("exited"===F||"unmounted"===F),M="preEnter"===F||"exiting"!==F,A=f.route===ir.CONNECTORS?0:f.route===ir.DOWNLOAD?2:1,N=op(A,A);n||od(I),op(t,t),(0,m.useEffect)(()=>{S(e),e&&T(void 0)},[e]);let[O,W]=(0,m.useState)({width:void 0,height:void 0}),[R,T]=(0,m.useState)(void 0),B=e=>{let o={width:null==e?void 0:e.offsetWidth,height:null==e?void 0:e.offsetHeight};W({width:`${null==o?void 0:o.width}px`,height:`${null==o?void 0:o.height}px`})},D=(0,m.useCallback)(e=>{e&&(U.current=e,T(void 0!==R),clearTimeout(g),g=setTimeout(()=>T(!1),360),B(e))},[e,R]),{chain:z}=(0,d.LN)(),{switchNetwork:Z}=(0,d.g0)(),U=(0,m.useRef)(null);(0,m.useEffect)(()=>{U.current&&B(U.current)},[z,Z,C,j,f.options]),(0,m.useEffect)(()=>{if(!I){W({width:void 0,height:void 0});return}let e=e=>{"Escape"===e.key&&a&&a()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[I,a]);let H={"--height":O.height,"--width":O.width},$=(0,v.jsx)(K,{$useTheme:null!==(l=null==i?void 0:i.theme)&&void 0!==l?l:k.theme,$useMode:null!==(p=null==i?void 0:i.mode)&&void 0!==p?p:k.mode,$customTheme:null!==(h=null==i?void 0:i.customTheme)&&void 0!==h?h:k.customTheme,children:(0,v.jsxs)(e9,{role:"dialog",style:{pointerEvents:M?"auto":"none",position:n?"absolute":void 0},children:[!r&&(0,v.jsx)(eK,{$active:M,onClick:a}),(0,v.jsxs)(or,{style:H,initial:!1,children:[(0,v.jsx)("div",{style:{pointerEvents:R?"all":"none",position:"absolute",top:0,bottom:0,left:"50%",transform:"translateX(-50%)",width:"var(--width)",zIndex:9,transition:"width 200ms ease"}}),(0,v.jsxs)(e3,{className:`${M&&"active"}`,children:[(0,v.jsx)(y.M,{initial:!1,children:(null===(u=f.options)||void 0===u?void 0:u.disclaimer)&&f.route===ir.CONNECTORS&&(0,v.jsx)(oa,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{delay:0,duration:.2,ease:[.25,.1,.25,1]},children:(0,v.jsx)(oi,{children:(0,v.jsx)("div",{children:null===(x=f.options)||void 0===x?void 0:x.disclaimer})})})}),(0,v.jsx)(y.M,{initial:!1,children:f.errorMessage&&(0,v.jsxs)(eD,{initial:{y:"10%",x:"-50%"},animate:{y:"-100%"},exit:{y:"100%"},transition:{duration:.2,ease:"easeInOut"},children:[(0,v.jsx)("span",{children:f.errorMessage}),(0,v.jsx)("div",{onClick:()=>f.debug(null),style:{position:"absolute",right:24,top:24},children:(0,v.jsx)(oz,{})})]})}),(0,v.jsxs)(e4,{children:[a&&(0,v.jsx)(oe,{"aria-label":L.close,onClick:a,children:(0,v.jsx)(oz,{})}),(0,v.jsx)("div",{style:{position:"absolute",top:23,left:20,width:32,height:32},children:(0,v.jsx)(y.M,{children:s?(0,v.jsx)(ot,{disabled:R,"aria-label":L.back,onClick:s,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:C?0:.1,delay:C?.01:0},children:(0,v.jsx)(oZ,{})},"backButton"):f.route===ir.PROFILE&&f.signInWithEthereum?(0,v.jsxs)(v.Fragment,{children:[!j&&(0,v.jsx)(w.E.div,{style:{position:"absolute",inset:0,pointerEvents:"none"},initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:.5,duration:.2}},exit:{opacity:0,scale:.6,transition:{delay:0,duration:C?0:.1}},children:(0,v.jsx)(os,{children:L.signInWithEthereumScreen_tooltip})}),(0,v.jsx)(oo,{disabled:R,"aria-label":L.signInWithEthereumScreen_signedOut_heading,onClick:()=>f.setRoute(ir.SIGNINWITHETHEREUM),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:C?0:.1,delay:C?.01:0},children:(0,v.jsx)(oB,{signedIn:!!j})},"siweButton")]}):c&&!(null===(b=f.options)||void 0===b?void 0:b.hideQuestionMarkCTA)&&(0,v.jsx)(on,{disabled:R,"aria-label":L.moreInformation,onClick:c,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:C?0:.1,delay:C?.01:0},children:(0,v.jsx)(oD,{})},"infoButton")})})]}),(0,v.jsx)(eY,{children:(0,v.jsx)(y.M,{children:(0,v.jsx)(w.E.div,{style:{position:"absolute",top:0,bottom:0,left:52,right:52,display:"flex",justifyContent:"center"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:C?0:.17,delay:C?.01:0},children:(0,v.jsx)(oT,{children:function(){switch(f.route){case ir.ABOUT:return L.aboutScreen_heading;case ir.CONNECT:if(function(){let e=eE.filter(e=>e.id===f.connector)[0];if(!e)return!1;let o=e.extensionIsInstalled&&e.extensionIsInstalled(),t=!e.scannable||o;return!t}())return(null==E?void 0:E.id)==="walletConnect"?L.scanScreen_heading:L.scanScreen_heading_withConnector;return null==E?void 0:E.name;case ir.CONNECTORS:return L.connectorsScreen_heading;case ir.MOBILECONNECTORS:return L.mobileConnectorsScreen_heading;case ir.DOWNLOAD:return L.downloadAppScreen_heading;case ir.ONBOARDING:return L.onboardingScreen_heading;case ir.PROFILE:return L.profileScreen_heading;case ir.SWITCHNETWORKS:return L.switchNetworkScreen_heading;case ir.SIGNINWITHETHEREUM:return j?L.signInWithEthereumScreen_signedIn_heading:L.signInWithEthereumScreen_signedOut_heading;default:return""}}()})},`${f.route}-${j?"signedIn":""}`)})}),(0,v.jsx)(e8,{children:Object.keys(o).map(e=>{let r=o[e];return(0,v.jsx)(o$,{open:e===t,initial:!n&&"entered"!==F,enterAnim:e===t?A>N?"active-scale-up":"active":"",exitAnim:e!==t?A<N?"exit-scale-down":"exit":"",children:(0,v.jsx)(e6,{ref:D,style:{pointerEvents:e===t&&M?"auto":"none"},children:r},`inner-${e}`)},e)})})]})]})]})});return(0,v.jsx)(v.Fragment,{children:I&&(0,v.jsx)(v.Fragment,{children:n?$:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(ee,{children:(0,v.jsx)(ol,{children:$})})})})})},o$=({children:e,open:o,initial:t,prevDepth:n,currentDepth:r,enterAnim:i,exitAnim:a})=>{let[s,c]=(0,_.Y)({timeout:400,preEnter:!0,initialEntered:o,mountOnEnter:!0,unmountOnExit:!0});return((0,m.useEffect)(()=>{c(o)},[o]),"exited"===s||"unmounted"===s)?null:(0,v.jsx)(e7,{className:`${"preEnter"===s||"exiting"!==s?i:a}`,style:{animationDuration:t?"0ms":void 0,animationDelay:t?"0ms":void 0},children:e})},oV=({children:e})=>{let o=oI();return(0,v.jsx)(eP,{children:(0,v.jsx)("span",{children:null!=e?e:o.or})})},oG=z(w.E.div)`
  position: relative;
  margin: 16px auto 20px;
  height: 190px;
  max-width: 295px;
  pointer-events: none;
  user-select: none;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    height: 200px;
    max-width: 100%;
    margin-bottom: 32px;
  }
`,oP=z(w.E.div)`
  position: absolute;
  inset: 0;
  z-index: 2;
`,oY=E.F4`
  0%{
    opacity:0;
    transform:scale(0.9);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,oJ=z(w.E.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  top: -2px;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ck-body-background);
    background: radial-gradient(
      closest-side,
      var(--ck-body-background-transparent, transparent) 18.75%,
      var(--ck-body-background) 100%
    );
    background-size: 100%;
  }
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  animation: ${oY} 1000ms 100ms ease both;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    animation: none;
  }
`,oq=E.F4`
  0%{
    opacity:0;
    transform:scale(0) translateY(40%);
  }
  100%{
    opacity:1;
    transform:none;
  }
`,oQ=z(w.E.div)`
  position: absolute;
  inset: 0;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-delay: inherit;
`,oX=z(w.E.div)`
  position: absolute;
`,oK=z(w.E.div)`
  position: relative;
  overflow: hidden;
  height: 58px;
  width: 58px;
  border-radius: 13.84px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 20px 0 rgba(0, 0, 0, 0.03);

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,o1=E.F4`
  0%,100%{ transform:none; }
  50%{ transform: translateY(-10%) }
`,o0=z(w.E.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${o1};
  animation-duration: 3600ms;
`,o2=E.F4`
  0%,100%{ transform:rotate(-3deg); }
  50%{ transform:rotate(3deg); }
`,o5=z(w.E.div)`
  position: relative;
  animation: cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite both;
  animation-name: ${o2};
  animation-duration: 3200ms;
`,o3=z(w.E.div)`
  position:absolute;
  inset:0;

  animation: ${oq} 750ms cubic-bezier(0.19, 1, 0.22, 1) both;
  &:nth-child(1){ z-index:2; animation-delay:0ms;  }
  &:nth-child(2){ z-index:1; animation-delay:60ms; }
  &:nth-child(3){ z-index:1; animation-delay:30ms; }
  &:nth-child(4){ z-index:1; animation-delay:90ms; }
  &:nth-child(5){ z-index:1; animation-delay:120ms;}

  &:nth-child(1){ ${o5}{ animation-delay:0ms; } }
  &:nth-child(2){ ${o5}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${o5}{ animation-delay:-1200ms; } }
  &:nth-child(4){ ${o5}{ animation-delay:-1800ms; } }
  &:nth-child(5){ ${o5}{ animation-delay:-2400ms; } }

  &:nth-child(1){ ${o0}{ animation-delay:-200ms; } }
  &:nth-child(2){ ${o0}{ animation-delay:-600ms; } }
  &:nth-child(3){ ${o0}{ animation-delay:-800ms; } }
  &:nth-child(4){ ${o0}{ animation-delay:-300ms; } }
  &:nth-child(5){ ${o0}{ animation-delay:-3200ms; } }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    animation:none !important;
    ${o5},${o0}{
      animation:none !important;
    }
  }
  

  ${oX}{
    transform: translate(-50%, -50%);
  }

  &:nth-child(1) ${oQ}{
    transform: translate(50%, 50%);
    ${oK}{
      border-radius: 17.2px;
      width: 72px;
      height: 72px;
    }
  }
  &:nth-child(2) ${oQ}{
    transform: translate(21%, 21.5%);
  }
  &:nth-child(3) ${oQ}{
    transform: translate(78%, 14%);
  }
  &:nth-child(4) ${oQ}{
    transform: translate(22.5%, 76%);
  }
  &:nth-child(5) ${oQ}{
    transform: translate(76%, 80%);
  }
}`;var o4=(0,v.jsxs)("svg",{"aria-hidden":"true",width:"298",height:"188",viewBox:"0 0 298 188",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M1 55.2757L21.6438 46.0285C55.5896 30.8228 94.4104 30.8228 128.356 46.0286L169.644 64.5229C203.59 79.7287 242.41 79.7286 276.356 64.5229L297 55.2757M1 44.2118L21.6438 34.9646C55.5896 19.7589 94.4104 19.7589 128.356 34.9646L169.644 53.459C203.59 68.6647 242.41 68.6647 276.356 53.459L297 44.2118M1 33.1477L21.6438 23.9005C55.5896 8.69479 94.4104 8.69479 128.356 23.9005L169.644 42.3949C203.59 57.6006 242.41 57.6006 276.356 42.3949L297 33.1477M1 22.1477L21.6438 12.9005C55.5896 -2.30521 94.4104 -2.30521 128.356 12.9005L169.644 31.3949C203.59 46.6006 242.41 46.6006 276.356 31.3949L297 22.1477M1 66.3398L21.6438 57.0926C55.5896 41.8869 94.4104 41.8869 128.356 57.0926L169.644 75.587C203.59 90.7927 242.41 90.7927 276.356 75.587L297 66.3398M1 77.404L21.6438 68.1568C55.5896 52.9511 94.4104 52.9511 128.356 68.1569L169.644 86.6512C203.59 101.857 242.41 101.857 276.356 86.6512L297 77.404M1 88.4681L21.6438 79.2209C55.5896 64.0152 94.4104 64.0152 128.356 79.2209L169.644 97.7153C203.59 112.921 242.41 112.921 276.356 97.7153L297 88.4681M1 121.66L21.6438 112.413C55.5896 97.2075 94.4104 97.2075 128.356 112.413L169.644 130.908C203.59 146.113 242.41 146.113 276.356 130.908L297 121.66M1 110.596L21.6438 101.349C55.5896 86.1433 94.4104 86.1433 128.356 101.349L169.644 119.843C203.59 135.049 242.41 135.049 276.356 119.843L297 110.596M1 99.5321L21.6438 90.2849C55.5896 75.0792 94.4104 75.0792 128.356 90.2849L169.644 108.779C203.59 123.985 242.41 123.985 276.356 108.779L297 99.5321M1 132.724L21.6438 123.477C55.5896 108.271 94.4104 108.271 128.356 123.477L169.644 141.971C203.59 157.177 242.41 157.177 276.356 141.971L297 132.724M1 143.788L21.6438 134.541C55.5896 119.336 94.4104 119.336 128.356 134.541L169.644 153.036C203.59 168.241 242.41 168.241 276.356 153.036L297 143.788M1 154.853L21.6438 145.605C55.5896 130.4 94.4104 130.4 128.356 145.605L169.644 164.1C203.59 179.305 242.41 179.305 276.356 164.1L297 154.853M1 165.853L21.6438 156.605C55.5896 141.4 94.4104 141.4 128.356 156.605L169.644 175.1C203.59 190.305 242.41 190.305 276.356 175.1L297 165.853",stroke:"url(#paint0_linear_1094_2077)",strokeOpacity:"0.9",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"paint0_linear_1094_2077",x1:"1",y1:"112.587",x2:"297.034",y2:"79.6111",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-01)"}),(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-02)",offset:"0.239583"}),(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-03)",offset:"0.515625"}),(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-04)",offset:"0.739583"}),(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-wave-stop-05)",offset:"1"})]})})]});let o8=E.F4`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,o7=z(w.E.div)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${o8} 1s linear infinite;
  svg {
    display: block;
    position: relative;
    animation: ${o8} 1s ease-in-out infinite;
  }
`,o6=z.svg`
  --x: -3px;
  --stroke-width: 2;
  position: relative;
  top: 1px;
  left: -0.5px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 9px;
  margin-right: 1px;
  transition: all 100ms ease;
  transform: translateX(var(--x, -3px));
  color: var(--ck-secondary-button-color, var(--ck-body-color));
  opacity: 0.4;
`,o9=z.path``,te=z.line`
  transition: inherit;
  transition-property: transform;
  transform-origin: 90% 50%;
  transform: scaleX(0.1);
`,to=z.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin-right: 6px;
  color: var(--ck-secondary-button-color, var(--ck-body-color));
`,tt=z.div`
  transform: rotate(90deg);
  ${o6} {
    margin: 0 auto;
  }
`,tn=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  height: 100%;
`,tr=z.button`

  ${({disabled:e})=>e&&E.iv`
      cursor: not-allowed;
      pointer-events: none;
    `}

  ${({$variant:e})=>"primary"===e?E.iv`
        --color: var(--ck-primary-button-color, var(--ck-body-color));
        --background: var(
          --ck-primary-button-background,
          var(--ck-body-background-primary)
        );
        --box-shadow: var(--ck-primary-button-box-shadow);
        --border-radius: var(--ck-primary-button-border-radius);
        --font-weight: var(--ck-primary-button-font-weight, 500);

        --hover-color: var(--ck-button-primary-hover-color, var(--color));
        --hover-background: var(
          --ck-primary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-primary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-primary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-primary-button-font-weight,
          var(--font-weight)
        );
      `:"secondary"===e?E.iv`
        --color: var(--ck-secondary-button-color, var(--ck-body-color));
        --background: var(
          --ck-secondary-button-background,
          var(--ck-body-background-secondary)
        );
        --box-shadow: var(--ck-secondary-button-box-shadow);
        --border-radius: var(--ck-secondary-button-border-radius);
        --font-weight: var(--ck-secondary-button-font-weight, 500);

        --hover-color: var(--ck-secondary-button-hover-color, var(--color));
        --hover-background: var(
          --ck-secondary-button-hover-background,
          var(--background)
        );
        --hover-box-shadow: var(
          --ck-secondary-button-hover-box-shadow,
          var(--box-shadow)
        );
        --hover-border-radius: var(
          --ck-secondary-button-hover-border-radius,
          var(--border-radius)
        );
        --hover-font-weight: var(
          --ck-secondary-button-font-weight,
          var(--font-weight)
        );
      `:"tertiary"===e?E.iv`
        --color: var(
          --ck-tertiary-button-color,
          var(--ck-secondary-button-color)
        );
        --background: var(
          --ck-tertiary-button-background,
          var(--ck-secondary-button-background)
        );
        --box-shadow: var(
          --ck-tertiary-button-box-shadow,
          var(--ck-secondary-button-box-shadow)
        );
        --border-radius: var(
          --ck-tertiary-button-border-radius,
          var(--ck-secondary-button-border-radius)
        );
        --font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );

        --hover-color: var(
          --button-tertiary-hover-color,
          var(--ck-tertiary-button-color)
        );
        --hover-background: var(
          --ck-tertiary-button-hover-background,
          var(--ck-tertiary-button-background)
        );
        --hover-box-shadow: var(
          --ck-tertiary-button-hover-box-shadow,
          var(--ck-tertiary-button-box-shadow)
        );
        --hover-border-radius: var(
          --ck-tertiary-button-hover-border-radius,
          var(--ck-tertiary-button-border-radius, var(--border-radius))
        );
        --hover-font-weight: var(
          --ck-tertiary-button-font-weight,
          var(--ck-secondary-button-font-weight)
        );
      `:void 0}

  appearance: none;
  cursor: pointer;
  user-select: none;
  min-width: fit-content;
  width: 100%;
  display:block;
  text-align: center;
  height: 48px;
  margin: 12px 0 0;
  line-height: 48px;
  padding: 0 4px;
  font-size: 16px;
  font-weight: var(--font-weight,500);
  text-decoration: none;
  white-space: nowrap;
  transition: 100ms ease;
  transition-property: box-shadow, background-color;
  color: var(--color);
  background: var(--background);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  will-change: transform, box-shadow, background-color, color;

  ${to} {
    ${o6} {
      transform: translateX(0);
      ${te} {
        transform: none;
      }
      ${o9} {
      }
    }
  }
}

  @media only screen and (min-width: ${eB.mobileWidth+1}px) {
    &:hover,
    &:focus-visible {
      color: var(--ck-accent-text-color, var(--hover-color));
      background: var(--ck-accent-color, var(--hover-background));
      border-radius: var(--hover-border-radius);
      box-shadow: var(--hover-box-shadow);

      ${o6} {
        transform: translateX(0);
        ${te} {
          transform: none;
        }
        ${o9} {
        }
      }
      ${to} {
        ${o6} {
          transform: translateX(var(--x));
          ${te} {
            transform: scaleX(0.1);
          }
          ${o9} {
          }
        }
      }
    }
    &:active {
      box-shadow: var(--ck-secondary-button-active-box-shadow, var(--hover-box-shadow));
    }
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    transition: transform 100ms ease;
    transform: scale(1);
    font-size: 17px;
    &:active {
    }
  }
`,ti=z.div`
  transform: translateZ(0); // Shifting fix
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: calc(100% - 42px);
  /*
  overflow: hidden;
  text-overflow: ellipsis;
  */
`,ta=z(w.E.div)`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  max-width: 20px;
  max-height: 20px;
  margin: 0 10px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  ${e=>e.$rounded&&E.iv`
        overflow: hidden;
        border-radius: 5px;
      `}
  svg {
    display: block;
    position: relative;
    max-width: 100%;
    height: auto;
  }
`,ts={duration:.4,ease:[.175,.885,.32,.98]},tc=()=>(0,v.jsx)(o7,{initial:{opacity:0,rotate:180},animate:{opacity:1,rotate:0},exit:{position:"absolute",opacity:0,rotate:-180,transition:{...ts}},transition:{...ts,delay:.2},children:(0,v.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("circle",{cx:"9",cy:"9",r:"7",stroke:"currentColor",strokeOpacity:"0.1",strokeWidth:"2.5"}),(0,v.jsx)("path",{d:"M16 9C16 5.13401 12.866 2 9 2",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round"})]})}),td=({children:e,variant:o="secondary",disabled:t,icon:n,iconPosition:r="left",roundedIcon:i,waiting:a,arrow:s,download:c,href:d,style:l,onClick:p})=>{let h="string"==typeof e?e:eT(e).join(""),u="string"==typeof d?d:eT(d).join("");return(0,v.jsx)(tr,{as:d?"a":void 0,onClick:e=>{!t&&p&&p(e)},href:u,target:d&&"_blank",rel:d&&"noopener noreferrer",disabled:t,$variant:o,style:l,children:(0,v.jsxs)(y.M,{initial:!1,children:[(0,v.jsxs)(tn,{initial:{opacity:0,y:-10},animate:{opacity:1,y:-1},exit:{position:"absolute",opacity:0,y:10,transition:{...ts}},transition:{...ts,delay:.2},children:[n&&"left"===r&&(0,v.jsx)(ta,{$rounded:i,children:n}),c&&(0,v.jsx)(to,{children:(0,v.jsx)(tt,{children:(0,v.jsxs)(o6,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)(te,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"}),(0,v.jsx)(o9,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"var(--stroke-width)",strokeLinecap:"round"})]})})}),(0,v.jsx)(ti,{style:{paddingLeft:s?6:0},children:(0,v.jsx)(oT,{children:e})}),n&&"right"===r&&(0,v.jsx)(ta,{$rounded:i,children:n}),s&&(0,v.jsxs)(o6,{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)(te,{stroke:"currentColor",x1:"1",y1:"6",x2:"12",y2:"6",strokeWidth:"2",strokeLinecap:"round"}),(0,v.jsx)(o9,{stroke:"currentColor",d:"M7.51431 1.5L11.757 5.74264M7.5 10.4858L11.7426 6.24314",strokeWidth:"2",strokeLinecap:"round"})]})]},h),a&&(0,v.jsx)(tc,{})]})})},tl=()=>{var e,o;let t=is(),n=oI({}),r=null!==(o=null===(e=t.options)||void 0===e?void 0:e.walletOnboardingUrl)&&void 0!==o?o:n.onboardingScreen_ctaUrl;return(0,v.jsxs)(eG,{children:[(0,v.jsxs)(oG,{children:[(0,v.jsxs)(oP,{children:[(0,v.jsx)(o3,{children:(0,v.jsx)(oQ,{children:(0,v.jsx)(oX,{children:(0,v.jsx)(o0,{children:(0,v.jsx)(o5,{children:(0,v.jsx)(oK,{children:(0,v.jsx)(ew.Coinbase,{background:!0})})})})})})}),(0,v.jsx)(o3,{children:(0,v.jsx)(oQ,{children:(0,v.jsx)(oX,{children:(0,v.jsx)(o0,{children:(0,v.jsx)(o5,{children:(0,v.jsx)(oK,{children:(0,v.jsx)(ew.MetaMask,{background:!0})})})})})})}),(0,v.jsx)(o3,{children:(0,v.jsx)(oQ,{children:(0,v.jsx)(oX,{children:(0,v.jsx)(o0,{children:(0,v.jsx)(o5,{children:(0,v.jsx)(oK,{children:(0,v.jsx)(ew.Trust,{})})})})})})}),(0,v.jsx)(o3,{children:(0,v.jsx)(oQ,{children:(0,v.jsx)(oX,{children:(0,v.jsx)(o0,{children:(0,v.jsx)(o5,{children:(0,v.jsx)(oK,{children:(0,v.jsx)(ew.Argent,{})})})})})})}),(0,v.jsx)(o3,{children:(0,v.jsx)(oQ,{children:(0,v.jsx)(oX,{children:(0,v.jsx)(o0,{children:(0,v.jsx)(o5,{children:(0,v.jsx)(oK,{children:(0,v.jsx)(ew.ImToken,{})})})})})})})]}),(0,v.jsx)(oJ,{children:o4})]}),(0,v.jsxs)(eq,{style:{paddingBottom:18},children:[(0,v.jsx)(eQ,{$small:!0,children:n.onboardingScreen_h1}),(0,v.jsx)(eX,{children:n.onboardingScreen_p})]}),(0,v.jsx)(td,{href:r,arrow:!0,children:n.onboardingScreen_ctaText})]})},tp=z.div`
  point-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    display: none;
  }
`,th=z(w.E.div)``,tu=z.div`
  point-events: none;
  user-select: none;
  height: ${208}px;
  padding: 0 0 12px;
  display: none;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    display: flex;
  }
`;z.div`
  /*
  position: relative;
  z-index: 3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 138px;
  margin: -48px 0 0;
  */
`;let tx=z.div`
  position: relative;
`,tb=z(w.E.div)`
  scroll-snap-type: x mandatory;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 4px 8px;
  /* will-change: transform, opacity; */
  transition: 400ms 50ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-property: transform, opacity;
  ${e=>!e.$active&&E.iv`
      pointer-events: none;
      position: absolute;
      opacity: 0;
      transform: scale(0.95);
      transition-duration: 300ms;
      transition-delay: 0ms;
    `}
`,tg=z.div`
  --background: var(--ck-body-background-secondary);
  --background-transparent: var(--ck-body-background-transparent, transparent);
  position: relative;
  padding: 0 0 4px;
  border-radius: 16px;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    margin: 0 -24px;
    ${tx} {
      position: relative;
      z-index: 3;
      display: flex;
      overflow: auto;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      margin-top: -${208}px;
      padding-top: ${208}px;
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }
    }
    ${tb} {
      position: relative;
      opacity: 1;
      transform: none;
      flex-shrink: 0;
      scroll-snap-align: start;
    }
  }
`,tf=z.div`
  position: relative;
  top: -1px;
  display: flex;
  justify-content: center;
  pointer-events: auto;
`,tk=z.button`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 2px;
  background: none;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    padding: 4px;
    &:before {
      transform: none !important;
    }
  }
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 3px;
    opacity: 0.12;
    border-radius: 4px;
    background: var(--ck-accent-color, var(--ck-body-color));
    transition: transform 200ms ease, opacity 180ms ease;
  }
  ${e=>e.$active?E.iv`
          cursor: default;
          &:before {
            opacity: 1;
          }
        `:!e.disabled&&E.iv`
          cursor: pointer;
          &:hover:before {
            transform: scaleY(3.5);
          }
          &:active:before {
          }
        `}
`,tv={scale:[.9,1.25,1.6],opacity:[0,.11,0]},tm={ease:"linear",duration:2,repeat:1/0},tC=z.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
`,tw=E.F4`
  from{ transform: rotate(0deg); }
  to{ transform: rotate(360deg); }
`,ty=z(w.E.div)`
  z-index: -1;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: 100%;
  animation: ${tw} 16s linear infinite;
`,tj=z(w.E.div)`
  overflow: hidden;
  border-radius: inherit;
  z-index: 0;
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.1);
`,tE=z(w.E.div)`
  z-index: 2;
  position: relative;
  border-radius: 50%;
  background: var(--ck-body-background);
`,tL=z(w.E.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`,tF=(0,v.jsxs)("svg",{width:"34",height:"34",viewBox:"0 0 34 34",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"var(--ck-graphic-compass-color, var(--ck-body-color))"}),(0,v.jsx)("path",{d:"M17 34C26.3 34 34 26.2833 34 17C34 7.7 26.2833 0 16.9833 0C7.7 0 0 7.7 0 17C0 26.2833 7.71667 34 17 34ZM9.83333 25.6833C8.68333 26.2333 7.8 25.3333 8.33333 24.2L13.1667 14.3333C13.45 13.75 13.8167 13.3833 14.35 13.1333L24.1833 8.33333C25.4 7.75 26.25 8.65 25.6833 9.81667L20.8833 19.6667C20.6167 20.2 20.2333 20.6 19.6833 20.85L9.83333 25.6833ZM17.0167 19.1333C18.1833 19.1333 19.1333 18.1833 19.1333 17.0167C19.1333 15.85 18.1833 14.9167 17.0167 14.9167C15.8667 14.9167 14.9167 15.85 14.9167 17.0167C14.9167 18.1833 15.8667 19.1333 17.0167 19.1333Z",fill:"url(#ck-compass-gradient)"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"ck-compass-gradient",x1:"17",y1:"0",x2:"17",y2:"34",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"rgba(0,0,0,0)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"rgba(0,0,0,0.05)"})]})})]}),t_=({inverted:e=!1})=>(0,v.jsxs)("svg",{width:"58",height:"50",viewBox:"0 0 58 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M57.9332 20.3335V42.1113C57.9332 46.4069 54.451 49.8891 50.1555 49.8891H8.15546C3.85991 49.8891 0.377686 46.4069 0.377686 42.1113V25.0002V7.8891C0.377686 3.59355 3.85991 0.111328 8.15546 0.111328H47.0444C48.7626 0.111328 50.1555 1.50422 50.1555 3.22244C50.1555 4.94066 48.7626 6.33355 47.0443 6.33355H9.71102C7.9928 6.33355 6.59991 7.72644 6.59991 9.44466C6.59991 11.1629 7.9928 12.5558 9.71102 12.5558H50.1555C54.451 12.5558 57.9332 16.038 57.9332 20.3335ZM46.2667 34.3337C48.4145 34.3337 50.1556 32.5926 50.1556 30.4448C50.1556 28.297 48.4145 26.5559 46.2667 26.5559C44.1189 26.5559 42.3778 28.297 42.3778 30.4448C42.3778 32.5926 44.1189 34.3337 46.2667 34.3337Z",fill:e?"var(--ck-graphic-primary-color, var(--ck-body-background))":"var(--ck-graphic-primary-color, var(--ck-body-color))"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"paint0_linear_2501_7732",x1:"29.1555",y1:"0.111328",x2:"29.1555",y2:"49.8891",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:e?"var(--ck-body-color-muted)":"var(--ck-body-background-transparent, transparent)"}),(0,v.jsx)("stop",{offset:"1",stopColor:e?"var(--ck-body-color)":"var(--ck-body-background)"})]})})]}),tS=(0,v.jsx)("svg",{width:"41",height:"41",viewBox:"0 0 41 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M35.4446 0.839914L2.14484 10.7065C0.0395033 11.3303 -0.632966 13.9786 0.919705 15.5313L7.9624 22.574C9.47585 24.0874 11.8661 24.273 13.5951 23.0114L25.2866 14.4797C25.5558 14.2832 25.9281 14.3121 26.1638 14.5478C26.3998 14.7838 26.4285 15.1567 26.2313 15.426L17.6874 27.0937C16.4213 28.8228 16.6052 31.2168 18.1206 32.7322L25.1811 39.7926C26.7337 41.3453 29.382 40.6728 30.0058 38.5675L39.8724 5.2677C40.6753 2.55794 38.1544 0.037024 35.4446 0.839914Z",fill:"var(--ck-graphic-secondary-color, white)"})}),tI=(0,v.jsx)("svg",{width:"38",height:"44",viewBox:"0 0 38 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19 0.875C21.4853 0.875 23.5 2.88972 23.5 5.375V27.761L30.068 21.193C31.8254 19.4357 34.6746 19.4357 36.432 21.193C38.1893 22.9504 38.1893 25.7996 36.432 27.557L22.182 41.807C20.4246 43.5643 17.5754 43.5643 15.818 41.807L1.56802 27.557C-0.18934 25.7996 -0.18934 22.9504 1.56802 21.193C3.32538 19.4357 6.17462 19.4357 7.93198 21.193L14.5 27.761V5.375C14.5 2.88972 16.5147 0.875 19 0.875Z",fill:"var(--ck-graphic-secondary-color, white)"})}),tM="var(--ck-body-background)";(0,v.jsxs)("svg",{width:"14",height:"23",viewBox:"0 0 14 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M6.99794 0.59082L6.85156 1.08803V15.5145L6.99794 15.6606L13.6944 11.7022L6.99794 0.59082Z",fill:tM}),(0,v.jsx)("path",{d:"M6.99794 0.59082L0.30127 11.7022L6.99794 15.6606V8.65835V0.59082Z",fill:tM}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.99779 22.4082L6.99794 22.4084V22.408L13.6982 12.9717L6.9978 16.9279L0.30127 12.9717L6.99733 22.4075L6.99763 22.4084L6.99779 22.4082Z",fill:tM}),(0,v.jsx)("path",{d:"M6.99805 15.6614L13.6945 11.7031L6.99805 8.65918V15.6614Z",fill:tM}),(0,v.jsx)("path",{d:"M0.30127 11.7031L6.99794 15.6614V8.65918L0.30127 11.7031Z",fill:tM})]});let tA=({...e})=>{var o;let t=null!==(o=null==e?void 0:e.id)&&void 0!==o?o:"";return(0,v.jsxs)("svg",{...e,width:"81",height:"81",viewBox:"0 0 81 81",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${t}paint0_linear_2509_6177)`}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27ZM60.75 25.875C63.8566 25.875 66.375 23.3566 66.375 20.25C66.375 17.1434 63.8566 14.625 60.75 14.625C57.6434 14.625 55.125 17.1434 55.125 20.25C55.125 23.3566 57.6434 25.875 60.75 25.875Z",fill:`url(#${t}paint1_radial_2509_6177)`,fillOpacity:"0.2"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M44.5658 51.2522C45.1527 50.6653 46.0151 50.4492 46.8095 50.6899C49.0823 51.3788 51.4958 51.75 54 51.75C67.6691 51.75 78.75 40.669 78.75 27C78.75 13.331 67.6691 2.25 54 2.25C40.331 2.25 29.25 13.331 29.25 27C29.25 29.5042 29.6212 31.9177 30.3101 34.1905C30.5508 34.9849 30.3347 35.8473 29.7478 36.4342L2.90901 63.273C2.48705 63.6949 2.25 64.2672 2.25 64.864V76.5C2.25 77.7426 3.25736 78.75 4.5 78.75H15.75V72C15.75 70.7574 16.7574 69.75 18 69.75H24.75V63C24.75 61.7574 25.7574 60.75 27 60.75H35.068L44.5658 51.2522ZM36 63H27V72H18V81H4.5C2.01472 81 0 78.9853 0 76.5V64.864C0 63.6705 0.474103 62.5259 1.31802 61.682L28.1568 34.8432C27.4045 32.3611 27 29.7278 27 27C27 12.0883 39.0883 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C51.2722 54 48.6389 53.5955 46.1568 52.8432L36 63ZM68.625 20.25C68.625 24.5992 65.0992 28.125 60.75 28.125C56.4008 28.125 52.875 24.5992 52.875 20.25C52.875 15.9008 56.4008 12.375 60.75 12.375C65.0992 12.375 68.625 15.9008 68.625 20.25ZM66.375 20.25C66.375 23.3566 63.8566 25.875 60.75 25.875C57.6434 25.875 55.125 23.3566 55.125 20.25C55.125 17.1434 57.6434 14.625 60.75 14.625C63.8566 14.625 66.375 17.1434 66.375 20.25Z",fill:"black",fillOpacity:"0.1"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M33.4205 47.5795C33.8598 48.0188 33.8598 48.7312 33.4205 49.1705L3.0455 79.5455C2.60616 79.9848 1.89384 79.9848 1.4545 79.5455C1.01517 79.1062 1.01517 78.3938 1.4545 77.9545L31.8295 47.5795C32.2688 47.1402 32.9812 47.1402 33.4205 47.5795Z",fill:"#A5A9AD"}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:`${t}paint0_linear_2509_6177`,x1:"72",y1:"5.625",x2:"2.25",y2:"78.75",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#D4DFE6"}),(0,v.jsx)("stop",{offset:"0.0967282",stopColor:"#C6CACD"}),(0,v.jsx)("stop",{offset:"0.526645",stopColor:"#BDBAC4"}),(0,v.jsx)("stop",{offset:"1",stopColor:"#939CA1"})]}),(0,v.jsxs)("radialGradient",{id:`${t}paint1_radial_2509_6177`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(52.875 12.375) rotate(93.2705) scale(39.4392)",children:[(0,v.jsx)("stop",{stopColor:"white"}),(0,v.jsx)("stop",{offset:"1",stopColor:"white"})]})]})]})},tN=(0,v.jsxs)("svg",{width:"131",height:"14",viewBox:"0 0 131 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M5.74805 13.2549C8.86816 13.2549 10.7227 10.6973 10.7227 6.63672C10.7227 2.57617 8.85059 0.0625 5.74805 0.0625C2.63672 0.0625 0.755859 2.59375 0.755859 6.64551C0.755859 10.7148 2.61914 13.2549 5.74805 13.2549ZM5.74805 11.4004C4.02539 11.4004 3.04102 9.64258 3.04102 6.63672C3.04102 3.68359 4.04297 1.91699 5.74805 1.91699C7.44434 1.91699 8.4375 3.6748 8.4375 6.64551C8.4375 9.65137 7.46191 11.4004 5.74805 11.4004Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M13.0869 13.1758C13.4561 13.1758 13.6934 13.0439 13.9658 12.6221L15.9697 9.66016H16.0137L18.0264 12.6572C18.2549 13.0088 18.4922 13.1758 18.8965 13.1758C19.4854 13.1758 19.9424 12.7891 19.9424 12.209C19.9424 11.9805 19.8633 11.7695 19.7051 11.541L17.376 8.28906L19.6963 5.16016C19.8896 4.90527 19.9688 4.68555 19.9688 4.43066C19.9688 3.88574 19.5381 3.49902 18.9229 3.49902C18.5361 3.49902 18.2988 3.6748 18.0176 4.10547L16.1191 6.95312H16.0752L14.1328 4.08789C13.8516 3.64844 13.6318 3.49902 13.2012 3.49902C12.6035 3.49902 12.1465 3.91211 12.1465 4.44824C12.1465 4.70312 12.2256 4.92285 12.3838 5.13379L14.7129 8.35059L12.3486 11.5498C12.1641 11.8135 12.0762 12.0156 12.0762 12.2705C12.0762 12.7979 12.498 13.1758 13.0869 13.1758Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M26.2441 13.2549C29.1445 13.2549 31.1924 11.7432 31.1924 9.57227C31.1924 7.9375 30.0146 6.68066 28.3184 6.3291V6.27637C29.7773 5.87207 30.7178 4.7998 30.7178 3.45508C30.7178 1.48633 28.8633 0.0625 26.2441 0.0625C23.625 0.0625 21.7617 1.49512 21.7617 3.44629C21.7617 4.80859 22.7109 5.88965 24.1699 6.27637V6.3291C22.4736 6.67188 21.3047 7.92871 21.3047 9.57227C21.3047 11.7344 23.335 13.2549 26.2441 13.2549ZM26.2441 5.55566C24.9258 5.55566 24.0029 4.78223 24.0029 3.6748C24.0029 2.55859 24.9258 1.77637 26.2441 1.77637C27.5537 1.77637 28.4854 2.5498 28.4854 3.6748C28.4854 4.78223 27.5537 5.55566 26.2441 5.55566ZM26.2441 11.5234C24.7236 11.5234 23.6514 10.6357 23.6514 9.40527C23.6514 8.1748 24.7236 7.28711 26.2441 7.28711C27.7646 7.28711 28.8369 8.16602 28.8369 9.40527C28.8369 10.6357 27.7646 11.5234 26.2441 11.5234Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M36.3164 13.1494C37.7578 13.1494 38.7598 12.4199 39.208 11.3477H39.252V12.0771C39.252 12.7891 39.7266 13.1758 40.3594 13.1758C40.9922 13.1758 41.4404 12.7803 41.4404 12.0771V1.29297C41.4404 0.554688 40.9834 0.141602 40.3418 0.141602C39.7002 0.141602 39.252 0.554688 39.252 1.29297V5.24805H39.1992C38.707 4.21973 37.6523 3.52539 36.3164 3.52539C33.9697 3.52539 32.4492 5.38867 32.4492 8.33301C32.4492 11.2949 33.9697 13.1494 36.3164 13.1494ZM36.9756 11.3564C35.5605 11.3564 34.6904 10.1963 34.6904 8.3418C34.6904 6.49609 35.5693 5.32715 36.9756 5.32715C38.3555 5.32715 39.2607 6.51367 39.2607 8.3418C39.2607 10.1875 38.3555 11.3564 36.9756 11.3564Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M44.0508 13.1494C44.6396 13.1494 44.9736 12.8594 45.1846 12.1738L46.0195 9.76562H50.7568L51.5918 12.1914C51.7939 12.8682 52.1367 13.1494 52.752 13.1494C53.4111 13.1494 53.8857 12.7188 53.8857 12.1035C53.8857 11.9014 53.8418 11.6992 53.7363 11.4092L50.0449 1.38965C49.7285 0.537109 49.2188 0.167969 48.3838 0.167969C47.5576 0.167969 47.0479 0.554688 46.7402 1.39844L43.0576 11.4092C42.9521 11.6816 42.9082 11.9277 42.9082 12.1035C42.9082 12.7451 43.3564 13.1494 44.0508 13.1494ZM46.5557 7.97266L48.3398 2.55859H48.4014L50.2031 7.97266H46.5557Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M60.1172 13.2549C62.8594 13.2549 64.8545 11.4004 64.8545 8.8252C64.8545 6.42578 63.1406 4.66797 60.6973 4.66797C58.9746 4.66797 57.709 5.54688 57.208 6.71582H57.1641V6.58398C57.208 3.66602 58.2275 1.89941 60.1436 1.89941C61.084 1.89941 61.7607 2.26855 62.3496 3.07715C62.7012 3.52539 62.9824 3.73633 63.4307 3.73633C64.0283 3.73633 64.3975 3.34082 64.3975 2.82227C64.3975 2.57617 64.3359 2.35645 64.1953 2.10156C63.5625 0.897461 62.0859 0.0537109 60.1523 0.0537109C56.9268 0.0537109 54.9932 2.57617 54.9932 6.80371C54.9932 8.24512 55.2305 9.45801 55.6963 10.4336C56.5752 12.2881 58.1396 13.2549 60.1172 13.2549ZM60.082 11.4092C58.667 11.4092 57.5508 10.293 57.5508 8.86914C57.5508 7.4541 58.6494 6.41699 60.1084 6.41699C61.5674 6.41699 62.6309 7.4541 62.6221 8.91309C62.6221 10.3018 61.4971 11.4092 60.082 11.4092Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M68.1328 8.83398C68.8447 8.83398 69.416 8.27148 69.416 7.55078C69.416 6.83008 68.8447 6.25879 68.1328 6.25879C67.4121 6.25879 66.8408 6.83008 66.8408 7.55078C66.8408 8.27148 67.4121 8.83398 68.1328 8.83398Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M73.3359 8.83398C74.0479 8.83398 74.6191 8.27148 74.6191 7.55078C74.6191 6.83008 74.0479 6.25879 73.3359 6.25879C72.6152 6.25879 72.0439 6.83008 72.0439 7.55078C72.0439 8.27148 72.6152 8.83398 73.3359 8.83398Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M78.5391 8.83398C79.251 8.83398 79.8223 8.27148 79.8223 7.55078C79.8223 6.83008 79.251 6.25879 78.5391 6.25879C77.8184 6.25879 77.2471 6.83008 77.2471 7.55078C77.2471 8.27148 77.8184 8.83398 78.5391 8.83398Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M83.7422 8.83398C84.4541 8.83398 85.0254 8.27148 85.0254 7.55078C85.0254 6.83008 84.4541 6.25879 83.7422 6.25879C83.0215 6.25879 82.4502 6.83008 82.4502 7.55078C82.4502 8.27148 83.0215 8.83398 83.7422 8.83398Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M92.2148 13.2549C94.957 13.2549 96.9521 11.4004 96.9521 8.8252C96.9521 6.42578 95.2383 4.66797 92.7949 4.66797C91.0723 4.66797 89.8066 5.54688 89.3057 6.71582H89.2617V6.58398C89.3057 3.66602 90.3252 1.89941 92.2412 1.89941C93.1816 1.89941 93.8584 2.26855 94.4473 3.07715C94.7988 3.52539 95.0801 3.73633 95.5283 3.73633C96.126 3.73633 96.4951 3.34082 96.4951 2.82227C96.4951 2.57617 96.4336 2.35645 96.293 2.10156C95.6602 0.897461 94.1836 0.0537109 92.25 0.0537109C89.0244 0.0537109 87.0908 2.57617 87.0908 6.80371C87.0908 8.24512 87.3281 9.45801 87.7939 10.4336C88.6729 12.2881 90.2373 13.2549 92.2148 13.2549ZM92.1797 11.4092C90.7646 11.4092 89.6484 10.293 89.6484 8.86914C89.6484 7.4541 90.7471 6.41699 92.2061 6.41699C93.665 6.41699 94.7285 7.4541 94.7197 8.91309C94.7197 10.3018 93.5947 11.4092 92.1797 11.4092Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M103.377 13.2549C106.497 13.2549 108.352 10.6973 108.352 6.63672C108.352 2.57617 106.479 0.0625 103.377 0.0625C100.266 0.0625 98.3848 2.59375 98.3848 6.64551C98.3848 10.7148 100.248 13.2549 103.377 13.2549ZM103.377 11.4004C101.654 11.4004 100.67 9.64258 100.67 6.63672C100.67 3.68359 101.672 1.91699 103.377 1.91699C105.073 1.91699 106.066 3.6748 106.066 6.64551C106.066 9.65137 105.091 11.4004 103.377 11.4004Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M117.167 13.1758C117.8 13.1758 118.248 12.7715 118.248 12.0596V10.5654H119.127C119.733 10.5654 120.094 10.1875 120.094 9.63379C120.094 9.08887 119.733 8.70215 119.136 8.70215H118.248V1.81152C118.248 0.756836 117.554 0.141602 116.385 0.141602C115.453 0.141602 114.899 0.52832 114.073 1.75879C112.553 3.99121 111.111 6.16211 110.224 7.75293C109.872 8.38574 109.731 8.79883 109.731 9.29102C109.731 10.0469 110.268 10.5654 111.085 10.5654H116.086V12.0596C116.086 12.7715 116.543 13.1758 117.167 13.1758ZM116.121 8.75488H111.788V8.69336C112.816 6.82129 114.073 4.92285 116.086 2.04004H116.121V8.75488Z",fill:"var(--ck-body-color)"}),(0,v.jsx)("path",{d:"M126.105 13.2549C128.918 13.2549 130.869 11.4355 130.869 8.78125C130.869 6.35547 129.138 4.6416 126.712 4.6416C125.438 4.6416 124.392 5.13379 123.855 5.9248H123.812L124.146 2.17188H129.27C129.85 2.17188 130.228 1.80273 130.228 1.24023C130.228 0.686523 129.85 0.317383 129.27 0.317383H123.803C122.81 0.317383 122.3 0.72168 122.221 1.72363L121.816 6.51367C121.808 6.56641 121.808 6.60156 121.808 6.6543C121.79 7.26953 122.15 7.78809 122.88 7.78809C123.398 7.78809 123.618 7.67383 124.146 7.14648C124.629 6.67188 125.323 6.34668 126.123 6.34668C127.617 6.34668 128.681 7.38379 128.681 8.84277C128.681 10.3457 127.617 11.4092 126.114 11.4092C124.893 11.4092 124.049 10.8027 123.618 9.77441C123.381 9.30859 123.091 9.12402 122.616 9.12402C122.019 9.12402 121.641 9.49316 121.641 10.082C121.641 10.4072 121.72 10.6709 121.843 10.9434C122.467 12.3232 124.154 13.2549 126.105 13.2549Z",fill:"var(--ck-body-color)"})]}),tO=({layoutId:e,duration:o,ease:t})=>(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,v.jsx)(w.E.div,{initial:{rotate:90,scale:.2,x:"100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:40,scale:.1,x:"70%"},style:{zIndex:4,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:76,height:76,background:"var(--ck-graphic-secondary-background, #6366F1)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(99, 102, 241, 0.3))"},children:tI}),(0,v.jsx)(tE,{layoutId:e,style:{position:"relative",zIndex:10,margin:"0 -8px",width:112,height:112},children:(0,v.jsxs)(tL,{style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 3px 15px rgba(0, 0, 0, 0.1))"},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:[(0,v.jsx)(tj,{}),(0,v.jsx)(w.E.div,{style:{zIndex:2,position:"relative"},children:(0,v.jsx)(t_,{})})]},"SlideOneInner")},e),(0,v.jsx)(w.E.div,{initial:{rotate:-90,scale:.2,x:"-100%"},animate:{rotate:0,scale:1,x:0},exit:{rotate:-40,scale:.1,x:"-70%"},style:{zIndex:4,position:"relative",width:76,height:76,background:"var(--ck-graphic-secondary-background, #3897FB)",borderRadius:"50%",boxShadow:"var(--ck-graphic-secondary-box-shadow, 0px 2px 10px rgba(56, 151, 251, 0.3))"},children:(0,v.jsx)(tC,{children:(0,v.jsx)("div",{style:{position:"relative",left:-2,top:3},children:tS})})})]}),tW=({layoutId:e,duration:o,ease:t})=>(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{style:{position:"relative",left:-14},children:[(0,v.jsx)(tE,{layoutId:e,style:{zIndex:10,position:"absolute",left:15,top:12,width:32,height:32},children:(0,v.jsx)(tL,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},style:{background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 5px rgba(37, 41, 46, 0.16))"},children:(0,v.jsx)(tC,{children:(0,v.jsx)(t_,{})})},"SlideTwoInner")},e),(0,v.jsxs)(w.E.div,{initial:{scale:.2},animate:{scale:1},exit:{scale:.2},style:{zIndex:7,position:"relative",display:"flex",alignItems:"center",padding:"21px 56px",paddingRight:52,background:"var(--ck-graphic-primary-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-primary-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.07))",borderRadius:"var(--ck-border-radius, 16px)"},children:[(0,v.jsx)(tj,{}),(0,v.jsx)("div",{style:{position:"relative",zIndex:2,top:1,left:1},children:tN})]}),(0,v.jsx)(w.E.div,{style:{zIndex:8,position:"absolute",top:-16,right:-28},initial:{rotate:90,x:-70,scale:.4},animate:{rotate:0,x:0,scale:1},exit:{rotate:0,x:-70,scale:.4},children:(0,v.jsx)(tA,{id:e})})]})}),tR=({layoutId:e,duration:o,ease:t})=>{let n=Math.random();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(w.E.div,{style:{position:"relative"},children:[(0,v.jsxs)(tE,{layoutId:e,initial:{rotate:80},style:{zIndex:10,position:"relative",width:128,height:128},children:[(0,v.jsx)(tL,{initial:{opacity:0,rotate:100},animate:{opacity:1},exit:{opacity:0},style:{overflow:"hidden",background:`var(--ck-graphic-globe-background, radial-gradient(
              82.42% 82.42% at 50% 86.72%,
              rgba(255, 255, 255, 0.2) 0%,
              rgba(0, 0, 0, 0) 100%
            ),
            linear-gradient(180deg, #3897FB 0%, #5004F1 100%))`,boxShadow:"var(--ck-graphic-globe-box-shadow, 0px -6px 20px rgba(56, 151, 251, 0.23))"},children:(0,v.jsx)(ty,{style:Boolean(e)?void 0:{animationPlayState:"paused"},children:(0,v.jsxs)("svg",{width:"128",height:"128",viewBox:"0 0 128 128",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsxs)("g",{children:[(0,v.jsx)("circle",{cx:"30",cy:"141",r:"64",stroke:`url(#networkRadialA-${n})`,strokeWidth:"3"}),(0,v.jsx)("circle",{cx:"78.8515",cy:"131.123",r:"54.1005",transform:"rotate(-37.4016 78.8515 131.123)",stroke:`url(#networkRadialB-${n})`,strokeWidth:"3"}),(0,v.jsx)("circle",{cx:"63.6053",cy:"2.12794",r:"50.8338",transform:"rotate(134.702 63.6053 2.12794)",stroke:`url(#networkRadialC-${n})`,strokeWidth:"3"}),(0,v.jsx)("circle",{cx:"126.658",cy:"56.6577",r:"50.3433",transform:"rotate(-105 126.658 56.6577)",stroke:`url(#networkRadialD-${n})`,strokeWidth:"3"}),(0,v.jsx)("circle",{cx:"13.6619",cy:"18.9603",r:"46.0247",transform:"rotate(107.362 13.6619 18.9603)",stroke:`url(#networkRadialE-${n})`,strokeWidth:"3"})]}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("radialGradient",{id:`networkRadialA-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(60.5 84) rotate(104.668) scale(77.0097)",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,v.jsxs)("radialGradient",{id:`networkRadialB-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.1805 81.6717) rotate(97.125) scale(64.7443)",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,v.jsxs)("radialGradient",{id:`networkRadialC-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(96.3816 -36.4455) rotate(114.614) scale(57.7177)",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,v.jsxs)("radialGradient",{id:`networkRadialD-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(137.86 7.73234) rotate(92.3288) scale(62.743)",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]}),(0,v.jsxs)("radialGradient",{id:`networkRadialE-${n}`,cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(35.3203 -21.566) rotate(104.513) scale(54.8617)",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-globe-lines, white)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-globe-lines, white)",stopOpacity:"0"})]})]})]})})},"SlideThreeInner"),(0,v.jsxs)(w.E.div,{exit:{opacity:0},children:[(0,v.jsx)(w.E.div,{initial:Boolean(e)?void 0:{scale:1.1},animate:Boolean(e)?tv:void 0,transition:{...tm},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseA"),(0,v.jsx)(w.E.div,{initial:Boolean(e)?void 0:{scale:1.2,opacity:.25},animate:Boolean(e)?tv:void 0,transition:{...tm,delay:.5},style:{position:"absolute",inset:0,borderRadius:"50%",boxShadow:"0 0 0 2px var(--ck-graphic-globe-lines, rgba(126, 112, 243, 1))"}},"pulseB")]})]},e),(0,v.jsxs)(w.E.div,{initial:{rotate:-20,scale:.1,y:-10,x:-10},animate:{rotate:0,scale:1,y:0,x:0},exit:{zIndex:3,scale:.2,y:-25,x:15},style:{zIndex:12,borderRadius:"50%",position:"absolute",bottom:-4,right:-4,width:54,height:54,display:"flex",alignItems:"center",justifyContent:"center",padding:13,background:"var(--ck-graphic-compass-background, var(--ck-body-background))",boxShadow:"var(--ck-graphic-compass-box-shadow, 0px 2px 9px rgba(0, 0, 0, 0.15))"},children:[(0,v.jsx)(tj,{}),(0,v.jsx)(w.E.div,{style:{zIndex:2,position:"absolute"},initial:{rotate:-170},animate:{rotate:0},exit:{rotate:-180,transition:{duration:0}},transition:{type:"spring",stiffness:6,damping:.9,mass:.2},children:tF})]})]},"SlideThree")})},tT=()=>{var e,o;let t;let n=oI({}),r=is(),i=null!==(o=null===(e=r.options)||void 0===e?void 0:e.ethereumOnboardingUrl)&&void 0!==o?o:n.aboutScreen_ctaUrl,[a,s]=(0,m.useState)(!0),[c,d]=(0,m.useState)(0),l=(0,m.useRef)(!1),p=(0,m.useRef)(0),h=[.16,1,.3,1];(0,m.useEffect)(()=>()=>clearInterval(t),[]);let u=()=>{if(w.current){let{overflow:e}=getComputedStyle(w.current);return"visible"!==e}return!1},x=e=>{s(!1),u()?b(e):d(e)},b=e=>{if(w.current){let{offsetWidth:o}=w.current;w.current.scrollLeft=o*e,setTimeout(()=>d(e),100)}},g=()=>{if(!w.current)return;let{offsetWidth:e,scrollLeft:o}=w.current,t=p.current;p.current=o,t-o>-4&&t-o<4&&d(Math.round(o/e))},f=()=>{C()},k=()=>{let{offsetWidth:e,scrollLeft:o}=w.current;d(Math.round(o/e))},C=()=>{l.current=!0,clearTimeout(t)},w=(0,m.useRef)(null);(0,m.useEffect)(()=>{if(w.current)return w.current.addEventListener("scroll",g),w.current.addEventListener("touchmove",f),w.current.addEventListener("touchend",k),()=>{w.current&&(w.current.removeEventListener("scroll",g),w.current.removeEventListener("touchmove",f),w.current.removeEventListener("touchend",k))}},[w]);let E=[(0,v.jsx)(tO,{layoutId:"graphicCircle",duration:600,ease:h}),(0,v.jsx)(tW,{layoutId:"graphicCircle",duration:600,ease:h}),(0,v.jsx)(tR,{layoutId:"graphicCircle",duration:600,ease:h})],L=[(0,v.jsx)(tO,{duration:600,ease:h}),(0,v.jsx)(tW,{duration:600,ease:h}),(0,v.jsx)(tR,{duration:600,ease:h})],F=(()=>{var e;switch(null===(e=r.options)||void 0===e?void 0:e.language){case"en-US":case"zh-CN":return 64;default:return 84}})(),_=[(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(eQ,{style:{height:24},$small:!0,children:(0,v.jsx)(oT,{children:n.aboutScreen_a_h1})}),(0,v.jsx)(eX,{style:{height:F},children:(0,v.jsx)(oT,{children:n.aboutScreen_a_p})})]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(eQ,{style:{height:24},$small:!0,children:(0,v.jsx)(oT,{children:n.aboutScreen_b_h1})}),(0,v.jsx)(eX,{style:{height:F},children:(0,v.jsx)(oT,{children:n.aboutScreen_b_p})})]}),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(eQ,{style:{height:24},$small:!0,children:(0,v.jsx)(oT,{children:n.aboutScreen_c_h1})}),(0,v.jsx)(eX,{style:{height:F},children:(0,v.jsx)(oT,{children:n.aboutScreen_c_p})})]})];return(0,v.jsxs)(eG,{children:[(0,v.jsxs)(tg,{children:[(0,v.jsx)(tp,{children:(0,v.jsx)(j.A,{transition:{duration:.6,ease:h},children:(0,v.jsx)(y.M,{initial:!1,onExitComplete:()=>s(!0),children:E.map((e,o)=>c===o&&(0,v.jsx)(th,{style:{position:"absolute"},children:e},o))})})}),(0,v.jsx)(tx,{ref:w,children:(0,v.jsx)(y.M,{children:_.map((e,o)=>(0,v.jsxs)(tb,{$active:c===o,children:[(0,v.jsx)(tu,{children:(0,v.jsx)(j.A,{transition:{duration:0},children:(0,v.jsx)(th,{children:L[o]})})}),(0,v.jsx)(eq,{style:{gap:8,paddingBottom:0},children:e})]},o))})})]}),(0,v.jsx)(oV,{children:(0,v.jsx)(tf,{children:_.map((e,o)=>(0,v.jsx)(tk,{$active:c===o,onClick:()=>{C(),x(o)}},o))})}),(0,v.jsx)(td,{href:i,arrow:!0,children:n.aboutScreen_ctaText})]})};function tB(){let e=is(),{connectAsync:o,connectors:t}=(0,d.$4)({onError(o){o.message?"User rejected request"!==o.message&&e.debug(o.message,o):e.debug("Could not connect. See console for more details.",o)}});return{connectAsync:async({...t})=>{var n;return await o({...t,chainId:null===(n=e.options)||void 0===n?void 0:n.initialChainId})},connectors:t}}var tD=({...e})=>(0,v.jsxs)("svg",{"aria-hidden":"true",width:"20",height:"19",viewBox:"0 0 20 19",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,v.jsx)("path",{d:"M1.57568 4.60616C1.57568 2.69827 3.12234 1.15161 5.03023 1.15161H15.3939C17.3018 1.15161 18.8484 2.69826 18.8484 4.60616V10.3637C18.8484 12.2716 17.3018 13.8183 15.3939 13.8183H5.03023C3.12234 13.8183 1.57568 12.2716 1.57568 10.3637V4.60616Z",stroke:"currentColor",strokeWidth:"2"}),(0,v.jsx)("path",{d:"M1 4.79293C1 2.435 3.31004 0.770014 5.54697 1.51566L12.4561 3.81869C13.8667 4.2889 14.8182 5.60901 14.8182 7.09596V13.6313C14.8182 15.9892 12.5081 17.6542 10.2712 16.9086L3.36212 14.6056C1.95149 14.1353 1 12.8152 1 11.3283V4.79293Z",fill:"var(--ck-body-background)",stroke:"currentColor",strokeWidth:"2"}),(0,v.jsx)("circle",{cx:"10.3863",cy:"10.1894",r:"1.32574",fill:"currentColor"})]});let tz=z.div`
  padding: 24px 24px 28px;
  border-radius: var(--ck-tertiary-border-radius, 24px);
  box-shadow: var(--ck-tertiary-box-shadow, none);
  background: var(--ck-body-background-tertiary);
  ${eX} {
    max-width: none;
  }
`,tZ=z.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 5px -8px -12px;
  button {
  }
`,tU=z(w.E.div)`
  text-align: center;
  margin-bottom: -6px;
`,tH=z(w.E.button)`
  appearance: none;
  user-select: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 42px;
  padding: 0 16px;
  border-radius: 6px;
  background: none;
  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  /* will-change: transform; */
  transition: color 200ms ease, transform 100ms ease;
  svg {
    transition: all 100ms ease-out;
    display: block;
    position: relative;
    top: 2px;
    left: 2px;
    transform: translateZ(0px);
    path,
    circle {
      transition: all 100ms ease-out;
    }
    path:last-of-type {
      transform-origin: 0 0;
      transform: scaleX(1.3) skewY(-12deg);
      opacity: 0;
    }
    circle {
      transform: translate(20%, -15%);
    }
  }
  &:hover {
    color: var(--ck-body-color-muted-hover);
    svg {
      path,
      circle {
        opacity: 1;
        transform: none;
      }
    }
  }
  &:active {
    transform: scale(0.96);
  }
`,t$=z(w.E.div)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 0 16px;
`,tV=z(w.E.button)`
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  font-size: 17px;
  font-weight: var(--ck-primary-button-font-weight, 500);
  line-height: 20px;
  text-align: var(--ck-body-button-text-align, left);
  transition: 180ms ease;
  transition-property: background, color, box-shadow, transform;
  will-change: transform, box-shadow, background-color, color;

  --fallback-color: var(--ck-primary-button-color);
  --fallback-background: var(--ck-primary-button-background);
  --fallback-box-shadow: var(--ck-primary-button-box-shadow);
  --fallback-border-radius: var(--ck-primary-button-border-radius);

  --color: var(--ck-primary-button-color, var(--fallback-color));
  --background: var(--ck-primary-button-background, var(--fallback-background));
  --box-shadow: var(--ck-primary-button-box-shadow, var(--fallback-box-shadow));
  --border-radius: var(
    --ck-primary-button-border-radius,
    var(--fallback-border-radius)
  );

  --hover-color: var(--ck-primary-button-hover-color, var(--color));
  --hover-background: var(
    --ck-primary-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-primary-button-hover-box-shadow,
    var(--box-shadow)
  );
  --hover-border-radius: var(
    --ck-primary-button-hover-border-radius,
    var(--border-radius)
  );

  --active-color: var(--ck-primary-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-primary-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-primary-button-active-box-shadow,
    var(--hover-box-shadow)
  );
  --active-border-radius: var(
    --ck-primary-button-active-border-radius,
    var(--hover-border-radius)
  );

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &:disabled {
    transition: 180ms ease;
  }

  &:not(:disabled) {
    &:hover {
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
    }
    &:focus-visible {
      transition-duration: 100ms;
      color: var(--hover-color);
      background: var(--hover-background);
      box-shadow: var(--hover-box-shadow);
      border-radius: var(--hover-border-radius);
    }
    &:active {
      color: var(--active-color);
      background: var(--active-background);
      box-shadow: var(--active-box-shadow);
      border-radius: var(--active-border-radius);
    }
  }
`,tG=z(w.E.span)`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding-right: 38px;
`,tP=z(w.E.div)`
  position: absolute;
  right: 20px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,tY=z(w.E.div)`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 14px 0 28px;
  margin: 0 0;
`,tJ=z(w.E.button)`
  --background: var(--ck-body-background-secondary);
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 0;
  width: 100%;
  min-width: 25%;
  font-size: 13px;
  font-weight: 500;
  line-height: 13px;
  text-align: center;
  transition: transform 100ms ease;

  background: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }

  &:not(:disabled) {
    &:active {
      transform: scale(0.97);
    }
  }
`,tq=z(w.E.span)`
  display: block;
  padding: 10px 0 0;
  color: var(--ck-body-color);
  opacity: 0.75;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,tQ=z(w.E.div)`
  margin: 0 auto;
  width: 60px;
  height: 60px;
  overflow: hidden;
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: 100%;
  }
`,tX=({chains:e})=>{let o="undefined"!=typeof window&&Boolean(window.ethereum),t=eO()&&!o;return{id:"injected",name:"Browser Wallet",shortName:"browser",scannable:!1,logos:{default:(0,v.jsx)(ew.Injected,{})},installed:Boolean(!t&&o),createConnector:()=>{let o=new x._({chains:e,options:{shimDisconnect:!0}});return{connector:o}}}},tK=({chains:e})=>{let o=eW(),t=eO()&&!o;return{id:"metaMask",name:"MetaMask",logos:{default:(0,v.jsx)(ew.MetaMask,{background:!0}),mobile:(0,v.jsx)(ew.MetaMask,{background:!0}),transparent:(0,v.jsx)("div",{style:{transform:"scale(0.86)",position:"relative",width:"100%"},children:(0,v.jsx)(ew.MetaMask,{})}),connectorButton:(0,v.jsx)("div",{style:{transform:"scale(1.1)"},children:(0,v.jsx)(ew.MetaMask,{})})},logoBackground:"linear-gradient(0deg, var(--ck-brand-metamask-12), var(--ck-brand-metamask-11))",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/metamask",website:"https://metamask.io/download/",android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/app/metamask/id1438144202",chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",firefox:"https://addons.mozilla.org/firefox/addon/ether-metamask/",brave:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm"},installed:Boolean(!t&&o),createConnector:()=>{let o=t?t0(e):new p.i({chains:e,options:{shimDisconnect:!0,shimChainChangedDisconnect:!1,UNSTABLE_shimOnConnectSelectAccount:!0}});return{connector:o,getUri:async()=>{},getMobileConnector:t?async()=>(o.on("error",e=>{console.log("onError",e)}),o.on("message",async({type:e})=>{if(console.log("onMessage: MetaMask",e),"connecting"===e){let t="";try{let n=await t2(o);t=eN()?n:`https://metamask.app.link/wc?uri=${encodeURIComponent(n)}`,window.location.href=t}catch{console.log("catch bad URI",t)}}}),o):void 0}}}},t1=({chains:e,appName:o})=>{let t=eR(),n=eO()&&!t;return{id:"coinbaseWallet",name:"Coinbase Wallet",shortName:"Coinbase",logos:{default:(0,v.jsx)(ew.Coinbase,{}),mobile:(0,v.jsx)(ew.Coinbase,{background:!0}),transparent:(0,v.jsx)(ew.Coinbase,{background:!1}),appIcon:(0,v.jsx)(ew.Coinbase,{background:!1}),connectorButton:(0,v.jsx)(ew.Coinbase,{background:!0}),qrCode:(0,v.jsx)(ew.Coinbase,{background:!0})},logoBackground:"var(--ck-brand-coinbaseWallet)",scannable:!0,installed:Boolean(!n&&t),downloadUrls:{download:"https://connect.family.co/v0/download/coinbasewallet",website:"https://www.coinbase.com/wallet/getting-started-extension",android:"https://play.google.com/store/apps/details?id=org.toshi",ios:"https://apps.apple.com/app/coinbase-wallet-store-crypto/id1278383455",chrome:"https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad"},createConnector:()=>{let t=new u.D({chains:e,options:{appName:null!=o?o:"",headlessMode:!0}}),n=async()=>(await t.getProvider()).qrUrl;return{connector:t,qrCode:{getUri:n}}}}},t0=e=>new h.z({chains:e,options:{qrcode:!1,version:"1"}}),t2=async e=>{let o=await e.getProvider();return o.connector.uri},t5=({chains:e})=>({id:"walletConnect",name:"Other Wallets",logos:{default:(0,v.jsx)(ew.WalletConnect,{}),mobile:(0,v.jsx)(ew.OtherWallets,{}),transparent:(0,v.jsx)(ew.WalletConnect,{background:!1}),connectorButton:(0,v.jsx)(ew.OtherWallets,{}),qrCode:(0,v.jsx)(ew.WalletConnect,{background:!0})},logoBackground:"var(--ck-brand-walletConnect)",scannable:!0,createConnector:()=>{let o=t0(e);return{connector:o,qrCode:{getUri:async()=>await t2(o)}}}}),t3=({chains:e})=>({id:"rainbow",name:"Rainbow",logos:{default:(0,v.jsx)(ew.Rainbow,{})},logoBackground:"#174299",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/rainbow",website:"https://rainbow.me",android:"https://play.google.com/store/apps/details?id=me.rainbow",ios:"https://apps.apple.com/app/rainbow-ethereum-wallet/id1457119021"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),t4=({chains:e})=>({id:"argent",name:"Argent",logos:{default:(0,v.jsx)(ew.Argent,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/argent",android:"https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",ios:"https://apps.apple.com/app/argent/id1358741926"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://argent.link/app/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),t8=({chains:e})=>({id:"trust",name:"Trust Wallet",shortName:"Trust",logos:{default:(0,v.jsx)(ew.Trust,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/trust",android:"https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",ios:"https://apps.apple.com/app/trust-crypto-bitcoin-wallet/id1288339409"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://link.trustwallet.com/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),t7=({chains:e})=>({id:"ledger",name:"Ledger Live",shortName:"Ledger",logos:{default:(0,v.jsx)(ew.Ledger,{})},logoBackground:"#000",scannable:!1,downloadUrls:{website:"https://www.ledger.com/ledger-live/download#download-device-2",download:"https://connect.family.co/v0/download/ledger",android:"https://play.google.com/store/apps/details?id=com.ledger.live",ios:"https://apps.apple.com/app/ledger-live-web3-wallet/id1361671700"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`ledgerlive://wc?uri=${encodeURIComponent(e)}`}},desktop:{getUri:async()=>{let e=await t2(o);return`ledgerlive://wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),t6=({chains:e})=>({id:"imToken",name:"imToken",logos:{default:(0,v.jsx)(ew.ImToken,{})},logoBackground:"#098de6",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/imToken",android:"https://play.google.com/store/apps/details?id=im.token.app",ios:"https://itunes.apple.com/us/app/imtoken2/id1384798940"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return`imtokenv2://wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),t9=({chains:e})=>{var o;let t="undefined"!=typeof window&&(null===(o=window.ethereum)||void 0===o?void 0:o.isBraveWallet)===!0;return{id:"brave",name:"Brave Wallet",shortName:"Brave",logos:{default:(0,v.jsx)(ew.Brave,{})},logoBackground:"#fff",scannable:!1,downloadUrls:{},installed:t,createConnector:()=>({connector:new x._({chains:e,options:{shimDisconnect:!0}})})}},ne=({chains:e})=>({id:"steak",name:"Steak",logos:{default:(0,v.jsx)(ew.Steak,{})},logoBackground:"#000000",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/steak",android:"https://play.google.com/store/apps/details?id=fi.steakwallet.app",ios:"https://apps.apple.com/app/steakwallet/id1569375204",website:"https://steakwallet.fi/download"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://links.steakwallet.fi/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),no=({chains:e})=>({id:"unstoppable",name:"Unstoppable",logos:{default:(0,v.jsx)(ew.Unstoppable,{})},logoBackground:"linear-gradient(180deg, #FED812 0%, #FFAF00 100%)",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/unstoppable",ios:"https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907",android:"https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://unstoppable.money/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),nt=({chains:e})=>({id:"onto",name:"ONTO",logos:{default:(0,v.jsx)(ew.ONTO,{})},logoBackground:"#ffffff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/onto",ios:"https://apps.apple.com/app/onto-an-ontology-dapp/id1436009823",android:"https://play.google.com/store/apps/details?id=com.github.ontio.onto",website:"https://onto.app/en/download/"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://onto.app/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),nn=({chains:e})=>({id:"gnosisSafe",name:"Gnosis Safe",shortName:"Safe",logos:{default:(0,v.jsx)(ew.GnosisSafe,{})},logoBackground:"#ffffff",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/gnosisSafe",ios:"https://apps.apple.com/app/id1515759131",android:"https://play.google.com/store/apps/details?id=io.gnosis.safe",website:"https://gnosis-safe.io/"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://gnosis-safe.io/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),nr=({chains:e})=>({id:"frontier",name:"Frontier",logos:{default:(0,v.jsx)(ew.Frontier,{})},logoBackground:"#CC703C",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/frontier",ios:"https://apps.apple.com/app/frontier-crypto-defi-wallet/id1482380988",android:"https://play.google.com/store/apps/details?id=com.frontierwallet",website:"https://frontier.xyz/"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`frontier://wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),ni=({chains:e})=>({id:"zerion",name:"Zerion",logos:{default:(0,v.jsx)(ew.Zerion,{})},logoBackground:"#CC703C",scannable:!1,downloadUrls:{download:"https://connect.family.co/v0/download/zerion",ios:"https://apps.apple.com/app/apple-store/id1456732565",android:"https://play.google.com/store/apps/details?id=io.zerion.android",website:"https://zerion.io/"},createConnector:()=>{let o=t0(e);return{connector:o,mobile:{getUri:async()=>{let e=await t2(o);return eN()?e:`https://app.zerion.io/wc?uri=${encodeURIComponent(e)}`}},qrCode:{getUri:async()=>await t2(o)}}}}),na=({chains:e})=>[tX({chains:e}),t5({chains:e}),tK({chains:e}),t1({chains:e}),t3({chains:e}),t4({chains:e}),t8({chains:e}),t7({chains:e}),t6({chains:e}),t9({chains:e}),nn({chains:e}),no({chains:e}),ne({chains:e}),nt({chains:e}),nr({chains:e}),ni({chains:e})];function ns(){let{connectors:e}=(0,d.$4)(),o=e[0].chains,t=[];e.find(e=>"metaMask"===e.id)||t.push("metaMask"),e.find(e=>"coinbaseWallet"===e.id)||t.push("coinbaseWallet"),t.push("rainbow","argent","trust","ledger","imToken","brave","steak","unstoppable","onto","gnosisSafe","frontier","zerion");let n=na({chains:o});return n.filter(e=>t.includes(e.id))}let nc=()=>{var e,o,t,n,r,i,a;let s=is(),c=oI({}),d=eO(),{connectAsync:l,connectors:p}=tB(),b=async e=>{let o=p.filter(o=>o.id===e)[0],t=null;switch(o.id){case"walletConnect":s.setRoute(ir.MOBILECONNECTORS);break;case"metaMask":t=new h.z({chains:o.chains,options:{...o.options,qrcode:!1,version:"1"}});break;case"coinbaseWallet":t=new u.D({chains:o.chains,options:o.options});break;case"injected":t=new x._({chains:o.chains,options:o.options})}if(t){if("metaMask"===o.id&&d){let n=t;t.on("message",async({type:e})=>{if("connecting"===e){let o=await t2(n),t=eN()?o:`https://metamask.app.link/wc?uri=${encodeURIComponent(o)}`;window.location.href=t}})}try{await l({connector:t})}catch(r){s.debug("Async connect error. See console for more details.",r)}}};(0,m.useEffect)(()=>{},[d]);let g=()=>{let{ethereum:e}=window,o="undefined"!=typeof window&&e&&!eW()&&!eR();//!ethereum?.isBraveWallet; // TODO: Add this line when Brave is supported
return o},f=ns(),k=e=>{let o=e.split(/[(),]+/);o.shift(),o=o.map(e=>e.trim());let t=o.filter(e=>{let o=f.map(e=>e.name).includes(e);return o?e:null});if(0===t.length)return null;let n=f.filter(e=>e.installed&&e.name===t[0])[0];return n};return(0,v.jsx)(eG,{style:{width:312},children:d?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(tY,{children:p.map(e=>{var o,t,n,r,i,a,d;let l=eE.filter(o=>o.id===e.id)[0];if(!l)return null;let p=l.logos,h=null!==(t=null!==(o=l.shortName)&&void 0!==o?o:l.name)&&void 0!==t?t:e.name;if("injected"===l.id){if(!g())return null;let u=k(e.name);u&&(p=u.logos,h=u.name.replace(" Wallet",""))}return"walletConnect"===l.id&&(h=null!==(r=null===(n=s.options)||void 0===n?void 0:n.walletConnectName)&&void 0!==r?r:c.otherWallets),(0,v.jsxs)(tJ,{onClick:()=>{"injected"===l.id||"metaMask"===l.id&&eW()?(s.setRoute(ir.CONNECT),s.setConnector(e.id)):b(e.id)},children:[(0,v.jsx)(tQ,{children:null!==(d=null!==(a=null!==(i=p.mobile)&&void 0!==i?i:p.appIcon)&&void 0!==a?a:p.connectorButton)&&void 0!==d?d:p.default}),(0,v.jsx)(tq,{children:h})]},`m-${e.id}`)})}),(0,v.jsxs)(tz,{children:[(0,v.jsxs)(eq,{style:{padding:0,textAlign:"left"},children:[(0,v.jsx)(eQ,{$small:!0,children:c.connectorsScreen_h1}),(0,v.jsx)(eX,{children:c.connectorsScreen_p})]}),(0,v.jsxs)(tZ,{children:[!(null===(e=s.options)||void 0===e?void 0:e.hideQuestionMarkCTA)&&(0,v.jsx)(td,{variant:"tertiary",onClick:()=>s.setRoute(ir.ABOUT),children:c.learnMore}),!(null===(o=s.options)||void 0===o?void 0:o.hideNoWalletCTA)&&(0,v.jsx)(td,{variant:"tertiary",onClick:()=>s.setRoute(ir.ONBOARDING),children:c.getWallet})]})]}),(null===(t=s.options)||void 0===t?void 0:t.disclaimer)&&(0,v.jsx)(oi,{style:{visibility:"hidden",pointerEvents:"none"},children:(0,v.jsx)("div",{children:null===(n=s.options)||void 0===n?void 0:n.disclaimer})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(t$,{children:p.map(e=>{var o,t,n,r;let i=eE.filter(o=>o.id===e.id)[0];if(!i)return null;let a=i.logos,d=null!==(o=i.name)&&void 0!==o?o:e.name;if("walletConnect"===i.id&&(d=null!==(n=null===(t=s.options)||void 0===t?void 0:t.walletConnectName)&&void 0!==n?n:c.otherWallets),"injected"===i.id){if(!g())return null;let l=k(e.name);l&&(a=l.logos,d=l.name)}let p=null!==(r=a.connectorButton)&&void 0!==r?r:a.default;return i.extensionIsInstalled&&a.appIcon&&i.extensionIsInstalled()&&(p=a.appIcon),(0,v.jsxs)(tV,{disabled:s.route!==ir.CONNECTORS,onClick:()=>{s.setRoute(ir.CONNECT),s.setConnector(e.id)},children:[(0,v.jsx)(tP,{children:p}),(0,v.jsx)(tG,{children:d})]},e.id)})}),!(null===(r=s.options)||void 0===r?void 0:r.hideNoWalletCTA)&&(0,v.jsx)(tU,{children:(0,v.jsxs)(tH,{onClick:()=>s.setRoute(ir.ONBOARDING),children:[(0,v.jsx)(tD,{})," ",c.connectorsScreen_newcomer]})}),(null===(i=s.options)||void 0===i?void 0:i.disclaimer)&&(0,v.jsx)(oi,{style:{visibility:"hidden",pointerEvents:"none"},children:(0,v.jsx)("div",{children:null===(a=s.options)||void 0===a?void 0:a.disclaimer})})]})})},nd=z.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px 8px;
  margin: 0 -10px -20px;
  padding: 4px 0 0;
`,nl=z.div`
  text-align: center;
`,np=z.div`
  z-index: 9;
  position: relative;
  margin: 0 auto 10px;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  overflow: hidden;
  ${e=>e.$outline&&`
  &:before {
    content: '';
    z-index: 2;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  }`}
  svg {
    display: block;
    position: relative;
    width: 100%;
    height: auto;
  }
`,nh=z.div`
  color: var(--ck-body-color);
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  opacity: 0.75;
`,nu=z.div``;function nx(){let{connectAsync:e,connectors:o}=tB();return{openDefaultWalletConnect:async()=>{let t=o.find(e=>"walletConnect"===e.id);if(t){let n=new h.z({chains:t.chains,options:{...t.options,qrcode:!0}});try{await e({connector:n})}catch(r){console.log("WalletConnect",r)}}else console.log("No WalletConnect connector available")}}}let nb=z(w.E.div)`
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  svg {
    display: block;
  }
  svg,
  svg path,
  svg rect {
    transition: inherit;
  }
  svg path:first-child {
    transform-origin: 50% 50%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg rect {
    transform-origin: 53% 63%;
    fill: var(--bg);
    stroke: var(--color);
  }
  svg path:last-child {
    opacity: 0;
    stroke: var(--bg);
    transform: translate(11.75px, 10px) rotate(90deg) scale(0.6);
  }
  ${e=>e.$clipboard?E.iv`
          --color: var(--ck-focus-color) !important;
          --bg: var(--ck-body-background);
          svg {
            transition-delay: 0ms;
            path:first-child {
              opacity: 0;
              transform: rotate(-90deg) scale(0.2);
            }
            rect {
              rx: 10px;
              fill: var(--color);
              transform: rotate(-90deg) scale(1.45);
            }
            path:last-child {
              transition-delay: 100ms;
              opacity: 1;
              transform: translate(7.75px, 9.5px);
            }
          }
        `:E.iv`
          &:hover {
          }
          &:hover:active {
          }
        `}
`,ng=({copied:e,small:o})=>(0,v.jsx)(nb,{$clipboard:e,children:(0,v.jsx)(ow,{style:{transform:o?"scale(1)":"translateX(3px) scale(1.5)",opacity:o||e?1:.3}})}),nf=z.div`
  --color: var(--ck-copytoclipboard-stroke);
  --bg: var(--ck-body-background);
  transition: all 220ms cubic-bezier(0.175, 0.885, 0.32, 1.1);

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${e=>e.$disabled?E.iv`
          cursor: not-allowed;
          opacity: 0.4;
        `:E.iv`
          &:hover {
            --color: var(--ck-body-color-muted);
          }
        `}
`,nk=z.div`
  display: block;
  position: relative;
  transition: inherit;
  svg {
    position: absolute;
    left: 100%;
    display: block;
    top: -1px;
    margin: 0;
    margin-left: 4px;
  }
`,nv=({string:e,children:o,variant:t})=>{let n;let[r,i]=(0,m.useState)(!1),a=()=>{if(!e)return;let o=e.trim();navigator.clipboard&&navigator.clipboard.writeText(o),i(!0),clearTimeout(n),n=setTimeout(()=>i(!1),1e3)};return"button"===t?(0,v.jsx)(td,{disabled:!e,onClick:a,icon:(0,v.jsx)(ng,{copied:r}),children:o}):(0,v.jsx)(nf,{onClick:a,$disabled:!e,children:(0,v.jsxs)(nk,{children:[o,(0,v.jsx)(ng,{copied:r,small:!0})]})})},nm=(0,v.jsx)("svg",{width:"60",height:"60",viewBox:"0 0 60 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M30 42V19M19 30.5H42",stroke:"var(--ck-body-color-muted)",strokeWidth:"3",strokeLinecap:"round"})}),nC=()=>{var e;let o=is(),{connectAsync:t}=tB(),n=oI(),r=O(),{openDefaultWalletConnect:i}=nx(),a=ns().filter(e=>void 0===e.installed),s=e=>{let n=e.createConnector();if(e.installed)o.setRoute(ir.CONNECT),o.setConnector(n.connector.id);else{n.connector.on("message",async({type:e})=>{if("connecting"===e){let o=await n.mobile.getUri();window.location.href=o}});try{t({connector:n.connector})}catch(r){o.debug("Async connect error. See console for more details.",r)}}};async function c(e){await t({connector:e})}let[d,l]=(0,m.useState)("");return(0,m.useEffect)(()=>{let e=async()=>{let e=await t5({chains:r}).createConnector(),t=await e.qrCode.getUri();console.log(t),e.connector.on("message",async o=>{let t=await e.connector.getProvider();console.log(t),l(t.connector.uri),t.connector.on("disconnect",()=>{c(e.connector)})});try{await c(e.connector)}catch(n){o.debug((0,v.jsx)(v.Fragment,{children:"WalletConnect cannot connect. See console for more details."}),n)}};e()},[]),(0,v.jsx)(eG,{style:{width:312},children:(0,v.jsxs)(nu,{children:[(0,v.jsx)(eq,{children:(0,v.jsxs)(nd,{children:[a.map((e,o)=>{var t;let{name:n,shortName:r,logos:i,logoBackground:a}=e;return(0,v.jsxs)(nl,{onClick:()=>s(e),children:[(0,v.jsx)(np,{$outline:!0,style:a?{background:a}:void 0,children:null!==(t=i.mobile)&&void 0!==t?t:i.default}),(0,v.jsx)(nh,{children:null!=r?r:n})]},o)}),(0,v.jsxs)(nl,{onClick:i,children:[(0,v.jsx)(np,{style:{background:"var(--ck-body-background-secondary)"},children:nm}),(0,v.jsx)(nh,{children:n.more})]})]})}),(null===(e=o.options)||void 0===e?void 0:e.walletConnectCTA)!=="modal"&&(0,v.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14,paddingTop:16},children:(0,v.jsx)(nv,{variant:"button",string:d,children:n.copyToClipboard})})]})})},nw=z(w.E.div)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  left: 0;
  right: 0;
  ${eq} {
    padding: 0 8px 32px;
    gap: 12px;
  }
`,ny=E.F4`
  0%{ transform:none; }
  25%{ transform:translateX(${2}px); }
  50%{ transform:translateX(-${2}px); }
  75%{ transform:translateX(${2}px); }
  100%{ transform:none; }
`,nj=E.F4`
  0%{ opacity:1; }
  100%{ opacity:0; }
`,nE=z(w.E.div)`
  /*
  background: var(
    --ck-body-background
  ); // To stop the overlay issue during transition for the squircle spinner
  */
`,nL=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px auto 16px;
  height: 120px;
  //transform: scale(1.001); // fixes shifting issue between states
`,nF=z(w.E.div)`
  user-select: none;
  position: relative;
  --spinner-error-opacity: 0;
  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    opacity: 0;
    background: var(--ck-body-color-danger);
    ${e=>e.$circle&&E.iv`
        border-radius: 50%;
        background: none;
        box-shadow: inset 0 0 0 3.5px var(--ck-body-color-danger);
      `}
  }
  ${e=>e.$shake&&E.iv`
      animation: ${ny} 220ms ease-out both;
      &:before {
        animation: ${nj} 220ms ease-out 750ms both;
      }
    `}
`,n_=z(w.E.button)`
  z-index: 5;
  appearance: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  background: none;

  color: var(--ck-body-background);
  transition: color 200ms ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);

  &:before {
    z-index: 3;
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 200ms ease;
    background: var(--ck-body-color);
  }

  &:hover:before {
    opacity: 0.1;
  }
`,nS=z(w.E.div)`
  position: absolute;
  inset: 0;

  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 3px;
    border-radius: 16px;
    background: conic-gradient(
      from 90deg,
      currentColor 10%,
      var(--ck-body-color) 80%
    );
  }

  svg {
    z-index: 2;
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }
`,nI=z(w.E.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
  pointer-events: none;
`,nM=z(w.E.div)`
  --shadow: var(--ck-tooltip-shadow);
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  gap: 8px;
  width: fit-content;
  align-items: center;
  justify-content: center;
  border-radius: var(
    --ck-tooltip-border-radius,
    ${e=>"small"===e.$size?11:14}px
  );
  border-radius: ;
  padding: 10px 16px 10px 12px;
  font-size: 14px;
  line-height: 19px;
  font-weight: 500;
  letter-spacing: -0.1px;
  color: var(--ck-tooltip-color);
  background: var(--ck-tooltip-background);
  box-shadow: var(--shadow);
  > span {
    z-index: 3;
    position: relative;
  }
  > div {
    margin: -4px 0; // offset for icon
  }
  strong {
    color: var(--ck-spinner-color);
  }

  .ck-tt-logo {
    display: inline-block;
    vertical-align: text-bottom;
    height: 1em;
    width: 1.25em;
    svg {
      display: block;
      height: 100%;
      transform: translate(0.5px, -1px) scale(1.75);
    }
  }
`,nA=z(w.E.div)`
  z-index: 2;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${e=>"small"===e.$size?14:18}px;
  right: 100%;
  top: 0;
  bottom: 0;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    box-shadow: var(--shadow);
    width: ${e=>"small"===e.$size?14:18}px;
    height: ${e=>"small"===e.$size?14:18}px;
    transform: translate(75%, 0) rotate(45deg);
    background: var(--ck-tooltip-background);
    border-radius: ${e=>"small"===e.$size?2:3}px 0 0 0;
  }
`,nN=({children:e,message:o,open:t,xOffset:n=0,yOffset:r=0,delay:i})=>{var a;let s=is(),c=ox();if(null===(a=s.options)||void 0===a?void 0:a.hideTooltips)return(0,v.jsx)(v.Fragment,{children:e});let[d,l]=(0,m.useState)(!1),[p,h]=(0,m.useState)(!1),[u,x]=(0,m.useState)("small"),[b,g]=(0,m.useState)(!1),[f]=(0,m.useState)(s.route),k=(0,m.useRef)(null),[C,j]=(0,S.Z)({debounce:b?0:220,offsetSize:!0,scroll:!0}),E=()=>{let e=!1,o=n+j.left+j.width,t=r+j.top+.5*j.height;return(o>window.innerWidth||o<0||t>window.innerHeight||t<0)&&(e=!0),e},L="undefined"!=typeof window?m.useLayoutEffect:m.useEffect,F=()=>{if(!k.current||j.top+j.bottom+j.left+j.right+j.height+j.width===0)return;let e=n+j.left+j.width,o=r+j.top+.5*j.height;b||0===e||0===o||g(!0),k.current.style.left=`${e}px`,k.current.style.top=`${o}px`,x(k.current.offsetHeight<=40?"small":"large"),h(E())};return L(F,[j,t,d]),(0,m.useEffect)(()=>{s.open||l(!1)},[s.open]),(0,m.useEffect)(()=>{l(!!t)},[t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.E.div,{ref:C,style:void 0===t?{cursor:"help"}:{},onHoverStart:()=>l(!0),onHoverEnd:()=>l(!1),onClick:()=>l(!1),children:e}),(0,v.jsx)(ee,{children:(0,v.jsx)(y.M,{children:f===s.route&&!p&&d&&(0,v.jsx)(K,{$useTheme:c.theme,$useMode:c.mode,$customTheme:c.customTheme,children:(0,v.jsx)(nI,{children:(0,v.jsxs)(nM,{role:"tooltip",$size:u,ref:k,initial:"collapsed",animate:b?"open":{},exit:"collapsed",variants:{collapsed:{transformOrigin:"20px 50%",opacity:0,scale:.9,z:.01,y:"-50%",x:20,transition:{duration:.1}},open:{willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:"-50%",x:20,transition:{ease:[.76,0,.24,1],duration:.15,delay:i||.5}}},children:[o,(0,v.jsx)(nA,{$size:u})]})})})})})]})},nO=z(w.E.div)`
  display: flex;
  gap: 8px;
  position: relative;
  border-radius: 9px;
  margin: 0 auto;
  padding: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  max-width: 260px;
  min-width: 100%;

  border-radius: var(--ck-alert-border-radius, 12px);
  color: var(--ck-alert-color, var(--ck-body-color-muted));
  background: var(--ck-alert-background, var(--ck-body-background-secondary));
  box-shadow: var(--ck-alert-box-shadow, var(--ck-body-box-shadow));

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    padding: 16px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 24px;
    text-align: center;
  }
`,nW=z(w.E.div)`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,nR=m.forwardRef(({children:e,icon:o},t)=>(0,v.jsxs)(nO,{children:[o&&(0,v.jsx)(nW,{children:o}),(0,v.jsx)("div",{children:e})]}));nR.displayName="Alert";let nT=z(w.E.div)`
  z-index: 4;
  position: relative;
  width: 100px;
  height: 100px;
  svg {
    z-index: 3;
    position: relative;
    display: block;
  }
`,nB=z(w.E.div)`
  z-index: 2;
  position: absolute;
  //overflow: hidden;
  inset: 6px;
  border-radius: 50px;
  background: var(--ck-body-background);
  display: flex;
  align-items: center;
  justify-content: center;
  svg,
  img {
    pointer-events: none;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    ${e=>e.$small&&E.iv`
        width: 60%;
        height: 60%;
      `}
  }
`,nD=z(w.E.div)`
  position: absolute;
  inset: -5px;
`,nz=z(w.E.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: -25%;
  background: var(--ck-body-background);
  div:first-child {
    position: absolute;
    left: 50%;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 0% 50%;
      animation: rotateExpiringSpinner 5000ms ease-in both;
    }
  }
  div:last-child {
    position: absolute;
    left: 0;
    right: 50%;
    top: 0;
    bottom: 0;
    overflow: hidden;
    &:before {
      position: absolute;
      content: '';
      inset: 0;
      background: var(--ck-spinner-color);
      transform-origin: 100% 50%;
      animation: rotateExpiringSpinner 5000ms ease-out 5000ms both;
    }
  }
  @keyframes rotateExpiringSpinner {
    0% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`,nZ=z(w.E.div)`
  pointer-events: none;
  user-select: none;
  z-index: 1;
  position: absolute;
  inset: 0;
  svg {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    animation: rotateSpinner 1200ms linear infinite;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,nU=({logo:e,smallLogo:o,connecting:t=!0,unavailable:n=!1,countdown:r=!1})=>(0,v.jsxs)(nT,{transition:{duration:.5,ease:[.175,.885,.32,.98]},children:[(0,v.jsx)(nB,{$small:!n&&o,style:n?{borderRadius:0}:void 0,children:e}),(0,v.jsx)(nD,{children:(0,v.jsxs)(y.M,{children:[t&&(0,v.jsx)(nZ,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:r?1:0}},children:(0,v.jsxs)("svg",{"aria-hidden":"true",width:"102",height:"102",viewBox:"0 0 102 102",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M52 100C24.3858 100 2 77.6142 2 50",stroke:"url(#paint0_linear_1943_4139)",strokeWidth:"3.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"paint0_linear_1943_4139",x1:"2",y1:"48.5",x2:"53",y2:"100",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]})},"Spinner"),r&&(0,v.jsxs)(nz,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},children:[(0,v.jsx)("div",{}),(0,v.jsx)("div",{})]},"ExpiringSpinner")]})})]}),nH=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 32px;
  max-height: 32px;
  width: 100%;
  height: 100%;
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`,n$=(0,v.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("g",{filter:"url(#filter0_ii_927_5781)",children:(0,v.jsxs)("g",{clipPath:"url(#clip0_927_5781)",children:[(0,v.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"#DB4437"}),(0,v.jsx)("path",{d:"M1.58771 0V12.2727H6.06498L10.0002 5.45455H20.0002V0H1.58771Z",fill:"url(#paint0_linear_927_5781)"}),(0,v.jsx)("path",{d:"M6.17038 12.2272L1.64538 4.46582L1.57947 4.57946L6.07265 12.284L6.17038 12.2272Z",fill:"black",fillOpacity:"0.15"}),(0,v.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"#0F9D58"}),(0,v.jsx)("path",{d:"M0 20.0003H9.51932L13.9375 15.5821V12.273H6.0625L0 1.87305V20.0003Z",fill:"url(#paint1_linear_927_5781)"}),(0,v.jsx)("path",{d:"M13.8412 12.4208L13.7469 12.3662L9.38324 19.9969H9.51392L13.8435 12.4242L13.8412 12.4208Z",fill:"#263238",fillOpacity:"0.15"}),(0,v.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"#FFCD40"}),(0,v.jsx)("path",{d:"M10.0006 5.45459L13.9381 12.2728L9.51996 20H20.0006V5.45459H10.0006Z",fill:"url(#paint2_linear_927_5781)"}),(0,v.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"#FFCD40"}),(0,v.jsx)("path",{d:"M9.9996 5.45459L13.9371 12.2728L9.51892 20H19.9996V5.45459H9.9996Z",fill:"url(#paint3_linear_927_5781)"}),(0,v.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"#DB4437"}),(0,v.jsx)("path",{d:"M1.58691 0V12.2727H6.06419L9.99941 5.45455H19.9994V0H1.58691Z",fill:"url(#paint4_linear_927_5781)"}),(0,v.jsx)("path",{d:"M10 5.45459V7.83527L18.9091 5.45459H10Z",fill:"url(#paint5_radial_927_5781)"}),(0,v.jsx)("path",{d:"M0 19.9998H9.51932L11.9318 15.9089L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"#0F9D58"}),(0,v.jsx)("path",{d:"M0 19.9998H9.51932L12.1023 15.5112L13.9375 12.2726H6.0625L0 1.87256V19.9998Z",fill:"url(#paint6_linear_927_5781)"}),(0,v.jsx)("path",{d:"M1.58771 4.59668L8.09339 11.1012L6.06384 12.2728L1.58771 4.59668Z",fill:"url(#paint7_radial_927_5781)"}),(0,v.jsx)("path",{d:"M9.52661 19.9884L11.9084 11.1021L13.938 12.2725L9.52661 19.9884Z",fill:"url(#paint8_radial_927_5781)"}),(0,v.jsx)("path",{d:"M10.0003 14.5455C12.5107 14.5455 14.5458 12.5104 14.5458 10C14.5458 7.48966 12.5107 5.45459 10.0003 5.45459C7.48996 5.45459 5.4549 7.48966 5.4549 10C5.4549 12.5104 7.48996 14.5455 10.0003 14.5455Z",fill:"#F1F1F1"}),(0,v.jsx)("path",{d:"M9.99995 13.6365C12.0083 13.6365 13.6363 12.0084 13.6363 10.0001C13.6363 7.99183 12.0083 6.36377 9.99995 6.36377C7.99164 6.36377 6.36359 7.99183 6.36359 10.0001C6.36359 12.0084 7.99164 13.6365 9.99995 13.6365Z",fill:"#4285F4"}),(0,v.jsx)("path",{d:"M10.0003 5.34082C7.48899 5.34082 5.4549 7.37491 5.4549 9.88628V9.99991C5.4549 7.48855 7.48899 5.45446 10.0003 5.45446H20.0003V5.34082H10.0003Z",fill:"black",fillOpacity:"0.2"}),(0,v.jsx)("path",{d:"M13.9318 12.273C13.1455 13.6299 11.6818 14.5458 10 14.5458C8.31818 14.5458 6.85227 13.6299 6.06818 12.273H6.06364L0 1.87305V1.98668L6.06818 12.3867C6.85455 13.7435 8.31818 14.6594 10 14.6594C11.6818 14.6594 13.1455 13.7446 13.9318 12.3867H13.9375V12.273H13.9307H13.9318Z",fill:"white",fillOpacity:"0.1"}),(0,v.jsx)("path",{opacity:"0.1",d:"M10.1133 5.45459C10.094 5.45459 10.0758 5.45686 10.0565 5.458C12.5406 5.48868 14.5452 7.50913 14.5452 10C14.5452 12.491 12.5406 14.5114 10.0565 14.5421C10.0758 14.5421 10.094 14.5455 10.1133 14.5455C12.6247 14.5455 14.6588 12.5114 14.6588 10C14.6588 7.48868 12.6247 5.45459 10.1133 5.45459Z",fill:"black"}),(0,v.jsx)("path",{d:"M13.9769 12.4204C14.3632 11.7522 14.5871 10.9795 14.5871 10.1522C14.5874 9.68602 14.5157 9.22262 14.3746 8.77832C14.4826 9.16696 14.5451 9.57377 14.5451 9.99764C14.5451 10.8249 14.3212 11.5976 13.9348 12.2658L13.9371 12.2704L9.51892 19.9976H9.65074L13.9769 12.4204Z",fill:"white",fillOpacity:"0.2"}),(0,v.jsx)("path",{d:"M10 0.113636C15.5034 0.113636 19.9682 4.56023 20 10.0568C20 10.0375 20.0011 10.0193 20.0011 10C20.0011 4.47727 15.5239 0 10.0011 0C4.47841 0 0 4.47727 0 10C0 10.0193 0.00113639 10.0375 0.00113639 10.0568C0.0318182 4.56023 4.49659 0.113636 10 0.113636Z",fill:"white",fillOpacity:"0.2"}),(0,v.jsx)("path",{d:"M10 19.8865C15.5034 19.8865 19.9682 15.4399 20 9.94336C20 9.96268 20.0011 9.98086 20.0011 10.0002C20.0011 15.5229 15.5239 20.0002 10.0011 20.0002C4.47841 20.0002 0 15.5229 0 10.0002C0 9.98086 0.00113639 9.96268 0.00113639 9.94336C0.0318182 15.4399 4.49659 19.8865 10.0011 19.8865H10Z",fill:"black",fillOpacity:"0.15"})]})}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("filter",{id:"filter0_ii_927_5781",x:0,y:"-0.235294",width:20,height:"20.4706",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,v.jsx)("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),(0,v.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,v.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,v.jsx)("feOffset",{dy:"0.235294"}),(0,v.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,v.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,v.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"}),(0,v.jsx)("feBlend",{mode:"normal",in2:"shape",result:"effect1_innerShadow_927_5781"}),(0,v.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,v.jsx)("feOffset",{dy:"-0.235294"}),(0,v.jsx)("feGaussianBlur",{stdDeviation:"0.235294"}),(0,v.jsx)("feComposite",{in2:"hardAlpha",operator:"arithmetic",k2:-1,k3:1}),(0,v.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),(0,v.jsx)("feBlend",{mode:"normal",in2:"effect1_innerShadow_927_5781",result:"effect2_innerShadow_927_5781"})]}),(0,v.jsxs)("linearGradient",{id:"paint0_linear_927_5781",x1:"2.42521",y1:"7.61591",x2:"8.39112",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,v.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_927_5781",x1:"11.6932",y1:"17.7844",x2:"5.06136",y2:"13.8981",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,v.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),(0,v.jsxs)("linearGradient",{id:"paint2_linear_927_5781",x1:"12.9438",y1:"4.75004",x2:"14.6143",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,v.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),(0,v.jsxs)("linearGradient",{id:"paint3_linear_927_5781",x1:"12.9428",y1:"4.75004",x2:"14.6132",y2:"12.0569",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#EA6100",stopOpacity:"0.3"}),(0,v.jsx)("stop",{offset:"0.66",stopColor:"#EA6100",stopOpacity:0})]}),(0,v.jsxs)("linearGradient",{id:"paint4_linear_927_5781",x1:"2.42441",y1:"7.61591",x2:"8.39032",y2:"4.13068",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#A52714",stopOpacity:"0.6"}),(0,v.jsx)("stop",{offset:"0.66",stopColor:"#A52714",stopOpacity:0})]}),(0,v.jsxs)("radialGradient",{id:"paint5_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.56818 5.44891) scale(9.55455)",children:[(0,v.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,v.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),(0,v.jsxs)("linearGradient",{id:"paint6_linear_927_5781",x1:"11.6932",y1:"17.7839",x2:"5.06136",y2:"13.8976",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#055524",stopOpacity:"0.4"}),(0,v.jsx)("stop",{offset:"0.33",stopColor:"#055524",stopOpacity:0})]}),(0,v.jsxs)("radialGradient",{id:"paint7_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(1.57975 4.60463) scale(8.86818)",children:[(0,v.jsx)("stop",{stopColor:"#3E2723",stopOpacity:"0.2"}),(0,v.jsx)("stop",{offset:1,stopColor:"#3E2723",stopOpacity:0})]}),(0,v.jsxs)("radialGradient",{id:"paint8_radial_927_5781",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.97775 10.0157) scale(9.98523)",children:[(0,v.jsx)("stop",{stopColor:"#263238",stopOpacity:"0.2"}),(0,v.jsx)("stop",{offset:1,stopColor:"#263238",stopOpacity:0})]}),(0,v.jsx)("clipPath",{id:"clip0_927_5781",children:(0,v.jsx)("rect",{width:20,height:20,rx:10,fill:"white"})})]})]}),nV=(0,v.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsxs)("g",{clipPath:"url(#clip0_927_5847)",children:[(0,v.jsx)("path",{d:"M19.011 6.71023C18.5898 5.69685 17.7355 4.60269 17.0665 4.25681C17.5436 5.18063 17.8747 6.17276 18.0481 7.19792L18.0499 7.21417C16.954 4.48315 15.0963 3.38023 13.5782 0.981835C13.5014 0.860539 13.4246 0.738994 13.3498 0.610696C13.3071 0.537418 13.2728 0.471393 13.2431 0.410621C13.1801 0.288713 13.1316 0.159878 13.0985 0.0267267C13.0985 0.0205825 13.0963 0.0146369 13.0923 0.0100242C13.0882 0.00541151 13.0826 0.00245454 13.0765 0.00171737C13.0705 7.85858e-05 13.0642 7.85858e-05 13.0582 0.00171737C13.057 0.00171737 13.055 0.00396821 13.0535 0.0044684C13.052 0.00496859 13.0487 0.00721943 13.0465 0.00821981L13.0502 0.00171737C10.6156 1.42725 9.78901 4.06574 9.71399 5.38624C8.74136 5.45292 7.81141 5.81121 7.04549 6.41437C6.96561 6.34671 6.88212 6.28343 6.79539 6.2248C6.57456 5.45174 6.56514 4.6336 6.76813 3.85566C5.87401 4.28877 5.07954 4.90279 4.43501 5.65884H4.43051C4.04636 5.17191 4.07337 3.5663 4.09538 3.23093C3.98174 3.2766 3.87326 3.33419 3.77176 3.40274C3.43264 3.64477 3.11562 3.91635 2.8244 4.2143C2.49255 4.55075 2.18946 4.91441 1.91831 5.30146V5.30296V5.3012C1.29521 6.18444 0.853213 7.18234 0.617826 8.23731L0.604821 8.30133C0.586564 8.38661 0.52079 8.81377 0.509535 8.90656C0.509535 8.91381 0.508035 8.92056 0.507285 8.92781C0.42244 9.36882 0.369864 9.81542 0.349976 10.2641V10.3141C0.354259 12.7396 1.26772 15.0754 2.91002 16.8604C4.55233 18.6454 6.80415 19.7498 9.22094 19.9556C11.6377 20.1615 14.0439 19.4538 15.9644 17.9723C17.8849 16.4908 19.1803 14.3431 19.5947 11.9532C19.6109 11.8282 19.6242 11.7044 19.6387 11.5781C19.8384 9.92791 19.6222 8.25404 19.01 6.70873L19.011 6.71023ZM7.83928 14.2981C7.88455 14.3198 7.92707 14.3433 7.97358 14.3641L7.98034 14.3684C7.93332 14.3458 7.8863 14.3224 7.83928 14.2981ZM18.0501 7.21692V7.20767L18.0519 7.21792L18.0501 7.21692Z",fill:"url(#paint0_linear_927_5847)"}),(0,v.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint1_radial_927_5847)"}),(0,v.jsx)("path",{d:"M19.0109 6.71026C18.5898 5.69688 17.7354 4.60272 17.0664 4.25684C17.5435 5.18066 17.8746 6.17278 18.0481 7.19794V7.20719L18.0498 7.21745C18.797 9.35551 18.689 11.6997 17.7482 13.7599C16.6373 16.1435 13.9493 18.5867 9.7402 18.4667C5.19349 18.3379 1.18699 14.9629 0.439211 10.5437C0.30291 9.84668 0.439211 9.4933 0.507737 8.92684C0.414265 9.36685 0.362102 9.81463 0.351929 10.2643V10.3144C0.356212 12.7399 1.26967 15.0757 2.91198 16.8607C4.55429 18.6456 6.8061 19.7501 9.2229 19.9559C11.6397 20.1617 14.0458 19.4541 15.9664 17.9725C17.8869 16.491 19.1822 14.3434 19.5966 11.9535C19.6129 11.8284 19.6262 11.7046 19.6407 11.5783C19.8403 9.92819 19.6242 8.25431 19.0119 6.70901L19.0109 6.71026Z",fill:"url(#paint2_radial_927_5847)"}),(0,v.jsx)("path",{d:"M14.2993 7.84794C14.3203 7.8627 14.3398 7.87745 14.3595 7.89221C14.1161 7.46047 13.813 7.06519 13.4592 6.71802C10.4456 3.70439 12.6696 0.18557 13.0445 0.00550206L13.0483 0C10.6136 1.42553 9.78706 4.06402 9.71204 5.38452C9.82508 5.37677 9.93712 5.36726 10.0527 5.36726C10.9164 5.36893 11.7644 5.59929 12.5103 6.03492C13.2562 6.47055 13.8734 7.09592 14.2993 7.84744V7.84794Z",fill:"url(#paint3_radial_927_5847)"}),(0,v.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint4_radial_927_5847)"}),(0,v.jsx)("path",{d:"M10.0577 8.45061C10.0417 8.6917 9.18992 9.52326 8.89206 9.52326C6.13602 9.52326 5.68835 11.1906 5.68835 11.1906C5.8104 12.5947 6.78877 13.7516 7.97146 14.3618C8.02548 14.3898 8.08025 14.4151 8.13502 14.4399C8.22989 14.4819 8.32476 14.5207 8.41963 14.5564C8.82553 14.7 9.25065 14.7821 9.68085 14.7997C14.5127 15.0263 15.448 9.02257 11.9615 7.27942C12.7839 7.1724 13.6168 7.37463 14.2986 7.84688C13.8727 7.09536 13.2555 6.46999 12.5096 6.03436C11.7637 5.59873 10.9158 5.36837 10.052 5.3667C9.93695 5.3667 9.82441 5.3762 9.71136 5.38396C8.73874 5.45064 7.80879 5.80893 7.04286 6.41209C7.19067 6.53714 7.35748 6.7042 7.70886 7.05058C8.36661 7.69857 10.0535 8.36983 10.0572 8.44861L10.0577 8.45061Z",fill:"url(#paint5_radial_927_5847)"}),(0,v.jsx)("path",{d:"M6.59134 6.0923C6.66987 6.14231 6.73464 6.18583 6.79141 6.2251C6.57058 5.45204 6.56117 4.63389 6.76415 3.85596C5.87003 4.28907 5.07556 4.90308 4.43103 5.65913C4.4783 5.65788 5.88432 5.63262 6.59134 6.0923Z",fill:"url(#paint6_radial_927_5847)"}),(0,v.jsx)("path",{d:"M0.437567 10.5439C1.1856 14.963 5.19185 18.3393 9.73855 18.4668C13.9476 18.5859 16.6361 16.1425 17.7466 13.7601C18.6873 11.6998 18.7954 9.35569 18.0482 7.21762V7.20837C18.0482 7.20111 18.0467 7.19686 18.0482 7.19911L18.0499 7.21537C18.3938 9.46046 17.2519 11.6345 15.4665 13.1076L15.4609 13.1201C11.9821 15.9536 8.6534 14.8292 7.98064 14.3706C7.93363 14.348 7.88661 14.3246 7.83959 14.3003C5.81158 13.3309 4.97352 11.4842 5.15358 9.89862C4.67218 9.90573 4.19905 9.77307 3.79151 9.51672C3.38397 9.26038 3.05952 8.89134 2.85747 8.45433C3.38987 8.1282 3.99692 7.94382 4.62077 7.91878C5.24461 7.89374 5.86448 8.02887 6.42131 8.31128C7.56906 8.83225 8.87507 8.8836 10.0602 8.45433C10.0564 8.37555 8.36954 7.70405 7.71179 7.05631C7.36041 6.70993 7.1936 6.54312 7.04579 6.41782C6.96591 6.35016 6.88243 6.28688 6.7957 6.22825C6.73818 6.18898 6.6734 6.14647 6.59562 6.09545C5.88861 5.63578 4.48258 5.66104 4.43607 5.66229H4.43156C4.04742 5.17535 4.07443 3.56975 4.09644 3.23438C3.9828 3.28005 3.87431 3.33764 3.77282 3.40619C3.4337 3.64822 3.11667 3.91979 2.82546 4.21774C2.49242 4.55325 2.18808 4.91607 1.91562 5.3024V5.3039V5.30215C1.29252 6.18539 0.850521 7.18329 0.615133 8.23825C0.610381 8.25801 0.266002 9.76357 0.435816 10.5444L0.437567 10.5439Z",fill:"url(#paint7_radial_927_5847)"}),(0,v.jsx)("path",{d:"M13.459 6.71761C13.8128 7.06516 14.1159 7.46087 14.3593 7.89305C14.4126 7.93331 14.4624 7.97333 14.5046 8.01209C16.7022 10.0378 15.5508 12.9014 15.465 13.104C17.2502 11.6332 18.3911 9.45763 18.0485 7.21179C16.952 4.47826 15.0923 3.37535 13.5768 0.976952C13.5 0.855657 13.4232 0.734111 13.3484 0.605813C13.3057 0.532535 13.2714 0.466511 13.2417 0.405738C13.1787 0.283831 13.1302 0.154995 13.0971 0.0218439C13.0971 0.0156997 13.0949 0.0097541 13.0909 0.0051414C13.0868 0.000528701 13.0812 -0.00242828 13.0751 -0.00316545C13.0691 -0.00480423 13.0628 -0.00480423 13.0568 -0.00316545C13.0556 -0.00316545 13.0536 -0.000914601 13.0521 -0.000414413C13.0506 8.57743e-05 13.0473 0.00233662 13.0451 0.00333699C12.6702 0.181154 10.4466 3.70222 13.4602 6.71335L13.459 6.71761Z",fill:"url(#paint8_radial_927_5847)"}),(0,v.jsx)("path",{d:"M14.5043 8.01315C14.462 7.97439 14.4122 7.93437 14.359 7.8941C14.3392 7.87935 14.3197 7.86459 14.2987 7.84984C13.6169 7.37759 12.784 7.17536 11.9616 7.28238C15.4479 9.02553 14.5125 15.0278 9.68095 14.8027C9.25075 14.785 8.82562 14.703 8.41973 14.5594C8.32486 14.5238 8.22999 14.485 8.13512 14.4428C8.08035 14.4178 8.02558 14.3928 7.97156 14.3648L7.97831 14.369C8.65206 14.829 11.9798 15.9526 15.4586 13.1186L15.4641 13.1061C15.5509 12.9035 16.7023 10.0399 14.5038 8.01415L14.5043 8.01315Z",fill:"url(#paint9_radial_927_5847)"}),(0,v.jsx)("path",{d:"M5.68842 11.1892C5.68842 11.1892 6.13583 9.52179 8.89212 9.52179C9.18998 9.52179 10.0425 8.69023 10.0578 8.44914C8.8727 8.8784 7.56669 8.82706 6.41894 8.30608C5.86211 8.02367 5.24224 7.88855 4.61839 7.91359C3.99455 7.93863 3.3875 8.123 2.8551 8.44914C3.05715 8.88615 3.3816 9.25518 3.78914 9.51153C4.19668 9.76787 4.66981 9.90053 5.15121 9.89343C4.97165 11.4783 5.80946 13.3247 7.83722 14.2951C7.88249 14.3168 7.925 14.3403 7.97152 14.3611C6.78783 13.7496 5.81046 12.5932 5.68842 11.1899V11.1892Z",fill:"url(#paint10_radial_927_5847)"}),(0,v.jsx)("path",{d:"M19.0112 6.71023C18.59 5.69685 17.7357 4.60269 17.0667 4.25681C17.5438 5.18063 17.8749 6.17276 18.0483 7.19792L18.0501 7.21417C16.9542 4.48315 15.0965 3.38023 13.5784 0.981835C13.5016 0.860539 13.4249 0.738994 13.3501 0.610696C13.3073 0.537418 13.2731 0.471393 13.2433 0.410621C13.1803 0.288713 13.1318 0.159878 13.0987 0.0267267C13.0988 0.0205825 13.0966 0.0146369 13.0925 0.0100242C13.0884 0.00541151 13.0828 0.00245454 13.0767 0.00171737C13.0708 7.85859e-05 13.0644 7.85859e-05 13.0585 0.00171737C13.0572 0.00171737 13.0552 0.00396821 13.0537 0.0044684C13.0522 0.00496859 13.049 0.00721943 13.0467 0.00821981L13.0505 0.00171737C10.6158 1.42725 9.78925 4.06574 9.71422 5.38624C9.82726 5.37848 9.9393 5.36898 10.0548 5.36898C10.9186 5.37065 11.7666 5.60101 12.5125 6.03664C13.2584 6.47227 13.8756 7.09764 14.3014 7.84916C13.6196 7.37691 12.7868 7.17468 11.9643 7.2817C15.4506 9.02485 14.5153 15.0271 9.68371 14.802C9.25351 14.7843 8.82838 14.7023 8.42248 14.5587C8.32761 14.5232 8.23275 14.4843 8.13788 14.4421C8.08311 14.4171 8.02834 14.3921 7.97432 14.3641L7.98107 14.3684C7.93405 14.3458 7.88703 14.3224 7.84002 14.2981C7.88528 14.3198 7.9278 14.3433 7.97432 14.3641C6.79062 13.7524 5.81326 12.5959 5.69121 11.1929C5.69121 11.1929 6.13863 9.52554 8.89491 9.52554C9.19277 9.52554 10.0453 8.69398 10.0606 8.45289C10.0568 8.37411 8.36996 7.7026 7.71222 7.05486C7.36084 6.70848 7.19402 6.54167 7.04622 6.41637C6.96634 6.34871 6.88285 6.28543 6.79612 6.2268C6.57529 5.45374 6.56588 4.6356 6.76886 3.85766C5.87474 4.29077 5.08027 4.90479 4.43574 5.66084H4.43124C4.04709 5.17391 4.0741 3.5683 4.09611 3.23293C3.98247 3.2786 3.87399 3.33619 3.77249 3.40474C3.43337 3.64677 3.11635 3.91835 2.82514 4.2163C2.49328 4.55275 2.19019 4.91641 1.91905 5.30345V5.30496V5.30321C1.29595 6.18644 0.853946 7.18434 0.618558 8.23931L0.605554 8.30333C0.587297 8.38861 0.505516 8.82177 0.493762 8.91481C0.418959 9.36194 0.371188 9.81318 0.350708 10.2661V10.3161C0.354992 12.7416 1.26845 15.0774 2.91076 16.8624C4.55307 18.6474 6.80488 19.7518 9.22168 19.9576C11.6385 20.1635 14.0446 19.4558 15.9652 17.9743C17.8857 16.4928 19.181 14.3451 19.5954 11.9552C19.6117 11.8302 19.6249 11.7064 19.6394 11.5801C19.8391 9.92991 19.623 8.25604 19.0107 6.71073L19.0112 6.71023ZM18.0496 7.20817L18.0513 7.21842L18.0496 7.20817Z",fill:"url(#paint11_linear_927_5847)"})]}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_927_5847",x1:"17.728",y1:"3.09786",x2:"1.63621",y2:"18.6237",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{offset:"0.048",stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.111",stopColor:"#FFE847"}),(0,v.jsx)("stop",{offset:"0.225",stopColor:"#FFC830"}),(0,v.jsx)("stop",{offset:"0.368",stopColor:"#FF980E"}),(0,v.jsx)("stop",{offset:"0.401",stopColor:"#FF8B16"}),(0,v.jsx)("stop",{offset:"0.462",stopColor:"#FF672A"}),(0,v.jsx)("stop",{offset:"0.534",stopColor:"#FF3647"}),(0,v.jsx)("stop",{offset:"0.705",stopColor:"#E31587"})]}),(0,v.jsxs)("radialGradient",{id:"paint1_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(17.1052 2.25108) scale(20.2076)",children:[(0,v.jsx)("stop",{offset:"0.129",stopColor:"#FFBD4F"}),(0,v.jsx)("stop",{offset:"0.186",stopColor:"#FFAC31"}),(0,v.jsx)("stop",{offset:"0.247",stopColor:"#FF9D17"}),(0,v.jsx)("stop",{offset:"0.283",stopColor:"#FF980E"}),(0,v.jsx)("stop",{offset:"0.403",stopColor:"#FF563B"}),(0,v.jsx)("stop",{offset:"0.467",stopColor:"#FF3750"}),(0,v.jsx)("stop",{offset:"0.71",stopColor:"#F5156C"}),(0,v.jsx)("stop",{offset:"0.782",stopColor:"#EB0878"}),(0,v.jsx)("stop",{offset:"0.86",stopColor:"#E50080"})]}),(0,v.jsxs)("radialGradient",{id:"paint2_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.6024 10.5042) scale(20.2076)",children:[(0,v.jsx)("stop",{offset:"0.3",stopColor:"#960E18"}),(0,v.jsx)("stop",{offset:"0.351",stopColor:"#B11927",stopOpacity:"0.74"}),(0,v.jsx)("stop",{offset:"0.435",stopColor:"#DB293D",stopOpacity:"0.343"}),(0,v.jsx)("stop",{offset:"0.497",stopColor:"#F5334B",stopOpacity:"0.094"}),(0,v.jsx)("stop",{offset:"0.53",stopColor:"#FF3750",stopOpacity:0})]}),(0,v.jsxs)("radialGradient",{id:"paint3_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.1034 -2.25084) scale(14.638)",children:[(0,v.jsx)("stop",{offset:"0.132",stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.252",stopColor:"#FFDC3E"}),(0,v.jsx)("stop",{offset:"0.506",stopColor:"#FF9D12"}),(0,v.jsx)("stop",{offset:"0.526",stopColor:"#FF980E"})]}),(0,v.jsxs)("radialGradient",{id:"paint4_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(7.35173 15.7558) scale(9.62111)",children:[(0,v.jsx)("stop",{offset:"0.353",stopColor:"#3A8EE6"}),(0,v.jsx)("stop",{offset:"0.472",stopColor:"#5C79F0"}),(0,v.jsx)("stop",{offset:"0.669",stopColor:"#9059FF"}),(0,v.jsx)("stop",{offset:1,stopColor:"#C139E6"})]}),(0,v.jsxs)("radialGradient",{id:"paint5_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(10.5799 8.76923) rotate(-13.5916) scale(5.10194 5.97309)",children:[(0,v.jsx)("stop",{offset:"0.206",stopColor:"#9059FF",stopOpacity:0}),(0,v.jsx)("stop",{offset:"0.278",stopColor:"#8C4FF3",stopOpacity:"0.064"}),(0,v.jsx)("stop",{offset:"0.747",stopColor:"#7716A8",stopOpacity:"0.45"}),(0,v.jsx)("stop",{offset:"0.975",stopColor:"#6E008B",stopOpacity:"0.6"})]}),(0,v.jsxs)("radialGradient",{id:"paint6_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35238 1.50057) scale(6.9226)",children:[(0,v.jsx)("stop",{stopColor:"#FFE226"}),(0,v.jsx)("stop",{offset:"0.121",stopColor:"#FFDB27"}),(0,v.jsx)("stop",{offset:"0.295",stopColor:"#FFC82A"}),(0,v.jsx)("stop",{offset:"0.502",stopColor:"#FFA930"}),(0,v.jsx)("stop",{offset:"0.732",stopColor:"#FF7E37"}),(0,v.jsx)("stop",{offset:"0.792",stopColor:"#FF7139"})]}),(0,v.jsxs)("radialGradient",{id:"paint7_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.8545 -3.00121) scale(29.5361)",children:[(0,v.jsx)("stop",{offset:"0.113",stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.456",stopColor:"#FF980E"}),(0,v.jsx)("stop",{offset:"0.622",stopColor:"#FF5634"}),(0,v.jsx)("stop",{offset:"0.716",stopColor:"#FF3647"}),(0,v.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]}),(0,v.jsxs)("radialGradient",{id:"paint8_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.3996 -1.36343) rotate(83.976) scale(21.6445 14.2051)",children:[(0,v.jsx)("stop",{stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.06",stopColor:"#FFE847"}),(0,v.jsx)("stop",{offset:"0.168",stopColor:"#FFC830"}),(0,v.jsx)("stop",{offset:"0.304",stopColor:"#FF980E"}),(0,v.jsx)("stop",{offset:"0.356",stopColor:"#FF8B16"}),(0,v.jsx)("stop",{offset:"0.455",stopColor:"#FF672A"}),(0,v.jsx)("stop",{offset:"0.57",stopColor:"#FF3647"}),(0,v.jsx)("stop",{offset:"0.737",stopColor:"#E31587"})]}),(0,v.jsxs)("radialGradient",{id:"paint9_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(9.35233 4.00165) scale(18.4369)",children:[(0,v.jsx)("stop",{offset:"0.137",stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.48",stopColor:"#FF980E"}),(0,v.jsx)("stop",{offset:"0.592",stopColor:"#FF5634"}),(0,v.jsx)("stop",{offset:"0.655",stopColor:"#FF3647"}),(0,v.jsx)("stop",{offset:"0.904",stopColor:"#E31587"})]}),(0,v.jsxs)("radialGradient",{id:"paint10_radial_927_5847",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(14.1041 5.00184) scale(20.1801)",children:[(0,v.jsx)("stop",{offset:"0.094",stopColor:"#FFF44F"}),(0,v.jsx)("stop",{offset:"0.231",stopColor:"#FFE141"}),(0,v.jsx)("stop",{offset:"0.509",stopColor:"#FFAF1E"}),(0,v.jsx)("stop",{offset:"0.626",stopColor:"#FF980E"})]}),(0,v.jsxs)("linearGradient",{id:"paint11_linear_927_5847",x1:"17.5331",y1:"3.01533",x2:"3.84302",y2:"16.708",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{offset:"0.167",stopColor:"#FFF44F",stopOpacity:"0.8"}),(0,v.jsx)("stop",{offset:"0.266",stopColor:"#FFF44F",stopOpacity:"0.634"}),(0,v.jsx)("stop",{offset:"0.489",stopColor:"#FFF44F",stopOpacity:"0.217"}),(0,v.jsx)("stop",{offset:"0.6",stopColor:"#FFF44F",stopOpacity:0})]}),(0,v.jsx)("clipPath",{id:"clip0_927_5847",children:(0,v.jsx)("rect",{width:20,height:20,fill:"white"})})]})]}),nG=(0,v.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M17.2924 5.22043L17.7256 4.15905L16.4982 2.8883C15.8339 2.22404 14.4187 2.61393 14.4187 2.61393L12.8158 0.794434H7.16242L5.55231 2.62115C5.55231 2.62115 4.13715 2.23848 3.47289 2.8883L2.24545 4.15183L2.67866 5.21321L2.13715 6.78721L3.9422 13.6681C4.31765 15.141 4.57036 15.7114 5.63173 16.4623L8.93137 18.7006C9.24906 18.8955 9.63895 19.2349 9.99274 19.2349C10.3465 19.2349 10.7364 18.8955 11.0541 18.7006L14.3538 16.4623C15.4151 15.7114 15.6678 15.141 16.0433 13.6681L17.8483 6.78721L17.2924 5.22043Z",fill:"url(#paint0_linear_927_5861)"}),(0,v.jsx)("path",{d:"M13.9711 3.78343C13.9711 3.78343 16.0433 6.28884 16.0433 6.81592C16.0433 7.35744 15.7834 7.49462 15.5234 7.77621L13.9711 9.43686C13.8267 9.58126 13.5162 9.82675 13.6967 10.2527C13.8772 10.686 14.1299 11.2203 13.8411 11.769C13.5523 12.3249 13.0469 12.6932 12.722 12.6354C12.2387 12.4786 11.7777 12.2602 11.3502 11.9856C11.0758 11.8051 10.1949 11.0758 10.1949 10.7943C10.1949 10.5127 11.1047 10 11.278 9.89895C11.444 9.78343 12.2166 9.33577 12.231 9.16249C12.2455 8.9892 12.2455 8.94588 12.0144 8.51267C11.7834 8.07946 11.379 7.50184 11.4368 7.12639C11.509 6.75094 12.1588 6.54877 12.6426 6.36827L14.1372 5.80509C14.2527 5.74733 14.2238 5.69679 13.8772 5.66068C13.5307 5.6318 12.5559 5.50184 12.1155 5.62458C11.6751 5.74733 10.9386 5.93505 10.8664 6.03614C10.8086 6.13722 10.7509 6.13722 10.8159 6.48379L11.2346 8.75816C11.2635 9.04697 11.3213 9.24191 11.018 9.31411C10.7003 9.38632 10.1733 9.50906 9.99276 9.50906C9.81225 9.50906 9.27796 9.38632 8.96749 9.31411C8.65702 9.24191 8.71478 9.04697 8.75088 8.75816C8.77976 8.46935 9.09745 6.82314 9.16243 6.48379C9.23464 6.13722 9.16965 6.13722 9.11189 6.03614C9.03969 5.93505 8.29601 5.74733 7.85558 5.62458C7.42236 5.50184 6.44041 5.6318 6.09384 5.66791C5.74727 5.69679 5.71839 5.74011 5.83391 5.81231L7.3285 6.36827C7.80503 6.54877 8.46929 6.75094 8.53428 7.12639C8.60648 7.50906 8.19493 8.07946 7.95666 8.51267C7.71839 8.94588 7.72561 8.9892 7.74005 9.16249C7.75449 9.33577 8.53428 9.78343 8.69312 9.89895C8.86641 10.0073 9.77615 10.5127 9.77615 10.7943C9.77615 11.0758 8.91695 11.8051 8.62814 11.9856C8.20063 12.2602 7.73957 12.4786 7.2563 12.6354C6.93139 12.6932 6.42597 12.3249 6.12994 11.769C5.84113 11.2203 6.10106 10.686 6.27435 10.2527C6.45485 9.81953 6.1516 9.58848 5.99998 9.43686L4.44763 7.77621C4.19493 7.50906 3.935 7.36466 3.935 6.83036C3.935 6.29606 6.0072 3.79787 6.0072 3.79787L7.97832 4.11556C8.20937 4.11556 8.722 3.92061 9.19132 3.75455C9.66063 3.61014 9.98554 3.5957 9.98554 3.5957C9.98554 3.5957 10.3032 3.5957 10.7798 3.75455C11.2563 3.91339 11.7617 4.11556 11.9928 4.11556C12.231 4.11556 13.9783 3.77621 13.9783 3.77621L13.9711 3.78343ZM12.4188 13.3719C12.5487 13.4441 12.4693 13.6029 12.3465 13.6896L10.5126 15.1192C10.3682 15.2636 10.1372 15.4802 9.98554 15.4802C9.83391 15.4802 9.61009 15.2636 9.45846 15.1192C8.8506 14.6351 8.23683 14.1586 7.61731 13.6896C7.50178 13.6029 7.42236 13.4513 7.54511 13.3719L8.62814 12.7943C9.05864 12.5665 9.51417 12.3897 9.98554 12.2672C10.0938 12.2672 10.7798 12.5127 11.3357 12.7943L12.4188 13.3719Z",fill:"white"}),(0,v.jsx)("path",{d:"M14.4332 2.62115L12.8159 0.794434H7.16243L5.55232 2.62115C5.55232 2.62115 4.13716 2.23848 3.4729 2.8883C3.4729 2.8883 5.35016 2.72223 5.99998 3.77638L7.99276 4.11573C8.2238 4.11573 8.73644 3.92079 9.20575 3.75472C9.67507 3.61032 9.99998 3.59588 9.99998 3.59588C9.99998 3.59588 10.3177 3.59588 10.7942 3.75472C11.2707 3.91357 11.7761 4.11573 12.0072 4.11573C12.2455 4.11573 13.9928 3.77638 13.9928 3.77638C14.6426 2.72223 16.5198 2.8883 16.5198 2.8883C15.8556 2.22404 14.4404 2.61393 14.4404 2.61393",fill:"url(#paint1_linear_927_5861)"}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_927_5861",x1:"2.13715",y1:"10.1991",x2:"17.8483",y2:"10.1991",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{offset:"0.4",stopColor:"#FF5500"}),(0,v.jsx)("stop",{offset:"0.6",stopColor:"#FF2000"})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_927_5861",x1:"3.73384",y1:"2.4883",x2:"16.5198",y2:"2.4883",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#FF452A"}),(0,v.jsx)("stop",{offset:1,stopColor:"#FF2000"})]})]})]}),nP=(0,v.jsxs)("svg",{"aria-hidden":"true",width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsxs)("g",{clipPath:"url(#clip0_927_5865)",children:[(0,v.jsx)("path",{d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint0_linear_927_5865)"}),(0,v.jsx)("path",{opacity:"0.35",d:"M18.0547 14.8828C17.7865 15.0222 17.5099 15.1448 17.2266 15.25C16.3293 15.584 15.3792 15.7533 14.4219 15.75C10.7266 15.75 7.50781 13.2109 7.50781 9.94531C7.51262 9.50803 7.63385 9.07993 7.85905 8.70506C8.08424 8.33019 8.40526 8.0221 8.78906 7.8125C5.44531 7.95312 4.58594 11.4375 4.58594 13.4766C4.58594 19.2578 9.90625 19.8359 11.0547 19.8359C11.6719 19.8359 12.6016 19.6562 13.1641 19.4766L13.2656 19.4453C15.4183 18.7014 17.2534 17.2465 18.4688 15.3203C18.5041 15.2618 18.5192 15.1933 18.5119 15.1253C18.5046 15.0574 18.4752 14.9937 18.4282 14.944C18.3812 14.8944 18.3192 14.8615 18.2518 14.8505C18.1843 14.8394 18.1151 14.8508 18.0547 14.8828Z",fill:"url(#paint1_radial_927_5865)"}),(0,v.jsx)("path",{d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint2_linear_927_5865)"}),(0,v.jsx)("path",{opacity:"0.41",d:"M8.2578 18.8516C7.56239 18.4196 6.95961 17.854 6.48436 17.1875C5.94166 16.4447 5.56809 15.5921 5.38987 14.6896C5.21165 13.787 5.23311 12.8565 5.45272 11.9631C5.67234 11.0697 6.08479 10.2353 6.66115 9.51826C7.23751 8.80123 7.96379 8.21903 8.78905 7.8125C9.03905 7.69531 9.45311 7.49219 10.0078 7.5C10.3981 7.50302 10.7824 7.59627 11.1308 7.77245C11.4791 7.94864 11.7819 8.20299 12.0156 8.51562C12.3299 8.93835 12.5023 9.4498 12.5078 9.97656C12.5078 9.96094 14.4219 3.75781 6.2578 3.75781C2.82811 3.75781 0.00780015 7.00781 0.00780015 9.86719C-0.00584162 11.3776 0.317079 12.8721 0.953112 14.2422C1.99473 16.4602 3.81447 18.2185 6.06689 19.1834C8.3193 20.1483 10.8476 20.2526 13.1719 19.4766C12.3576 19.7337 11.4972 19.811 10.6501 19.7031C9.80297 19.5952 8.98941 19.3047 8.26561 18.8516H8.2578Z",fill:"url(#paint3_radial_927_5865)"}),(0,v.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint4_radial_927_5865)"}),(0,v.jsx)("path",{d:"M11.9062 11.625C11.8359 11.7031 11.6406 11.8203 11.6406 12.0625C11.6406 12.2656 11.7734 12.4688 12.0156 12.6328C13.1328 13.4141 15.25 13.3047 15.2578 13.3047C16.0907 13.3041 16.9081 13.0802 17.625 12.6562C18.3467 12.2341 18.9456 11.6307 19.3622 10.9057C19.7788 10.1808 19.9986 9.35955 20 8.52344C20.0234 6.77344 19.375 5.60937 19.1172 5.09375C17.4531 1.85937 13.8828 4.89564e-08 10 4.89564e-08C7.37202 -0.00025981 4.84956 1.03398 2.97819 2.87904C1.10682 4.7241 0.0369559 7.23166 0 9.85938C0.0390625 7.00781 2.875 4.70312 6.25 4.70312C6.52344 4.70312 8.08594 4.72656 9.53125 5.48438C10.5466 5.98895 11.3875 6.78627 11.9453 7.77344C12.4219 8.60156 12.5078 9.65625 12.5078 10.0781C12.5078 10.5 12.2969 11.1172 11.8984 11.6328L11.9062 11.625Z",fill:"url(#paint5_radial_927_5865)"})]}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_927_5865",x1:"4.58594",y1:"13.8281",x2:"18.5234",y2:"13.8281",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#0C59A4"}),(0,v.jsx)("stop",{offset:1,stopColor:"#114A8B"})]}),(0,v.jsxs)("radialGradient",{id:"paint1_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(12.2813 13.9332) scale(7.45313 7.08047)",children:[(0,v.jsx)("stop",{offset:"0.7",stopOpacity:0}),(0,v.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,v.jsx)("stop",{offset:1})]}),(0,v.jsxs)("linearGradient",{id:"paint2_linear_927_5865",x1:"11.9297",y1:"7.78125",x2:"3.23436",y2:"17.2578",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"#1B9DE2"}),(0,v.jsx)("stop",{offset:"0.2",stopColor:"#1595DF"}),(0,v.jsx)("stop",{offset:"0.7",stopColor:"#0680D7"}),(0,v.jsx)("stop",{offset:1,stopColor:"#0078D4"})]}),(0,v.jsxs)("radialGradient",{id:"paint3_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(5.51209 15.5419) rotate(-81.3844) scale(11.202 9.05011)",children:[(0,v.jsx)("stop",{offset:"0.8",stopOpacity:0}),(0,v.jsx)("stop",{offset:"0.9",stopOpacity:"0.5"}),(0,v.jsx)("stop",{offset:1})]}),(0,v.jsxs)("radialGradient",{id:"paint4_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(2.02266 3.69656) rotate(92.2906) scale(15.8251 33.7043)",children:[(0,v.jsx)("stop",{stopColor:"#35C1F1"}),(0,v.jsx)("stop",{offset:"0.1",stopColor:"#34C1ED"}),(0,v.jsx)("stop",{offset:"0.2",stopColor:"#2FC2DF"}),(0,v.jsx)("stop",{offset:"0.3",stopColor:"#2BC3D2"}),(0,v.jsx)("stop",{offset:"0.7",stopColor:"#36C752"})]}),(0,v.jsxs)("radialGradient",{id:"paint5_radial_927_5865",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(18.7547 6.03906) rotate(73.7398) scale(7.60156 6.18159)",children:[(0,v.jsx)("stop",{stopColor:"#66EB6E"}),(0,v.jsx)("stop",{offset:1,stopColor:"#66EB6E",stopOpacity:0})]}),(0,v.jsx)("clipPath",{id:"clip0_927_5865",children:(0,v.jsx)("rect",{width:20,height:20,fill:"white"})})]})]});var nY={Chrome:n$,FireFox:nV,Brave:nG,Edge:nP};let nJ=m.forwardRef(({browser:e},o)=>{let t;let n=null!=e?e:eI();switch(n){case"chrome":t=nY.Chrome;break;case"firefox":t=nY.FireFox;break;case"edge":t=nY.Edge}return t?(0,v.jsx)(nH,{children:t}):(0,v.jsx)(v.Fragment,{})});nJ.displayName="BrowserIcon";let nq={CONNECTED:"connected",CONNECTING:"connecting",EXPIRING:"expiring",FAILED:"failed",REJECTED:"rejected",NOTCONNECTED:"notconnected",UNAVAILABLE:"unavailable"},nQ={initial:{willChange:"transform,opacity",position:"relative",opacity:0,scale:.95},animate:{position:"relative",opacity:1,scale:1,transition:{ease:[.16,1,.3,1],duration:.4,delay:.05,position:{delay:0}}},exit:{position:"absolute",opacity:0,scale:.95,transition:{ease:[.16,1,.3,1],duration:.3}}},nX=({connectorId:e,switchConnectMethod:o,forceState:t})=>{var n,r,i,a;let s;let c=is(),{connect:l,connectors:p}=(0,d.$4)({onMutate:e=>{e.connector?E(nq.CONNECTING):E(nq.UNAVAILABLE)},onError(e){console.error(e)},onSettled(e,o){if(o){if(b(!0),setTimeout(()=>b(!1),3500),o.code)switch(o.code){case -32002:E(nq.NOTCONNECTED);break;case 4001:E(nq.REJECTED);break;default:E(nq.FAILED)}else o.message&&("User rejected request"===o.message?E(nq.REJECTED):E(nq.FAILED))}}}),[h,u]=(0,m.useState)(e),[x,b]=(0,m.useState)(!1),g=eE.filter(e=>e.id===h)[0];(0,m.useState)(9);let f=g.extensionIsInstalled&&g.extensionIsInstalled(),k=eI(),C=g.extensions?g.extensions[k]:void 0,w=g.extensions?{name:Object.keys(g.extensions)[0],label:Object.keys(g.extensions)[0].charAt(0).toUpperCase()+Object.keys(g.extensions)[0].slice(1),url:g.extensions[Object.keys(g.extensions)[0]]}:void 0,[j,E]=(0,m.useState)(t||(f?nq.CONNECTING:nq.UNAVAILABLE)),L=oI({CONNECTORNAME:g.name,CONNECTORSHORTNAME:null!==(n=g.shortName)&&void 0!==n?n:g.name,SUGGESTEDEXTENSIONBROWSER:null!==(r=null==w?void 0:w.label)&&void 0!==r?r:"your browser"}),F=()=>{var e;if(!f)return;let o=p.find(e=>e.id===h);o?l({connector:o,chainId:null===(e=c.options)||void 0===e?void 0:e.initialChainId}):E(nq.UNAVAILABLE)};return((0,m.useEffect)(()=>{if(j!==nq.UNAVAILABLE)return s=setTimeout(F,600),()=>{clearTimeout(s)}},[]),g)?"walletConnect"===g.id?(0,v.jsx)(eG,{children:(0,v.jsxs)(nE,{children:[(0,v.jsx)(eY,{children:"Invalid State"}),(0,v.jsx)(eq,{children:(0,v.jsx)(nR,{children:"WalletConnect does not have an injection flow. This state should never happen."})})]})}):(0,v.jsx)(eG,{children:(0,v.jsxs)(nE,{children:[(0,v.jsx)(nL,{children:(0,v.jsxs)(nF,{$shake:j===nq.FAILED||j===nq.REJECTED,$circle:!0,children:[(0,v.jsx)(y.M,{children:(j===nq.FAILED||j===nq.REJECTED)&&(0,v.jsx)(n_,{"aria-label":"Retry",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},whileTap:{scale:.9},transition:{duration:.1},onClick:F,children:(0,v.jsx)(nS,{children:(0,v.jsx)(nN,{open:x&&(j===nq.FAILED||j===nq.REJECTED),message:L.tryAgainQuestion,xOffset:-6,children:(0,v.jsx)(om,{})})})})}),(0,v.jsx)(nU,{logo:j===nq.UNAVAILABLE?(0,v.jsx)("div",{style:{transform:"scale(1.14)",position:"relative",width:"100%"},children:null!==(i=g.logos.transparent)&&void 0!==i?i:g.logos.default}):(0,v.jsx)(v.Fragment,{children:null!==(a=g.logos.transparent)&&void 0!==a?a:g.logos.default}),smallLogo:"injected"===g.id,connecting:j===nq.CONNECTING,unavailable:j===nq.UNAVAILABLE,countdown:j===nq.EXPIRING})]})}),(0,v.jsx)(eJ,{children:(0,v.jsxs)(y.M,{initial:!1,children:[j===nq.FAILED&&(0,v.jsxs)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:[(0,v.jsxs)(eq,{children:[(0,v.jsxs)(eQ,{$error:!0,children:[(0,v.jsx)(of,{}),L.injectionScreen_failed_h1]}),(0,v.jsx)(eX,{children:L.injectionScreen_failed_p})]}),g.scannable&&"coinbaseWallet"!==g.id&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oV,{}),(0,v.jsx)(td,{icon:(0,v.jsx)(ob,{}),onClick:()=>o(h),children:L.scanTheQRCode})]})]},nq.FAILED),j===nq.REJECTED&&(0,v.jsxs)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:[(0,v.jsxs)(eq,{style:{paddingBottom:28},children:[(0,v.jsx)(eQ,{children:L.injectionScreen_rejected_h1}),(0,v.jsx)(eX,{children:L.injectionScreen_rejected_p})]}),g.scannable&&"coinbaseWallet"!==g.id&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(oV,{}),(0,v.jsx)(td,{icon:(0,v.jsx)(ob,{}),onClick:()=>o(h),children:L.scanTheQRCode})]})]},nq.REJECTED),(j===nq.CONNECTING||j===nq.EXPIRING)&&(0,v.jsx)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:(0,v.jsxs)(eq,{style:{paddingBottom:28},children:[(0,v.jsx)(eQ,{children:"injected"===g.id?L.injectionScreen_connecting_injected_h1:L.injectionScreen_connecting_h1}),(0,v.jsx)(eX,{children:"injected"===g.id?L.injectionScreen_connecting_injected_p:L.injectionScreen_connecting_p})]})},nq.CONNECTING),j===nq.CONNECTED&&(0,v.jsx)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:(0,v.jsxs)(eq,{children:[(0,v.jsxs)(eQ,{$valid:!0,children:[(0,v.jsx)(ov,{})," ",L.injectionScreen_connected_h1]}),(0,v.jsx)(eX,{children:L.injectionScreen_connected_p})]})},nq.CONNECTED),j===nq.NOTCONNECTED&&(0,v.jsx)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:(0,v.jsxs)(eq,{children:[(0,v.jsx)(eQ,{children:L.injectionScreen_notconnected_h1}),(0,v.jsx)(eX,{children:L.injectionScreen_notconnected_p})]})},nq.NOTCONNECTED),j===nq.UNAVAILABLE&&(0,v.jsx)(nw,{initial:"initial",animate:"animate",exit:"exit",variants:nQ,children:C?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(eq,{style:{paddingBottom:18},children:[(0,v.jsx)(eQ,{children:L.injectionScreen_install_h1}),(0,v.jsx)(eX,{children:L.injectionScreen_install_p})]}),!f&&C&&(0,v.jsx)(td,{href:C,icon:(0,v.jsx)(nJ,{}),children:L.installTheExtension})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(eq,{style:{paddingBottom:12},children:[(0,v.jsx)(eQ,{children:L.injectionScreen_unavailable_h1}),(0,v.jsx)(eX,{children:L.injectionScreen_unavailable_p})]}),!f&&w&&(0,v.jsxs)(td,{href:null==w?void 0:w.url,icon:(0,v.jsx)(nJ,{browser:null==w?void 0:w.name}),children:["Install on ",null==w?void 0:w.label]})]})},nq.UNAVAILABLE)]})})]})}):(0,v.jsx)(eG,{children:(0,v.jsxs)(nE,{children:[(0,v.jsx)(eY,{children:"Invalid State"}),(0,v.jsx)(eq,{children:(0,v.jsx)(nR,{children:"No connectors match the id given. This state should never happen."})})]})})},nK=z(w.E.div)`
  z-index: 3;
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 2px;
  border-radius: var(--ck-qr-border-radius, 24px);
  background: var(--ck-qr-background, transparent);
  box-shadow: 0 0 0 1px var(--ck-qr-border-color);
  backface-visibility: hidden;
  svg {
    display: block;
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`,n1=z(w.E.div)`
  position: absolute;
  inset: 13px;
  svg {
    width: 100% !important;
    height: auto !important;
  }
`,n0=E.F4`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,n2=z(w.E.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /*
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    transform: scale(1.5) rotate(45deg);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1),
      rgba(255, 255, 255, 0)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${n0} 1000ms linear infinite both;
  }
  */
`,n5=z(w.E.div)`
  z-index: 6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: translateY(50%) scale(0.9999); // Shifting fix
`,n3=z(w.E.div)`
  z-index: 6;
  position: absolute;
  left: 50%;
  overflow: hidden;

  transform: translate(-50%, -50%) scale(0.9999); // Shifting fix

  svg {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${e=>e.$wcLogo?E.iv`
          width: 29%;
          height: 20.5%;
        `:E.iv`
          width: 28%;
          height: 28%;
          border-radius: 17px;
          &:before {
            pointer-events: none;
            z-index: 2;
            content: '';
            position: absolute;
            inset: 0;
            border-radius: inherit;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
          }
        `}
`,n4=(e,o)=>{let t=Array.prototype.slice.call(M.create(e,{errorCorrectionLevel:o}).modules.data,0),n=Math.sqrt(t.length);return t.reduce((e,o,t)=>(t%n==0?e.push([o]):e[e.length-1].push(o))&&e,[])};function n8({ecl:e="M",size:o=200,uri:t,clearArea:n=!1,image:r,imageBackground:i="transparent"}){let a=n?76:0,s=o-20,c=(0,m.useMemo)(()=>{let o=[],n=n4(t,e),c=s/n.length;if([{x:0,y:0},{x:1,y:0},{x:0,y:1}].forEach(({x:e,y:t})=>{let r=(n.length-7)*c*e,i=(n.length-7)*c*t;for(let a=0;a<3;a++)o.push((0,v.jsx)("rect",{fill:a%2!=0?"var(--ck-qr-background, var(--ck-body-background))":"var(--ck-qr-dot-color)",rx:-((a-2)*5)+(0===a?2:3),ry:-((a-2)*5)+(0===a?2:3),width:c*(7-2*a),height:c*(7-2*a),x:r+c*a,y:i+c*a},`${a}-${e}-${t}`))}),r){let d=(n.length-7)*c*1,l=(n.length-7)*c*1;o.push((0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("rect",{fill:i,rx:12,ry:12,width:7*c,height:7*c,x:d+0*c,y:l+0*c}),(0,v.jsx)("foreignObject",{width:7*c,height:7*c,x:d+0*c,y:l+0*c,children:(0,v.jsx)("div",{style:{borderRadius:12,overflow:"hidden"},children:r})})]}))}let p=Math.floor((a+25)/c),h=n.length/2-p/2,u=n.length/2+p/2-1;return n.forEach((e,t)=>{e.forEach((e,i)=>{n[t][i]&&!(t<7&&i<7||t>n.length-8&&i<7||t<7&&i>n.length-8)&&(r||!(t>h&&t<u&&i>h&&i<u))&&o.push((0,v.jsx)("circle",{cx:t*c+c/2,cy:i*c+c/2,fill:"var(--ck-qr-dot-color)",r:c/3},`circle-${t}-${i}`))})}),o},[e,s,t]);return(0,v.jsxs)("svg",{height:s,width:s,viewBox:`0 0 ${s} ${s}`,style:{width:s,height:s},children:[(0,v.jsx)("rect",{fill:"transparent",height:s,width:s}),c]})}let n7=m.forwardRef(({value:e,image:o,imageBackground:t,imagePosition:n="center",tooltipMessage:r},i)=>{let a=r?(0,v.jsx)(nN,{xOffset:139,yOffset:5,delay:.1,message:r,children:o}):o;return(0,v.jsx)(nK,{children:(0,v.jsxs)(n1,{children:[o&&(0,v.jsx)(n5,{children:(0,v.jsx)(n3,{$wcLogo:"center"!==n,style:{background:"center"===n?t:void 0},children:a})}),e?(0,v.jsx)(y.M,{initial:!1,children:(0,v.jsx)(w.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,position:"absolute",inset:[0,0]},transition:{duration:.4},children:(0,v.jsx)(n8,{uri:e,size:288,ecl:"M",clearArea:!!("center"===n&&o)})},e)}):(0,v.jsx)(n2,{})]})})});n7.displayName="CustomQRCode";let n6=z(w.E.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47px;
  height: 52px;
  min-width: 47px;
  min-height: 52px;
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }
`,n9=({logo:e})=>{let o=[(0,v.jsx)(ew.MetaMask,{background:!0}),(0,v.jsx)(ew.Coinbase,{background:!0}),(0,v.jsx)(ew.Crypto,{}),(0,v.jsx)(ew.ImToken,{}),(0,v.jsx)(ew.Argent,{}),(0,v.jsx)(ew.Trust,{})];return(0,v.jsx)(n6,{children:(0,v.jsxs)("svg",{"aria-hidden":"true",width:"47",height:"52",viewBox:"0 0 47 52",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsxs)("g",{mask:"url(#gradient-mask)",children:[(0,v.jsx)("path",{d:"M7 14.5C7 11.4624 9.46243 9 12.5 9H31.5C34.5376 9 37 11.4624 37 14.5V47H7V14.5Z",fill:"var(--ck-graphic-scaniconwithlogos-04)"}),e?(0,v.jsx)("foreignObject",{x:"13",y:"21",width:"18",height:"18",rx:"5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:5},children:e})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("foreignObject",{x:"12",y:"15",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[0]})}),(0,v.jsx)("foreignObject",{x:"23",y:"15",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[1]})}),(0,v.jsx)("foreignObject",{x:"12",y:"26",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[2]})})}),(0,v.jsx)("foreignObject",{x:"23",y:"26",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[3]})}),(0,v.jsx)("foreignObject",{x:"12",y:"37",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[4]})}),(0,v.jsx)("foreignObject",{x:"23",y:"37",width:"9",height:"9",rx:"2.5",children:(0,v.jsx)("div",{style:{overflow:"hidden",borderRadius:2.5},children:o[5]})})]}),(0,v.jsx)("path",{d:"M36 47V13.7143C36 11.1107 33.8893 9 31.2857 9H12.7143C10.1107 9 8 11.1107 8 13.7143V47",stroke:"url(#paint0_linear_924_12568)",strokeWidth:"2"}),(0,v.jsx)("path",{d:"M15 10H29C29 11.1046 28.1046 12 27 12H17C15.8954 12 15 11.1046 15 10Z",fill:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,v.jsx)("rect",{x:"1",y:"47",width:"43",height:"5",fill:"var(--ck-tooltip-background)"}),(0,v.jsx)("rect",{x:"22",y:"1",width:"24",height:"24",rx:"12",fill:"var(--ck-graphic-scaniconwithlogos-03)",stroke:"var(--ck-tooltip-background)",strokeWidth:"2"}),(0,v.jsx)("rect",{x:"34.5",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,v.jsx)("rect",{x:"31",y:"10",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,v.jsx)("rect",{x:"31",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,v.jsx)("rect",{x:"34.5",y:"13.5",width:"2.5",height:"2.5",rx:"0.75",fill:"#373737"}),(0,v.jsx)("path",{d:"M28.5 10.5V9C28.5 8.17157 29.1716 7.5 30 7.5H31.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M36.5 7.5L38 7.5C38.8284 7.5 39.5 8.17157 39.5 9L39.5 10.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M39.5 15.5L39.5 17C39.5 17.8284 38.8284 18.5 38 18.5L36.5 18.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,v.jsx)("path",{d:"M31.5 18.5L30 18.5C29.1716 18.5 28.5 17.8284 28.5 17L28.5 15.5",stroke:"#373737",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_924_12568",x1:"22",y1:"8.2549",x2:"22",y2:"47",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-graphic-scaniconwithlogos-01)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-graphic-scaniconwithlogos-02)"})]}),(0,v.jsxs)("linearGradient",{id:"linear-gradient-mask",x1:"47",y1:"42",x2:"47",y2:"47",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"white"}),(0,v.jsx)("stop",{offset:"1",stopColor:"black",stopOpacity:"0"})]}),(0,v.jsx)("mask",{id:"gradient-mask",children:(0,v.jsx)("rect",{x:"0",y:"0",width:"47",height:"52",fill:"url(#linear-gradient-mask)"})})]})]})})},re=({connectorId:e})=>{var o,t,n,r;let i=is(),[a,s]=(0,m.useState)(e),c=eE.filter(e=>e.id===a)[0],{connectors:d,connectAsync:l}=tB(),[p,h]=(0,m.useState)(void 0),u=oI({CONNECTORNAME:c.name});async function x(e){let o=await l({connector:e});return!!o&&o}async function b(e){var o;if((null===(o=e.options)||void 0===o?void 0:o.version)==="1"){e.on("message",async o=>{let t=await e.getProvider();h(t.connector.uri),t.connector.on("disconnect",()=>{x(e)})});try{await x(e)}catch(t){i.debug((0,v.jsx)(v.Fragment,{children:"WalletConnect cannot connect. See console for more details."}),t)}}else{e.on("message",async o=>{let t=await e.getProvider();h(t.uri),console.log(t.uri),e.on("disconnect",()=>{console.log("disconnect")}),e.on("error",()=>{console.log("disconnect")})});try{await x(e)}catch(n){n.code?4001===n.code?(console.error("User rejected"),b(e)):console.error("Unknown error"):i.debug((0,v.jsx)(v.Fragment,{children:"WalletConnect cannot connect. See console for more details."}),n)}}}let g=async()=>{let e=d.filter(e=>e.id===a)[0];if(e&&!p)switch(e.id){case"coinbaseWallet":e.on("message",async o=>{let t=await e.getProvider();h(t.qrUrl)});try{await x(e)}catch(o){i.debug((0,v.jsxs)(v.Fragment,{children:["This dApp is most likely missing the"," ",(0,v.jsx)("code",{children:"headlessMode: true"})," flag in the custom"," ",(0,v.jsx)("code",{children:"CoinbaseWalletConnector"})," options. See"," ",(0,v.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://connect.family.co/v0/docs/cbwHeadlessMode",children:"documentation"})," ","for more details."]}),o)}break;case"walletConnect":b(e)}},[f,k]=(0,m.useState)(!1),{openDefaultWalletConnect:C}=nx(),w=async()=>{let e=d.filter(e=>e.id===a)[0];"walletConnect"===e.id&&(k(!0),await C(),k(!1))};if((0,m.useEffect)(()=>{p||g()},[]),!c)return(0,v.jsx)(v.Fragment,{children:"Connector not found"});let y=eI();c.extensions&&c.extensions[y];let j=c.appUrls&&0!==Object.keys(c.appUrls).length;if(c.extensions&&(Object.keys(c.extensions)[0],Object.keys(c.extensions)[0].charAt(0).toUpperCase(),Object.keys(c.extensions)[0].slice(1),c.extensions[Object.keys(c.extensions)[0]]),c.extensionIsInstalled&&c.extensionIsInstalled(),!c.scannable)return(0,v.jsxs)(eG,{children:[(0,v.jsx)(eY,{children:"Invalid State"}),(0,v.jsx)(eq,{children:(0,v.jsxs)(nR,{children:[c.name," does not have it's own QR Code to scan. This state should never happen"]})})]});let E=c.defaultConnect;return(0,v.jsxs)(eG,{children:[(0,v.jsxs)(eq,{style:{paddingBottom:8,gap:14},children:[(0,v.jsx)(n7,{value:p,image:c.logos.qrCode,imageBackground:c.logoBackground,tooltipMessage:"walletConnect"===e?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n9,{}),(0,v.jsx)("span",{children:u.scanScreen_tooltip_walletConnect})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(n9,{logo:c.logos.connectorButton}),(0,v.jsx)("span",{children:u.scanScreen_tooltip_default})]})}),E?(0,v.jsx)(oV,{}):j&&(0,v.jsx)(oV,{children:u.dontHaveTheApp})]}),E&&(0,v.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:14},children:[(null===(o=i.options)||void 0===o?void 0:o.walletConnectCTA)!=="modal"&&(0,v.jsx)(nv,{variant:"button",string:p,children:(null===(t=i.options)||void 0===t?void 0:t.walletConnectCTA)==="link"?u.copyToClipboard:u.copyCode}),(null===(n=i.options)||void 0===n?void 0:n.walletConnectCTA)!=="link"&&(0,v.jsx)(td,{icon:(0,v.jsx)(og,{}),onClick:w,waiting:f,children:(null===(r=i.options)||void 0===r?void 0:r.walletConnectCTA)==="modal"?u.useWalletConnectModal:u.useModal})]}),j&&(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(td,{onClick:()=>{i.setRoute(ir.DOWNLOAD)},download:!0,children:u.getWalletName})})]})},ro={QRCODE:"qrcode",INJECTOR:"injector"},rt=({connectorId:e})=>{let[o,t]=(0,m.useState)(e),n=eE.filter(e=>e.id===o)[0],r=n.extensionIsInstalled&&n.extensionIsInstalled(),i=!n.scannable||r,[a,s]=(0,m.useState)(i?ro.INJECTOR:ro.QRCODE);return n?(0,v.jsxs)(y.M,{children:[a===ro.QRCODE&&(0,v.jsx)(w.E.div,{initial:"initial",animate:"animate",exit:"exit",variants:oU,children:(0,v.jsx)(re,{connectorId:o,switchConnectMethod:e=>{e&&t(e),s(ro.INJECTOR)}})},ro.QRCODE),a===ro.INJECTOR&&(0,v.jsx)(w.E.div,{initial:"initial",animate:"animate",exit:"exit",variants:oU,children:(0,v.jsx)(nX,{connectorId:o,switchConnectMethod:e=>{e&&t(e),s(ro.QRCODE)}})},ro.INJECTOR)]}):(0,v.jsx)(nR,{children:"Connector not found"})},rn=({connectorId:e})=>{var o,t,n;is();let[r,i]=(0,m.useState)(e),a=eE.filter(e=>e.id===r)[0],s=oI({CONNECTORNAME:a.name});if(!a)return(0,v.jsx)(v.Fragment,{children:"Connector not found"});let c=null===(o=a.appUrls)||void 0===o?void 0:o.ios,d=null===(t=a.appUrls)||void 0===t?void 0:t.android,l=null===(n=a.appUrls)||void 0===n?void 0:n.download,p=c&&d?s.downloadAppScreen_iosAndroid:c?s.downloadAppScreen_ios:s.downloadAppScreen_android;return(0,v.jsxs)(eG,{children:[(0,v.jsxs)(eq,{style:{paddingBottom:4,gap:14},children:[l&&(0,v.jsx)(n7,{value:l}),!l&&(0,v.jsx)(v.Fragment,{children:"No download link available"}),(0,v.jsx)(eX,{style:{fontSize:15,lineHeight:"20px",padding:"0 12px"},children:p}),a.defaultConnect&&(0,v.jsx)(oV,{})]}),a.defaultConnect&&(0,v.jsx)(td,{icon:(0,v.jsx)(og,{}),children:"Open Default Modal"})]})},rr=z(w.E.div)`
  padding: 18px 0 20px;
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    padding: 16px 0 20px;
  }
`,ri=z(w.E.div)`
  position: relative;
  display: inline-block;
`,ra=z(w.E.div)`
  z-index: 3;
  position: absolute;
  bottom: 0px;
  right: -16px;
`,rs=z(w.E.div)`
  position: relative;
`,rc=z(w.E.div)`
  position: relative;
`,rd=E.F4`
  0%{ background-position: 100% 0; }
  100%{ background-position: -100% 0; }
`,rl=z(w.E.div)`
  width: 25%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: var(--ck-body-background-secondary);
  inset: 0;
  &:before {
    z-index: 4;
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      90deg,
      var(--ck-body-background-transparent) 50%,
      var(--ck-body-background),
      var(--ck-body-background-transparent)
    );
    opacity: 0.75;
    background-size: 200% 100%;
    animation: ${rd} 1000ms linear infinite both;
  }
`,rp=z(w.E.div)`
  will-change: transform; // Needed for Safari
  pointer-events: none;
  user-select: none;
  position: relative;
  overflow: hidden;
  margin: 0;
  border-radius: ${e=>`${e.$radius}px`};
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  &:before {
    content: '';
    z-index: 1;
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  ${e=>{if(e.$seed){let o=Math.ceil(8*(e.$seed.split("").map(e=>e.charCodeAt(0)).reduce((e,o)=>e+o)%100/100)),t=`0${0===o?1:o}`;return E.iv`
        background: var(--ck-ens-${t}-start);
        background: linear-gradient(
          180deg,
          var(--ck-ens-${t}-start) 0%,
          var(--ck-ens-${t}-stop) 100%
        );
      `}}}
`,rh=z(w.E.img)`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  opacity: ${e=>e.$loaded?1:0};
  will-change: opacity; // Needed for Safari
  transition: opacity 500ms ease;
  transform: scale(1.01); // fixes background color bleeding
`;function ru(){let[e,o]=(0,m.useState)(!1);return(0,m.useEffect)(()=>o(!0),[]),e}let rx=({address:e,name:o,size:t=96,radius:n=96})=>{var r,i,a,s;let c=ru(),l=is(),p=(0,m.useRef)(null),[h,u]=(0,m.useState)(!0),{data:x}=(0,d.S4)({chainId:1,name:o}),{data:b}=(0,d.F6)({chainId:1,address:null!==(r=null!=e?e:x)&&void 0!==r?r:void 0}),{data:g}=(0,d.c9)({chainId:1,address:null!==(i=null!=e?e:x)&&void 0!==i?i:void 0}),f={address:null!=x?x:e,name:null!=b?b:o,avatar:null!=g?g:void 0};return((0,m.useEffect)(()=>{p.current&&p.current.complete&&0!==p.current.naturalHeight||u(!1)},[g]),c)?(null===(a=l.options)||void 0===a?void 0:a.customAvatar)?(0,v.jsx)("div",{style:{width:t,height:t,borderRadius:n,overflow:"hidden"},children:null===(s=l.options)||void 0===s?void 0:s.customAvatar({address:null!=e?e:null==f?void 0:f.address,ensName:null!=o?o:null==f?void 0:f.name,ensImage:null==f?void 0:f.avatar,size:t,radius:n})}):f.name&&f.avatar?(0,v.jsx)(K,{style:{pointerEvents:"none"},children:(0,v.jsx)(rp,{$size:t,$seed:f.address,$radius:n,children:(0,v.jsx)(rh,{ref:p,src:f.avatar,alt:f.name,onLoad:()=>u(!0),$loaded:h})})}):(0,v.jsx)(K,{style:{pointerEvents:"none"},children:(0,v.jsx)(rp,{$size:t,$seed:f.address,$radius:n})}):(0,v.jsx)("div",{style:{width:t,height:t,borderRadius:n}})},rb=({testnet:e,...o})=>{let t="var(--ck-chain-ethereum-01, #25292E)",n="var(--ck-chain-ethereum-02, #ffffff)";return e&&(t="linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)",n="#fff"),(0,v.jsxs)("svg",{...o,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:t},children:[(0,v.jsx)("path",{d:"M21.9967 6.99621L21.7955 7.67987V27.5163L21.9967 27.7171L31.2044 22.2744L21.9967 6.99621Z",fill:n}),(0,v.jsx)("path",{d:"M21.9957 6.99621L12.7878 22.2744L21.9957 27.7171V18.0891V6.99621Z",fill:n}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9959 36.9996L21.9959 36.9997V36.9995L31.2091 24.0243L21.9959 29.4642L12.788 24.0243L21.9957 36.9993L21.9958 36.9997L21.9959 36.9996Z",fill:n}),(0,v.jsx)("path",{d:"M21.996 27.7181L31.2037 22.2753L21.996 18.09V27.7181Z",fill:n}),(0,v.jsx)("path",{d:"M12.7878 22.2753L21.9957 27.7181V18.09L12.7878 22.2753Z",fill:n})]})},rg=({testnet:e,...o})=>(0,v.jsx)("svg",{...o,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#6F41D8"},children:(0,v.jsx)("path",{d:"M29.0015 17.4529C28.4941 17.1572 27.8355 17.1572 27.2773 17.4529L23.3186 19.7271L20.6305 21.2094L16.6719 23.4822C16.1645 23.7792 15.5059 23.7792 14.9476 23.4822L11.8016 21.703C11.2943 21.4074 10.9395 20.8642 10.9395 20.2702V16.7612C10.9395 16.1686 11.2434 15.6255 11.8016 15.3285L14.8954 13.5988C15.4041 13.3018 16.0641 13.3018 16.6224 13.5988L19.7161 15.3285C20.2249 15.6255 20.5796 16.1686 20.5796 16.7612V19.0355L23.2678 17.5024V15.2295C23.2707 14.9343 23.1917 14.6441 23.0395 14.3911C22.8873 14.1381 22.6679 13.9324 22.4056 13.7968L16.6719 10.5353C16.1645 10.2382 15.5059 10.2382 14.9476 10.5353L9.11214 13.7968C8.84992 13.9324 8.63049 14.1381 8.47828 14.3911C8.32607 14.6441 8.24705 14.9343 8.25002 15.2295V21.802C8.25002 22.396 8.55389 22.9391 9.11214 23.2361L14.9476 26.4976C15.455 26.7932 16.115 26.7932 16.6719 26.4976L20.6305 24.2729L23.3186 22.7411L27.2773 20.5177C27.7846 20.2207 28.4433 20.2207 29.0015 20.5177L32.0966 22.2475C32.6054 22.5431 32.9588 23.0863 32.9588 23.6803V27.1893C32.9588 27.7819 32.6563 28.325 32.0966 28.622L29.0029 30.4013C28.4941 30.6983 27.8341 30.6983 27.2773 30.4013L24.1821 28.6715C23.6734 28.3745 23.3186 27.8314 23.3186 27.2387V24.9645L20.6305 26.4976V28.7705C20.6305 29.3631 20.9344 29.9076 21.4926 30.2032L27.3281 33.4647C27.8355 33.7617 28.4941 33.7617 29.0524 33.4647L34.8879 30.2032C35.3953 29.9076 35.75 29.3645 35.75 28.7705V22.198C35.753 21.9028 35.674 21.6126 35.5218 21.3596C35.3695 21.1066 35.1501 20.9009 34.8879 20.7653L29.0029 17.4529H29.0015Z",fill:"white"})}),rf=({testnet:e,...o})=>(0,v.jsxs)("svg",{...o,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#FF0420"},children:[(0,v.jsx)("path",{d:"M15.5877 27.8473C14.2777 27.8473 13.2045 27.539 12.3679 26.9226C11.5422 26.2952 11.1294 25.4035 11.1294 24.2477C11.1294 24.0055 11.157 23.7082 11.212 23.356C11.3552 22.5634 11.5588 21.6112 11.823 20.4994C12.5715 17.4722 14.5034 15.9586 17.6187 15.9586C18.4664 15.9586 19.2259 16.1017 19.8974 16.3879C20.5689 16.663 21.0973 17.0814 21.4826 17.6428C21.8678 18.1932 22.0605 18.8537 22.0605 19.6242C22.0605 19.8554 22.033 20.1471 21.9779 20.4994C21.8128 21.4791 21.6146 22.4313 21.3835 23.356C20.9982 24.8641 20.3322 25.9924 19.3855 26.741C18.4388 27.4785 17.1729 27.8473 15.5877 27.8473ZM15.8189 25.4695C16.4354 25.4695 16.9582 25.2879 17.3876 24.9247C17.8279 24.5614 18.1416 24.0055 18.3287 23.257C18.5819 22.2222 18.7746 21.3195 18.9067 20.5489C18.9507 20.3178 18.9727 20.0811 18.9727 19.8389C18.9727 18.8372 18.4498 18.3363 17.4041 18.3363C16.7876 18.3363 16.2592 18.5179 15.8189 18.8812C15.3896 19.2445 15.0813 19.8004 14.8943 20.5489C14.6961 21.2865 14.4979 22.1892 14.2998 23.257C14.2557 23.477 14.2337 23.7082 14.2337 23.9504C14.2337 24.9632 14.7622 25.4695 15.8189 25.4695Z",fill:"white"}),(0,v.jsx)("path",{d:"M22.8188 27.6815C22.6977 27.6815 22.6041 27.6429 22.5381 27.5659C22.483 27.4778 22.4665 27.3788 22.4885 27.2687L24.7672 16.5358C24.7892 16.4147 24.8498 16.3156 24.9489 16.2385C25.0479 16.1615 25.1525 16.1229 25.2626 16.1229H29.6548C30.8767 16.1229 31.8564 16.3761 32.5939 16.8825C33.3426 17.3889 33.7168 18.1209 33.7168 19.0786C33.7168 19.3538 33.6838 19.64 33.6177 19.9372C33.3426 21.2032 32.7867 22.1389 31.95 22.7443C31.1244 23.3498 29.9905 23.6525 28.5485 23.6525H26.3194L25.5598 27.2687C25.5377 27.3898 25.4772 27.4888 25.3782 27.5659C25.2791 27.6429 25.1745 27.6815 25.0645 27.6815H22.8188ZM28.6641 21.3738C29.1264 21.3738 29.5282 21.2472 29.8695 20.994C30.2217 20.7408 30.4529 20.3776 30.563 19.9042C30.596 19.717 30.6125 19.552 30.6125 19.4089C30.6125 19.0896 30.519 18.8474 30.3318 18.6823C30.1446 18.5062 29.8255 18.4182 29.3741 18.4182H27.3926L26.7652 21.3738H28.6641Z",fill:"white"})]}),rk=({testnet:e,...o})=>{let t=e?"#ffffff":"#28A0F0";return(0,v.jsxs)("svg",{...o,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:e?"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)":"#2C364F"},children:[!e&&(0,v.jsx)("path",{d:"M25.7948 20.5826L28.2683 16.3854L34.9355 26.7696L34.9386 28.7625L34.9168 15.0491C34.9011 14.7137 34.7231 14.407 34.4391 14.2261L22.4357 7.32182C22.1551 7.1838 21.7989 7.18546 21.5187 7.32618C21.4807 7.34524 21.4453 7.36576 21.4113 7.38835L21.3694 7.41467L9.71816 14.1664L9.67298 14.1871C9.61474 14.2137 9.55609 14.2479 9.50076 14.2872C9.27983 14.4456 9.1331 14.68 9.08564 14.9425C9.07859 14.9823 9.0732 15.023 9.07092 15.064L9.08916 26.239L15.2994 16.6138C16.0811 15.3376 17.7847 14.9262 19.3662 14.9488L21.2221 14.9977L10.2862 32.5356L11.5753 33.2778L22.6422 15.0155L27.5338 14.9977L16.4956 33.7209L21.0955 36.3668L21.6451 36.6827C21.8776 36.7772 22.1516 36.7819 22.386 36.6972L34.5581 29.6433L32.2309 30.9918L25.7948 20.5826ZM26.7384 34.175L22.0925 26.8829L24.9287 22.0702L31.0303 31.6876L26.7384 34.175Z",fill:"#2D374B"}),(0,v.jsx)("path",{d:"M22.0924 26.8832L26.7385 34.1751L31.0302 31.6879L24.9286 22.0705L22.0924 26.8832Z",fill:t}),(0,v.jsx)("path",{d:"M34.9387 28.7627L34.9356 26.7698L28.2684 16.3856L25.7949 20.5828L32.2312 30.992L34.5584 29.6435C34.7866 29.4582 34.9248 29.1861 34.9393 28.8926L34.9387 28.7627Z",fill:t}),(0,v.jsx)("path",{d:"M7 30.642L10.2863 32.5356L21.2222 14.9976L19.3663 14.9487C17.785 14.9263 16.0814 15.3375 15.2995 16.6137L9.08927 26.239L7 29.449V30.642V30.642Z",fill:"white"}),(0,v.jsx)("path",{d:"M27.534 14.9977L22.6423 15.0155L11.5754 33.2778L15.4437 35.5049L16.4955 33.7209L27.534 14.9977Z",fill:"white"}),(0,v.jsx)("path",{d:"M37 14.9723C36.9592 13.9493 36.4052 13.013 35.5377 12.4677L23.377 5.47434C22.5187 5.04223 21.4466 5.04161 20.5868 5.47414C20.4852 5.52533 8.76078 12.3251 8.76078 12.3251C8.5985 12.4029 8.44224 12.4955 8.2953 12.6008C7.52081 13.156 7.0487 14.0186 7 14.9661V29.4492L9.08927 26.2392L9.07103 15.0639C9.07352 15.0231 9.0787 14.9827 9.08575 14.9431C9.133 14.6801 9.27994 14.4457 9.50086 14.2872C9.5562 14.2478 21.4806 7.34517 21.5186 7.32611C21.799 7.18538 22.155 7.18373 22.4356 7.32175L34.439 14.226C34.723 14.4069 34.901 14.7137 34.9167 15.049V28.8921C34.9022 29.1856 34.7862 29.4577 34.558 29.643L32.2308 30.9916L31.03 31.6875L26.7383 34.1747L22.3859 36.6969C22.1515 36.7817 21.8773 36.7769 21.645 36.6824L16.4955 33.7206L15.4435 35.5046L20.0713 38.169C20.2243 38.256 20.3607 38.3331 20.4726 38.3961C20.6458 38.4933 20.764 38.5582 20.8056 38.5785C21.1345 38.7383 21.6077 38.8311 22.0342 38.8311C22.4251 38.8311 22.8064 38.7594 23.1672 38.6181L35.8092 31.2971C36.5347 30.7348 36.9617 29.8869 37 28.9686V14.9723Z",fill:e?"#ffffff":"#96BEDC"})]})},rv=({...e})=>(0,v.jsxs)("svg",{...e,"aria-hidden":"true",width:"44",height:"44",viewBox:"0 0 44 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{background:"linear-gradient(180deg, #8995A9 0%, #424D5F 99.48%)"},children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.5611 8.12948C21.0082 7.90729 21.5007 7.79167 22 7.79167C22.4993 7.79167 22.9919 7.90729 23.439 8.12948L23.4408 8.1304L33.0387 12.9293C33.577 13.197 34.031 13.61 34.3478 14.121C34.6649 14.6323 34.833 15.2218 34.8333 15.8234V27.2595C34.833 27.8611 34.6649 28.4511 34.3478 28.9624C34.031 29.4733 33.578 29.8858 33.0398 30.1535L23.4411 34.9528C22.9919 35.1775 22.4963 35.2947 21.994 35.2947C21.4918 35.2947 20.9964 35.1777 20.5472 34.9529L10.9475 30.1531L10.9452 30.1519C10.4071 29.8808 9.95535 29.4646 9.6411 28.9504C9.32739 28.437 9.16312 27.8464 9.16673 27.2448L9.16675 27.2417L10.0004 27.2475H9.16673V27.2448V15.8239C9.16705 15.2223 9.33518 14.6322 9.65222 14.121C9.96906 13.61 10.4221 13.1976 10.9604 12.9298L20.5592 8.1304L20.5611 8.12948ZM21.3031 9.62267L11.8706 14.3389L22 19.4036L32.1294 14.3389L22.697 9.62267C22.4806 9.51531 22.2416 9.45905 22 9.45905C21.7585 9.45905 21.5194 9.51534 21.3031 9.62267ZM10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241ZM22.8337 33.3923L32.2967 28.6608C32.5576 28.5312 32.7772 28.3313 32.9308 28.0836C33.0844 27.836 33.1658 27.5504 33.166 27.259V15.8243C33.1659 15.7786 33.1639 15.7331 33.1599 15.6878L22.8337 20.8509V33.3923Z",fill:"url(#paint0_linear_3546_7073)"}),(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8341 15.8241C10.8341 15.7785 10.8362 15.733 10.8401 15.6878L21.1663 20.8509V33.3983L11.6955 28.6629C11.4352 28.5315 11.2159 28.3297 11.0638 28.0809C10.9116 27.8318 10.8321 27.5452 10.8341 27.2533L10.8341 27.2475V15.8241Z",fill:"url(#paint1_linear_3546_7073)",fillOpacity:"0.3"}),(0,v.jsxs)("defs",{children:[(0,v.jsxs)("linearGradient",{id:"paint0_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"white"}),(0,v.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]}),(0,v.jsxs)("linearGradient",{id:"paint1_linear_3546_7073",x1:"22",y1:"7.79167",x2:"22",y2:"35.2947",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"white"}),(0,v.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0.7"})]})]})]});var rm={Ethereum:rb,Polygon:rg,Optimism:rf,Arbitrum:rk,UnknownChain:rv};let rC=[{id:1,name:"Ethereum",logo:(0,v.jsx)(rm.Ethereum,{})},{id:3,name:"Rinkeby",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:4,name:"Ropsten",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:5,name:"G\xf6rli",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:42,name:"Kovan",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:10,name:"Optimism",logo:(0,v.jsx)(rm.Optimism,{})},{id:69,name:"Optimism Kovan",logo:(0,v.jsx)(rm.Optimism,{testnet:!0})},{id:137,name:"Polygon",logo:(0,v.jsx)(rm.Polygon,{})},{id:80001,name:"Polygon Mumbai",logo:(0,v.jsx)(rm.Polygon,{testnet:!0})},{id:31337,name:"Hardhat",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:1337,name:"Localhost",logo:(0,v.jsx)(rm.Ethereum,{testnet:!0})},{id:42161,name:"Arbitrum",logo:(0,v.jsx)(rm.Arbitrum,{})},{id:421611,name:"Arbitrum Rinkeby",logo:(0,v.jsx)(rm.Arbitrum,{testnet:!0})},{id:421613,name:"Arbitrum Goerli",logo:(0,v.jsx)(rm.Arbitrum,{testnet:!0})}],rw=z.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    flex-direction: column-reverse;
  }
`,ry=z(w.E.div)`
  display: block;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  background: var(--ck-body-background);
  svg {
    border-radius: inherit;
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  ${e=>e.$empty&&E.iv`
      display: flex;
      align-items: center;
      justify-content: center;
      &:before {
        content: '?';
        color: var(--ck-body-color-muted);
        font-weight: bold;
        font-family: var(--ck-font-family);
      }
    `}
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    border-radius: 16px;
    width: 32px;
    height: 32px;
  }
`,rj=z(w.E.div)`
  position: relative;
`,rE=z(w.E.div)`
  position: absolute;
  inset: -6px;
  animation: rotateSpinner 1200ms linear infinite;
  pointer-events: none;
  svg {
    display: block;
    position: relative;
    transform: translate3d(0, 0, 0);
    width: 100%;
    height: auto;
  }
  @keyframes rotateSpinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,rL=z.div`
  position: relative;
  margin: -8px -8px;
  &:after {
    border-radius: var(--border-radius, 0);
    z-index: 2;
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0 2px;
    box-shadow: inset 0 16px 8px -12px var(--background, var(--ck-body-background)),
      inset 0 -16px 8px -12px var(--background, var(--ck-body-background));
  }
`,rF=z(w.E.div)`
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 242px;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    padding: 8px 14px;
    margin: 2px -2px 0;
    max-height: 70vh;
  }
`,r_=z(w.E.button)`
  appearance: none;
  cursor: pointer;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 11px;
  margin: 0 0 1px;
  padding: 8px 0;
  padding-right: 154px;
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  text-decoration: none;
  color: var(--ck-body-color);
  background: none;
  white-space: nowrap;
  transition: transform 100ms ease, background-color 100ms ease;
  transform: translateZ(0px);
  &:before {
    content: '';
    background: currentColor;
    position: absolute;
    z-index: -1;
    inset: 0 var(--ck-dropdown-active-inset, -8px);
    border-radius: var(--ck-dropdown-active-border-radius, 12px);
    opacity: 0;
    transition: opacity 180ms ease;
  }
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0 -8px;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 180ms ease;
    outline: 2px solid var(--ck-focus-color);
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    font-size: 17px;
    padding: 8px 0;
  }
  @media only screen and (min-width: ${eB.mobileWidth}px) {
    &:hover {
      &:before {
        transition-duration: 80ms;
        opacity: 0.05;
      }
    }
  }
  &:active {
    transform: scale(0.99) translateZ(0px);
  }
  &:disabled {
    //opacity: 0.4;
    pointer-events: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      opacity: 1;
    }
  }
`,rS=z(w.E.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--ck-body-color-muted);
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;
  padding-right: 4px;
  span {
    display: block;
    position: relative;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    font-size: 17px;
    padding: 0;
  }
`,rI=z(w.E.div)`
position: absolute;
z-index: -1;
inset: 0 var(--ck-dropdown-active-inset, -8px);
background: var(--ck-dropdown-active-background, rgba(26, 136, 248, 0.1));
box-shadow var(--ck-dropdown-active-box-shadow);
border-radius: var(--ck-dropdown-active-border-radius, 12px);
@media only screen and (max-width: ${eB.mobileWidth}px) {
  inset: 0 -12px;
}
`,rM=(0,v.jsxs)("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2 16.75C2.69036 16.75 3.25 17.3096 3.25 18V19C3.25 26.5939 9.40609 32.75 17 32.75V35.25C8.02537 35.25 0.75 27.9746 0.75 19V18C0.75 17.3096 1.30964 16.75 2 16.75Z",fill:"url(#paint0_linear_1288_18701)"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"paint0_linear_1288_18701",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-spinner-color)"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-spinner-color)",stopOpacity:"0"})]})})]}),rA=()=>{let{connector:e}=(0,d.mA)(),{chain:o,chains:t}=(0,d.LN)(),{isLoading:n,pendingChainId:r,switchNetwork:i}=(0,d.g0)(),a=oI({}),s=eO();return(0,v.jsxs)(rw,{style:{marginBottom:i?-8:0},children:[(0,v.jsx)(rL,{children:(0,v.jsx)(rF,{children:t.map(t=>{var c;let d=rC.find(e=>e.id===t.id),l={...d,...t};return(0,v.jsxs)(r_,{disabled:!i||l.id===(null==o?void 0:o.id)||n&&r===l.id,onClick:()=>null==i?void 0:i(l.id),style:{opacity:i||l.id===(null==o?void 0:o.id)?void 0:.4},children:[(0,v.jsxs)("span",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:12,color:l.id===(null==o?void 0:o.id)?"var(--ck-dropdown-active-color, inherit)":"inherit"},children:[(0,v.jsxs)(rj,{children:[(0,v.jsx)(rE,{initial:{opacity:0},animate:{opacity:n&&r===l.id?1:0},transition:{ease:[.76,0,.24,1],duration:.15},children:(0,v.jsx)(w.E.div,{animate:s&&(null==e?void 0:e.id)==="coinbaseWallet"&&n&&r===l.id?{opacity:[1,0],transition:{delay:4,duration:3}}:{opacity:1},children:rM},`${null==l?void 0:l.id}-${null==l?void 0:l.name}`)}),(0,v.jsx)(ry,{children:null!==(c=l.logo)&&void 0!==c?c:(0,v.jsx)(rm.UnknownChain,{})})]}),l.name]}),(0,v.jsx)(rS,{children:(0,v.jsxs)(y.M,{initial:!1,exitBeforeEnter:!0,children:[l.id===(null==o?void 0:o.id)&&(0,v.jsx)(w.E.span,{style:{color:"var(--ck-dropdown-active-color, var(--ck-focus-color))",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4,transition:{duration:.1,delay:0}},transition:{ease:[.76,0,.24,1],duration:.3,delay:.2},children:a.connected},"connectedText"),n&&r===l.id&&(0,v.jsx)(w.E.span,{style:{color:"var(--ck-dropdown-pending-color, inherit)",display:"block",position:"relative"},initial:{opacity:0,x:-4},animate:{opacity:1,x:0},exit:{opacity:0,x:4},transition:{ease:[.76,0,.24,1],duration:.3},children:(0,v.jsx)(w.E.span,{animate:s&&(null==e?void 0:e.id)==="coinbaseWallet"&&{opacity:[1,0],transition:{delay:4,duration:4}},children:a.approveInWallet})},"approveText")]})}),l.id===(null==o?void 0:o.id)&&(0,v.jsx)(rI,{layoutId:"activeChain",layout:"position",transition:{duration:.3,ease:"easeOut"}})]},`${null==l?void 0:l.id}-${null==l?void 0:l.name}`)})})}),!i&&(0,v.jsxs)(nR,{children:[a.warnings_walletSwitchingUnsupported," ",a.warnings_walletSwitchingUnsupportedResolve]})]})},rN=z(w.E.div)`
  z-index: 2147483647;
  position: fixed;
  inset: 0;
`,rO=z(w.E.div)`
  position: absolute;
  inset: 0;
`,rW=z(w.E.div)`
  --shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  --background: var(--ck-dropdown-background, var(--ck-tooltip-background));
  --border-radius: var(
    --ck-dropdown-border-radius,
    var(--ck-tooltip-border-radius, 12px)
  );

  pointer-events: auto;
  z-index: 2147483647;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: fit-content;
  padding: 14px 16px 16px;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
  background: var(--background);
  box-shadow: var(
    --ck-dropdown-box-shadow,
    var(--ck-tooltip-shadow, var(--shadow))
  );
  border-radius: var(--border-radius);
`,rR=z(w.E.div)`
  padding: 0 0 6px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  user-select: none;
  color: var(--ck-dropdown-color, var(--ck-tooltip-color));
`,rT=({children:e,open:o,onClose:t,offsetX:n=0,offsetY:r=8})=>{var i,a,s;let c=is(),d=ox(),l=oI(),[p,h]=(0,m.useState)({x:0,y:0});od(o);let u=(0,m.useRef)(null);(0,m.useEffect)(()=>{let e=e=>{var n,r,i;if(o&&("Escape"===e.key&&t(),"ArrowDown"===e.key||"ArrowUp"===e.key)){if(!u.current)return;e.preventDefault();let a=null===(n=u.current)||void 0===n?void 0:n.querySelectorAll(`
            a[href]:not(:disabled),
            button:not(:disabled),
            textarea:not(:disabled),
            input[type="text"]:not(:disabled),
            input[type="radio"]:not(:disabled),
            input[type="checkbox"]:not(:disabled),
            select:not(:disabled)
          `),s=a[0],c=a[a.length-1];if("ArrowUp"===e.key){if(document.activeElement===s)c.focus();else{let d=null===(r=null==document?void 0:document.activeElement)||void 0===r?void 0:r.previousSibling;for(d||(d=c);d.disabled;)d=d.previousSibling;d.focus()}}else if(document.activeElement===c)s.focus();else{let l=null===(i=null==document?void 0:document.activeElement)||void 0===i?void 0:i.nextSibling;for(l||(l=s);l.disabled;)l=l.nextSibling;l.focus()}}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}},[o]);let x=(0,m.useRef)(null),b=(0,m.useCallback)(e=>{e&&(x.current=e,k())},[o]),[g,f]=(0,S.Z)({debounce:120,offsetSize:!0,scroll:!0}),k=()=>{if(!x.current||f.top+f.bottom+f.left+f.right+f.height+f.width===0)return;let e=f.left+n,o=f.top+f.height+r;x.current.style.left=`${e}px`,x.current.style.top=`${o}px`},C="undefined"!=typeof window?m.useLayoutEffect:m.useEffect;return C(k,[x.current,f,o]),(0,m.useEffect)(k,[o,x.current]),(0,m.useEffect)(()=>(k(),window.addEventListener("scroll",t),window.addEventListener("resize",t),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{ref:g,children:e}),(0,v.jsx)(y.M,{children:o&&(0,v.jsx)(ee,{children:(0,v.jsx)(K,{$useTheme:null!==(i=d.theme)&&void 0!==i?i:c.theme,$useMode:null!==(a=d.mode)&&void 0!==a?a:c.mode,$customTheme:null!==(s=d.customTheme)&&void 0!==s?s:c.customTheme,children:(0,v.jsx)(ol,{children:(0,v.jsxs)(rN,{ref:u,children:[(0,v.jsx)(rO,{onClick:t}),(0,v.jsxs)(rW,{ref:b,style:{left:p.x,top:p.y},initial:"collapsed",animate:"open",exit:"collapsed",variants:{collapsed:{transformOrigin:"0 0",opacity:0,scale:.96,z:.01,y:-4,x:0,transition:{duration:.1}},open:{transformOrigin:"0 0",willChange:"opacity,transform",opacity:1,scale:1,z:.01,y:0,x:0,transition:{ease:[.76,0,.24,1],duration:.15}}},children:[(0,v.jsx)(rR,{children:l.switchNetworks}),(0,v.jsx)(rA,{})]})]})})})})})]})},rB=z.div`
  --bg: transparent;
  --color: #333;
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 24px;
  background: var(--ck-body-background-secondary);
  pointer-events: none;
  user-select: none;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,rD=z(w.E.div)`
  display: block;
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
    width: 100%;
    height: auto;
  }
`,rz=E.F4`
  0%{ transform: rotate(0deg); }
  100%{ transform: rotate(360deg); }
`,rZ=z(w.E.div)`
  position: absolute;
  inset: 0;
  animation: ${rz} 1s linear infinite;
  svg {
    display: block;
    position: absolute;
    inset: 0;
  }
`,rU=z(w.E.div)`
  z-index: 2;
  position: absolute;
  top: 0;
  right: 0;
  width: 13px;
  height: 13px;
  color: var(--ck-body-color-danger, red);
  svg {
    display: block;
    position: relative;
    top: -2px;
    right: -2px;
  }
`,rH=(0,v.jsxs)("svg",{"aria-hidden":"true",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.3592 30.1654C10.0472 29.4491 8.85718 28.524 7.83713 27.424C6.81708 26.324 5.98425 25.0677 5.36889 23.7054C5.20157 23.335 5.05033 22.9567 4.91578 22.5717C4.51465 21.4237 4.26735 20.2308 4.17794 19.0239C4.16599 18.8626 4.13894 18.7041 4.09809 18.5507C3.85023 17.6197 3.09399 16.8738 2.11531 16.7999C0.975331 16.7138 -0.0310983 17.5702 0.0141657 18.7125C0.0223289 18.9185 0.0340286 19.1243 0.049253 19.3298C0.165374 20.8971 0.486545 22.4464 1.00749 23.9373C1.10424 24.2142 1.20764 24.4884 1.31755 24.7596C2.13617 26.7799 3.31595 28.6371 4.80146 30.239C6.28696 31.841 8.04998 33.1573 10.0029 34.1258C10.2651 34.2558 10.5307 34.3796 10.7995 34.4969C12.247 35.1287 13.7676 35.5656 15.3217 35.7995C15.5255 35.8301 15.7298 35.8573 15.9346 35.881C17.0703 36.0122 18.0001 35.0731 18.0001 33.9299C18.0001 32.9484 17.3133 32.1381 16.4036 31.8208C16.2537 31.7685 16.0977 31.7296 15.9377 31.7056C14.7411 31.5255 13.5702 31.1891 12.4556 30.7026C12.0818 30.5394 11.716 30.3601 11.3592 30.1654Z",fill:"url(#paint0_linear_1288_1870)"}),(0,v.jsx)("defs",{children:(0,v.jsxs)("linearGradient",{id:"paint0_linear_1288_1870",x1:"2",y1:"19.4884",x2:"16.8752",y2:"33.7485",gradientUnits:"userSpaceOnUse",children:[(0,v.jsx)("stop",{stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0.7"}),(0,v.jsx)("stop",{offset:"1",stopColor:"var(--ck-connectbutton-balance-color,currentColor)",stopOpacity:"0"})]})})]}),r$=({id:e,unsupported:o})=>{var t;let n=rC.find(o=>o.id===e);return(0,v.jsx)(rB,{children:(0,v.jsxs)(y.M,{initial:!1,children:[o&&(0,v.jsx)(rU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,v.jsxs)("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,v.jsx)("path",{d:"M2.61317 11.2501H9.46246C10.6009 11.2501 11.3256 10.3506 11.3256 9.3549C11.3256 9.05145 11.255 8.73244 11.0881 8.43303L7.65903 2.14708C7.659 2.14702 7.65897 2.14696 7.65893 2.1469C7.65889 2.14682 7.65884 2.14673 7.65879 2.14664C7.31045 1.50746 6.6741 1.17871 6.04 1.17871C5.41478 1.17871 4.763 1.50043 4.41518 2.14968L0.993416 8.43476C0.828865 8.72426 0.75 9.04297 0.75 9.3549C0.75 10.3506 1.47471 11.2501 2.61317 11.2501Z",fill:"currentColor",stroke:"var(--ck-body-background, #fff)",strokeWidth:"1.5"}),(0,v.jsx)("path",{d:"M6.03258 7.43916C5.77502 7.43916 5.63096 7.29153 5.62223 7.02311L5.55675 4.96973C5.54802 4.69684 5.74446 4.5 6.02821 4.5C6.3076 4.5 6.51277 4.70131 6.50404 4.9742L6.43856 7.01864C6.42546 7.29153 6.2814 7.43916 6.03258 7.43916ZM6.03258 9.11676C5.7401 9.11676 5.5 8.9065 5.5 8.60677C5.5 8.30704 5.7401 8.09678 6.03258 8.09678C6.32506 8.09678 6.56515 8.30256 6.56515 8.60677C6.56515 8.91097 6.32069 9.11676 6.03258 9.11676Z",fill:"white"})]})}),e?(0,v.jsx)(rD,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:null!==(t=null==n?void 0:n.logo)&&void 0!==t?t:(0,v.jsx)(rm.UnknownChain,{})},`${null==n?void 0:n.id}-${null==n?void 0:n.name}-${e}`):(0,v.jsx)(rZ,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:rH},"loading")]})})},rV=z(w.E.div)``,rG=z(w.E.button)`
  --color: var(
    --ck-dropdown-button-color,
    var(--ck-button-primary-color, var(--ck-body-color))
  );
  --background: var(
    --ck-dropdown-button-background,
    var(--ck-secondary-button-background, var(--ck-body-background-secondary))
  );
  --box-shadow: var(
    --ck-dropdown-button-box-shadow,
    var(
      --ck-secondary-button-box-shadow,
      var(--ck-button-primary-box-shadow),
      none
    )
  );

  --hover-color: var(--ck-dropdown-button-hover-color, var(--color));
  --hover-background: var(
    --ck-dropdown-button-hover-background,
    var(--background)
  );
  --hover-box-shadow: var(
    --ck-dropdown-button-hover-box-shadow,
    var(--box-shadow)
  );

  --active-color: var(--ck-dropdown-button-active-color, var(--hover-color));
  --active-background: var(
    --ck-dropdown-button-active-background,
    var(--hover-background)
  );
  --active-box-shadow: var(
    --ck-dropdown-button-active-box-shadow,
    var(--hover-box-shadow)
  );

  appearance: none;
  user-select: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  width: 52px;
  height: 30px;
  padding: 2px 6px 2px 3px;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  transform: translateZ(0px);

  transition: 100ms ease;
  transition-property: transform, background-color, box-shadow, color;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);

  svg {
    position: relative;
    display: block;
  }

  ${e=>e.disabled?E.iv`
          width: auto;
          padding: 3px;
          position: relative;
          left: -22px;
        `:E.iv`
          cursor: pointer;

          @media only screen and (min-width: ${eB.mobileWidth+1}px) {
            &:hover,
            &:focus-visible {
              color: var(--hover-color);
              background: var(--hover-background);
              box-shadow: var(--hover-box-shadow);
            }
            &:active {
              color: var(--active-color);
              background: var(--active-background);
              box-shadow: var(--active-box-shadow);
            }
          }
        `}
`,rP=({...e})=>(0,v.jsx)("svg",{"aria-hidden":"true",width:"11",height:"6",viewBox:"0 0 11 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,v.jsx)("path",{d:"M1.5 1L5.5 5L9.5 1",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),rY=()=>{let e=is(),[o,t]=(0,m.useState)(!1),{chain:n,chains:r}=(0,d.LN)(),i=oI({CHAIN:null==n?void 0:n.name}),a=eO()||(null==window?void 0:window.innerWidth)<eB.mobileWidth;(0,m.useEffect)(()=>{e.open||t(!1)},[e.open]);let s=r.length<=1;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(rV,{children:(0,v.jsx)(rT,{offsetX:-12,open:!a&&o,onClose:()=>t(!1),children:(0,v.jsxs)(rG,{"aria-label":i.switchNetworks,disabled:s,onClick:()=>{a?e.setRoute(ir.SWITCHNETWORKS):t(!o)},children:[s?(0,v.jsx)(nN,{message:i.chainNetwork,xOffset:-6,delay:.01,children:(0,v.jsx)(r$,{id:null==n?void 0:n.id,unsupported:null==n?void 0:n.unsupported})}):(0,v.jsx)(r$,{id:null==n?void 0:n.id,unsupported:null==n?void 0:n.unsupported}),!s&&(0,v.jsx)(rP,{style:{top:1,left:-3}})]})})})})},rJ=({closeModal:e})=>{var o,t;let n=is(),r=ox(),i=oI(),{reset:a}=(0,d.$4)(),{disconnect:s}=(0,d.qL)(),{chain:c}=(0,d.LN)(),{address:l,isConnected:p}=(0,d.mA)(),{data:h}=(0,d.F6)({chainId:1,address:l}),{data:u}=(0,d.KQ)({address:l}),[x,b]=(0,m.useState)(!1);(0,m.useEffect)(()=>{p||n.setOpen(!1)},[p]),(0,m.useEffect)(()=>{if(x)return e?e():n.setOpen(!1),()=>{s(),a()}},[x,s,a]);let g=["web95","rounded","minimal"].includes(null!==(t=null!==(o=r.theme)&&void 0!==o?o:n.theme)&&void 0!==t?t:"")?"....":void 0;return(0,v.jsxs)(eG,{children:[(0,v.jsxs)(eq,{style:{paddingBottom:22,gap:6},children:[(0,v.jsx)(rr,{children:(0,v.jsxs)(ri,{children:[(0,v.jsx)(ra,{children:(0,v.jsx)(rY,{})}),(0,v.jsx)(rx,{address:l})]})}),(0,v.jsx)(eQ,{children:(0,v.jsx)(nv,{string:l,children:null!=h?h:eF(l,g)})}),(0,v.jsx)(eX,{children:(0,v.jsx)(rs,{children:(0,v.jsxs)(y.M,{exitBeforeEnter:!0,initial:!1,children:[u&&(0,v.jsxs)(rc,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:[eS(Number(null==u?void 0:u.formatted))," ",null==u?void 0:u.symbol]},`chain-${null==c?void 0:c.id}`),!u&&(0,v.jsx)(rl,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},children:"\xa0"})]})})})]}),(0,v.jsx)(td,{onClick:()=>b(!0),icon:(0,v.jsx)(ok,{}),children:i.disconnect})]})},rq=()=>{let{reset:e}=(0,d.$4)(),{disconnect:o}=(0,d.qL)(),{chain:t}=(0,d.LN)(),n=oI({}),r=()=>{o(),e()};return(0,v.jsx)(eG,{style:{width:278},children:(0,v.jsxs)(eq,{style:{padding:0,marginTop:-10},children:[(null==t?void 0:t.unsupported)&&(0,v.jsxs)(eX,{children:[n.warnings_chainUnsupported," ",n.warnings_chainUnsupportedResolve]}),(0,v.jsx)("div",{style:{padding:"6px 8px"},children:(0,v.jsx)(rA,{})}),(null==t?void 0:t.unsupported)&&(0,v.jsx)(td,{icon:(0,v.jsx)(ok,{}),onClick:r,children:n.disconnect})]})})},rQ=E.F4`
  from{ transform: rotate(0deg); }
  to{   transform: rotate(360deg); }
`,rX=E.F4`
  from{ background-position: 0 0; }
  to{ background-position: 100% 0; }
`,rK=z.div`
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    margin: 5px auto 24px;
    padding: 16px 16px;
    border-radius: var(--ck-tertiary-border-radius, 24px);
    box-shadow: var(--ck-tertiary-box-shadow, none);
    background: var(--ck-body-background-tertiary);
  }
`,r1=z(w.E.div)`
  z-index: 2;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  transition: inherit;
  background: var(--ck-body-background-secondary);
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  svg,
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    width: 64px;
    height: 64px;
  }
`,r0=z(w.E.div)`
  z-index: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  color: currentColor;
  border-radius: 100%;
  transition: inherit;
  svg {
    z-index: 3;
    position: relative;
    transform: scale(0.89);
    transition: inherit;
    opacity: 0.5;
  }
  &:before {
    z-index: 1;
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: inherit;
    border: 1px dashed var(--border-color);
    background: var(--ck-body-background);
    transition: inherit;
    animation: ${rQ} 10s linear infinite;
  }
  &:after {
    z-index: 2;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #34c759;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);
    transform: scale(0);
    transition: inherit;
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    width: 64px;
    height: 64px;
    svg {
      transform: scale(1.1);
    }
  }
`,r2=z(w.E.svg)`
  display: block;
  position: relative;
  margin: 0 auto;
  transition: inherit;
  overflow: visible;
  rect {
    stroke: var(--border-color);
    rx: var(--ck-border-radius);
  }
  @media only screen and (max-width: ${eB.mobileWidth}px) {
    display: none;
  }
`,r5=z(w.E.div)`
  --border-color: var(--ck-siwe-border, var(--ck-body-divider));
  --border-size: 0;
  --border-style: dashed;

  user-select: none;
  pointer-events: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  margin: 12px auto;
  padding: 42px 32px;
  transition: all 320ms cubic-bezier(0.175, 0.885, 0.32, 1.1);
  border: var(--border-size) var(--border-style) var(--border-color);
  border-radius: var(--ck-border-radius);

  @media only screen and (max-width: ${eB.mobileWidth}px) {
    --border-size: 1px;
    margin: 0 auto 20px;
    padding: 38px 0;
    gap: 18px;
    + div {
      // easier than wrapping in another styled component
      padding-bottom: 10px;
    }
  }

  > div {
    z-index: 2;
    position: relative;
    transition: inherit;
  }

  &:before,
  &:after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120px;
    height: 1px;
    margin-left: -60px;
    transition: inherit;
    animation: ${rX} 10s linear infinite;
    background: linear-gradient(
      90deg,
      var(--border-color),
      var(--border-color) 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 6px 1px;
  }

  &:after {
    background: var(--border-color);
    transform: scaleX(0);
  }

  ${({$connected:e})=>e&&E.iv`
      &:before {
        opacity: 0;
      }
      &:after {
        transform: none;
      }
      ${r2} {
        rect {
          stroke-dasharray: 0 0;
        }
      }
      ${r1} {
        transform: scale(0.62);
      }
      ${r0} {
        svg {
          transform: scale(1.5);
          opacity: 1;
          color: #fff;
        }
        &:before {
          transform: scale(0);
        }
        &:after {
          transform: scale(1);
        }
      }
      @media only screen and (max-width: ${eB.mobileWidth}px) {
        --border-size: 1px;
        --border-style: solid;
        ${r0} {
          svg {
            transform: scale(1.75);
          }
        }
      }
    `};
`,r3=(0,m.createContext)(null);(a=s||(s={})).READY="ready",a.LOADING="loading",a.SUCCESS="success",a.REJECTED="rejected",a.ERROR="error";let r4=({showSignOutButton:e,onSignIn:o})=>{var t;let n=(0,m.useContext)(r3),r=ru(),i=oI(),{address:a}=(0,d.mA)(),{chain:c}=(0,d.LN)(),{signMessageAsync:l}=(0,d.QW)(),[p,h]=(0,m.useState)(s.READY),u=(null===(t=null==n?void 0:n.session.data)||void 0===t?void 0:t.address)?s.SUCCESS:(null==n?void 0:n.session.isLoading)||(null==n?void 0:n.nonce.isLoading)?s.LOADING:p,x=e=>{switch(console.error("signIn error",e.code,e.message),e.code){case -32e3:case"ACTION_REJECTED":h(s.REJECTED);break;default:h(s.ERROR)}},b=async()=>{try{if(!n)throw Error("SIWE not configured");let e=null==c?void 0:c.id;if(!a)throw Error("No address found");if(!e)throw Error("No chainId found");let t=n.nonce.data;if(!t)throw Error("Could not fetch nonce");h(s.LOADING);let r=n.createMessage({address:a,chainId:e,nonce:t}),i=await l({message:r});if(!await n.verifyMessage({message:r,signature:i}))throw Error("Error verifying SIWE signature");await n.session.refetch(),h(s.READY),null==o||o()}catch(d){x(d)}};if(!n)throw Error("SIWEButton must be inside a SIWEProvider.");return r?e&&u===s.SUCCESS?(0,v.jsx)(td,{style:{margin:0},onClick:n.signOutAndRefetch,icon:(0,v.jsx)(ok,{}),children:i.signOut},"button"):(0,v.jsx)(td,{style:{margin:0},arrow:!!a&&u===s.READY,onClick:u!==s.LOADING&&u!==s.SUCCESS?b:void 0,disabled:!a||n.nonce.isFetching||u===s.LOADING||u===s.SUCCESS,waiting:u===s.LOADING,icon:u===s.REJECTED&&(0,v.jsx)(w.E.div,{initial:{rotate:-270},animate:{rotate:0},transition:{duration:1,ease:[.175,.885,.32,.98]},children:(0,v.jsx)(oC,{style:{opacity:.4}})}),children:function(e){let o={[s.READY]:i.signIn,[s.LOADING]:i.awaitingConfirmation,[s.REJECTED]:i.tryAgain,[s.ERROR]:"Unknown Error",[s.SUCCESS]:i.signedIn};return a?o[e]:i.walletNotConnected}(u)},"button"):(0,v.jsx)(td,{style:{margin:0},disabled:!0},"loading")},r8=()=>{let e=(0,m.useContext)(r3);if(!e)return{signedIn:!1};let{session:o,nonce:t,signOutAndRefetch:n}=e,{address:r,chainId:i}=o.data||{};return{address:r,chainId:i,signedIn:!!r,signOut:n,session:o,nonce:t}},r7=({src:e,alt:o,width:t,height:n})=>{let r=(0,m.useRef)(null),[i,a]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{r.current&&r.current.complete&&0!==r.current.naturalHeight||a(!1)},[e]),(0,v.jsx)("div",{style:{width:t,height:n,background:"rgba(0,0,0,0.02)",boxShadow:"inset 0 0 0 1px rgba(0,0,0,0.02)"},children:(0,v.jsx)("img",{ref:r,src:e,alt:o,width:t,height:n,onLoad:()=>a(!0),style:{transition:"opacity 0.2s ease",opacity:i?1:0}})})},r6={duration:.2,ease:[.26,.08,.25,1]},r9={duration:.16,ease:[.26,.08,.25,1]},ie=()=>{var e,o;let t=is(),{signedIn:n}=r8(),r=eO(),[i,a]=(0,m.useState)(n?"signedIn":"signedOut"),s=oI({}),c="signedIn"===i?{heading:s.signInWithEthereumScreen_signedIn_heading,h1:s.signInWithEthereumScreen_signedIn_h1,p:s.signInWithEthereumScreen_signedIn_p,button:s.signInWithEthereumScreen_signedIn_button}:{heading:s.signInWithEthereumScreen_signedOut_heading,h1:s.signInWithEthereumScreen_signedOut_h1,p:s.signInWithEthereumScreen_signedOut_p,button:s.signInWithEthereumScreen_signedOut_button};(0,m.useEffect)(()=>{n&&a("signedIn")},[]),(0,m.useEffect)(()=>{n||a("signedOut")},[n]);let{address:l}=(0,d.mA)(),p=(()=>{let e={svg:null,default:null},o=document.getElementsByTagName("link");return Array.from(o).forEach(o=>{("icon"===o.getAttribute("rel")||"shortcut icon"===o.getAttribute("rel"))&&o.getAttribute("href")&&("image/svg+xml"===o.getAttribute("type")?e.svg=o.getAttribute("href"):e.default=o.getAttribute("href"))}),e})(),h=null!==(o=null!==(e=N())&&void 0!==e?e:p.svg)&&void 0!==o?o:p.default;return(0,v.jsx)(eG,{style:{width:278},children:(0,v.jsxs)(eq,{style:{padding:0,marginTop:-10},children:[(0,v.jsx)(rK,{children:(0,v.jsx)(y.M,{exitBeforeEnter:!0,children:(0,v.jsx)(w.E.div,{initial:!r&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:r9,children:(0,v.jsx)(eX,{style:{height:42},children:(0,v.jsx)(oT,{children:c.h1})})},eT(c.h1).toString())})}),(0,v.jsxs)(r5,{$connected:n,children:[(0,v.jsx)("div",{style:{position:"absolute",inset:0},children:(0,v.jsx)(r2,{width:"262",height:"134",viewBox:"0 0 262 134",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)(w.E.rect,{x:"0",y:"0",rx:"12",width:"262",height:"134",strokeDasharray:"3 3",animate:{strokeDashoffset:[0,-6]},transition:{duration:.4,ease:"linear",repeat:1/0}})})}),(0,v.jsx)(w.E.div,{initial:!r&&{opacity:0,x:50,scale:.8},animate:{opacity:1,x:0,scale:1},transition:r6,children:(0,v.jsx)(r1,{children:(0,v.jsx)(rx,{address:l,size:64})})},"avatarImage"),(0,v.jsx)(w.E.div,{initial:!r&&{scale:.6},animate:{scale:1},transition:{...r6},children:(0,v.jsx)(r0,{children:(0,v.jsx)(ov,{})})},"tickIcon"),(0,v.jsx)(w.E.div,{initial:!r&&{opacity:0,x:-40,scale:.8},animate:{opacity:1,x:0,scale:1},transition:{...r6},children:(0,v.jsx)(r1,{children:h?(0,v.jsx)(r7,{src:h,alt:"app"}):(0,v.jsx)(rm.UnknownChain,{})})},"appLogo")]},"status"),(0,v.jsx)(y.M,{exitBeforeEnter:!0,children:(0,v.jsx)(w.E.div,{style:{paddingBottom:r?24:12},initial:!r&&{opacity:0,scale:.94},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.94},transition:r9,children:(0,v.jsx)(eX,{style:{height:42,marginTop:-1,marginBottom:-3},children:(0,v.jsx)(oT,{children:c.p})})},eT(c.p).toString())}),(0,v.jsx)(r4,{showSignOutButton:"signedIn"===i,onSignIn:()=>{setTimeout(()=>{t.setOpen(!1)},1e3)}})]})})},io={},it=({mode:e="auto",theme:o="auto",customTheme:t=io,lang:n="en-US"})=>{let r=is(),{isConnected:i}=(0,d.mA)(),{chain:a}=(0,d.LN)(),s=!(null==a?void 0:a.unsupported),c=!(null==a?void 0:a.unsupported)&&r.route!==ir.CONNECTORS&&r.route!==ir.PROFILE,l=!(null==a?void 0:a.unsupported)&&r.route!==ir.PROFILE,p=()=>{r.route===ir.SIGNINWITHETHEREUM?r.setRoute(ir.PROFILE):r.route===ir.SWITCHNETWORKS?r.setRoute(ir.PROFILE):r.route===ir.DOWNLOAD?r.setRoute(ir.CONNECT):r.setRoute(ir.CONNECTORS)},h={onboarding:(0,v.jsx)(tl,{}),about:(0,v.jsx)(tT,{}),download:(0,v.jsx)(rn,{connectorId:r.connector}),connectors:(0,v.jsx)(nc,{}),mobileConnectors:(0,v.jsx)(nC,{}),connect:(0,v.jsx)(rt,{connectorId:r.connector}),profile:(0,v.jsx)(rJ,{}),switchNetworks:(0,v.jsx)(rq,{}),signInWithEthereum:(0,v.jsx)(ie,{})};function u(){r.setOpen(!1)}return(0,m.useEffect)(()=>{i?(r.route!==ir.PROFILE||r.route!==ir.SIGNINWITHETHEREUM)&&(r.signInWithEthereum?r.setRoute(ir.SIGNINWITHETHEREUM):u()):u()},[i]),(0,m.useEffect)(()=>r.setMode(e),[e]),(0,m.useEffect)(()=>r.setTheme(o),[o]),(0,m.useEffect)(()=>r.setCustomTheme(t),[t]),(0,m.useEffect)(()=>r.setLang(n),[n]),(0,m.useEffect)(()=>{let e=A();if(!e||!r.open)return;let o=document.createElement("meta");return o.setAttribute("property","og:title"),o.setAttribute("content",e),document.head.prepend(o),()=>{document.head.removeChild(o)}},[r.open]),(0,v.jsx)(ou,{theme:o,customTheme:t,mode:e,children:(0,v.jsx)(oH,{open:r.open,pages:h,pageId:r.route,onClose:s?u:void 0,onInfo:l?()=>r.setRoute(ir.ABOUT):void 0,onBack:c?p:void 0})})},ir={ONBOARDING:"onboarding",ABOUT:"about",CONNECTORS:"connectors",MOBILECONNECTORS:"mobileConnectors",CONNECT:"connect",DOWNLOAD:"download",PROFILE:"profile",SWITCHNETWORKS:"switchNetworks",SIGNINWITHETHEREUM:"signInWithEthereum"},ii=(0,m.createContext)(null),ia=({children:e,theme:o="auto",mode:t="auto",customTheme:n,options:r})=>{var i,a,s,c;if(m.useContext(ii))throw Error("Multiple, nested usages of ConnectKitProvider detected. Please use only one.");let l={language:"en-US",hideTooltips:!1,hideQuestionMarkCTA:!1,hideNoWalletCTA:!1,walletConnectCTA:"modal",avoidLayoutShift:!0,embedGoogleFonts:!1,truncateLongENSAddress:!0,walletConnectName:void 0,reducedMotion:!1,disclaimer:null,bufferPolyfill:!0,customAvatar:void 0,initialChainId:null===(i=O()[0])||void 0===i?void 0:i.id,ethereumOnboardingUrl:void 0,walletOnboardingUrl:void 0},p=Object.assign({},l,r);"undefined"!=typeof window&&p.bufferPolyfill&&(window.Buffer=null!==(a=window.Buffer)&&void 0!==a?a:C.Buffer);let[h,u]=(0,m.useState)(o),[x,b]=(0,m.useState)(t),[g,f]=(0,m.useState)(null!=n?n:{}),[k,w]=(0,m.useState)("en-US"),[y,j]=(0,m.useState)(!1),[L,F]=(0,m.useState)(""),[_,S]=(0,m.useState)(ir.CONNECTORS),[I,M]=(0,m.useState)("");p.embedGoogleFonts&&function(e){var o,t;let n=null!==(o=({web95:"Lato",retro:"Nunito",midnight:"Inter",minimal:"Inter",rounded:"Nunito"})[e])&&void 0!==o?o:null;t=null!=n?n:"",(0,m.useEffect)(()=>{if(!t)return;t=t.replace(/ /g,"+");let e=document.createElement("link");e.href="https://fonts.googleapis.com",e.rel="preconnect";let o=document.createElement("link");o.href="https://fonts.gstatic.com",o.rel="preconnect",o.crossOrigin="true";let n=document.createElement("link");return n.href=`https://fonts.googleapis.com/css2?family=${t}:wght@400;500;600&display=swap`,n.rel="stylesheet",document.head.appendChild(e),document.head.appendChild(o),document.head.appendChild(n),()=>{document.head.removeChild(e),document.head.removeChild(o),document.head.removeChild(n)}},[t])}(o),(0,m.useEffect)(()=>u(o),[o]),(0,m.useEffect)(()=>w(p.language||"en-US"),[p.language]),(0,m.useEffect)(()=>M(null),[_,y]);let{chain:A}=(0,d.LN)();(0,m.useEffect)(()=>{(null==A?void 0:A.unsupported)&&(j(!0),S(ir.SWITCHNETWORKS))},[A,_,y]);let N={theme:h,setTheme:u,mode:x,setMode:b,customTheme:n,setCustomTheme:f,lang:k,setLang:w,open:y,setOpen:j,route:_,setRoute:S,connector:L,setConnector:F,signInWithEthereum:null!==(c=null===(s=m.useContext(r3))||void 0===s?void 0:s.enabled)&&void 0!==c&&c,options:p,errorMessage:I,debug:(e,o)=>{M(e),console.log("---------CONNECTKIT DEBUG---------"),console.log(e),o&&console.table(o),console.log("---------/CONNECTKIT DEBUG---------")}};return(0,m.createElement)(ii.Provider,{value:N},(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)(E.f6,{theme:D,children:[e,(0,v.jsx)(it,{lang:k,theme:h,mode:t,customTheme:g})]})}))},is=()=>{let e=m.useContext(ii);if(!e)throw Error("ConnectKit Hook must be inside a Provider.");return e},ic=z(w.E.div)`
  top: 0;
  bottom: 0;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;z(w.E.div)`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  overflow: hidden;
  svg {
    display: block;
  }
`;let id=z(w.E.div)`
  pointer-events: none;
  user-select: none;
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 8px;
`,il=z(w.E.div)`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.02);
  background: var(--ck-body-color-danger, red);
  color: #fff;
  svg {
    display: block;
    position: relative;
    top: -1px;
  }
`,ip=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  height: 40px;
  padding: 0;
  line-height: 0;
  letter-spacing: -0.2px;
  font-size: var(--ck-connectbutton-font-size, 16px);
  font-weight: var(--ck-connectbutton-font-weight, 500);
  text-align: center;
  transition: 100ms ease;
  transition-property: color, background, box-shadow, border-radius;

  color: var(--color);
  background: var(--background);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  &.primary {
    --color: var(--ck-connectbutton-color);
    --background: var(--ck-connectbutton-background);
    --box-shadow: var(--ck-connectbutton-box-shadow);
    --border-radius: var(--ck-connectbutton-border-radius, 12px);

    --hover-color: var(--ck-connectbutton-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(--ck-connectbutton-active-color, var(--hover-color));
    --active-background: var(
      --ck-connectbutton-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-active-border-radius,
      var(--hover-border-radius)
    );
  }
  &.secondary {
    --color: var(--ck-connectbutton-balance-color);
    --background: var(--ck-connectbutton-balance-background);
    --box-shadow: var(--ck-connectbutton-balance-box-shadow);
    --border-radius: var(
      --ck-connectbutton-balance-border-radius,
      var(--ck-connectbutton-border-radius, 12px)
    );

    --hover-color: var(--ck-connectbutton-balance-hover-color, var(--color));
    --hover-background: var(
      --ck-connectbutton-balance-hover-background,
      var(--background)
    );
    --hover-box-shadow: var(
      --ck-connectbutton-balance-hover-box-shadow,
      var(--box-shadow)
    );
    --hover-border-radius: var(
      --ck-connectbutton-balance-hover-border-radius,
      var(--border-radius)
    );

    --active-color: var(
      --ck-connectbutton-balance-active-color,
      var(--hover-color)
    );
    --active-background: var(
      --ck-connectbutton-balance-active-background,
      var(--hover-background)
    );
    --active-box-shadow: var(
      --ck-connectbutton-balance-active-box-shadow,
      var(--hover-box-shadow)
    );
    --active-border-radius: var(
      --ck-connectbutton-balance-active-border-radius,
      var(--hover-border-radius)
    );
  }
`,ih=z.button`
  all: initial;
  appearance: none;
  user-select: none;
  position: relative;
  padding: 0;
  margin: 0;
  background: none;
  border-radius: var(--ck-border-radius);

  &:disabled {
    pointer-events: none;
    opacity: 0.3;
  }

  display: flex;
  flex-wrap: nowrap;
  background: none;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &:hover {
    ${ip} {
      color: var(--hover-color, var(--color));
      background: var(--hover-background, var(--background));
      box-shadow: var(--hover-box-shadow, var(--box-shadow));
      border-radius: var(--hover-border-radius, var(--border-radius));
    }
  }
  &:active {
    ${ip} {
      color: var(--active-color, var(--hover-color, var(--color)));
      background: var(
        --active-background,
        var(--hover-background, var(--background))
      );
      box-shadow: var(
        --active-box-shadow,
        var(--hover-box-shadow, var(--box-shadow))
      );
      border-radius: var(
        --active-border-radius,
        var(--hover-border-radius, var(--border-radius))
      );
    }
  }
  &:focus-visible {
    outline: 2px solid var(--ck-family-brand);
  }
`,iu=({children:e,variant:o="primary",autoSize:t=!0,duration:n=.3,style:r})=>{let[i,a]=(0,S.Z)();return(0,v.jsx)(ip,{className:o,initial:!1,animate:t?{width:a.width>10?a.width:"auto"}:void 0,transition:{duration:n,ease:[.25,1,.5,1],delay:.01},style:r,children:(0,v.jsx)("div",{ref:i,style:{whiteSpace:"nowrap",width:"fit-content",position:"relative",padding:"0 12px"},children:e})})},ix=z(w.E.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,ib=E.F4`
  0%,100%{ opacity: 0.1; transform: scale(0.75); }
  50%{ opacity: 0.75; transform: scale(1.2) }
`,ig=z.div`
  pointer-events: none;
  user-select: none;
  padding: 0 5px;
  span {
    display: inline-block;
    vertical-align: middle;
    margin: 0 2px;
    width: 3px;
    height: 3px;
    border-radius: 4px;
    background: currentColor;
    animation: ${ib} 1000ms ease infinite both;
  }
`,ik=({hideIcon:e,hideSymbol:o})=>{let t=ru(),[n,r]=(0,m.useState)(!0),{address:i}=(0,d.mA)(),{chain:a}=(0,d.LN)(),{data:s}=(0,d.KQ)({address:i,chainId:null==a?void 0:a.id,watch:!0}),c=rC.find(e=>e.id===(null==a?void 0:a.id)),l=`${t&&(null==s?void 0:s.formatted)!==void 0?`balance-${null==c?void 0:c.id}-${null==s?void 0:s.formatted}`:"balance-loading"}`;return(0,m.useEffect)(()=>{r(!1)},[]),(0,v.jsx)("div",{style:{position:"relative"},children:(0,v.jsx)(y.M,{initial:!1,children:(0,v.jsx)(w.E.div,{initial:(null==s?void 0:s.formatted)!==void 0&&n?{opacity:1}:{opacity:0,position:"absolute",top:0,left:0,bottom:0},animate:{opacity:1,position:"relative"},exit:{opacity:0,position:"absolute",top:0,left:0,bottom:0},transition:{duration:.4,ease:[.25,1,.5,1],delay:.4},children:i&&t&&(null==s?void 0:s.formatted)!==void 0?(null==a?void 0:a.unsupported)?(0,v.jsxs)(ix,{children:[!e&&(0,v.jsx)(r$,{id:null==a?void 0:a.id}),(0,v.jsx)("span",{style:{minWidth:32},children:"???"})]}):(0,v.jsxs)(ix,{children:[!e&&(0,v.jsx)(r$,{id:null==a?void 0:a.id}),(0,v.jsx)("span",{style:{minWidth:32},children:eS(Number(null==s?void 0:s.formatted))}),!o&&` ${null==s?void 0:s.symbol}`]}):(0,v.jsxs)(ix,{children:[!e&&(0,v.jsx)(r$,{}),(0,v.jsx)("span",{style:{minWidth:32},children:(0,v.jsxs)(ig,{children:[(0,v.jsx)("span",{style:{animationDelay:"0ms"}}),(0,v.jsx)("span",{style:{animationDelay:"50ms"}}),(0,v.jsx)("span",{style:{animationDelay:"100ms"}})]})})]})},l)})})},iv={initial:{zIndex:2,opacity:0,x:"-100%"},animate:{opacity:1,x:.1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,opacity:0,x:"-100%",pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},im={initial:{zIndex:2,opacity:0,x:"100%"},animate:{x:.2,opacity:1,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{zIndex:1,x:"100%",opacity:0,pointerEvents:"none",position:"absolute",transition:{duration:.4,ease:[.25,1,.5,1]}}},iC={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,ease:[.25,1,.5,1]}},exit:{position:"absolute",opacity:0,transition:{duration:.3,ease:[.25,1,.5,1]}}},iw=({children:e})=>{let o=ru(),t=is(),{chain:n}=(0,d.LN)(),{address:r,isConnected:i,isConnecting:a}=(0,d.mA)(),{data:s}=(0,d.F6)({chainId:1,address:r});return e&&o?(0,v.jsx)(v.Fragment,{children:e({show:function(){t.setOpen(!0),t.setRoute(i?ir.PROFILE:ir.CONNECTORS)},hide:function(){t.setOpen(!1)},unsupported:!!(null==n?void 0:n.unsupported),isConnected:!!r,isConnecting:a,address:r,truncatedAddress:r?eF(r):void 0,ensName:null==s?void 0:s.toString()})}):null};function iy({label:e,showAvatar:o,separator:t}){var n;let r=oI({}),i=is(),{signedIn:a}=r8(),{address:s}=(0,d.mA)(),{data:c}=(0,d.F6)({chainId:1,address:s}),{chain:l}=(0,d.LN)(),p=r.connectWallet;return(0,v.jsx)(y.M,{initial:!1,children:s?(0,v.jsxs)(ic,{initial:"initial",animate:"animate",exit:"exit",variants:im,style:{height:40},children:[o&&(0,v.jsxs)(id,{children:[(0,v.jsxs)(y.M,{initial:!1,children:[a&&(0,v.jsx)(w.E.div,{style:{zIndex:2,position:"absolute",bottom:0,right:0},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,v.jsx)(oy,{})}),(null==l?void 0:l.unsupported)&&(0,v.jsx)(il,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,v.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,v.jsx)("path",{d:"M1.68831 13.5H12.0764C13.1026 13.5 13.7647 12.7197 13.7647 11.763C13.7647 11.4781 13.6985 11.1863 13.5462 10.9149L8.34225 1.37526C8.02445 0.791754 7.45505 0.5 6.88566 0.5C6.31627 0.5 5.73364 0.791754 5.42246 1.37526L0.225108 10.9217C0.0728291 11.1863 0 11.4781 0 11.763C0 12.7197 0.662083 13.5 1.68831 13.5ZM6.88566 8.8048C6.49503 8.8048 6.27655 8.5809 6.26331 8.1738L6.16399 5.0595C6.15075 4.64562 6.44869 4.34708 6.87904 4.34708C7.30278 4.34708 7.61396 4.6524 7.60071 5.06628L7.5014 8.16701C7.48154 8.5809 7.26305 8.8048 6.88566 8.8048ZM6.88566 11.3492C6.44207 11.3492 6.07792 11.0303 6.07792 10.5757C6.07792 10.1211 6.44207 9.80219 6.88566 9.80219C7.32926 9.80219 7.69341 10.1143 7.69341 10.5757C7.69341 11.0371 7.32264 11.3492 6.88566 11.3492Z",fill:"currentColor"})})})]}),(0,v.jsx)(rx,{size:24,address:s})]}),(0,v.jsx)("div",{style:{position:"relative",paddingRight:o?1:0},children:(0,v.jsx)(y.M,{initial:!1,children:c?(0,v.jsx)(ic,{initial:"initial",animate:"animate",exit:"exit",variants:iC,style:{position:c?"relative":"absolute"},children:(null===(n=i.options)||void 0===n?void 0:n.truncateLongENSAddress)?e_(c,20):c},"ckEnsName"):(0,v.jsxs)(ic,{initial:"initial",animate:"animate",exit:"exit",variants:iC,style:{position:c?"absolute":"relative"},children:[eF(s,t)," "]},"ckTruncatedAddress")})})]},"connectedText"):(0,v.jsx)(ic,{initial:"initial",animate:"animate",exit:"exit",variants:iv,style:{height:40},children:e||p},"connectWalletText")})}function ij({label:e,showBalance:o=!1,showAvatar:t=!0,theme:n,mode:r,customTheme:i,onClick:a}){var s;let c=ru(),l=is(),{isConnected:p,address:h}=(0,d.mA)(),{chain:u}=(0,d.LN)();function x(){l.setOpen(!0),l.setRoute(p?ir.PROFILE:ir.CONNECTORS)}let b=["web95","rounded","minimal"].includes(null!==(s=null!=n?n:l.theme)&&void 0!==s?s:"")?"....":void 0;if(!c)return null;let g=o&&!(null==u?void 0:u.unsupported);return(0,v.jsx)(K,{$useTheme:null!=n?n:l.theme,$useMode:null!=r?r:l.mode,$customTheme:null!=i?i:l.customTheme,children:(0,v.jsxs)(ih,{onClick:()=>{a?a(x):x()},children:[g&&(0,v.jsx)(y.M,{initial:!1,children:h&&g&&(0,v.jsx)(w.E.div,{initial:{opacity:0,x:"100%",width:0,marginRight:0},animate:{opacity:1,x:0,width:"auto",marginRight:-24,transition:{duration:.4,ease:[.25,1,.5,1]}},exit:{opacity:0,x:"100%",width:0,marginRight:0,transition:{duration:.4,ease:[.25,1,.5,1]}},children:(0,v.jsx)(iu,{variant:"secondary",theme:null!=n?n:l.theme,mode:null!=r?r:l.mode,customTheme:null!=i?i:l.customTheme,style:{overflow:"hidden"},children:(0,v.jsx)(w.E.div,{style:{paddingRight:24},children:(0,v.jsx)(ik,{hideSymbol:!0})})})},"balance")}),(0,v.jsx)(iu,{theme:null!=n?n:l.theme,mode:null!=r?r:l.mode,customTheme:null!=i?i:l.customTheme,style:g&&o&&h&&("retro"===n||"retro"===l.theme)?{boxShadow:"var(--ck-connectbutton-balance-connectbutton-box-shadow)",borderRadius:"var(--ck-connectbutton-balance-connectbutton-border-radius)",overflow:"hidden"}:{overflow:"hidden"},children:(0,v.jsx)(iy,{separator:b,showAvatar:t,label:e})})]})})}iw.displayName="ConnectKitButton.Custom",ij.Custom=iw;let iE=E.F4`
  0%{ transform:none; }
  25%{ transform:translateX(${8}px); }
  50%{ transform:translateX(-${8}px); }
  75%{ transform:translateX(${8}px); }
  100%{ transform:none; }
`,iL=E.F4`
  0%{ transform:translate(500%,100%); opacity:0; }
  60%{ transform:translate(25%,-20%); opacity:1; }
  70%{ transform:translate(25%,-20%); }
  85%{ transform:translate(25%,-20%) scale(0.9); }
  100%{ transform:translate(25%,-20%) scale(1); opacity:1; }
`;z.div`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4), 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  &.play {
    animation: ${iL} 1300ms 200ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,z.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  &.shake {
    animation: ${iE} 300ms 100ms cubic-bezier(0.16, 1, 0.6, 1) both;
  }
`,z.div`
  z-index: 1;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    z-index: 9;
    content: '';
    position: absolute;
    inset: 0;
  }
`}}]);