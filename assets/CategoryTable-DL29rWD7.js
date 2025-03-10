import{_ as i,m as d,c as o,e as m,o as c,w as u,r as _,f as p}from"./index-DwlHLOfu.js";import{P as g}from"./Page-Ce8nEMl8.js";const b={name:"CategoryTable",props:{filter:Object,selected:Boolean},components:{Page:g},data(){return{data:{},loaded:!1}},computed:{can_view(){return(this.user.permissions??[]).includes("categories")||this.user.is_admin},can_insert(){return(this.user.permissions??[]).includes("categories.insert")||this.user.is_admin},can_update(){return(this.user.permissions??[]).includes("categories.update")||this.user.is_admin},can_delete(){return(this.user.permissions??[]).includes("categories.delete")||this.user.is_admin},...d(["loading","user"])},watch:{loading(a){a||(this.loaded=!0)},data(){this.emitData()}},methods:{emitData(){this.$emit("update:modelValue",this.data)}},mounted(){this.loading||(this.loaded=!0)}};function f(a,l,n,h,t,e){const s=_("page");return t.loaded?(c(),o(s,{key:0,modelValue:t.data,"onUpdate:modelValue":l[0]||(l[0]=r=>t.data=r),url:"admin/categories",id_field:"id_category",filter:n.filter,selected:n.selected,can_view:e.can_view,can_insert:e.can_insert,can_update:e.can_update,can_delete:e.can_delete,fields:[[{type:"number",name:"id_category",label:"ID",disabled:!0,col:[12,2,2,2,2,2]},{name:"name",label:"Nome",col:[12,10,10,5,5,5]},{name:"slug",label:"Nome na Url",col:[12,12,12,5,5,5]},{name:"order",type:"number",label:"Ordem",col:[12,4]},{name:"type",label:"Tipo",col:[12,4]},{type:"lang",name:"id_language",label:"Idioma",col:[12,4]}]],sort_by:"name",grid_columns:[{name:"id_category",label:"ID",type:"number"},{name:"name",label:"Nome"},{name:"slug",label:"Url"},{name:"order",label:"Ordem",type:"number"},{name:"type",label:"Tipo"},{name:"id_language",label:"Idioma",type:"flag"}]},{default:u(()=>[p(a.$slots,"default")]),_:3},8,["modelValue","filter","selected","can_view","can_insert","can_update","can_delete"])):m("",!0)}const C=i(b,[["render",f]]);export{C};
