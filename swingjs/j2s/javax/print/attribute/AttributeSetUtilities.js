(function(){var P$=Clazz.newPackage("javax.print.attribute"),I$=[[0,['javax.print.attribute.AttributeSetUtilities','.UnmodifiableAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.UnmodifiableDocAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.UnmodifiablePrintRequestAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.UnmodifiablePrintJobAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.UnmodifiablePrintServiceAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.SynchronizedAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.SynchronizedDocAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.SynchronizedPrintRequestAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.SynchronizedPrintJobAttributeSet'],['javax.print.attribute.AttributeSetUtilities','.SynchronizedPrintServiceAttributeSet']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "AttributeSetUtilities", function(){
Clazz.newInstance(this, arguments,0,C$);
});

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'unmodifiableView$javax_print_attribute_AttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(1).c$$javax_print_attribute_AttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableView$javax_print_attribute_DocAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(2).c$$javax_print_attribute_DocAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableView$javax_print_attribute_PrintRequestAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(3).c$$javax_print_attribute_PrintRequestAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableView$javax_print_attribute_PrintJobAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(4).c$$javax_print_attribute_PrintJobAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'unmodifiableView$javax_print_attribute_PrintServiceAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(5).c$$javax_print_attribute_PrintServiceAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'synchronizedView$javax_print_attribute_AttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(6).c$$javax_print_attribute_AttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'synchronizedView$javax_print_attribute_DocAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(7).c$$javax_print_attribute_DocAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'synchronizedView$javax_print_attribute_PrintRequestAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(8).c$$javax_print_attribute_PrintRequestAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'synchronizedView$javax_print_attribute_PrintJobAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(9).c$$javax_print_attribute_PrintJobAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'synchronizedView$javax_print_attribute_PrintServiceAttributeSet', function (attributeSet) {
if (attributeSet == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return Clazz.new_($I$(10).c$$javax_print_attribute_PrintServiceAttributeSet,[attributeSet]);
}, 1);

Clazz.newMeth(C$, 'verifyAttributeCategory$O$Class', function (object, interfaceName) {
var result=object;
if (interfaceName.isAssignableFrom$Class(result)) {
return result;
} else {
throw Clazz.new_(Clazz.load('ClassCastException'));
}}, 1);

Clazz.newMeth(C$, 'verifyAttributeValue$O$Class', function (object, interfaceName) {
if (object == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (interfaceName.isInstance$O(object)) {
return object;
} else {
throw Clazz.new_(Clazz.load('ClassCastException'));
}}, 1);

Clazz.newMeth(C$, 'verifyCategoryForValue$Class$javax_print_attribute_Attribute', function (category, attribute) {
if (!category.equals$O(attribute.getCategory$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}}, 1);
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "UnmodifiableAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['javax.print.attribute.AttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attrset=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeSet', function (attributeSet) {
C$.$init$.apply(this);
this.attrset=attributeSet;
}, 1);

Clazz.newMeth(C$, 'get$Class', function (key) {
return this.attrset.get$Class(key);
});

Clazz.newMeth(C$, 'add$javax_print_attribute_Attribute', function (attribute) {
throw Clazz.new_(Clazz.load('javax.print.attribute.UnmodifiableSetException'));
});

Clazz.newMeth(C$, 'remove$Class', function (category) {
throw Clazz.new_(Clazz.load('javax.print.attribute.UnmodifiableSetException'));
});

Clazz.newMeth(C$, 'remove$javax_print_attribute_Attribute', function (attribute) {
throw Clazz.new_(Clazz.load('javax.print.attribute.UnmodifiableSetException'));
});

Clazz.newMeth(C$, 'containsKey$Class', function (category) {
return this.attrset.containsKey$Class(category);
});

Clazz.newMeth(C$, 'containsValue$javax_print_attribute_Attribute', function (attribute) {
return this.attrset.containsValue$javax_print_attribute_Attribute(attribute);
});

Clazz.newMeth(C$, 'addAll$javax_print_attribute_AttributeSet', function (attributes) {
throw Clazz.new_(Clazz.load('javax.print.attribute.UnmodifiableSetException'));
});

Clazz.newMeth(C$, 'size$', function () {
return this.attrset.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.attrset.toArray$();
});

Clazz.newMeth(C$, 'clear$', function () {
throw Clazz.new_(Clazz.load('javax.print.attribute.UnmodifiableSetException'));
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.attrset.isEmpty$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return this.attrset.equals$O(o);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.attrset.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "UnmodifiableDocAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.UnmodifiableAttributeSet'], ['javax.print.attribute.DocAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_DocAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "UnmodifiablePrintRequestAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.UnmodifiableAttributeSet'], ['javax.print.attribute.PrintRequestAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintRequestAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "UnmodifiablePrintJobAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.UnmodifiableAttributeSet'], ['javax.print.attribute.PrintJobAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintJobAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "UnmodifiablePrintServiceAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.UnmodifiableAttributeSet'], ['javax.print.attribute.PrintServiceAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintServiceAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "SynchronizedAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['javax.print.attribute.AttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.attrset=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_AttributeSet', function (attributeSet) {
C$.$init$.apply(this);
this.attrset=attributeSet;
}, 1);

Clazz.newMeth(C$, 'get$Class', function (category) {
return this.attrset.get$Class(category);
});

Clazz.newMeth(C$, 'add$javax_print_attribute_Attribute', function (attribute) {
return this.attrset.add$javax_print_attribute_Attribute(attribute);
});

Clazz.newMeth(C$, 'remove$Class', function (category) {
return this.attrset.remove$Class(category);
});

Clazz.newMeth(C$, 'remove$javax_print_attribute_Attribute', function (attribute) {
return this.attrset.remove$javax_print_attribute_Attribute(attribute);
});

Clazz.newMeth(C$, 'containsKey$Class', function (category) {
return this.attrset.containsKey$Class(category);
});

Clazz.newMeth(C$, 'containsValue$javax_print_attribute_Attribute', function (attribute) {
return this.attrset.containsValue$javax_print_attribute_Attribute(attribute);
});

Clazz.newMeth(C$, 'addAll$javax_print_attribute_AttributeSet', function (attributes) {
return this.attrset.addAll$javax_print_attribute_AttributeSet(attributes);
});

Clazz.newMeth(C$, 'size$', function () {
return this.attrset.size$();
});

Clazz.newMeth(C$, 'toArray$', function () {
return this.attrset.toArray$();
});

Clazz.newMeth(C$, 'clear$', function () {
this.attrset.clear$();
});

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.attrset.isEmpty$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
return this.attrset.equals$O(o);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.attrset.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "SynchronizedDocAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.SynchronizedAttributeSet'], ['javax.print.attribute.DocAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_DocAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "SynchronizedPrintRequestAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.SynchronizedAttributeSet'], ['javax.print.attribute.PrintRequestAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintRequestAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "SynchronizedPrintJobAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.SynchronizedAttributeSet'], ['javax.print.attribute.PrintJobAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintJobAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.AttributeSetUtilities, "SynchronizedPrintServiceAttributeSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.print.attribute.AttributeSetUtilities','.SynchronizedAttributeSet'], ['javax.print.attribute.PrintServiceAttributeSet', 'java.io.Serializable']);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$javax_print_attribute_PrintServiceAttributeSet', function (attributeSet) {
C$.superclazz.c$$javax_print_attribute_AttributeSet.apply(this, [attributeSet]);
C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-04-17 18:03:02 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
