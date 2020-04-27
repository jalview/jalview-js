(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Control", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Type',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','javax.sound.sampled.Control.Type']]]

Clazz.newMeth(C$, 'c$$javax_sound_sampled_Control_Type', function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'toString', function () {
return  String.instantialize(this.getType$() + " Control");
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Control, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'c$$S', function (name) {
;C$.$init$.apply(this);
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
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-08 07:27:54 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
