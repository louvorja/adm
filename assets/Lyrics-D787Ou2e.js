import{T as u}from"./Title-CbTmm609.js";import{C as y}from"./Collapse-C0RNj7yi.js";import{L as f}from"./LyricTable-De4bZ8v2.js";import{M as V}from"./MusicTable-BXXiCsbp.js";import{_ as b,b as v,o as r,g as s,d as a,w as c,r as o,F as g,a as k,c as i,e as n}from"./index-DwlHLOfu.js";import"./Input-D_nkPuZX.js";import"./Page-Ce8nEMl8.js";import"./Form-BRYEMo68.js";const x={name:"LyricsPage",components:{TitlePage:u,Collapse:y,LyricTable:f,MusicTable:V},data(){return{lyric:{},active_lyric:!1}}},C={class:"card"},L={class:"card-body"};function T(B,t,N,M,e,w){const m=o("title-page"),_=o("music-table"),p=o("collapse"),d=o("lyric-table");return r(),v(g,null,[s(m,{mb:3},{default:c(()=>[k("Letras")]),_:1}),a("div",C,[a("div",L,[s(d,{modelValue:e.lyric,"onUpdate:modelValue":t[1]||(t[1]=l=>e.lyric=l)},{default:c(()=>[e.lyric.id_lyric?(r(),i(p,{key:0,title:"Música",modelValue:e.active_lyric,"onUpdate:modelValue":t[0]||(t[0]=l=>e.active_lyric=l)},{default:c(()=>[e.active_lyric?(r(),i(_,{key:0,filter:{id_music:e.lyric.id_music},selected:""},null,8,["filter"])):n("",!0)]),_:1},8,["modelValue"])):n("",!0)]),_:1},8,["modelValue"])])])],64)}const A=b(x,[["render",T]]);export{A as default};
