(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,['java.text.Format','.Field'],'java.util.ArrayList','javax.swing.Action',['javax.swing.text.InternationalFormatter','.IncrementAction'],'StringBuffer','java.util.BitSet',['javax.swing.text.InternationalFormatter','.ExtendedReplaceHolder']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "InternationalFormatter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.DefaultFormatter');
C$.EMPTY_FIELD_ARRAY=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.EMPTY_FIELD_ARRAY=Clazz.array($I$(1), [0]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.format=null;
this.max=null;
this.min=null;
this.literalMask=null;
this.iterator=null;
this.validMask=false;
this.string=null;
this.ignoreDocumentMutate=false;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this,1);
this.setOverwriteMode$Z(false);
}, 1);

Clazz.newMeth(C$, 'c$$java_text_Format', function (format) {
C$.c$.apply(this, []);
this.setFormat$java_text_Format(format);
}, 1);

Clazz.newMeth(C$, 'setFormat$java_text_Format', function (format) {
this.format=format;
});

Clazz.newMeth(C$, 'getFormat$', function () {
return this.format;
});

Clazz.newMeth(C$, 'setMinimum$Comparable', function (minimum) {
if (this.getValueClass$() == null  && minimum != null  ) {
this.setValueClass$Class(minimum.getClass$());
}this.min=minimum;
});

Clazz.newMeth(C$, 'getMinimum$', function () {
return this.min;
});

Clazz.newMeth(C$, 'setMaximum$Comparable', function (max) {
if (this.getValueClass$() == null  && max != null  ) {
this.setValueClass$Class(max.getClass$());
}this.max=max;
});

Clazz.newMeth(C$, 'getMaximum$', function () {
return this.max;
});

Clazz.newMeth(C$, 'install$javax_swing_JFormattedTextField', function (ftf) {
C$.superclazz.prototype.install$javax_swing_JFormattedTextField.apply(this, [ftf]);
this.updateMaskIfNecessary$();
this.positionCursorAtInitialLocation$();
});

Clazz.newMeth(C$, 'valueToString$O', function (value) {
if (value == null ) {
return "";
}var f=this.getFormat$();
if (f == null ) {
return value.toString();
}return f.format$O(value);
});

Clazz.newMeth(C$, 'stringToValue$S', function (text) {
var value=this.stringToValueParse$S$java_text_Format(text, this.getFormat$());
if (value != null  && this.getValueClass$() != null   && !this.getValueClass$().isInstance$O(value) ) {
value=C$.superclazz.prototype.stringToValue$S.apply(this, [value.toString()]);
}try {
if (!this.isValidValue$O$Z(value, true)) {
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Value not within min/max range", 0]);
}} catch (cce) {
if (Clazz.exceptionOf(cce,"ClassCastException")){
throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Class cast exception comparing values: " + cce, 0]);
} else {
throw cce;
}
}
return value;
});

Clazz.newMeth(C$, 'getFields$I', function (offset) {
if (this.getAllowsInvalid$()) {
this.updateMask$();
}var attrs=this.getAttributes$I(offset);
if (attrs != null  && attrs.size$() > 0 ) {
var al=Clazz.new_($I$(2));
al.addAll$java_util_Collection(attrs.keySet$());
return al.toArray$TTA(C$.EMPTY_FIELD_ARRAY);
}return C$.EMPTY_FIELD_ARRAY;
});

Clazz.newMeth(C$, 'clone$', function () {
var formatter=C$.superclazz.prototype.clone$.apply(this, []);
formatter.literalMask=null;
formatter.iterator=null;
formatter.validMask=false;
formatter.string=null;
return formatter;
});

Clazz.newMeth(C$, 'getActions$', function () {
if (this.getSupportsIncrement$()) {
return Clazz.array($I$(3), -1, [Clazz.new_($I$(4).c$$S$I, [this, null, "increment", 1]), Clazz.new_($I$(4).c$$S$I, [this, null, "decrement", -1])]);
}return null;
});

