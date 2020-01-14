(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "GlyphMetrics");

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.horizontal=false;
this.advanceX=0;
this.advanceY=0;
this.bounds=null;
this.glyphType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$F$java_awt_geom_Rectangle2D$B', function (advance, bounds, glyphType) {
C$.$init$.apply(this);
this.horizontal=true;
this.advanceX=advance;
this.advanceY=0;
this.bounds=Clazz.new_($I$(1));
this.bounds.setRect$java_awt_geom_Rectangle2D(bounds);
this.glyphType=($b$[0] = glyphType, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$F$F$java_awt_geom_Rectangle2D$B', function (horizontal, advanceX, advanceY, bounds, glyphType) {
C$.$init$.apply(this);
this.horizontal=horizontal;
this.advanceX=advanceX;
this.advanceY=advanceY;
this.bounds=Clazz.new_($I$(1));
this.bounds.setRect$java_awt_geom_Rectangle2D(bounds);
this.glyphType=($b$[0] = glyphType, $b$[0]);
}, 1);

Clazz.newMeth(C$, 'getAdvance$', function () {
return this.horizontal ? this.advanceX : this.advanceY;
});

Clazz.newMeth(C$, 'getAdvanceX$', function () {
return this.advanceX;
});

Clazz.newMeth(C$, 'getAdvanceY$', function () {
return this.advanceY;
});

Clazz.newMeth(C$, 'getBounds2D$', function () {
return Clazz.new_($I$(1).c$$F$F$F$F,[this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height]);
});

Clazz.newMeth(C$, 'getLSB$', function () {
return this.horizontal ? this.bounds.x : this.bounds.y;
});

Clazz.newMeth(C$, 'getRSB$', function () {
return this.horizontal ? this.advanceX - this.bounds.x - this.bounds.width  : this.advanceY - this.bounds.y - this.bounds.height ;
});

Clazz.newMeth(C$, 'getType$', function () {
return this.glyphType;
});

Clazz.newMeth(C$, 'isStandard$', function () {
return (this.glyphType & 3) == 0;
});

Clazz.newMeth(C$, 'isLigature$', function () {
return (this.glyphType & 3) == 1;
});

Clazz.newMeth(C$, 'isCombining$', function () {
return (this.glyphType & 3) == 2;
});

Clazz.newMeth(C$, 'isComponent$', function () {
return (this.glyphType & 3) == 3;
});

Clazz.newMeth(C$, 'isWhitespace$', function () {
return (this.glyphType & 4) == 4;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:28 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
