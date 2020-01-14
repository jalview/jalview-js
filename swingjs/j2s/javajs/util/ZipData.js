(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.Rdr','javajs.util.ZipTools']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ZipData");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.isEnabled=false;
this.buf=null;
this.pt=0;
this.nBytes=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.isEnabled=true;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (nBytes) {
C$.$init$.apply(this);
this.nBytes=nBytes;
}, 1);

Clazz.newMeth(C$, 'addBytes$BA$I$I', function (byteBuf, nSectorBytes, nBytesRemaining) {
if (this.pt == 0) {
if (!$I$(1).isGzipB$BA(byteBuf)) {
this.isEnabled=false;
return -1;
}this.buf=Clazz.array(Byte.TYPE, [nBytesRemaining]);
}var nToAdd=Math.min(nSectorBytes, nBytesRemaining);
System.arraycopy$O$I$O$I$I(byteBuf, 0, this.buf, this.pt, nToAdd);
this.pt+=nToAdd;
return nBytesRemaining - nToAdd;
});

Clazz.newMeth(C$, 'addTo$javajs_util_SB', function (data) {
data.append$S($I$(2).getGzippedBytesAsString$BA(this.buf));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:01 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