Clazz.newMeth(C$, 'stringToValueParse$S$java_text_Format', function (text, f) {
if (f == null ) {
return text;
}return f.parseObject$S(text);
});

Clazz.newMeth(C$, 'isValidValue$O$Z', function (value, wantsCCE) {
var min=this.getMinimum$();
try {
if (min != null  && min.compareTo$(value) > 0 ) {
return false;
}} catch (cce) {
if (Clazz.exceptionOf(cce,"ClassCastException")){
if (wantsCCE) {
throw cce;
}return false;
} else {
throw cce;
}
}
var max=this.getMaximum$();
try {
if (max != null  && max.compareTo$(value) < 0 ) {
return false;
}} catch (cce) {
if (Clazz.exceptionOf(cce,"ClassCastException")){
if (wantsCCE) {
throw cce;
}return false;
} else {
throw cce;
}
}
return true;
});

Clazz.newMeth(C$, 'getAttributes$I', function (index) {
if (this.isValidMask$()) {
var iterator=this.getIterator$();
if (index >= 0 && index <= iterator.getEndIndex$() ) {
iterator.setIndex$I(index);
return iterator.getAttributes$();
}}return null;
});

Clazz.newMeth(C$, 'getAttributeStart$java_text_AttributedCharacterIterator_Attribute', function (id) {
if (this.isValidMask$()) {
var iterator=this.getIterator$();
iterator.first$();
while (iterator.current$() != "\uffff"){
if (iterator.getAttribute$java_text_AttributedCharacterIterator_Attribute(id) != null ) {
return iterator.getIndex$();
}iterator.next$();
}
}return -1;
});

Clazz.newMeth(C$, 'getIterator$', function () {
return this.iterator;
});

Clazz.newMeth(C$, 'updateMaskIfNecessary$', function () {
if (!this.getAllowsInvalid$() && (this.getFormat$() != null ) ) {
if (!this.isValidMask$()) {
this.updateMask$();
} else {
var newString=this.getFormattedTextField$().getText$();
if (!newString.equals$O(this.string)) {
this.updateMask$();
}}}});

Clazz.newMeth(C$, 'updateMask$', function () {
if (this.getFormat$() != null ) {
var doc=this.getFormattedTextField$().getDocument$();
this.validMask=false;
if (doc != null ) {
try {
this.string=doc.getText$I$I(0, doc.getLength$());
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
this.string=null;
} else {
throw ble;
}
}
if (this.string != null ) {
try {
var value=this.stringToValue$S(this.string);
var iterator=this.getFormat$().formatToCharacterIterator$O(value);
p$1.updateMask$java_text_AttributedCharacterIterator.apply(this, [iterator]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.text.ParseException")){
var pe = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var iae = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var npe = e$$;
{
}
} else {
throw e$$;
}
}
}}}});

Clazz.newMeth(C$, 'getLiteralCountTo$I', function (index) {
var lCount=0;
for (var counter=0; counter < index; counter++) {
if (this.isLiteral$I(counter)) {
lCount++;
}}
return lCount;
});

Clazz.newMeth(C$, 'isLiteral$I', function (index) {
if (this.isValidMask$() && index < this.string.length$() ) {
return this.literalMask.get$I(index);
}return false;
});

Clazz.newMeth(C$, 'getLiteral$I', function (index) {
if (this.isValidMask$() && this.string != null   && index < this.string.length$() ) {
return this.string.charAt$I(index);
}return "\u0000";
});

Clazz.newMeth(C$, 'isNavigatable$I', function (offset) {
return !this.isLiteral$I(offset);
});

Clazz.newMeth(C$, 'updateValue$O', function (value) {
C$.superclazz.prototype.updateValue$O.apply(this, [value]);
this.updateMaskIfNecessary$();
});

Clazz.newMeth(C$, 'replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet', function (fb, offset, length, text, attrs) {
if (this.ignoreDocumentMutate) {
fb.replace$I$I$S$javax_swing_text_AttributeSet(offset, length, text, attrs);
return;
}C$.superclazz.prototype.replace$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this, [fb, offset, length, text, attrs]);
});

