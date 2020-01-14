(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'javax.swing.SwingUtilities']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "JSAppletThread", null, 'javajs.util.JSThread');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.appletViewer=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_JSAppletViewer$ThreadGroup$S', function (ap, group, name) {
C$.superclazz.c$$ThreadGroup$S.apply(this, [group, name]);
C$.$init$.apply(this);
this.appletViewer=ap;
}, 1);

Clazz.newMeth(C$, 'run1$I', function (mode) {
mode=this.appletViewer.run1$I(mode);
if (mode != 2) this.dispatchAndReturn$Runnable$I(null, mode);
});

Clazz.newMeth(C$, 'dispatchAndReturn$Runnable$I', function (r, mode) {
var m=mode;
$I$(1).invokeLater$Runnable(((P$.JSAppletThread$1||
(function(){var C$=Clazz.newClass(P$, "JSAppletThread$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['swingjs.JSAppletThread'].run1$I.apply(this.b$['swingjs.JSAppletThread'], [this.$finals$.m]);
});
})()
), Clazz.new_(P$.JSAppletThread$1.$init$, [this, {m: m}])));
});

Clazz.newMeth(C$, 'myInit$', function () {
return false;
});

Clazz.newMeth(C$, 'isLooping$', function () {
return false;
});

Clazz.newMeth(C$, 'myLoop$', function () {
return false;
});

Clazz.newMeth(C$, 'whenDone$', function () {
});

Clazz.newMeth(C$, 'getDelayMillis$', function () {
return 0;
});

Clazz.newMeth(C$, 'onException$Exception', function (e) {
});

Clazz.newMeth(C$, 'doFinally$', function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:41 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
