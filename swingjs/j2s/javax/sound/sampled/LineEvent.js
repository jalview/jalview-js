(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[];
var C$=Clazz.newClass(P$, "LineEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.EventObject');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=null;
this.position=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_sound_sampled_Line$javax_sound_sampled_LineEvent_Type$J', function (line, type, position) {
C$.superclazz.c$$O.apply(this, [line]);
C$.$init$.apply(this);
this.type=type;
this.position=position;
}, 1);

Clazz.newMeth(C$, 'getLine$', function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'getFramePosition$', function () {
return this.position;
});

Clazz.newMeth(C$, 'toString', function () {
var sType="";
if (this.type != null ) sType=this.type.toString() + " ";
var sLine;
if (this.getLine$() == null ) {
sLine="null";
} else {
sLine=this.getLine$().toString();
}return  String.instantialize(sType + "event from line " + sLine );
});
;
(function(){var C$=Clazz.newClass(P$.LineEvent, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.OPEN=null;
C$.CLOSE=null;
C$.START=null;
C$.STOP=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.OPEN=Clazz.new_(C$.c$$S,["Open"]);
C$.CLOSE=Clazz.new_(C$.c$$S,["Close"]);
C$.START=Clazz.new_(C$.c$$S,["Start"]);
C$.STOP=Clazz.new_(C$.c$$S,["Stop"]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (name) {
C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'equals$O', function (obj) {
return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString', function () {
return this.name;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
