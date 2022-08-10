(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.templates"),p$1={},p$2={},p$3={},p$4={},p$5={},I$=[[0,['fr.orsay.lri.varna.models.templates.RNATemplate','.EdgeEndPointPosition'],'java.util.LinkedList','java.util.ArrayList','java.util.Hashtable','fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate','java.util.Stack','java.awt.Point','java.util.HashSet','fr.orsay.lri.varna.models.treealign.Tree','fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBrokenBasePair','fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBasePair','fr.orsay.lri.varna.models.templates.RNANodeValueTemplateSequence','java.util.HashMap','javax.xml.parsers.DocumentBuilderFactory','Boolean','fr.orsay.lri.varna.exceptions.ExceptionXMLGeneration',['java.awt.geom.Point2D','.Double'],'fr.orsay.lri.varna.exceptions.ExceptionXmlLoading',['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateHelix'],['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateUnpairedSequence'],'fr.orsay.lri.varna.exceptions.ExceptionEdgeEndpointAlreadyConnected','fr.orsay.lri.varna.models.templates.RNATemplate',['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateElement','.EdgeEndPoint'],['fr.orsay.lri.varna.models.templates.RNATemplate','.RNAIterator'],['fr.orsay.lri.varna.models.templates.RNATemplate','.VertexIterator'],['fr.orsay.lri.varna.models.templates.RNATemplate','.MakeEdgeList'],['fr.orsay.lri.varna.models.templates.RNATemplate','.RemovePseudoKnots'],['fr.orsay.lri.varna.models.templates.RNATemplate','.ConvertToTree'],'fr.orsay.lri.varna.models.templates.RNATemplateAlign','java.util.Arrays','fr.orsay.lri.varna.models.rna.RNA','javax.xml.transform.dom.DOMSource','javax.xml.transform.stream.StreamResult','javax.xml.transform.TransformerFactory',['fr.orsay.lri.varna.models.templates.RNATemplate','.ConvertToXml'],['fr.orsay.lri.varna.models.templates.RNATemplate','.LoadFromXml'],['fr.orsay.lri.varna.models.templates.RNATemplate','.In1Is']]],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RNATemplate", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RNAIterator',2],['VertexIterator',2],['MakeEdgeList',2],['RemovePseudoKnots',2],['ConvertToTree',2],['ConvertToXml',2],['LoadFromXml',2],['In1Is',25],['EdgeEndPointPosition',25],['RNATemplateElement',1025],['RNATemplateHelix',1],['RNATemplateUnpairedSequence',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elements=Clazz.new_($I$(3,1));
this.template=this;
},1);

C$.$fields$=[['O',['elements','java.util.Collection','template','fr.orsay.lri.varna.models.templates.RNATemplate']]
,['I',['NEXT_ID']]]

Clazz.newMeth(C$, 'isEmpty$', function () {
return this.elements.isEmpty$();
});

Clazz.newMeth(C$, 'getFirst$', function () {
return this.getFirstEndPoint$().getElement$();
});

Clazz.newMeth(C$, 'getFirstEndPoint$', function () {
if (this.elements.isEmpty$()) {
return null;
} else {
var knownEndPoints=Clazz.new_($I$(8,1));
var currentEndPoint=this.getAnyEndPoint$();
while (true){
if (knownEndPoints.contains$O(currentEndPoint)) {
return currentEndPoint;
}knownEndPoints.add$O(currentEndPoint);
var previousEndPoint=currentEndPoint.getPreviousEndPoint$();
if (previousEndPoint == null ) {
return currentEndPoint;
} else {
currentEndPoint=previousEndPoint;
}}
}});

Clazz.newMeth(C$, 'getAny$', function () {
if (this.elements.isEmpty$()) {
return null;
} else {
return this.elements.iterator$().next$();
}});

Clazz.newMeth(C$, 'getAnyEndPoint$', function () {
if (this.isEmpty$()) {
return null;
} else {
return this.getAny$().getIn1EndPoint$();
}});

Clazz.newMeth(C$, 'rnaIterator$', function () {
return Clazz.new_($I$(24,1),[this, null]);
});

Clazz.newMeth(C$, 'classicIterator$', function () {
return this.elements.iterator$();
});

Clazz.newMeth(C$, 'vertexIterator$', function () {
return Clazz.new_($I$(25,1),[this, null]);
});

Clazz.newMeth(C$, 'makeEdgeList$', function () {
var listMaker=Clazz.new_($I$(26,1),[this, null]);
return listMaker.make$();
});

Clazz.newMeth(C$, 'connectedComponentIsCyclic$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endPoint) {
var knownEndPoints=Clazz.new_($I$(8,1));
var currentEndPoint=endPoint;
while (true){
if (knownEndPoints.contains$O(currentEndPoint)) {
return true;
}knownEndPoints.add$O(currentEndPoint);
var previousEndPoint=currentEndPoint.getPreviousEndPoint$();
if (previousEndPoint == null ) {
return false;
} else {
currentEndPoint=previousEndPoint;
}}
});

Clazz.newMeth(C$, 'isConnected$', function () {
if (this.isEmpty$()) {
return true;
}var n=0;
for (var element, $element = this.elements.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
n+=4;
} else if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
n+=2;
}}
var knownEndPoints=Clazz.new_($I$(8,1));
var currentEndPoint=this.getFirstEndPoint$();
while (true){
if (knownEndPoints.contains$O(currentEndPoint)) {
break;
}knownEndPoints.add$O(currentEndPoint);
var nextEndPoint=currentEndPoint.getNextEndPoint$();
if (nextEndPoint == null ) {
break;
} else {
currentEndPoint=nextEndPoint;
}}
return (knownEndPoints.size$() == n);
});

Clazz.newMeth(C$, 'checkIsValidTemplate$', function () {
if (this.isEmpty$()) {
throw (Clazz.new_($I$(5,1).c$$S,["The template is empty."]));
}if (!this.isConnected$()) {
throw (Clazz.new_($I$(5,1).c$$S,["The template is a non-connected graph."]));
}if (this.connectedComponentIsCyclic$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(this.getAnyEndPoint$())) {
throw (Clazz.new_($I$(5,1).c$$S,["The template is cyclic."]));
}});

