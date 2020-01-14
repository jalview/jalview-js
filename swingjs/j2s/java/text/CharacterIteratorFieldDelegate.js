(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.ArrayList','java.text.AttributedString','java.text.AttributedCharacterIterator']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "CharacterIteratorFieldDelegate", null, null, [['java.text.Format','java.text.Format.FieldDelegate']]);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attributedStrings=null;
this.size=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
this.attributedStrings=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'formatted$java_text_Format_Field$O$I$I$StringBuffer', function (attr, value, start, end, buffer) {
if (start != end) {
if (start < this.size) {
var index=this.size;
var asIndex=this.attributedStrings.size$() - 1;
while (start < index){
var as=this.attributedStrings.get$I(asIndex--);
var newIndex=index - as.length$();
var aStart=Math.max(0, start - newIndex);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O$I$I(attr, value, aStart, Math.min(end - start, as.length$() - aStart) + aStart);
index=newIndex;
}
}if (this.size < start) {
this.attributedStrings.add$TE(Clazz.new_($I$(2).c$$S,[buffer.substring$I$I(this.size, start)]));
this.size=start;
}if (this.size < end) {
var aStart=Math.max(start, this.size);
var string=Clazz.new_($I$(2).c$$S,[buffer.substring$I$I(aStart, end)]);
string.addAttribute$java_text_AttributedCharacterIterator_Attribute$O(attr, value);
this.attributedStrings.add$TE(string);
this.size=end;
}}});

Clazz.newMeth(C$, 'formatted$I$java_text_Format_Field$O$I$I$StringBuffer', function (fieldID, attr, value, start, end, buffer) {
this.formatted$java_text_Format_Field$O$I$I$StringBuffer(attr, value, start, end, buffer);
});

Clazz.newMeth(C$, 'getIterator$S', function (string) {
if (string.length$() > this.size) {
this.attributedStrings.add$TE(Clazz.new_($I$(2).c$$S,[string.substring$I(this.size)]));
this.size=string.length$();
}var iCount=this.attributedStrings.size$();
var iterators=Clazz.array($I$(3), [iCount]);
for (var counter=0; counter < iCount; counter++) {
iterators[counter]=(this.attributedStrings.get$I(counter)).getIterator$();
}
return Clazz.new_($I$(2).c$$java_text_AttributedCharacterIteratorA,[iterators]).getIterator$();
});
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:02:43 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
