(function(){var P$=Clazz.newPackage("jalview.datamodel"),I$=[[0,'StringBuffer']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Annotation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.displayCharacter="";
this.description="";
this.secondaryStructure=" ";
},1);

C$.$fields$=[['C',['secondaryStructure'],'F',['value'],'S',['displayCharacter','description'],'O',['colour','java.awt.Color']]
,['O',['EMPTY_ANNOTATION','jalview.datamodel.Annotation']]]

Clazz.newMeth(C$, 'c$$S$S$C$F', function (displayChar, desc, ss, val) {
;C$.$init$.apply(this);
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
;C$.$init$.apply(this);
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
var sb=Clazz.new_($I$(1,1));
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

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ANNOTATION=Clazz.new_(C$.c$$S$S$C$F,["", "", " ", 0.0]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:20:47 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
