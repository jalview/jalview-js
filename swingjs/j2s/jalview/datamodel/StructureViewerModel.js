(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'java.util.ArrayList','java.util.HashMap']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "StructureViewerModel", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.x=0;
this.y=0;
this.width=0;
this.height=0;
this.alignWithPanel=false;
this.colourWithAlignPanel=false;
this.colourByViewer=false;
this.stateData=null;
this.viewId=null;
this.type=null;
this.fileData=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.stateData="";
this.fileData=Clazz.new_($I$(2));
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$Z$Z$Z$S$S', function (x, y, width, height, alignWithPanel, colourWithAlignPanel, colourByViewer, viewId, type) {
C$.$init$.apply(this);
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.alignWithPanel=alignWithPanel;
this.colourWithAlignPanel=colourWithAlignPanel;
this.colourByViewer=colourByViewer;
this.viewId=viewId;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'setX$I', function (x) {
this.x=x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'setY$I', function (y) {
this.y=y;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'setWidth$I', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$I', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'isAlignWithPanel$', function () {
return this.alignWithPanel;
});

Clazz.newMeth(C$, 'setAlignWithPanel$Z', function (alignWithPanel) {
this.alignWithPanel=alignWithPanel;
});

Clazz.newMeth(C$, 'isColourWithAlignPanel$', function () {
return this.colourWithAlignPanel;
});

Clazz.newMeth(C$, 'setColourWithAlignPanel$Z', function (colourWithAlignPanel) {
this.colourWithAlignPanel=colourWithAlignPanel;
});

Clazz.newMeth(C$, 'isColourByViewer$', function () {
return this.colourByViewer;
});

Clazz.newMeth(C$, 'setColourByViewer$Z', function (colourByViewer) {
this.colourByViewer=colourByViewer;
});

Clazz.newMeth(C$, 'getStateData$', function () {
return this.stateData;
});

Clazz.newMeth(C$, 'setStateData$S', function (stateData) {
this.stateData=stateData;
});

Clazz.newMeth(C$, 'getFileData$', function () {
return this.fileData;
});

Clazz.newMeth(C$, 'setFileData$java_util_Map', function (fileData) {
this.fileData=fileData;
});

Clazz.newMeth(C$, 'getViewId$', function () {
return this.viewId;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});
;
(function(){var C$=Clazz.newClass(P$.StructureViewerModel, "StructureData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.filePath=null;
this.pdbId=null;
this.seqList=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$S', function (pdbFile, id) {
C$.$init$.apply(this);
this.filePath=pdbFile;
this.pdbId=id;
this.seqList=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'getFilePath$', function () {
return this.filePath;
});

Clazz.newMeth(C$, 'setFilePath$S', function (filePath) {
this.filePath=filePath;
});

Clazz.newMeth(C$, 'getPdbId$', function () {
return this.pdbId;
});

Clazz.newMeth(C$, 'setPdbId$S', function (pdbId) {
this.pdbId=pdbId;
});

Clazz.newMeth(C$, 'getSeqList$', function () {
return this.seqList;
});

Clazz.newMeth(C$, 'setSeqList$java_util_List', function (seqList) {
this.seqList=seqList;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:09 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