Clazz.newMeth(C$, 'getNextNonliteralIndex$I$I', function (index, direction) {
var max=this.getFormattedTextField$().getDocument$().getLength$();
while (index >= 0 && index < max ){
if (this.isLiteral$I(index)) {
index+=direction;
} else {
return index;
}}
return (direction == -1) ? 0 : max;
}, p$1);

Clazz.newMeth(C$, 'canReplace$javax_swing_text_DefaultFormatter_ReplaceHolder', function (rh) {
if (!this.getAllowsInvalid$()) {
var text=rh.text;
var tl=(text != null ) ? text.length$() : 0;
if (tl == 0 && rh.length == 1  && this.getFormattedTextField$().getSelectionStart$() != rh.offset ) {
rh.offset=p$1.getNextNonliteralIndex$I$I.apply(this, [rh.offset, -1]);
}if (this.getOverwriteMode$()) {
var replace=null;
for (var counter=0, textIndex=0, max=Math.max(tl, rh.length); counter < max; counter++) {
if (this.isLiteral$I(rh.offset + counter)) {
if (replace != null ) {
replace.append$C(this.getLiteral$I(rh.offset + counter));
}if (textIndex < tl && text.charAt$I(textIndex) == this.getLiteral$I(rh.offset + counter) ) {
textIndex++;
} else if (textIndex == 0) {
rh.offset++;
rh.length--;
counter--;
max--;
} else if (replace == null ) {
replace=Clazz.new_($I$(5).c$$I,[max]);
replace.append$S(text.substring$I$I(0, textIndex));
replace.append$C(this.getLiteral$I(rh.offset + counter));
}} else if (textIndex < tl) {
if (replace != null ) {
replace.append$C(text.charAt$I(textIndex));
}textIndex++;
} else {
if (replace == null ) {
replace=Clazz.new_($I$(5).c$$I,[max]);
if (textIndex > 0) {
replace.append$S(text.substring$I$I(0, textIndex));
}}if (replace != null ) {
replace.append$C(" ");
}}}
if (replace != null ) {
rh.text=replace.toString();
}} else if (tl > 0) {
rh.offset=p$1.getNextNonliteralIndex$I$I.apply(this, [rh.offset, 1]);
} else {
rh.offset=p$1.getNextNonliteralIndex$I$I.apply(this, [rh.offset, -1]);
}(rh).endOffset=rh.offset;
(rh).endTextLength=(rh.text != null ) ? rh.text.length$() : 0;
} else {
(rh).endOffset=rh.offset;
(rh).endTextLength=(rh.text != null ) ? rh.text.length$() : 0;
}var can=C$.superclazz.prototype.canReplace$javax_swing_text_DefaultFormatter_ReplaceHolder.apply(this, [rh]);
if (can && !this.getAllowsInvalid$() ) {
(rh).resetFromValue$javax_swing_text_InternationalFormatter(this);
}return can;
});

Clazz.newMeth(C$, 'replace$javax_swing_text_DefaultFormatter_ReplaceHolder', function (rh) {
var start=-1;
var direction=1;
var literalCount=-1;
if (rh.length > 0 && (rh.text == null  || rh.text.length$() == 0 )  && (this.getFormattedTextField$().getSelectionStart$() != rh.offset || rh.length > 1 ) ) {
direction=-1;
}if (!this.getAllowsInvalid$()) {
if ((rh.text == null  || rh.text.length$() == 0 ) && rh.length > 0 ) {
start=this.getFormattedTextField$().getSelectionStart$();
} else {
start=rh.offset;
}literalCount=this.getLiteralCountTo$I(start);
}if (C$.superclazz.prototype.replace$javax_swing_text_DefaultFormatter_ReplaceHolder.apply(this, [rh])) {
if (start != -1) {
var end=(rh).endOffset;
end+=(rh).endTextLength;
p$1.repositionCursor$I$I$I.apply(this, [literalCount, end, direction]);
} else {
start=(rh).endOffset;
if (direction == 1) {
start+=(rh).endTextLength;
}this.repositionCursor$I$I(start, direction);
}return true;
}return false;
});