Clazz.newMeth(C$, 'toTree$', function () {
this.computeIn1Is$();
var pseudoKnotKiller=Clazz.new_($I$(27,1),[this, null]);
var removedHelixes=pseudoKnotKiller.removePseudoKnots$();
var converter=Clazz.new_($I$(28,1).c$$java_util_Set,[this, null, removedHelixes]);
return converter.convert$();
});

Clazz.newMeth(C$, 'toRNA$', function () {
this.checkIsValidTemplate$();
var str=Clazz.new_($I$(3,1));
var helixes=Clazz.new_($I$(13,1));
var iter=this.rnaIterator$();
while (iter.hasNext$()){
var element=iter.next$();
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=element;
var n=helix.getLength$();
if (helixes.containsKey$O(helix)) {
var firstBase=str.size$();
var helixMembers=helixes.get$O(helix);
for (var i=0; i < n; i++) {
var indexOfAssociatedBase=(helixMembers.get$I(n - 1 - i )).valueOf();
str.set$I$O(indexOfAssociatedBase, new Integer(firstBase + i));
str.add$O(new Integer(indexOfAssociatedBase));
}
} else {
var firstBase=str.size$();
var helixMembers=Clazz.new_($I$(3,1));
for (var i=0; i < n; i++) {
str.add$O(new Integer(-1));
helixMembers.add$O(new Integer(firstBase + i));
}
helixes.put$O$O(helix, helixMembers);
}} else if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var sequence=element;
var n=sequence.getLength$();
for (var i=0; i < n; i++) {
str.add$O(new Integer(-1));
}
} else {
throw (Clazz.new_($I$(5,1).c$$S,["We have an endpoint which is neither an helix nor a sequence. What is that?"]));
}}
var strAsArray=$I$(29).intArrayFromList$java_util_List(str);
var seqAsArray=Clazz.array(String, [strAsArray.length]);
$I$(30).fill$OA$O(seqAsArray, " ");
var rna=Clazz.new_($I$(31,1));
try {
rna.setRNA$SA$IA(seqAsArray, strAsArray);
} catch (e) {
if (Clazz.exceptionOf(e,"fr.orsay.lri.varna.exceptions.ExceptionFileFormatOrSyntax")){
throw (Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bug in toRNA(): setRNA() threw an ExceptionFileFormatOrSyntax exception."]));
} else {
throw e;
}
}
return rna;
});

Clazz.newMeth(C$, 'toXMLFile$java_io_File', function (file) {
try {
var xmlDocument=this.toXMLDocument$();
var source=Clazz.new_($I$(32,1).c$$org_w3c_dom_Node,[xmlDocument]);
var result=Clazz.new_($I$(33,1).c$$java_io_File,[file]);
var transformer;
transformer=$I$(34).newInstance$().newTransformer$();
transformer.setOutputProperty$S$S("indent", "yes");
transformer.transform$javax_xml_transform_Source$javax_xml_transform_Result(source, result);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.transform.TransformerConfigurationException")){
var e = e$$;
{
throw (Clazz.new_(["TransformerConfigurationException: " + e.getMessage$()],$I$(16,1).c$$S));
}
} else if (Clazz.exceptionOf(e$$,"javax.xml.transform.TransformerFactoryConfigurationError")){
var e = e$$;
{
throw (Clazz.new_(["TransformerFactoryConfigurationError: " + e.getMessage$()],$I$(16,1).c$$S));
}
} else if (Clazz.exceptionOf(e$$,"javax.xml.transform.TransformerException")){
var e = e$$;
{
throw (Clazz.new_(["TransformerException: " + e.getMessage$()],$I$(16,1).c$$S));
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'toXMLDocument$', function () {
var converter=Clazz.new_($I$(35,1),[this, null]);
return converter.toXMLDocument$();
});

Clazz.newMeth(C$, 'fromXMLFile$java_io_File', function (file) {
try {
var factory=$I$(14).newInstance$();
factory.setIgnoringElementContentWhitespace$Z(true);
var builder=factory.newDocumentBuilder$();
var xmlDocument=builder.parse$java_io_File(file);
return C$.fromXMLDocument$org_w3c_dom_Document(xmlDocument);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.xml.parsers.ParserConfigurationException")){
var e = e$$;
{
throw (Clazz.new_(["ParserConfigurationException: " + e.getMessage$()],$I$(18,1).c$$S));
}
} else if (Clazz.exceptionOf(e$$,"org.xml.sax.SAXException")){
var e = e$$;
{
throw (Clazz.new_(["SAXException: " + e.getMessage$()],$I$(18,1).c$$S));
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw (Clazz.new_(["IOException: " + e.getMessage$()],$I$(18,1).c$$S));
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'fromXMLDocument$org_w3c_dom_Document', function (xmlDocument) {
var template=Clazz.new_(C$);
var loader=Clazz.new_($I$(36,1).c$$org_w3c_dom_Document,[template, null, xmlDocument]);
loader.load$();
return template;
}, 1);

Clazz.newMeth(C$, 'computeIn1Is$', function () {
this.checkIsValidTemplate$();
var iter=this.vertexIterator$();
var knownHelices=Clazz.new_($I$(8,1));
while (iter.hasNext$()){
var endPoint=iter.next$();
var templateElement=endPoint.getElement$();
if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=templateElement;
if (!knownHelices.contains$O(helix)) {
switch (endPoint.getPosition$()) {
case $I$(1).IN1:
case $I$(1).OUT1:
helix.setIn1Is$fr_orsay_lri_varna_models_templates_RNATemplate_In1Is($I$(37).IN1_IS_5PRIME);
break;
case $I$(1).IN2:
case $I$(1).OUT2:
helix.setIn1Is$fr_orsay_lri_varna_models_templates_RNATemplate_In1Is($I$(37).IN1_IS_3PRIME);
break;
}
knownHelices.add$O(helix);
}}}
});

Clazz.newMeth(C$, 'removeElement$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement', function (element) {
if (this.elements.contains$O(element)) {
element.disconnectFromAny$();
this.elements.remove$O(element);
return true;
} else {
return false;
}});

C$.$static$=function(){C$.$static$=0;
C$.NEXT_ID=1;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "RNAIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iter=this.this$0.vertexIterator$.apply(this.this$0, []);
},1);

C$.$fields$=[['O',['iter','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$', function () {
if (!this.hasNext$()) {
throw (Clazz.new_(Clazz.load('java.util.NoSuchElementException')));
}var currentEndPoint=this.iter.next$();
switch (currentEndPoint.getPosition$()) {
case $I$(1).IN1:
case $I$(1).IN2:
currentEndPoint=this.iter.next$();
break;
}
return currentEndPoint.getElement$();
});

Clazz.newMeth(C$, 'remove$', function () {
throw (Clazz.new_(Clazz.load('UnsupportedOperationException')));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "VertexIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.endpoint=this.this$0.getFirstEndPoint$.apply(this.this$0, []);
},1);

C$.$fields$=[['O',['endpoint','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateElement.EdgeEndPoint']]]

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.endpoint != null );
});

Clazz.newMeth(C$, 'next$', function () {
if (this.endpoint == null ) {
throw (Clazz.new_(Clazz.load('java.util.NoSuchElementException')));
}var currentEndPoint=this.endpoint;
this.endpoint=currentEndPoint.getNextEndPoint$();
return currentEndPoint;
});

Clazz.newMeth(C$, 'remove$', function () {
throw (Clazz.new_(Clazz.load('UnsupportedOperationException')));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "MakeEdgeList", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.list=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['list','java.util.List']]]

Clazz.newMeth(C$, 'addEdgeIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endPoint) {
if (endPoint.isConnected$()) {
this.list.add$O(endPoint);
}}, p$1);

Clazz.newMeth(C$, 'make$', function () {
for (var element, $element = this.this$0.elements.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=element;
p$1.addEdgeIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [helix.getIn1$()]);
p$1.addEdgeIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [helix.getIn2$()]);
} else if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var sequence=element;
p$1.addEdgeIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [sequence.getIn$()]);
}}
return this.list;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "RemovePseudoKnots", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['helixesSeq','java.util.ArrayList','+helixesStruct','helixesStructWithoutPseudoKnots','int[]']]]

