(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.Dimension']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DisplayMode");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['bitDepth','refreshRate'],'O',['size','java.awt.Dimension']]]

Clazz.newMeth(C$, 'c$$I$I$I$I', function (width, height, bitDepth, refreshRate) {
;C$.$init$.apply(this);
this.size=Clazz.new_($I$(1,1).c$$I$I,[width, height]);
this.bitDepth=bitDepth;
this.refreshRate=refreshRate;
}, 1);

Clazz.newMeth(C$, 'getHeight$', function () {
return this.size.height;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.size.width;
});

Clazz.newMeth(C$, 'getBitDepth$', function () {
return this.bitDepth;
});

Clazz.newMeth(C$, 'getRefreshRate$', function () {
return this.refreshRate;
});

Clazz.newMeth(C$, 'equals$java_awt_DisplayMode', function (dm) {
if (dm == null ) {
return false;
}return (this.getHeight$() == dm.getHeight$() && this.getWidth$() == dm.getWidth$()  && this.getBitDepth$() == dm.getBitDepth$()  && this.getRefreshRate$() == dm.getRefreshRate$() );
});

Clazz.newMeth(C$, 'equals$O', function (dm) {
if (Clazz.instanceOf(dm, "java.awt.DisplayMode")) {
return this.equals$java_awt_DisplayMode(dm);
} else {
return false;
}});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getWidth$() + this.getHeight$() + this.getBitDepth$() * 7  + this.getRefreshRate$() * 13;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:09 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
