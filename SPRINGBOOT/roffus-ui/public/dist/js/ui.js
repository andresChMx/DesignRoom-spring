var panelDetails={
    trigger:null,
    closer:[],
    elem:null,
    init:function(){
        this.elem=document.querySelector(".panel-detalles");
        //this.trigger=document.querySelector(".panel-main .options .menu .btn-room");
        this.closer=document.querySelectorAll(".panel-detalles .btn-close");

        this.name=document.querySelector(".panel-detalles .title");
        this.image=document.querySelector(".panel-detalles__main__imagen img");
        this.description=document.querySelector(".panel-detalles__main__informacion__descripcion");
        this.price=document.querySelector(".panel-detalles__main__informacion__footer .precio");
        this.dimentions=document.querySelectorAll(".panel-detalles__main__informacion__sizes");
        this.linkStore=document.querySelector(".panel-detalles__main__informacion__footer .btn-visitar");
        //this.trigger.addEventListener("click",this.trigger_fired);
        for(var i=0;i<this.closer.length;i++){this.closer[i].addEventListener("click",this.closer_fired)}
    },
    trigger_fired:function(furnitureModel){
        let self=panelDetails;
        console.log(furnitureModel.nombreMueble);
        self.name.textContent=furnitureModel.nombreMueble;
        self.image.setAttribute("src",furnitureModel.imagen);
        self.description.textContent=furnitureModel.descripcion +"elit. Suspendisse at consectetur metus, at fermentum leo. Phasellus at velit imperdiet, hendrerit felis fermentum, auctor ante. Sed feugiat sapien mi, ac eleifend ex semper at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at felis lorem. Aliquam at elit pulvinar, interdum sem ac, elementum dolor.";
        self.price.textContent="s/ 2000.0";
        self.linkStore.setAttribute("href","http://google.com");
        self.dimentions[0].textContent="Ancho: "+furnitureModel.ancho + " cm";
        self.dimentions[1].textContent="Largo: " + furnitureModel.largo + " cm";
        self.dimentions[2].textContent="Alto: " + furnitureModel.alto + "cm";

        self.elem.style.display="block";

    },
    closer_fired:function(){
        panelDetails.elem.style.display="none";
    }
}
var panelMenuFlotante={
    trigger:null,
    elem:null,
    furnitureCaring:null,
    init:function(){
        this.elem=document.querySelector(".floating-menu");
        this.btnBorrar=document.querySelector(".floating-menu__delete");
        this.btnDetails=document.querySelector(".floating-menu__detalles");
        this.btnBorrar.addEventListener("click",function(){
            canvas.deleteActive();
            this.hidde();
        }.bind(this));
        this.btnDetails.addEventListener("click",function(){
            if(this.furnitureCaring){
                panelDetails.trigger_fired(this.furnitureCaring.objDB)
            }
        }.bind(this));
    },
    show:function(x,y,furniture){
        let self=panelMenuFlotante;
        self.furnitureCaring=furniture;
        self.elem.style.left=x-self.elem.offsetWidth/2 +"px";
        self.elem.style.top=y-self.elem.offsetHeight/2 + "px";
    }
    ,hidde:function(){
        let self=panelMenuFlotante;
        this.furnitureCaring=null;
        self.elem.style.left=-100+"px";
        self.elem.style.top=-100 + "px";
    }

}
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
    canvasManager:null,
    isActive:false,
    setCanvasManger:function(obj){
        panelUser.canvasManager=obj;
        panelUser.canvasManager.registerOnWindowMouseUp(panelUser);
    },
    init:function(){
        this.elem=document.querySelector(".user-panel");
        this.trigger=document.querySelector(".panel-main .options .btn-session");
        this.trigger.addEventListener("click",this.trigger_fired);
    },
    trigger_fired:function(){
        panelUser.elem.style.display="block";
        setTimeout(function(){panelUser.isActive=true; },10);
        
    },
    notificationOnWindowMouseUp:function(e){
        
        if(panelUser.isActive){
            if(e.target.getAttribute("type") !="panelUser"){
                panelUser.elem.style.display="none";
                panelUser.isActive=false;
            }else if(e.target.classList.contains("btn-logout")){
                panelUser.elem.style.display="none";
                panelUser.isActive=false;
            }

        }
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