Clazz.newMeth(C$, 'initArrays', function () {
this.helixesSeq=Clazz.new_($I$(3,1));
this.helixesStruct=Clazz.new_($I$(3,1));
var knownHelixes=Clazz.new_($I$(4,1));
var iter=this.this$0.rnaIterator$.apply(this.this$0, []);
while (iter.hasNext$()){
var element=iter.next$();
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
this.helixesSeq.add$O(element);
var index=this.helixesSeq.size$() - 1;
if (knownHelixes.containsKey$O(element)) {
var otherOccurenceIndex=(knownHelixes.get$O(element)).valueOf();
this.helixesStruct.add$O(new Integer(otherOccurenceIndex));
if ((this.helixesStruct.get$I(otherOccurenceIndex)).valueOf() !== -1 ) {
throw (Clazz.new_($I$(5,1).c$$S,["We met an helix 3 times. Is there a cycle?"]));
}this.helixesStruct.set$I$O(otherOccurenceIndex, new Integer(index));
} else {
knownHelixes.put$O$O(element, new Integer(index));
this.helixesStruct.add$O(new Integer(-1));
}}}
}, p$2);

Clazz.newMeth(C$, 'isSelfCrossing', function () {
var intervals=Clazz.new_($I$(6,1));
intervals.add$O(Clazz.new_([0, this.helixesStruct.size$() - 1],$I$(7,1).c$$I$I));
while (!intervals.empty$()){
var p=intervals.pop$();
if (p.x <= p.y) {
if ((this.helixesStruct.get$I(p.x)).valueOf() === -1 ) {
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[p.x + 1, p.y]));
} else {
var i=p.x;
var j=p.y;
var k=(this.helixesStruct.get$I(i)).valueOf();
if ((k <= i) || (k > j) ) {
return true;
} else {
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[i + 1, k - 1]));
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[k + 1, j]));
}}}}
return false;
}, p$2);

Clazz.newMeth(C$, 'removePseudoKnotsAux', function () {
if (!p$2.isSelfCrossing.apply(this, [])) {
this.helixesStructWithoutPseudoKnots=Clazz.array(Integer.TYPE, [this.helixesStruct.size$()]);
for (var i=0; i < this.helixesStructWithoutPseudoKnots.length; i++) {
this.helixesStructWithoutPseudoKnots[i]=(this.helixesStruct.get$I(i)).valueOf();
}
} else {
var length=this.helixesStruct.size$();
var result=Clazz.array(Integer.TYPE, [length]);
for (var i=0; i < result.length; i++) {
result[i]=-1;
}
var tab=Clazz.array(Short.TYPE, [length, length]);
var backtrack=Clazz.array(Short.TYPE, [length, length]);
for (var i=0; i < result.length; i++) {
backtrack[i][i]=(-1|0);
}
for (var n=1; n < length; n++) {
for (var i=0; i < length - n; i++) {
var j=i + n;
tab[i][j]=tab[i + 1][j];
backtrack[i][j]=(-1|0);
var k=(this.helixesStruct.get$I(i)).valueOf();
Clazz.assert(C$, this, function(){return k != -1});
if ((k <= j) && (i < k) ) {
var tmp=this.helixesSeq.get$I(i).getLength$();
if (i + 1 <= k - 1) {
tmp+=tab[i + 1][k - 1];
}if (k + 1 <= j) {
tmp+=tab[k + 1][j];
}if (tmp > tab[i][j]) {
tab[i][j]=(tmp|0);
backtrack[i][j]=(k|0);
}}}
}
var intervals=Clazz.new_($I$(6,1));
intervals.add$O(Clazz.new_($I$(7,1).c$$I$I,[0, length - 1]));
while (!intervals.empty$()){
var p=intervals.pop$();
if (p.x <= p.y) {
if (backtrack[p.x][p.y] == -1) {
result[p.x]=-1;
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[p.x + 1, p.y]));
} else {
var i=p.x;
var j=p.y;
var k=backtrack[i][j];
result[i]=k;
result[k]=i;
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[i + 1, k - 1]));
intervals.push$O(Clazz.new_($I$(7,1).c$$I$I,[k + 1, j]));
}}}
this.helixesStructWithoutPseudoKnots=result;
}}, p$2);

Clazz.newMeth(C$, 'makeSet', function () {
var removedHelixes=Clazz.new_($I$(8,1));
for (var i=0; i < this.helixesStructWithoutPseudoKnots.length; i++) {
if (this.helixesStructWithoutPseudoKnots[i] < 0) {
removedHelixes.add$O(this.helixesSeq.get$I(i));
}}
return removedHelixes;
}, p$2);