Clazz.newMeth(C$, 'repositionCursor$I$I$I', function (startLiteralCount, end, direction) {
var endLiteralCount=this.getLiteralCountTo$I(end);
if (endLiteralCount != end) {
end-=startLiteralCount;
for (var counter=0; counter < end; counter++) {
if (this.isLiteral$I(counter)) {
end++;
}}
}this.repositionCursor$I$I(end, 1);
}, p$1);

Clazz.newMeth(C$, 'getBufferedChar$I', function (index) {
if (this.isValidMask$()) {
if (this.string != null  && index < this.string.length$() ) {
return this.string.charAt$I(index);
}}return "\u0000";
});

Clazz.newMeth(C$, 'isValidMask$', function () {
return this.validMask;
});

Clazz.newMeth(C$, 'isLiteral$java_util_Map', function (attributes) {
return ((attributes == null ) || attributes.size$() == 0 );
});

Clazz.newMeth(C$, 'updateMask$java_text_AttributedCharacterIterator', function (iterator) {
if (iterator != null ) {
this.validMask=true;
this.iterator=iterator;
if (this.literalMask == null ) {
this.literalMask=Clazz.new_($I$(6));
} else {
for (var counter=this.literalMask.length$() - 1; counter >= 0; counter--) {
this.literalMask.clear$I(counter);
}
}iterator.first$();
while (iterator.current$() != "\uffff"){
var attributes=iterator.getAttributes$();
var set=this.isLiteral$java_util_Map(attributes);
var start=iterator.getIndex$();
var end=iterator.getRunLimit$();
while (start < end){
if (set) {
this.literalMask.set$I(start);
} else {
this.literalMask.clear$I(start);
}start++;
}
iterator.setIndex$I(start);
}
}}, p$1);

Clazz.newMeth(C$, 'canIncrement$O$I', function (field, cursorPosition) {
return (field != null );
});

Clazz.newMeth(C$, 'selectField$O$I', function (f, count) {
var iterator=this.getIterator$();
if (iterator != null  && (Clazz.instanceOf(f, "java.text.AttributedCharacterIterator.Attribute")) ) {
var field=f;
iterator.first$();
while (iterator.current$() != "\uffff"){
while (iterator.getAttribute$java_text_AttributedCharacterIterator_Attribute(field) == null  && iterator.next$() != "\uffff" );
if (iterator.current$() != "\uffff") {
var limit=iterator.getRunLimit$java_text_AttributedCharacterIterator_Attribute(field);
if (--count <= 0) {
this.getFormattedTextField$().select$I$I(iterator.getIndex$(), limit);
break;
}iterator.setIndex$I(limit);
iterator.next$();
}}
}});

Clazz.newMeth(C$, 'getAdjustField$I$java_util_Map', function (start, attributes) {
return null;
});

Clazz.newMeth(C$, 'getFieldTypeCountTo$O$I', function (f, start) {
var iterator=this.getIterator$();
var count=0;
if (iterator != null  && (Clazz.instanceOf(f, "java.text.AttributedCharacterIterator.Attribute")) ) {
var field=f;
iterator.first$();
while (iterator.getIndex$() < start){
while (iterator.getAttribute$java_text_AttributedCharacterIterator_Attribute(field) == null  && iterator.next$() != "\uffff" );
if (iterator.current$() != "\uffff") {
iterator.setIndex$I(iterator.getRunLimit$java_text_AttributedCharacterIterator_Attribute(field));
iterator.next$();
count++;
} else {
break;
}}
}return count;
}, p$1);

Clazz.newMeth(C$, 'adjustValue$O$java_util_Map$O$I', function (value, attributes, field, direction) {
return null;
});

Clazz.newMeth(C$, 'getSupportsIncrement$', function () {
return false;
});

