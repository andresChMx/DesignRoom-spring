    
    var Ruler=function(posA,posB){
        this.pointA=null;
        this.pointB=null;
        this.rect=null;
        this.text=null;
        this.group=null;
        let self=this;

        this.currentPosX=0;
        this.currentPosY=0;
        this.init=function(posA,posB){
            self.pointA=self.initHandler(posA);
            self.pointB=self.initHandler(posB);
            self.initRuler();
            canvas.fabric.add(self.group);
            canvas.fabric.add(self.pointA);
            canvas.fabric.add(self.pointB);
        }
        this.initHandler=function(p){
            let tmp=p;
            tmp.set({
                radius:5,
                fill:'#009D9B',
                originX:'center',
                originY:'center',
            });
            tmp["hasControls"]=false;
            tmp.on("moving",self.handlerMoved)
            tmp.type="ruler";
            return tmp;
        }
        this.initRuler=function(){
            let info=self.calcRulerInfo();
            self.text=new fabric.Text((info.width/100).toFixed(2) + "m", {
                fontSize: 14,
                fill:'white',
                originX: 'center',
                originY: 'center',
                left:0,
                right:0,

              });
            self.rect=new fabric.Rect({
                fill:'#009D9B',
                originX:'center',
                originY:'center',
                left:0,
                top:0,
                angle:0,
                width:info.width,
                height:10
            });
            self.group=new fabric.Group([self.rect,self.text],{
                left:info.x,
                top:info.y,
                angle:info.
                angle,originX:'center',
                originY:'center'
            })
            self.group['hasControls']=false;
            self.group.on("moving",self.rulerMoved);
            self.group.on("mousedown",function(){
                self.currentPosX=self.group.left;
                self.currentPosY=self.group.top;
            })

            //
            self.group.type="ruler";
        }
        this.handlerMoved=function(){
            let info=self.calcRulerInfo();
            self.group.set({left:info.x,top:info.y,angle:info.angle})
            self.group.set("width",info.width);
            self.rect.set("width",info.width-10);
            self.text.set("text",(info.width/100).toFixed(2) + "m");
            self.group.setCoords();
        }
        this.rulerMoved=function(){
            let dx=self.group.left-self.currentPosX;
            let dy=self.group.top-self.currentPosY;
            self.pointA.left+=dx;
            self.pointA.top+=dy;
            self.pointB.left+=dx;
            self.pointB.top+=dy;
            self.pointA.setCoords();
            self.pointB.setCoords();
            self.currentPosX=self.group.left;
            self.currentPosY=self.group.top;
        }
        this.calcRulerInfo=function(){
            let dx=self.pointA.left-self.pointB.left;
            let dy=self.pointA.top-self.pointB.top;

            let tmpwidth=Math.sqrt(dx*dx+dy*dy);
            let tmpangle=Math.atan2(dy,dx)/Math.PI*180;
            return {x:self.pointA.left-dx/2, y:self.pointA.top-dy/2,width:tmpwidth,angle:tmpangle}
        }
        this.getPointA=function(){
            return this.pointA;
        }
        this.getPointB=function(){
            return this.pointB;
        }
        this.init(posA,posB);
    }
    var Room=function(points,ancho,alto){
        this.rulersList=[];
        this.pointsList=[];
        this.pattern=null;
        this.polygon=null;
        let self=this;
        this.constructor=function(pointsArr,ancho,largo){
            self.initRulersAndHandlers(pointsArr,ancho,largo);
            self.initPattern();
            self.initPolygon();
        }
        this.initRulersAndHandlers=function(pointsArr,ancho,largo){
            for(var i=0;i<pointsArr.length-1;i++){
                if(self.pointsList[i]==undefined){
                    let tmp=new fabric.Circle({left:(pointsArr[i].x*ancho)+3000,top:(pointsArr[i].y*largo)+3000})
                    self.pointsList[i]=tmp;
                    tmp["selectable"]=false;
                }
                if(self.pointsList[i+1]==undefined){
                    let tmp=new fabric.Circle({left:(pointsArr[i+1].x*ancho)+3000,top:(pointsArr[i+1].y*largo)+3000});
                    
                    self.pointsList[i+1]=tmp;
                    tmp["selectable"]=false;
                }
                let tmp=new Ruler(self.pointsList[i],self.pointsList[i+1]);
                self.rulersList.push(tmp);
            }
            let tmp=new Ruler(self.pointsList[self.pointsList.length-1],self.pointsList[0]);
            self.rulersList.push(tmp);
//////////////////////////////
            for(var i=0;i<self.pointsList.length;i++){
                self.pointsList[i].on("moving",self.initPolygon);
            }
/////////////////////////////
            for(var i=0;i<this.rulersList.length;i++){
                if(i!=0 && i!=this.rulersList.length-1){
                    this.rulersList[i].group.next=i+1;
                    this.rulersList[i].group.prev=i-1;
                }else{
                    if(i==0){
                        this.rulersList[i].group.next=i+1;
                        this.rulersList[i].group.prev=this.rulersList.length-1;
                    }else if(i==this.rulersList.length-1){
                        this.rulersList[i].group.next=0;
                        this.rulersList[i].group.prev=i-1;
                    }
                }
                this.rulersList[i].group.on("moving",self.rulerMoved);
            }   
        }
        this.initPattern=function(){
            fabric.Image.fromURL('dist/img/floor.jpg',function(img){
                img.scaleToWidth(100);
                var patternSourceCanvas = new fabric.StaticCanvas();
                patternSourceCanvas.add(img);
                patternSourceCanvas.renderAll();
                self.pattern=new fabric.Pattern({
                    source: function() {
                        patternSourceCanvas.setDimensions({
                          width: img.getScaledWidth(),
                          height: img.getScaledHeight()
                        });
                        patternSourceCanvas.renderAll();
                        return patternSourceCanvas.getElement();
                      },
                    repeat:'repeat'
                })
                self.initPolygon();
            });

        }
        this.initPolygon=function(){
            if(canvas.fabric.item(0).isPolygon){
                canvas.fabric.remove(canvas.fabric.item(0));
            }

            let pointsArr=[];
            for(var i=0;i<self.pointsList.length;i++){
                pointsArr.push({
                    x:self.pointsList[i].left,
                    y:self.pointsList[i].top
                });
            }
            self.polygon=new fabric.Polygon(pointsArr,{fill:self.pattern,objectCaching:false});
            self.polygon["hasControls"]=false;
            self.polygon["selectable"]=false;
            self.polygon.isPolygon=true;
            self.type="polygon";
            canvas.fabric.add(self.polygon);
            self.polygon.moveTo(0);
            

        }
        this.rulerMoved=function(e){
            if(e.target.next!=undefined && e.target.prev!=undefined){
                self.rulersList[e.target.prev].handlerMoved();
                self.rulersList[e.target.next].handlerMoved();
            }
            self.initPolygon();
        }
        this.remove=function(){
            let allObjects=canvas.fabric.getObjects();
            for(var i=0;i<allObjects.length;i++){
                if(allObjects[i].type=="ruler"){
                    canvas.fabric.remove(allObjects[i]);
                }
            }
            this.pointsList=[];
            this.rulersList=[];
        }
        this.constructor(points,ancho,alto);
    }
    var Canvas=function(){
        this.fabric=null;
        this.isDragging=false;
        this.lastPosX=0;
        this.lastPosY=0;
        this.mousePosX=0;
        this.mousePosY=0;
        this.listObserversOnWindowMouseUp=[];
        let self=this;
        this.constructor=function(){
            self.initCanvas();
            self.setBackground("dist/img/grid.jpg");
            self.initEvents();
            self.fabric.selection=false;
            self.fabric.viewportTransform[4]=(-3000+(window.innerWidth/2));
            self.fabric.viewportTransform[5]=(-3000+(window.innerHeight/2));
        };
        this.initCanvas=function(){
            self.fabric=new fabric.Canvas('canvas',{
                width:window.innerWidth,
                height:window.innerHeight,
            });
        };
        this.setBackground=function(url){
            fabric.Image.fromURL(url,function(img){
                self.fabric.setBackgroundImage(img,self.fabric.renderAll.bind(self.fabric));
            });
        };
        this.initEvents=function(){
            self.fabric.on("mouse:wheel",self.mouseWheel);
            self.fabric.on("mouse:down",self.mouseDown);
            self.fabric.on("mouse:move",self.mouseMove);
            self.fabric.on("mouse:up",self.mouseUp);
            
            window.addEventListener("keyup",function(e){
                if(e.keyCode==46){
                    let activeObj=this.canvas.fabric.getActiveObject();
                    if(activeObj!=null && activeObj.type=='furniture'){
                        this.canvas.fabric.remove(this.canvas.fabric.getActiveObject())
                        for(let i=0;i<arrMuebles.length;i++){
                            if(arrMuebles[i].fabric.codMueble==activeObj.codMueble){
                                arrMuebles.splice(i,1);
                                break;
                            }
                        }
                    }    
                }
            });
            window.addEventListener("mouseup",this.notifyOnWindowMouseUp.bind(this));
        }
        this.deleteActive=function(){
            let activeObj=self.fabric.getActiveObject();
            if(activeObj!=null && activeObj.type=='furniture'){
                self.fabric.remove(self.fabric.getActiveObject())
                for(let i=0;i<arrMuebles.length;i++){
                    if(arrMuebles[i].fabric.codMueble==activeObj.codMueble){
                        arrMuebles.splice(i,1);
                        break;
                    }
                }
            }  
        }
        this.mouseWheel=function(opt){
            var delta = -opt.e.deltaY;
            var pointer = canvas.fabric.getPointer(opt.e);
            var zoom = canvas.fabric.getZoom();
            zoom = zoom + delta/2000;
            if (zoom > 5) zoom = 5;
            if (zoom < 0.3) zoom = 0.3;
            canvas.fabric.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
            opt.e.preventDefault();
            opt.e.stopPropagation();
        }
        this.mouseDown=function(opt){
            var evt = opt.e;
            if (evt.altKey === true) {
              self.isDragging = true;
              self.selection = false;
              self.lastPosX = evt.clientX;
              self.lastPosY = evt.clientY;
            }
        }
        this.mouseUp=function(opt){

            if(self.isDragging){
                let allObjects=self.fabric.getObjects();
                for(var i=0;i<allObjects.length;i++){
                    allObjects[i].setCoords();
                }
            }


            self.isDragging = false;
            
        }
        this.mouseMove=function(opt){
            if (self.isDragging) {
                var e = opt.e;
                self.fabric.viewportTransform[4] += e.clientX - self.lastPosX;
                self.fabric.viewportTransform[5] += e.clientY - self.lastPosY;
                self.fabric.requestRenderAll();
                self.lastPosX = e.clientX;
                self.lastPosY = e.clientY;
              }
              self.mousePosX=opt.e.clientX;
              self.mousePosY=opt.e.clientY;

        }
        this.notifyOnWindowMouseUp=function(e){
            for(let i=0;i<this.listObserversOnWindowMouseUp.length;i++){
                this.listObserversOnWindowMouseUp[i].notificationOnWindowMouseUp(e);
            }
        }
        this.registerOnWindowMouseUp=function(obj){
            this.listObserversOnWindowMouseUp.push(obj);
        }
        this.constructor();
    }

    var Furniture=function(obj,seguir,isloaded,ancho,alto){
        this.fabric;
        //
        this.objDB=obj;
        this.url=obj.icono;    
        //
        this.width=ancho;
        this.height=alto;
        this.seguir=seguir;
        this.isloaded=isloaded;
            this.left=0;
            this.top=0;
            this.angle=0;
        let self=this;
        this.init=function(){
            this.objDB=obj;
            fabric.Image.fromURL(this.url,function(img){
                self.fabric=img;
                img.set("originX","center");
                img.set("originY","center");
                img.on("selected",self.isSelected.bind(this))
                img.on("deselected",self.isDeselected.bind(this));
                img.on("modified",self.isModified.bind(this));
                if(!self.isloaded){
                    if(self.seguir){
                        img.set("left",canvas.mousePosX);
                        img.set("top",canvas.mousePosY);
                        canvas.fabric.setActiveObject(img);
                    }else{
                        img.set("left",3000-img.getScaledWidth()/2);
                        img.set("top",3000-img.getScaledWidth()/2);
                    }
                }else{
                    img.set("left",self.left);
                    img.set("top",self.top);
                    img.set("angle",self.angle);
                }
                img["transparentCorners"]=false;
                img["cornerColor"]="rgba(30,30,30)";
                img["cornerSize"]=20;
                img["setControlVisible"]('tl',false);
                img["setControlVisible"]('ml',false);
                img["setControlVisible"]('bl',false);
                img["setControlVisible"]('tl',false);
                img["setControlVisible"]('mb',false);
                img["setControlVisible"]('br',false);
                img["setControlVisible"]('mr',false);
                img["setControlVisible"]('tr',false);
                img["setControlVisible"]('mt',false);
                img.type="furniture";
                img.codMueble=self.objDB.codMueble;
                if(self.width!=undefined && self.height!=undefined){
                    img.set("scaleX",self.widthimg.get("width"));
                    img.set("scaleY",self.heightimg.get("height"));
                }
                canvas.fabric.add(img);
            });
            
        }
        this.setPositionManually=function(left,top){
            this.left=left;
            this.top=top;
        }
        this.setRotationManually=function(rot){
            this.angle=rot;
        }
        this.isSelected=function(){
            panelMenuFlotante.show(self.fabric.get("left")+(canvas.fabric.viewportTransform[4]),self.fabric.get("top")+(canvas.fabric.viewportTransform[5])+40,self);
            self.setPanelStateInfo();
        }
        this.isModified=function(){
            panelMenuFlotante.show(self.fabric.get("left")+(canvas.fabric.viewportTransform[4]),self.fabric.get("top")+(canvas.fabric.viewportTransform[5])+40,self);
            self.setPanelStateInfo();
        }
        this.isDeselected=function(){
            panelMenuFlotante.hidde();
            panelStateInfo.hidde();
        }
        this.setPanelStateInfo=function(){
            panelStateInfo.show(self.fabric.getScaledWidth() + " cm",self.fabric.getScaledHeight() + " cm",self.fabric.get("angle"));
        }
        this.init();
    }
    //window.addEventListener("load",init);
    var canvas;
    var room=null;
    var arrMuebles=[];
    var dialogeBox=null;
    function init(){
        canvas=new Canvas();
        dialogeBox=document.querySelector(".dialoguebox");
        panelUser.setCanvasManger(canvas);
    }