Clazz.newMeth(C$, 'removePseudoKnots$', function () {
p$2.initArrays.apply(this, []);
p$2.removePseudoKnotsAux.apply(this, []);
return p$2.makeSet.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "ConvertToTree", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iter=this.this$0.template.rnaIterator$();
this.knownHelixes=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['O',['removedHelixes','java.util.Set','iter','java.util.Iterator','knownHelixes','java.util.Set']]]

Clazz.newMeth(C$, 'c$$java_util_Set', function (removedHelixes) {
;C$.$init$.apply(this);
this.removedHelixes=removedHelixes;
}, 1);

Clazz.newMeth(C$, 'convert$', function () {
var root=Clazz.new_($I$(9,1));
root.setValue$O(null);
p$3.makeChildren$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [root]);
return root;
});

Clazz.newMeth(C$, 'makeChildren$fr_orsay_lri_varna_models_treealign_Tree', function (father) {
var children=father.getChildren$();
while (true){
try {
var element=this.iter.next$();
if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=element;
if (this.removedHelixes.contains$O(helix)) {
var firstPartOfHelix;
if (this.knownHelixes.contains$O(helix)) {
firstPartOfHelix=false;
} else {
this.knownHelixes.add$O(helix);
firstPartOfHelix=true;
}var helixLength=helix.getLength$();
if (helixLength < 1) {
throw (Clazz.new_($I$(5,1).c$$S,["Helix length < 1"]));
}var firstPosition=firstPartOfHelix ? 0 : helixLength;
var afterLastPosition=firstPartOfHelix ? helixLength : 2 * helixLength;
for (var i=firstPosition; i < afterLastPosition; i++) {
var value=Clazz.new_($I$(10,1));
value.setHelix$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix(helix);
value.setPositionInHelix$I(i);
var child=Clazz.new_($I$(9,1));
child.setValue$O(value);
father.getChildren$().add$O(child);
}
} else {
if (this.knownHelixes.contains$O(helix)) {
if ((!(Clazz.instanceOf(father.getValue$(), "fr.orsay.lri.varna.models.templates.RNANodeValueTemplateBasePair"))) || (father.getValue$()).getHelix$() !== helix  ) {
throw (Clazz.new_($I$(5,1).c$$S,["Unexpected helix. Looks like there still are pseudoknots even after we removed them so something is wrong about the template."]));
} else {
return;
}} else {
this.knownHelixes.add$O(helix);
var helixLength=helix.getLength$();
if (helixLength < 1) {
throw (Clazz.new_($I$(5,1).c$$S,["Helix length < 1"]));
}var lastChild=father;
for (var i=0; i < helixLength; i++) {
var value=Clazz.new_($I$(11,1));
value.setHelix$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateHelix(helix);
value.setPositionInHelix$I(i);
var child=Clazz.new_($I$(9,1));
child.setValue$O(value);
lastChild.getChildren$().add$O(child);
lastChild=child;
}
p$3.makeChildren$fr_orsay_lri_varna_models_treealign_Tree.apply(this, [lastChild]);
}}} else if (Clazz.instanceOf(element, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var sequence=element;
var seqLength=sequence.getLength$();
if (seqLength < 1) {
throw (Clazz.new_($I$(5,1).c$$S,["Non-paired sequence length < 1"]));
}var value=Clazz.new_($I$(12,1));
value.setSequence$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateUnpairedSequence(sequence);
var child=Clazz.new_($I$(9,1));
child.setValue$O(value);
children.add$O(child);
} else {
throw (Clazz.new_($I$(5,1).c$$S,["We have an endpoint which is neither an helix nor a sequence. What is that?"]));
}} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
if (father.getValue$() == null ) {
return;
} else {
throw (Clazz.new_($I$(5,1).c$$S,["Unexpected end of template endpoint list."]));
}} else {
throw e;
}
}
}
}, p$3);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "ConvertToXml", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementNames=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['O',['elementNames','java.util.Map','connectionsXmlElement','org.w3c.dom.Element','document','org.w3c.dom.Document']]]

Clazz.newMeth(C$, 'addConnectionIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endPoint) {
if (endPoint != null  && endPoint.isConnected$() ) {
var e1=endPoint.getElement$();
var p1=endPoint.getPosition$();
var e2=endPoint.getOtherElement$();
var p2=endPoint.getOtherEndPoint$().getPosition$();
var xmlElement=this.document.createElement$S("edge");
{
var fromXmlElement=this.document.createElement$S("from");
fromXmlElement.setAttribute$S$S("endpoint", this.elementNames.get$O(e1));
fromXmlElement.setAttribute$S$S("position", p1.toString());
xmlElement.appendChild$org_w3c_dom_Node(fromXmlElement);
}{
var toXmlElement=this.document.createElement$S("to");
toXmlElement.setAttribute$S$S("endpoint", this.elementNames.get$O(e2));
toXmlElement.setAttribute$S$S("position", p2.toString());
xmlElement.appendChild$org_w3c_dom_Node(toXmlElement);
}this.connectionsXmlElement.appendChild$org_w3c_dom_Node(xmlElement);
}}, p$4);

