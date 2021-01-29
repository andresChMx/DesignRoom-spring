window.DesignerProjectStates={empty:'empty',created:'created',saved:'saved'};
var flag=false;
function initUI(){
  panelDetails.init();
  panelMenuFlotante.init();
  panelProject.init();
  panelRoom.init();
  panelUser.init();
  panelCategories.init();
  panelStateInfo.init();
  sectionFurnitures.init();
}
//////
function desInit(){
  canvas.fabric.clear();
  canvas.fabric.dispose();
}
function setCameraToCenter(){
  canvas.fabric.setViewportTransform([1,0,0,1,-3000+(window.innerWidth/2),-3000+(window.innerHeight/2)]); 
}
function categoryClicked(event){
sectionFurnitures.categoryItem_fired(event);
}
function subcategoryClicked(event){
sectionFurnitures.subcategoryItem_fired(event);
}
function addFurniture(obj,seguir){
  arrMuebles.push(new Furniture(obj,seguir,false));
}
function addRoom(pointsArr,ancho,largo){
  if(room!=null){
    room.remove();
    room.initRulersAndHandlers(pointsArr,ancho,largo);
    room.initPolygon();
  }else{
    room=new Room(pointsArr,ancho,largo);
  }
}
function loadFurnitures(listaMuebles){
    for(var i=0;i<listaMuebles.length;i++){
      let tmp=new Furniture(listaMuebles[i].mueble,false,true);
      tmp.setPositionManually(listaMuebles[i].coordX,listaMuebles[i].coordY);
      tmp.setRotationManually(listaMuebles[i].rotacion);
      arrMuebles.push(tmp);
    }
}
function generateListaMuebles(nombreLista){
    let listaMuebles=[];
    for(var i=0;i<arrMuebles.length;i++){
      let tmp=arrMuebles[i];
      listaMuebles.push({
        nombreLista:nombreLista,
        coordX:tmp.fabric.get("left"),
        coordY:tmp.fabric.get("top"),
        rotacion:tmp.fabric.get("angle"),
        mueble:tmp.objDB
      });
    }
    return listaMuebles;
}
function cleanListaMuebles(){
    for(var i=0;i<arrMuebles.length;i++){
      canvas.fabric.remove(arrMuebles[i].fabric);
    }
    canvas.fabric.renderAll();
    arrMuebles=[];
}

function showMessage(message){
  dialogeBox.innerHTML=message;
  dialogeBox.classList.add("show");
  setTimeout(function(){dialogeBox.classList.remove("show")},1900);
}
