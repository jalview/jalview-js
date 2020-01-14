(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'InternalError']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CompositeType");
C$.Any=null;
C$.General=null;
C$.AnyAlpha=null;
C$.Xor=null;
C$.Clear=null;
C$.Src=null;
C$.Dst=null;
C$.SrcOver=null;
C$.DstOver=null;
C$.SrcIn=null;
C$.DstIn=null;
C$.SrcOut=null;
C$.DstOut=null;
C$.SrcAtop=null;
C$.DstAtop=null;
C$.AlphaXor=null;
C$.SrcNoEa=null;
C$.SrcOverNoEa=null;
C$.unusedUID=0;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.Any=Clazz.new_(C$.c$$sun_java2d_loops_CompositeType$S,[null, "Any CompositeContext"]);
C$.General=C$.Any;
C$.AnyAlpha=C$.General.deriveSubType$S("Any AlphaComposite Rule");
C$.Xor=C$.General.deriveSubType$S("XOR mode");
C$.Clear=C$.AnyAlpha.deriveSubType$S("Porter-Duff Clear");
C$.Src=C$.AnyAlpha.deriveSubType$S("Porter-Duff Src");
C$.Dst=C$.AnyAlpha.deriveSubType$S("Porter-Duff Dst");
C$.SrcOver=C$.AnyAlpha.deriveSubType$S("Porter-Duff Src Over Dst");
C$.DstOver=C$.AnyAlpha.deriveSubType$S("Porter-Duff Dst Over Src");
C$.SrcIn=C$.AnyAlpha.deriveSubType$S("Porter-Duff Src In Dst");
C$.DstIn=C$.AnyAlpha.deriveSubType$S("Porter-Duff Dst In Src");
C$.SrcOut=C$.AnyAlpha.deriveSubType$S("Porter-Duff Src HeldOutBy Dst");
C$.DstOut=C$.AnyAlpha.deriveSubType$S("Porter-Duff Dst HeldOutBy Src");
C$.SrcAtop=C$.AnyAlpha.deriveSubType$S("Porter-Duff Src Atop Dst");
C$.DstAtop=C$.AnyAlpha.deriveSubType$S("Porter-Duff Dst Atop Src");
C$.AlphaXor=C$.AnyAlpha.deriveSubType$S("Porter-Duff Xor");
C$.SrcNoEa=C$.Src.deriveSubType$S("Porter-Duff Src, No Extra Alpha");
C$.SrcOverNoEa=C$.SrcOver.deriveSubType$S("Porter-Duff SrcOverDst, No Extra Alpha");
C$.unusedUID=1;
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.uniqueID=0;
this.desc=null;
this.next=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'deriveSubType$S', function (desc) {
return Clazz.new_(C$.c$$sun_java2d_loops_CompositeType$S,[this, desc]);
});

Clazz.newMeth(C$, 'forAlphaComposite$java_awt_AlphaComposite', function (ac) {
switch (ac.getRule$()) {
case 1:
return C$.Clear;
case 2:
if (ac.getAlpha$() >= 1.0 ) {
return C$.SrcNoEa;
} else {
return C$.Src;
}case 9:
return C$.Dst;
case 3:
if (ac.getAlpha$() >= 1.0 ) {
return C$.SrcOverNoEa;
} else {
return C$.SrcOver;
}case 4:
return C$.DstOver;
case 5:
return C$.SrcIn;
case 6:
return C$.DstIn;
case 7:
return C$.SrcOut;
case 8:
return C$.DstOut;
case 10:
return C$.SrcAtop;
case 11:
return C$.DstAtop;
case 12:
return C$.AlphaXor;
default:
throw Clazz.new_($I$(1).c$$S,["Unrecognized alpha rule"]);
}
}, 1);

Clazz.newMeth(C$, 'c$$sun_java2d_loops_CompositeType$S', function (parent, desc) {
C$.$init$.apply(this);
this.next=parent;
this.desc=desc;
this.uniqueID=C$.makeUniqueID$();
}, 1);

Clazz.newMeth(C$, 'makeUniqueID$', function () {
if (C$.unusedUID > 255) {
throw Clazz.new_($I$(1).c$$S,["composite type id overflow"]);
}return C$.unusedUID++;
}, 1);

Clazz.newMeth(C$, 'getUniqueID$', function () {
return this.uniqueID;
});

Clazz.newMeth(C$, 'getDescriptor$', function () {
return this.desc;
});

Clazz.newMeth(C$, 'getSuperType$', function () {
return this.next;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.desc.hashCode$();
});

Clazz.newMeth(C$, 'isDerivedFrom$sun_java2d_loops_CompositeType', function (other) {
var comptype=this;
do {
if (comptype.desc == other.desc) {
return true;
}comptype=comptype.next;
} while (comptype != null );
return false;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (Clazz.instanceOf(o, "sun.java2d.loops.CompositeType")) {
return ((o).uniqueID == this.uniqueID);
}return false;
});

Clazz.newMeth(C$, 'toString', function () {
return this.desc;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:37 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