Clazz.newMeth(C$, 'toXMLDocument$', function () {
try {
var factory=$I$(14).newInstance$();
var builder=factory.newDocumentBuilder$();
this.document=builder.newDocument$();
var root=this.document.createElement$S("RNATemplate");
this.document.appendChild$org_w3c_dom_Node(root);
var elementsXmlElement=this.document.createElement$S("elements");
root.appendChild$org_w3c_dom_Node(elementsXmlElement);
this.connectionsXmlElement=this.document.createElement$S("edges");
root.appendChild$org_w3c_dom_Node(this.connectionsXmlElement);
{
var nextHelix=1;
var nextNonPairedSequence=1;
for (var templateElement, $templateElement = this.this$0.elements.iterator$(); $templateElement.hasNext$()&&((templateElement=($templateElement.next$())),1);) {
if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=templateElement;
if (!this.elementNames.containsKey$O(helix)) {
this.elementNames.put$O$O(helix, "H ID " + nextHelix);
nextHelix++;
}} else if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var sequence=templateElement;
if (!this.elementNames.containsKey$O(sequence)) {
this.elementNames.put$O$O(sequence, "S ID " + nextNonPairedSequence);
nextNonPairedSequence++;
}} else {
throw (Clazz.new_($I$(5,1).c$$S,["We have an endpoint which is neither an helix nor a sequence. What is that?"]));
}}
}for (var templateElement, $templateElement = this.this$0.elements.iterator$(); $templateElement.hasNext$()&&((templateElement=($templateElement.next$())),1);) {
var elementXmlName=this.elementNames.get$O(templateElement);
var xmlElement;
if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateHelix")) {
var helix=templateElement;
xmlElement=this.document.createElement$S("helix");
xmlElement.setAttribute$S$S("id", elementXmlName);
xmlElement.setAttribute$S$S("length", Integer.toString$I(helix.getLength$()));
xmlElement.setAttribute$S$S("flipped", $I$(15,"toString$Z",[helix.isFlipped$()]));
if (helix.hasCaption$()) {
xmlElement.setAttribute$S$S("caption", helix.getCaption$());
}{
var startPositionXmlElement=this.document.createElement$S("startPosition");
startPositionXmlElement.setAttribute$S$S("x", Double.toString$D(helix.getStartPosition$().x));
startPositionXmlElement.setAttribute$S$S("y", Double.toString$D(helix.getStartPosition$().y));
xmlElement.appendChild$org_w3c_dom_Node(startPositionXmlElement);
}{
var endPositionXmlElement=this.document.createElement$S("endPosition");
endPositionXmlElement.setAttribute$S$S("x", Double.toString$D(helix.getEndPosition$().x));
endPositionXmlElement.setAttribute$S$S("y", Double.toString$D(helix.getEndPosition$().y));
xmlElement.appendChild$org_w3c_dom_Node(endPositionXmlElement);
}p$4.addConnectionIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [helix.getOut1$()]);
p$4.addConnectionIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [helix.getOut2$()]);
} else if (Clazz.instanceOf(templateElement, "fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateUnpairedSequence")) {
var sequence=templateElement;
xmlElement=this.document.createElement$S("sequence");
xmlElement.setAttribute$S$S("id", elementXmlName);
xmlElement.setAttribute$S$S("length", Integer.toString$I(sequence.getLength$()));
{
var vertex5XmlElement=this.document.createElement$S("vertex5");
vertex5XmlElement.setAttribute$S$S("x", Double.toString$D(sequence.getVertex5$().x));
vertex5XmlElement.setAttribute$S$S("y", Double.toString$D(sequence.getVertex5$().y));
xmlElement.appendChild$org_w3c_dom_Node(vertex5XmlElement);
}{
var vertex3XmlElement=this.document.createElement$S("vertex3");
vertex3XmlElement.setAttribute$S$S("x", Double.toString$D(sequence.getVertex3$().x));
vertex3XmlElement.setAttribute$S$S("y", Double.toString$D(sequence.getVertex3$().y));
xmlElement.appendChild$org_w3c_dom_Node(vertex3XmlElement);
}{
var inTangentVectorXmlElement=this.document.createElement$S("inTangentVector");
inTangentVectorXmlElement.setAttribute$S$S("angle", Double.toString$D(sequence.getInTangentVectorAngle$()));
inTangentVectorXmlElement.setAttribute$S$S("length", Double.toString$D(sequence.getInTangentVectorLength$()));
xmlElement.appendChild$org_w3c_dom_Node(inTangentVectorXmlElement);
}{
var outTangentVectorXmlElement=this.document.createElement$S("outTangentVector");
outTangentVectorXmlElement.setAttribute$S$S("angle", Double.toString$D(sequence.getOutTangentVectorAngle$()));
outTangentVectorXmlElement.setAttribute$S$S("length", Double.toString$D(sequence.getOutTangentVectorLength$()));
xmlElement.appendChild$org_w3c_dom_Node(outTangentVectorXmlElement);
}p$4.addConnectionIfNecessary$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [sequence.getOut$()]);
} else {
throw (Clazz.new_($I$(5,1).c$$S,["We have an endpoint which is neither an helix nor a sequence. What is that?"]));
}elementsXmlElement.appendChild$org_w3c_dom_Node(xmlElement);
}
return this.document;
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.parsers.ParserConfigurationException")){
throw (Clazz.new_(["ParserConfigurationException: " + e.getMessage$()],$I$(16,1).c$$S));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "LoadFromXml", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementNames=Clazz.new_($I$(13,1));
},1);

C$.$fields$=[['O',['xmlDocument','org.w3c.dom.Document','elementNames','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_w3c_dom_Document', function (xmlDocument) {
;C$.$init$.apply(this);
this.xmlDocument=xmlDocument;
}, 1);

Clazz.newMeth(C$, 'pointFromXml$org_w3c_dom_Element', function (xmlPoint) {
var point=Clazz.new_($I$(17,1));
point.x=Double.parseDouble$S(xmlPoint.getAttribute$S("x"));
point.y=Double.parseDouble$S(xmlPoint.getAttribute$S("y"));
return point;
}, p$5);

Clazz.newMeth(C$, 'vectorLengthFromXml$org_w3c_dom_Element', function (xmlVector) {
return Double.parseDouble$S(xmlVector.getAttribute$S("length"));
}, p$5);

Clazz.newMeth(C$, 'vectorAngleFromXml$org_w3c_dom_Element', function (xmlVector) {
return Double.parseDouble$S(xmlVector.getAttribute$S("angle"));
}, p$5);

Clazz.newMeth(C$, 'endPointFromXml$org_w3c_dom_Element', function (xmlEdgeEndPoint) {
var elementId=xmlEdgeEndPoint.getAttribute$S("endpoint");
if (elementId == null  || elementId === ""  ) throw (Clazz.new_($I$(18,1).c$$S,["Missing endpoint attribute on " + xmlEdgeEndPoint]));
var positionOnElement=xmlEdgeEndPoint.getAttribute$S("position");
if (positionOnElement == null  || positionOnElement === ""  ) throw (Clazz.new_($I$(18,1).c$$S,["Missing position attribute on " + xmlEdgeEndPoint]));
if (this.elementNames.containsKey$O(elementId)) {
var templateElement=this.elementNames.get$O(elementId);
var relativePosition=$I$(1).valueOf$S(positionOnElement);
if (relativePosition == null ) throw (Clazz.new_($I$(18,1).c$$S,["Could not compute relativePosition"]));
return templateElement.getEndPointFromPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition(relativePosition);
} else {
throw (Clazz.new_($I$(18,1).c$$S,["Edge is connected on unkown element: " + elementId]));
}}, p$5);

Clazz.newMeth(C$, 'connectErrMsg$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$S', function (v1, v2, reason) {
return "Error while connecting\n" + v1.toString() + " to\n" + v2.toString() + " because:\n" + reason ;
}, p$5);

Clazz.newMeth(C$, 'connect$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (v1, v2) {
if (v1 == null  || v2 == null  ) {
throw (Clazz.new_(["Invalid edge: missing endpoint\n v1 = " + v1 + "\n v2 = " + v2 ],$I$(18,1).c$$S));
}if (v2.isConnected$()) {
throw (Clazz.new_([p$5.connectErrMsg$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$S.apply(this, [v1, v2, "Second vertex is already connected to " + v2.getOtherElement$().toString()])],$I$(18,1).c$$S));
}if (v1.isConnected$()) {
throw (Clazz.new_([p$5.connectErrMsg$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$S.apply(this, [v1, v2, "First vertex is already connected to " + v1.getOtherElement$().toString()])],$I$(18,1).c$$S));
}try {
v1.connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(v2);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionEdgeEndpointAlreadyConnected")){
var e = e$$;
{
throw (Clazz.new_(["A vertex is on two edges at the same time: " + e.getMessage$()],$I$(18,1).c$$S));
}
} else if (Clazz.exceptionOf(e$$,"fr.orsay.lri.varna.exceptions.ExceptionInvalidRNATemplate")){
var e = e$$;
{
throw (Clazz.new_(["ExceptionInvalidRNATemplate: " + e.getMessage$()],$I$(18,1).c$$S));
}
} else {
throw e$$;
}
}
}, p$5);

