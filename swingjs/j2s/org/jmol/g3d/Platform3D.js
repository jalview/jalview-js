(function(){var P$=Clazz.newPackage("org.jmol.g3d"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "Platform3D");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['windowWidth','windowHeight','windowSize','bufferWidth','bufferHeight','bufferSize','bufferSizeT','widthOffscreen','heightOffscreen'],'O',['bufferedImage','java.lang.Object','pBuffer','int[]','+pBufferT','+zBuffer','+zBufferT','offscreenImage','java.lang.Object','+graphicsForTextOrImage','apiPlatform','org.jmol.api.GenericPlatform']]
,['Z',['backgroundTransparent']]]

Clazz.newMeth(C$, 'c$$org_jmol_api_GenericPlatform', function (apiPlatform) {
;C$.$init$.apply(this);
this.apiPlatform=apiPlatform;
}, 1);

Clazz.newMeth(C$, 'getGraphicsForMetrics$', function () {
return this.apiPlatform.getGraphics$O(p$1.allocateOffscreenImage$I$I.apply(this, [1, 1]));
});

Clazz.newMeth(C$, 'allocateTBuffers$Z', function (antialiasTranslucent) {
this.bufferSizeT=(antialiasTranslucent ? this.bufferSize : this.windowSize);
this.zBufferT=Clazz.array(Integer.TYPE, [this.bufferSizeT]);
this.pBufferT=Clazz.array(Integer.TYPE, [this.bufferSizeT]);
});

Clazz.newMeth(C$, 'allocateBuffers$I$I$Z$Z', function (width, height, antialias, isImageWrite) {
this.windowWidth=width;
this.windowHeight=height;
this.windowSize=width * height;
if (antialias) {
width*=2;
height*=2;
}this.bufferWidth=width;
this.bufferHeight=height;
this.bufferSize=this.bufferWidth * this.bufferHeight;
this.zBuffer=Clazz.array(Integer.TYPE, [this.bufferSize]);
this.pBuffer=Clazz.array(Integer.TYPE, [this.bufferSize]);
this.bufferedImage=this.apiPlatform.allocateRgbImage$I$I$IA$I$Z$Z(this.windowWidth, this.windowHeight, this.pBuffer, this.windowSize, C$.backgroundTransparent, isImageWrite);
});

Clazz.newMeth(C$, 'releaseBuffers$', function () {
this.windowWidth=this.windowHeight=this.bufferWidth=this.bufferHeight=this.bufferSize=-1;
if (this.bufferedImage != null ) {
this.apiPlatform.flushImage$O(this.bufferedImage);
this.bufferedImage=null;
}this.pBuffer=null;
this.zBuffer=null;
this.pBufferT=null;
this.zBufferT=null;
});

Clazz.newMeth(C$, 'hasContent$', function () {
for (var i=this.bufferSize; --i >= 0; ) if (this.zBuffer[i] != 2147483647) return true;

return false;
});

Clazz.newMeth(C$, 'clearScreenBuffer$', function () {
for (var i=this.bufferSize; --i >= 0; ) {
this.zBuffer[i]=2147483647;
this.pBuffer[i]=0;
}
});

Clazz.newMeth(C$, 'setBackgroundColor$I', function (bgColor) {
if (this.pBuffer == null ) return;
for (var i=this.bufferSize; --i >= 0; ) if (this.pBuffer[i] == 0) this.pBuffer[i]=bgColor;

});

Clazz.newMeth(C$, 'clearTBuffer$', function () {
for (var i=this.bufferSizeT; --i >= 0; ) {
this.zBufferT[i]=2147483647;
this.pBufferT[i]=0;
}
});

Clazz.newMeth(C$, 'clearBuffer$', function () {
this.clearScreenBuffer$();
});

Clazz.newMeth(C$, 'clearScreenBufferThreaded$', function () {
});

Clazz.newMeth(C$, 'notifyEndOfRendering$', function () {
this.apiPlatform.notifyEndOfRendering$();
});

Clazz.newMeth(C$, 'getGraphicsForTextOrImage$I$I', function (width, height) {
if (width > this.widthOffscreen || height > this.heightOffscreen ) {
if (this.offscreenImage != null ) {
this.apiPlatform.disposeGraphics$O(this.graphicsForTextOrImage);
this.apiPlatform.flushImage$O(this.offscreenImage);
}if (width > this.widthOffscreen) this.widthOffscreen=width;
if (height > this.heightOffscreen) this.heightOffscreen=height;
this.offscreenImage=p$1.allocateOffscreenImage$I$I.apply(this, [this.widthOffscreen, this.heightOffscreen]);
this.graphicsForTextOrImage=this.apiPlatform.getStaticGraphics$O$Z(this.offscreenImage, C$.backgroundTransparent);
}return this.graphicsForTextOrImage;
});

Clazz.newMeth(C$, 'allocateOffscreenImage$I$I', function (width, height) {
return this.apiPlatform.newOffScreenImage$I$I(width, height);
}, p$1);

Clazz.newMeth(C$, 'setBackgroundTransparent$Z', function (tf) {
C$.backgroundTransparent=tf;
});

C$.$static$=function(){C$.$static$=0;
C$.backgroundTransparent=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-06-01 14:49:34 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
