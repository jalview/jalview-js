(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Color','java.awt.Insets','swingjs.a2s.A2SEvent']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Button", null, 'javax.swing.JButton');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['bgcolor','java.awt.Color','awtInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'isAWT$', function () {
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (text) {
;C$.superclazz.c$$S.apply(this,[text]);C$.$init$.apply(this);
if (!this.isBackgroundSet$()) this.setBackground$java_awt_Color(C$.bgcolor);
}, 1);

Clazz.newMeth(C$, 'getMargin$', function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'fireActionPerformed$java_awt_event_ActionEvent', function (event) {
$I$(3).addListener$java_awt_Component(this);
C$.superclazz.prototype.fireActionPerformed$java_awt_event_ActionEvent.apply(this, [event]);
});

C$.$static$=function(){C$.$static$=0;
C$.bgcolor=Clazz.new_($I$(1,1).c$$I$I$I,[238, 238, 238]);
C$.awtInsets=Clazz.new_($I$(2,1).c$$I$I$I$I,[5, 6, 5, 6]);
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:28:56 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