Clazz.newMeth(C$, 'resetValue$O', function (value) {
var doc=this.getFormattedTextField$().getDocument$();
var string=this.valueToString$O(value);
try {
this.ignoreDocumentMutate=true;
doc.remove$I$I(0, doc.getLength$());
doc.insertString$I$S$javax_swing_text_AttributeSet(0, string, null);
} finally {
this.ignoreDocumentMutate=false;
}
this.updateValue$O(value);
});

Clazz.newMeth(C$, 'getReplaceHolder$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet', function (fb, offset, length, text, attrs) {
if (this.replaceHolder == null ) {
this.replaceHolder=Clazz.new_($I$(7));
}return C$.superclazz.prototype.getReplaceHolder$javax_swing_text_DocumentFilter_FilterBypass$I$I$S$javax_swing_text_AttributeSet.apply(this, [fb, offset, length, text, attrs]);
});
;
(function(){var C$=Clazz.newClass(P$.InternationalFormatter, "ExtendedReplaceHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.DefaultFormatter','.ReplaceHolder']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.endOffset=0;
this.endTextLength=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'resetFromValue$javax_swing_text_InternationalFormatter', function (formatter) {
this.offset=0;
try {
this.text=formatter.valueToString$O(this.value);
} catch (pe) {
if (Clazz.exceptionOf(pe,"java.text.ParseException")){
this.text="";
} else {
throw pe;
}
}
this.length=this.fb.getDocument$().getLength$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.InternationalFormatter, "IncrementAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.direction=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$I', function (name, direction) {
C$.superclazz.c$$S.apply(this, [name]);
C$.$init$.apply(this);
this.direction=direction;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (ae) {
if (this.b$['javax.swing.JFormattedTextField.AbstractFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.JFormattedTextField.AbstractFormatter'], []).isEditable$()) {
if (this.b$['javax.swing.text.DefaultFormatter'].getAllowsInvalid$.apply(this.b$['javax.swing.text.DefaultFormatter'], [])) {
this.this$0.updateMask$.apply(this.this$0, []);
}var validEdit=false;
if (this.this$0.isValidMask$.apply(this.this$0, [])) {
var start=this.b$['javax.swing.JFormattedTextField.AbstractFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.JFormattedTextField.AbstractFormatter'], []).getSelectionStart$();
if (start != -1) {
var iterator=this.this$0.getIterator$.apply(this.this$0, []);
iterator.setIndex$I(start);
var attributes=iterator.getAttributes$();
var field=this.this$0.getAdjustField$I$java_util_Map.apply(this.this$0, [start, attributes]);
if (this.this$0.canIncrement$O$I.apply(this.this$0, [field, start])) {
try {
var value=this.this$0.stringToValue$S.apply(this.this$0, [this.b$['javax.swing.JFormattedTextField.AbstractFormatter'].getFormattedTextField$.apply(this.b$['javax.swing.JFormattedTextField.AbstractFormatter'], []).getText$()]);
var fieldTypeCount=p$1.getFieldTypeCountTo$O$I.apply(this.this$0, [field, start]);
value=this.this$0.adjustValue$O$java_util_Map$O$I.apply(this.this$0, [value, attributes, field, this.direction]);
if (value != null  && this.this$0.isValidValue$O$Z.apply(this.this$0, [value, false]) ) {
this.this$0.resetValue$O.apply(this.this$0, [value]);
this.this$0.updateMask$.apply(this.this$0, []);
if (this.this$0.isValidMask$.apply(this.this$0, [])) {
this.this$0.selectField$O$I.apply(this.this$0, [field, fieldTypeCount]);
}validEdit=true;
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.text.ParseException")){
var pe = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"javax.swing.text.BadLocationException")){
var ble = e$$;
{
}
} else {
throw e$$;
}
}
}}}if (!validEdit) {
this.b$['javax.swing.JFormattedTextField.AbstractFormatter'].invalidEdit$.apply(this.b$['javax.swing.JFormattedTextField.AbstractFormatter'], []);
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:24 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
