(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuffer']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Annotation");
C$.EMPTY_ANNOTATION=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_ANNOTATION=Clazz.new_(C$.c$$S$S$C$F,["", "", " ", 0.0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.displayCharacter=null;
this.description=null;
this.secondaryStructure='\0';
this.value=0;
this.colour=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.displayCharacter="";
this.description="";
this.secondaryStructure=" ";
}, 1);

Clazz.newMeth(C$, 'c$$S$S$C$F', function (displayChar, desc, ss, val) {
C$.$init$.apply(this);
this.displayCharacter=displayChar;
this.description=desc;
this.secondaryStructure=ss;
this.value=val;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$C$F$java_awt_Color', function (displayChar, desc, ss, val, colour) {
C$.c$$S$S$C$F.apply(this, [displayChar, desc, ss, val]);
this.colour=colour;
}, 1);

Clazz.newMeth(C$, 'c$$jalview_datamodel_Annotation', function (that) {
C$.$init$.apply(this);
if (that == null  || this === that  ) {
return;
}if (that.displayCharacter != null ) {
this.displayCharacter= String.instantialize(that.displayCharacter);
}if (that.description != null ) {
this.description= String.instantialize(that.description);
}this.secondaryStructure=that.secondaryStructure;
this.value=that.value;
this.colour=that.colour;
}, 1);

Clazz.newMeth(C$, 'c$$F', function (val) {
C$.c$$S$S$C$F$java_awt_Color.apply(this, [null, null, " ", val, null]);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
var sb=Clazz.new_($I$(1));
if (this.displayCharacter != null ) {
sb.append$S("\'");
sb.append$S(this.displayCharacter);
sb.append$S("\'");
}{
sb.append$S(",");
}if (this.secondaryStructure.$c() != 0  && !("" + this.displayCharacter).equals$O("" + this.secondaryStructure) ) {
sb.append$S("\'");
sb.append$C(this.secondaryStructure);
sb.append$S("\'");
}{
sb.append$S(",");
}if (this.description != null  && this.description.length$() > 0 ) {
sb.append$S("\"");
sb.append$S(this.description);
sb.append$S("\"");
}{
sb.append$S(",");
}if (!Float.isNaN$F(this.value)) {
sb.append$F(this.value);
}if (this.colour != null ) {
if (sb.length$() > 0) {
sb.append$S(",");
}sb.append$S("[");
sb.append$I(this.colour.getRed$());
sb.append$S(",");
sb.append$I(this.colour.getGreen$());
sb.append$S(",");
sb.append$I(this.colour.getBlue$());
sb.append$S("]");
}return sb.toString();
});

Clazz.newMeth(C$, 'isWhitespace$', function () {
return ((this.value == 0.0 ) && ((this.description == null ) || (this.description.trim$().length$() == 0) ) && ((this.displayCharacter == null ) || (this.displayCharacter.trim$().length$() == 0) || (this.displayCharacter.equals$O(" ."))  ) && (this.secondaryStructure == "\u0000" || (this.secondaryStructure == " ") ) && this.colour == null   );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:08 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
