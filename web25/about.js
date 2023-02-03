function onClickFun(){

    alert("OnClick Event Fired");
}

function onMouseOverFun(){

    alert("OnMouseOver Event Fired");
}

function onMouseOutFun(){
    alert("OnMouseOut Event Fired");
}

function OnDoubleClickFun(){
    alert("OnDouble Click Event Fired");
}

function OnCityChnage(){
    var city=document.getElementById("selectCity"); 
    alert(city.value);
}

function OnContentCopyFun(){
    alert("Content is copied.");
}

function onMouseDownFun(){
    alert("mouse down event fired.");
}

function onMouseUpFun(){
    alert("mouse up event fired.");
}

function onContextMenuFun(){
    alert("Right Click Not Support.");
}

function onDragStartFun(event){
    event.dataTransfer.setData("Text",event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    var data=event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}
