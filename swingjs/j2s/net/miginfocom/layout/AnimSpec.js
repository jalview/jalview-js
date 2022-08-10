(function(){var P$=Clazz.newPackage("net.miginfocom.layout"),I$=[[0,'net.miginfocom.layout.LayoutUtil']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AnimSpec", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['easeIn','easeOut'],'I',['prio','durMillis']]
,['O',['DEF','net.miginfocom.layout.AnimSpec']]]

Clazz.newMeth(C$, 'c$$I$I$F$F', function (prio, durMillis, easeIn, easeOut) {
;C$.$init$.apply(this);
this.prio=prio;
this.durMillis=durMillis;
this.easeIn=$I$(1).clamp$F$F$F(easeIn, 0, 1);
this.easeOut=$I$(1).clamp$F$F$F(easeOut, 0, 1);
}, 1);

Clazz.newMeth(C$, 'getPriority$', function () {
return this.prio;
});

Clazz.newMeth(C$, 'getDurationMillis$I', function (defMillis) {
return this.durMillis > 0 ? this.durMillis : defMillis;
});

Clazz.newMeth(C$, 'getDurationMillis$', function () {
return this.durMillis;
});

Clazz.newMeth(C$, 'getEaseIn$', function () {
return this.easeIn;
});

Clazz.newMeth(C$, 'getEaseOut$', function () {
return this.easeOut;
});

C$.$static$=function(){C$.$static$=0;
C$.DEF=Clazz.new_(C$.c$$I$I$F$F,[0, 0, 0.2, 0.2]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:24 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
