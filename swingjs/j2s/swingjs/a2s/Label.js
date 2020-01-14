(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Label", null, 'javax.swing.JLabel');
C$.awtInsets=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.awtInsets=Clazz.new_($I$(1).c$$I$I$I$I,[3, 6, 2, 6]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$I.apply(this, ["", 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
C$.c$$S$I.apply(this, [text, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (text, center) {
C$.superclazz.c$$S.apply(this, [text]);
C$.$init$.apply(this);

this.getUI$().isAWT = true;
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [null]);
this.setAlignment$I(center);
}, 1);

Clazz.newMeth(C$, 'setText$S', function (text) {
C$.superclazz.prototype.setText$S.apply(this, [text]);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
this.setOpaque$Z(c != null );
});

Clazz.newMeth(C$, 'getInsets$', function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'getInsets$java_awt_Insets', function (s) {
s.top=C$.awtInsets.top;
s.left=C$.awtInsets.left;
s.bottom=C$.awtInsets.bottom;
s.right=C$.awtInsets.right;
return s;
});

Clazz.newMeth(C$, 'setAlignment$I', function (alignment) {
var xAlignment=0.0;
var yAlignment=0.5;
switch (alignment) {
case 0:
alignment=2;
xAlignment=0;
break;
case 2:
alignment=4;
xAlignment=1;
break;
case 1:
alignment=0;
xAlignment=0.5;
break;
}
this.setAlignmentX$F(xAlignment);
this.setAlignmentY$F(yAlignment);
this.setHorizontalAlignment$I(alignment);
this.setVerticalAlignment$I(0);
this.setVerticalTextPosition$I(0);
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:45 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
