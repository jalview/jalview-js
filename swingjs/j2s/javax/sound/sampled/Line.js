(function(){var P$=Clazz.newPackage("javax.sound.sampled"),I$=[[0,'javax.sound.sampled.Line']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newInterface(P$, "Line", function(){
});
;
(function(){var C$=Clazz.newClass(P$.Line, "Info", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lineClass=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (lineClass) {
C$.$init$.apply(this);
if (lineClass == null ) {
this.lineClass=Clazz.getClass($I$(1),['addLineListener$javax_sound_sampled_LineListener','close$','getControl$javax_sound_sampled_Control_Type','getControls$','getLineInfo$','isControlSupported$javax_sound_sampled_Control_Type','isOpen$','open$','removeLineListener$javax_sound_sampled_LineListener']);
} else {
this.lineClass=lineClass;
}}, 1);

Clazz.newMeth(C$, 'getLineClass$', function () {
return this.lineClass;
});

Clazz.newMeth(C$, 'matches$javax_sound_sampled_Line_Info', function (info) {
if (!(this.getClass$().isInstance$O(info))) {
return false;
}if (!(this.getLineClass$().isAssignableFrom$Class(info.getLineClass$()))) {
return false;
}return true;
});

Clazz.newMeth(C$, 'toString', function () {
var fullPackagePath="javax.sound.sampled.";
var initialString= String.instantialize(this.getLineClass$().toString());
var finalString;
var index=initialString.indexOf$S(fullPackagePath);
if (index != -1) {
finalString=initialString.substring$I$I(0, index) + initialString.substring$I$I((index + fullPackagePath.length$()), initialString.length$());
} else {
finalString=initialString;
}return finalString;
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.Line, "Info", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.lineClass=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (lineClass) {
C$.$init$.apply(this);
if (lineClass == null ) {
this.lineClass=Clazz.getClass($I$(1),['addLineListener$javax_sound_sampled_LineListener','close$','getControl$javax_sound_sampled_Control_Type','getControls$','getLineInfo$','isControlSupported$javax_sound_sampled_Control_Type','isOpen$','open$','removeLineListener$javax_sound_sampled_LineListener']);
} else {
this.lineClass=lineClass;
}}, 1);

Clazz.newMeth(C$, 'getLineClass$', function () {
return this.lineClass;
});

Clazz.newMeth(C$, 'matches$javax_sound_sampled_Line_Info', function (info) {
if (!(this.getClass$().isInstance$O(info))) {
return false;
}if (!(this.getLineClass$().isAssignableFrom$Class(info.getLineClass$()))) {
return false;
}return true;
});

Clazz.newMeth(C$, 'toString', function () {
var fullPackagePath="javax.sound.sampled.";
var initialString= String.instantialize(this.getLineClass$().toString());
var finalString;
var index=initialString.indexOf$S(fullPackagePath);
if (index != -1) {
finalString=initialString.substring$I$I(0, index) + initialString.substring$I$I((index + fullPackagePath.length$()), initialString.length$());
} else {
finalString=initialString;
}return finalString;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