Clazz.newMeth(C$, 'load$', function () {
var xmlElements=this.xmlDocument.getElementsByTagName$S("elements").item$I(0);
{
var xmlElementsChildren=xmlElements.getChildNodes$();
for (var i=0; i < xmlElementsChildren.getLength$(); i++) {
var xmlElementsChild=xmlElementsChildren.item$I(i);
if (Clazz.instanceOf(xmlElementsChild, "org.w3c.dom.Element")) {
var xmlTemplateElement=xmlElementsChild;
var tagName=xmlTemplateElement.getTagName$();
if (tagName === "helix" ) {
var helix=Clazz.new_([this, null, xmlTemplateElement.getAttribute$S("id")],$I$(19,1).c$$S);
helix.setFlipped$Z($I$(15,"parseBoolean$S",[xmlTemplateElement.getAttribute$S("flipped")]));
helix.setLength$I(Integer.parseInt$S(xmlTemplateElement.getAttribute$S("length")));
if (xmlTemplateElement.hasAttribute$S("caption")) {
helix.setCaption$S(xmlTemplateElement.getAttribute$S("caption"));
}this.elementNames.put$O$O(xmlTemplateElement.getAttribute$S("id"), helix);
var xmlHelixChildren=xmlTemplateElement.getChildNodes$();
for (var j=0; j < xmlHelixChildren.getLength$(); j++) {
var xmlHelixChild=xmlHelixChildren.item$I(j);
if (Clazz.instanceOf(xmlHelixChild, "org.w3c.dom.Element")) {
var xmlHelixChildElement=xmlHelixChild;
var helixChildTagName=xmlHelixChildElement.getTagName$();
if (helixChildTagName === "startPosition" ) {
helix.setStartPosition$java_awt_geom_Point2D_Double(p$5.pointFromXml$org_w3c_dom_Element.apply(this, [xmlHelixChildElement]));
} else if (helixChildTagName === "endPosition" ) {
helix.setEndPosition$java_awt_geom_Point2D_Double(p$5.pointFromXml$org_w3c_dom_Element.apply(this, [xmlHelixChildElement]));
}}}
} else if (tagName === "sequence" ) {
var sequence=Clazz.new_([this, null, xmlTemplateElement.getAttribute$S("id")],$I$(20,1).c$$S);
sequence.setLength$I(Integer.parseInt$S(xmlTemplateElement.getAttribute$S("length")));
this.elementNames.put$O$O(xmlTemplateElement.getAttribute$S("id"), sequence);
var xmlSequenceChildren=xmlTemplateElement.getChildNodes$();
for (var j=0; j < xmlSequenceChildren.getLength$(); j++) {
var xmlSequenceChild=xmlSequenceChildren.item$I(j);
if (Clazz.instanceOf(xmlSequenceChild, "org.w3c.dom.Element")) {
var xmlSequenceChildElement=xmlSequenceChild;
var sequenceChildTagName=xmlSequenceChildElement.getTagName$();
if (sequenceChildTagName === "inTangentVector" ) {
sequence.setInTangentVectorLength$D(p$5.vectorLengthFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
sequence.setInTangentVectorAngle$D(p$5.vectorAngleFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
} else if (sequenceChildTagName === "outTangentVector" ) {
sequence.setOutTangentVectorLength$D(p$5.vectorLengthFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
sequence.setOutTangentVectorAngle$D(p$5.vectorAngleFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
} else if (sequenceChildTagName === "vertex5" ) {
sequence.setVertex5$java_awt_geom_Point2D_Double(p$5.pointFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
} else if (sequenceChildTagName === "vertex3" ) {
sequence.setVertex3$java_awt_geom_Point2D_Double(p$5.pointFromXml$org_w3c_dom_Element.apply(this, [xmlSequenceChildElement]));
}}}
}}}
}var xmlEdges=this.xmlDocument.getElementsByTagName$S("edges").item$I(0);
{
var xmlEdgesChildren=xmlEdges.getChildNodes$();
for (var i=0; i < xmlEdgesChildren.getLength$(); i++) {
var xmlEdgesChild=xmlEdgesChildren.item$I(i);
if (Clazz.instanceOf(xmlEdgesChild, "org.w3c.dom.Element")) {
var xmlTemplateEdge=xmlEdgesChild;
if (xmlTemplateEdge.getTagName$() === "edge" ) {
var v1=null;
var v2=null;
var xmlEdgeChildren=xmlTemplateEdge.getChildNodes$();
for (var j=0; j < xmlEdgeChildren.getLength$(); j++) {
var xmlEdgeChild=xmlEdgeChildren.item$I(j);
if (Clazz.instanceOf(xmlEdgeChild, "org.w3c.dom.Element")) {
var xmlEdgeChildElement=xmlEdgeChild;
var edgeChildTagName=xmlEdgeChildElement.getTagName$();
if (edgeChildTagName === "from" ) {
v1=p$5.endPointFromXml$org_w3c_dom_Element.apply(this, [xmlEdgeChildElement]);
} else if (edgeChildTagName === "to" ) {
v2=p$5.endPointFromXml$org_w3c_dom_Element.apply(this, [xmlEdgeChildElement]);
}}}
if (v1 == null ) throw (Clazz.new_($I$(18,1).c$$S,["Invalid edge: missing \"from\" declaration"]));
if (v2 == null ) throw (Clazz.new_($I$(18,1).c$$S,["Invalid edge: missing \"to\" declaration"]));
p$5.connect$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint.apply(this, [v1, v2]);
}}}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.RNATemplate, "In1Is", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "IN1_IS_5PRIME", 0, []);
Clazz.newEnumConst($vals, C$.c$, "IN1_IS_3PRIME", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.RNATemplate, "EdgeEndPointPosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "IN1", 0, []);
Clazz.newEnumConst($vals, C$.c$, "IN2", 1, []);
Clazz.newEnumConst($vals, C$.c$, "OUT1", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OUT2", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "RNATemplateElement", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});
C$.$classes$=[['EdgeEndPoint',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._id=$I$(22).NEXT_ID++;
this.element=this;
},1);

C$.$fields$=[['I',['_id'],'O',['element','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateElement']]]

Clazz.newMeth(C$, 'getName$', function () {
return "RNATemplate" + this._id;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.this$0.elements.add$O(this);
}, 1);

Clazz.newMeth(C$, 'getParentTemplate$', function () {
return this.this$0.template;
});

Clazz.newMeth(C$, 'connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (positionHere, otherEndPoint) {
var endPointHere=this.getEndPointFromPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition(positionHere);
endPointHere.connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(otherEndPoint);
});

Clazz.newMeth(C$, 'connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition', function (positionHere, otherElement, positionOnOtherElement) {
var otherEndPoint=otherElement.getEndPointFromPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition(positionOnOtherElement);
this.connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(positionHere, otherEndPoint);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate.RNATemplateElement, "EdgeEndPoint", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['otherEndPoint','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateElement.EdgeEndPoint']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getNextEndPoint$', function () {
return this.this$0.element.getNextEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(this);
});

Clazz.newMeth(C$, 'getPreviousEndPoint$', function () {
return this.this$0.element.getPreviousEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(this);
});

Clazz.newMeth(C$, 'getPosition$', function () {
return this.this$0.element.getPositionFromEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint(this);
});

Clazz.newMeth(C$, 'getElement$', function () {
return this.this$0.element;
});

Clazz.newMeth(C$, 'getOtherEndPoint$', function () {
return this.otherEndPoint;
});

Clazz.newMeth(C$, 'getOtherElement$', function () {
return (this.otherEndPoint != null ) ? this.otherEndPoint.getElement$() : null;
});

Clazz.newMeth(C$, 'disconnect$', function () {
if (this.otherEndPoint != null ) {
this.otherEndPoint.otherEndPoint=null;
this.otherEndPoint=null;
}});

Clazz.newMeth(C$, 'isConnected$', function () {
return (this.otherEndPoint != null );
});

Clazz.newMeth(C$, 'connectTo$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (otherEndPoint) {
if (this.otherEndPoint != null  || otherEndPoint.otherEndPoint != null  ) {
throw (Clazz.new_($I$(21,1)));
}if (this.b$['fr.orsay.lri.varna.models.templates.RNATemplate'].template !== otherEndPoint.getElement$().getParentTemplate$() ) {
throw (Clazz.new_($I$(5,1).c$$S,["Elements from different templates cannot be connected with each other."]));
}this.otherEndPoint=otherEndPoint;
otherEndPoint.otherEndPoint=this;
});

Clazz.newMeth(C$, 'toString', function () {
return "Edge endpoint on element " + this.this$0.element.toString() + " at position " + this.getPosition$().toString() ;
});
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "RNATemplateHelix", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.flipped=false;
this.in1Is=null;
this.caption=null;
},1);

C$.$fields$=[['Z',['flipped'],'I',['length'],'S',['caption','_name'],'O',['startPosition','java.awt.geom.Point2D.Double','+endPosition','in1Is','fr.orsay.lri.varna.models.templates.RNATemplate.In1Is','in1','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateElement.EdgeEndPoint','+out1','+in2','+out2']]]

Clazz.newMeth(C$, 'isFlipped$', function () {
return this.flipped;
});

Clazz.newMeth(C$, 'setFlipped$Z', function (flipped) {
this.flipped=flipped;
});

Clazz.newMeth(C$, 'getIn1Is$', function () {
return this.in1Is;
});

Clazz.newMeth(C$, 'setIn1Is$fr_orsay_lri_varna_models_templates_RNATemplate_In1Is', function (in1Is) {
this.in1Is=in1Is;
});

Clazz.newMeth(C$, 'getCaption$', function () {
return this.caption;
});

Clazz.newMeth(C$, 'setCaption$S', function (caption) {
this.caption=caption;
});

Clazz.newMeth(C$, 'hasCaption$', function () {
return this.caption != null ;
});

Clazz.newMeth(C$, 'c$$S', function (name) {
Clazz.super_(C$, this);
this.in1=Clazz.new_($I$(23,1),[this, null]);
this.out1=Clazz.new_($I$(23,1),[this, null]);
this.in2=Clazz.new_($I$(23,1),[this, null]);
this.out2=Clazz.new_($I$(23,1),[this, null]);
this._name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "Helix    @" + Integer.toHexString$I(this.hashCode$()) + " len=" + this.length + " caption=" + this.caption ;
});

Clazz.newMeth(C$, 'getName$', function () {
return "" + this._name;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'getStartPosition$', function () {
return this.startPosition;
});

Clazz.newMeth(C$, 'setStartPosition$java_awt_geom_Point2D_Double', function (startPosition) {
this.startPosition=startPosition;
});

Clazz.newMeth(C$, 'getEndPosition$', function () {
return this.endPosition;
});

Clazz.newMeth(C$, 'setEndPosition$java_awt_geom_Point2D_Double', function (endPosition) {
this.endPosition=endPosition;
});

Clazz.newMeth(C$, 'getIn1$', function () {
return this.in1;
});

Clazz.newMeth(C$, 'getOut1$', function () {
return this.out1;
});

Clazz.newMeth(C$, 'getIn2$', function () {
return this.in2;
});

Clazz.newMeth(C$, 'getOut2$', function () {
return this.out2;
});

Clazz.newMeth(C$, 'disconnectFromAny$', function () {
this.getIn1$().disconnect$();
this.getIn2$().disconnect$();
this.getOut1$().disconnect$();
this.getOut2$().disconnect$();
});

Clazz.newMeth(C$, 'getNextEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endpoint) {
if (endpoint === this.in1 ) {
return this.out1;
} else if (endpoint === this.in2 ) {
return this.out2;
} else {
return endpoint.getOtherEndPoint$();
}});

Clazz.newMeth(C$, 'getPreviousEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endpoint) {
if (endpoint === this.out1 ) {
return this.in1;
} else if (endpoint === this.out2 ) {
return this.in2;
} else {
return endpoint.getOtherEndPoint$();
}});

Clazz.newMeth(C$, 'getIn1EndPoint$', function () {
return this.in1;
});

Clazz.newMeth(C$, 'getEndPointFromPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition', function (position) {
switch (position) {
case $I$(1).IN1:
return this.getIn1$();
case $I$(1).IN2:
return this.getIn2$();
case $I$(1).OUT1:
return this.getOut1$();
case $I$(1).OUT2:
return this.getOut2$();
default:
return null;
}
});

Clazz.newMeth(C$, 'getPositionFromEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endPoint) {
if (endPoint === this.in1 ) {
return $I$(1).IN1;
} else if (endPoint === this.in2 ) {
return $I$(1).IN2;
} else if (endPoint === this.out1 ) {
return $I$(1).OUT1;
} else if (endPoint === this.out2 ) {
return $I$(1).OUT2;
} else {
return null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RNATemplate, "RNATemplateUnpairedSequence", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['fr.orsay.lri.varna.models.templates.RNATemplate','.RNATemplateElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inTangentVectorAngle=1.5707963267948966;
this.inTangentVectorLength=100.0;
this.outTangentVectorAngle=1.5707963267948966;
this.outTangentVectorLength=100.0;
},1);

C$.$fields$=[['D',['inTangentVectorAngle','inTangentVectorLength','outTangentVectorAngle','outTangentVectorLength'],'I',['length'],'S',['_name'],'O',['vertex5','java.awt.geom.Point2D.Double','+vertex3','$in','fr.orsay.lri.varna.models.templates.RNATemplate.RNATemplateElement.EdgeEndPoint','+out']]]

Clazz.newMeth(C$, 'getVertex5$', function () {
return this.vertex5;
});

Clazz.newMeth(C$, 'setVertex5$java_awt_geom_Point2D_Double', function (vertex5) {
this.vertex5=vertex5;
});

Clazz.newMeth(C$, 'getVertex3$', function () {
return this.vertex3;
});

Clazz.newMeth(C$, 'setVertex3$java_awt_geom_Point2D_Double', function (vertex3) {
this.vertex3=vertex3;
});

Clazz.newMeth(C$, 'c$$S', function (name) {
Clazz.super_(C$, this);
this.$in=Clazz.new_($I$(23,1),[this, null]);
this.out=Clazz.new_($I$(23,1),[this, null]);
this._name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "Sequence @" + Integer.toHexString$I(this.hashCode$()) + " len=" + this.length ;
});

Clazz.newMeth(C$, 'getName$', function () {
return "" + this._name;
});

Clazz.newMeth(C$, 'getLength$', function () {
return this.length;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
this.length=length;
});

Clazz.newMeth(C$, 'getInTangentVectorAngle$', function () {
return this.inTangentVectorAngle;
});

Clazz.newMeth(C$, 'setInTangentVectorAngle$D', function (inTangentVectorAngle) {
this.inTangentVectorAngle=inTangentVectorAngle;
});

Clazz.newMeth(C$, 'getInTangentVectorLength$', function () {
return this.inTangentVectorLength;
});

Clazz.newMeth(C$, 'setInTangentVectorLength$D', function (inTangentVectorLength) {
this.inTangentVectorLength=inTangentVectorLength;
});

Clazz.newMeth(C$, 'getOutTangentVectorAngle$', function () {
return this.outTangentVectorAngle;
});

Clazz.newMeth(C$, 'setOutTangentVectorAngle$D', function (outTangentVectorAngle) {
this.outTangentVectorAngle=outTangentVectorAngle;
});

Clazz.newMeth(C$, 'getOutTangentVectorLength$', function () {
return this.outTangentVectorLength;
});

Clazz.newMeth(C$, 'setOutTangentVectorLength$D', function (outTangentVectorLength) {
this.outTangentVectorLength=outTangentVectorLength;
});

Clazz.newMeth(C$, 'getIn$', function () {
return this.$in;
});

Clazz.newMeth(C$, 'getOut$', function () {
return this.out;
});

Clazz.newMeth(C$, 'disconnectFromAny$', function () {
this.getIn$().disconnect$();
this.getOut$().disconnect$();
});

Clazz.newMeth(C$, 'getNextEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endpoint) {
if (endpoint === this.$in ) {
return this.out;
} else {
return endpoint.getOtherEndPoint$();
}});

Clazz.newMeth(C$, 'getPreviousEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endpoint) {
if (endpoint === this.out ) {
return this.$in;
} else {
return endpoint.getOtherEndPoint$();
}});

Clazz.newMeth(C$, 'getIn1EndPoint$', function () {
return this.$in;
});

Clazz.newMeth(C$, 'getEndPointFromPosition$fr_orsay_lri_varna_models_templates_RNATemplate_EdgeEndPointPosition', function (position) {
switch (position) {
case $I$(1).IN1:
return this.getIn$();
case $I$(1).OUT1:
return this.getOut$();
default:
return null;
}
});

Clazz.newMeth(C$, 'getPositionFromEndPoint$fr_orsay_lri_varna_models_templates_RNATemplate_RNATemplateElement_EdgeEndPoint', function (endPoint) {
if (endPoint === this.$in ) {
return $I$(1).IN1;
} else if (endPoint === this.out ) {
return $I$(1).OUT1;
} else {
return null;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
