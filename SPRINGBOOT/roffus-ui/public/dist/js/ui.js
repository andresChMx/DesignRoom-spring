var panelProject={
    trigger:null,
    closer:[],
    elem:null,
    init:function(){
        this.elem=document.querySelector(".panel-project");
        this.trigger=document.querySelector(".panel-main .options .menu .btn-project");
        this.closer=document.querySelectorAll(".panel-project .btn-close");
        ///////////////////
        this.trigger.addEventListener("click",this.trigger_fired);
        console.log(this.closer.length);
        for(var i=0;i<this.closer.length;i++){this.closer[i].addEventListener("click",this.closer_fired)}
    },
    trigger_fired:function(){
        panelProject.elem.style.display="block";
    },
    closer_fired:function(){
        panelProject.elem.style.display="none";
    }
}
var panelRoom={
    trigger:null,
    closer:[],
    elem:null,
    init:function(){
        this.elem=document.querySelector(".panel-room");
        this.trigger=document.querySelector(".panel-main .options .menu .btn-room");
        this.closer=document.querySelectorAll(".panel-room .btn-close");

        this.trigger.addEventListener("click",this.trigger_fired);
        for(var i=0;i<this.closer.length;i++){this.closer[i].addEventListener("click",this.closer_fired)}
    },
    trigger_fired:function(){
        panelRoom.elem.style.display="block";
    },
    closer_fired:function(){
        panelRoom.elem.style.display="none";
    }
}
var panelUser={
    trigger:null,
    closer:null,
    elem:null,
    readyToClose:false,
    init:function(){
        this.elem=document.querySelector(".panel-main .options .user-panel");
        this.trigger=document.querySelector(".panel-main .options .btn-session");
        this.closer=document.querySelectorAll("body");
        ///////////////////////
        console.log(this.closer.length);
        for(var i=0;i<this.closer.length;i++){this.closer[i].addEventListener("click",this.closer_fired)}    
        this.trigger.addEventListener("click",this.trigger_fired);
    },
    trigger_fired:function(){
        if(!panelUser.readyToClose){
        panelUser.elem.classList.remove("fadeOut");
        panelUser.elem.classList.add("fadeIn");
        panelUser.elem.style.display="block";
        setTimeout(function(){panelUser.readyToClose=true},100)
        }
    },
    closer_fired:function(){
        if(panelUser.readyToClose){
            panelUser.readyToClose=false;
            panelUser.elem.classList.add("fadeOut");
            panelUser.elem.classList.remove("fadeIn");
            panelUser.elem.addEventListener("animationend",panelUser.animationend);
        }
    },
    animationend:function(e){
        console.log("asdf");
        e.target.removeEventListener("animationend",panelUser.animationend);
        e.target.style.display="none";
    }
}
var panelCategories={
    trigger:null,
    elem:null,
    closer:[],
    init:function(){
        this.elem=document.querySelector(".panel-categories");
        this.trigger=document.querySelector(".panel-categories .btn-toggle");
        console.log(this.elem);  
        this.trigger.addEventListener("click",this.trigger_fired);
    },
    trigger_fired:function(){
        if(!panelCategories.elem.classList.contains("toggle-panel-categories")){
            panelCategories.trigger.children[0].classList.remove("fa-arrow-left");
            panelCategories.trigger.children[0].classList.add("fa-arrow-right");
        }else{
            panelCategories.trigger.children[0].classList.remove("fa-arrow-right");
            panelCategories.trigger.children[0].classList.add("fa-arrow-left");
        }
        panelCategories.elem.classList.toggle("toggle-panel-categories");
    },
    closer_fired:function(){
    }
}
var panelStateInfo={
    elem:null,
    fields:[],
    init:function(){
        this.elem=document.querySelector(".panel-stateinfo");
        this.fields=document.querySelectorAll(".panel-stateinfo .container .form-group input");
    },
    show:function(ancho,largo,angulo){
        panelStateInfo.elem.style.display="block";
        panelStateInfo.fields[0].value=ancho;
        panelStateInfo.fields[1].value=largo;
        panelStateInfo.fields[2].value=angulo;
       
    },
    hidde:function(){
        panelStateInfo.elem.style.display="none";
    }
}
var sectionFurnitures={
    elem:null,
    categoryItems:[],
    zoneTitle:null,
    zoneContainer:null,

    listCategories:null,
    listFurnitures:null,
    listSubcategories:null,

    actualListIndex:0,
    actualCategory:'',
    init:function(){
        this.elem=document.querySelector(".panel-categories .main");
        this.zoneTitle=this.elem.children[0];
        this.zoneContainer=this.elem.children[1];

        this.listCategories=document.querySelector(".panel-categories .main .list-categories");
        this.listSubcategories=document.querySelector(".panel-categories .main .list-subcategories");
        this.listFurnitures=document.querySelector(".panel-categories .main .list-furnitures");

        this.zoneTitle.children[0].addEventListener("click",this.btnBack_fired);
    },
    btnBack_fired:function(e){
        if(sectionFurnitures.actualListIndex==1){
            sectionFurnitures.actualListIndex=0;
            sectionFurnitures.zoneTitle.children[0].style.display="none";
            sectionFurnitures.zoneTitle.children[1].innerHTML="Categorias";
    
            sectionFurnitures.listCategories.style.display="block";
            sectionFurnitures.listSubcategories.style.display="none";
        }else if(sectionFurnitures.actualListIndex==2){
            sectionFurnitures.actualListIndex=1;
            sectionFurnitures.zoneTitle.children[1].innerHTML=sectionFurnitures.actualCategory;
            sectionFurnitures.listSubcategories.style.display="block";
            sectionFurnitures.listFurnitures.style.display="none";
        }

    },
    categoryItem_fired:function(e){
        sectionFurnitures.actualListIndex=1;
        sectionFurnitures.actualCategory=e.target.innerHTML;
        sectionFurnitures.zoneTitle.children[0].style.display="inline";
        sectionFurnitures.zoneTitle.children[1].innerHTML=e.target.innerHTML;

        sectionFurnitures.listCategories.style.display="none";
        sectionFurnitures.listSubcategories.style.display="block";
    },
    subcategoryItem_fired:function(e){
        sectionFurnitures.actualListIndex=2;
        sectionFurnitures.zoneTitle.children[1].innerHTML+=" > "+e.target.innerHTML;
        sectionFurnitures.zoneTitle.children[0].style.display="inline";

        sectionFurnitures.listSubcategories.style.display="none";
        sectionFurnitures.listFurnitures.style.display="block";
    }
}
