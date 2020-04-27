(function(){var P$=Clazz.newPackage("sun.font"),I$=[[0,'sun.font.Font2DHandle',['java.awt.geom.Point2D','.Float']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PhysicalFont", null, 'sun.font.Font2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['platName'],'O',['nativeNames','java.lang.Object']]]

Clazz.newMeth(C$, 'equals$O', function (o) {
return (o != null  && o.getClass$() === this.getClass$()   && (o).fullName.equals$O(this.fullName) );
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.fullName.hashCode$();
});

Clazz.newMeth(C$, 'c$$S$O', function (platname, nativeNames) {
Clazz.super_(C$, this);
this.handle=Clazz.new_($I$(1,1).c$$sun_font_Font2D,[this]);
this.platName=platname;
this.nativeNames=nativeNames;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.handle=Clazz.new_($I$(1,1).c$$sun_font_Font2D,[this]);
}, 1);

Clazz.newMeth(C$, 'getGlyphPoint$J$I$I', function (pScalerContext, glyphCode, ptNumber) {
return Clazz.new_($I$(2,1));
});
})();
;Clazz.setTVer('3.2.8-v2');//Created 2020-02-19 18:47:00 Java2ScriptVisitor version 3.2.8-v2 net.sf.j2s.core.jar version 3.2.8-v2
