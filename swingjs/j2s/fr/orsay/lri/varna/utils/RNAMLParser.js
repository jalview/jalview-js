(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.utils"),p$1={},I$=[[0,['fr.orsay.lri.varna.models.rna.ModeleBP','.Edge'],['fr.orsay.lri.varna.models.rna.ModeleBP','.Stericity'],'fr.orsay.lri.varna.models.rna.ModeleBP','java.util.ArrayList','java.util.Vector','java.util.Hashtable','java.net.URL','java.io.InputStreamReader','org.xml.sax.InputSource','java.io.StringReader','StringBuffer',['fr.orsay.lri.varna.utils.RNAMLParser','.RNATmp'],['fr.orsay.lri.varna.utils.RNAMLParser','.BPTemp'],['fr.orsay.lri.varna.utils.RNAMLParser','.HelixTemp'],'java.util.Stack','java.awt.Point']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "RNAMLParser", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.xml.sax.helpers.DefaultHandler');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._molecules=null;
this._inSequenceIDs=false;
this._inLength=false;
this._inSequence=false;
this._inHelix=false;
this._inStrAnnotation=false;
this._inBP=false;
this._inBP5=false;
this._inBP3=false;
this._inEdge5=false;
this._inEdge3=false;
this._inPosition=false;
this._inBondOrientation=false;
this._inMolecule=false;
this._buffer=null;
this._currentModel=null;
this._id5=0;
this._id3=0;
this._length=0;
this._edge5=null;
this._edge3=null;
this._orientation=null;
this._helixID=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._molecules=Clazz.new_($I$(6));
this._currentModel="";
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.superclazz.c$.apply(this, []);
C$.$init$.apply(this);
this._inSequenceIDs=false;
this._inSequence=false;
this._inStrAnnotation=false;
this._inBP=false;
this._inBP5=false;
this._inBP3=false;
this._inPosition=false;
this._inEdge5=false;
this._inEdge3=false;
this._inBondOrientation=false;
this._inHelix=false;
this._inMolecule=false;
}, 1);

Clazz.newMeth(C$, 'createSourceFromURL$S', function (path) {
var url=null;
try {
url=Clazz.new_($I$(7).c$$S,[path]);
var connexion=url.openConnection$();
connexion.setUseCaches$Z(false);
var r=connexion.getInputStream$();
var inr=Clazz.new_($I$(8).c$$java_io_InputStream,[r]);
return Clazz.new_($I$(9).c$$java_io_Reader,[inr]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
} else {
throw e;
}
}
return Clazz.new_($I$(9).c$$java_io_Reader,[Clazz.new_($I$(10).c$$S,[""])]);
});

Clazz.newMeth(C$, ['resolveEntity$S$S','resolveEntity$'], function (publicId, systemId) {
if (systemId.endsWith$S("rnaml.dtd")) {
var resourceName="/rnaml.dtd";
var url=ClassLoader.getSystemResource$S(resourceName);
if (url != null ) {
try {
var stream=url.openStream$();
if (stream != null ) {
return Clazz.new_($I$(9).c$$java_io_InputStream,[stream]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}}return Clazz.new_($I$(9).c$$java_io_Reader,[Clazz.new_($I$(10).c$$S,[""])]);
});

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, qName, attributes) {
if (qName.equals$O("numbering-table")) {
this._inSequenceIDs=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("helix")) {
this._inHelix=true;
this._buffer=Clazz.new_($I$(11));
this._helixID=attributes.getValue$S("id");
} else if (qName.equals$O("seq-data")) {
this._inSequence=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("length")) {
this._inLength=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("str-annotation")) {
this._inStrAnnotation=true;
} else if (qName.equals$O("base-pair")) {
this._inBP=true;
} else if (qName.equals$O("base-id-5p")) {
if (this._inBP || this._inHelix ) {
this._inBP5=true;
}} else if (qName.equals$O("base-id-3p")) {
if (this._inBP || this._inHelix ) {
this._inBP3=true;
}} else if (qName.equals$O("edge-5p")) {
this._inEdge5=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("edge-3p")) {
this._inEdge3=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("position")) {
this._inPosition=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("bond-orientation")) {
this._inBondOrientation=true;
this._buffer=Clazz.new_($I$(11));
} else if (qName.equals$O("molecule")) {
this._inMolecule=true;
var id=(attributes.getValue$S("id"));
this._molecules.put$TK$TV(id, Clazz.new_($I$(12), [this, null]));
this._currentModel=id;
} else {
}});

Clazz.newMeth(C$, 'endElement$S$S$S', function (uri, localName, qName) {
if (qName.equals$O("numbering-table")) {
this._inSequenceIDs=false;
var content=this._buffer.toString();
content=content.trim$();
var tokens=content.split$S("\\s+");
var results=Clazz.new_($I$(5));
for (var i=0; i < tokens.length; i++) {
try {
results.add$TE( new Integer(Integer.parseInt$S(tokens[i])));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
e.printStackTrace$();
} else {
throw e;
}
}
}
this._molecules.get$O(this._currentModel)._sequenceIDs=results;
this._buffer=null;
} else if (qName.equals$O("seq-data")) {
this._inSequence=false;
var content=this._buffer.toString();
content=content.trim$();
var tokens=content.split$S("\\s+");
var results=Clazz.new_($I$(4));
for (var i=0; i < tokens.length; i++) {
for (var j=0; j < tokens[i].length$(); j++) results.add$TE("" + tokens[i].charAt$I(j));

}
this._molecules.get$O(this._currentModel)._sequence=results;
this._buffer=null;
} else if (qName.equals$O("bond-orientation")) {
this._inBondOrientation=false;
var content=this._buffer.toString();
content=content.trim$();
this._orientation=content;
this._buffer=null;
} else if (qName.equals$O("str-annotation")) {
this._inStrAnnotation=false;
} else if (qName.equals$O("base-pair")) {
if (this._inMolecule) {
this._inBP=false;
var bp=Clazz.new_($I$(13).c$$I$I$S$S$S, [this, null, this._id5, this._id3, this._edge5, this._edge3, this._orientation]);
this._molecules.get$O(this._currentModel)._structure.add$TE(bp);
}} else if (qName.equals$O("helix")) {
this._inHelix=false;
if (this._inMolecule) {
var h=Clazz.new_($I$(14).c$$I$I$I$S, [this, null, this._id5, this._id3, this._length, this._helixID]);
this._molecules.get$O(this._currentModel)._helices.add$TE(h);
}} else if (qName.equals$O("base-id-5p")) {
this._inBP5=false;
} else if (qName.equals$O("base-id-3p")) {
this._inBP3=false;
} else if (qName.equals$O("length")) {
this._inLength=false;
var content=this._buffer.toString();
content=content.trim$();
this._length=Integer.parseInt$S(content);
this._buffer=null;
} else if (qName.equals$O("position")) {
var content=this._buffer.toString();
content=content.trim$();
var pos=Integer.parseInt$S(content);
if (this._inBP5) {
this._id5=pos;
}if (this._inBP3) {
this._id3=pos;
}this._buffer=null;
} else if (qName.equals$O("edge-5p")) {
this._inEdge5=false;
var content=this._buffer.toString();
content=content.trim$();
this._edge5=content;
this._buffer=null;
} else if (qName.equals$O("edge-3p")) {
this._inEdge3=false;
var content=this._buffer.toString();
content=content.trim$();
this._edge3=content;
this._buffer=null;
} else if (qName.equals$O("molecule")) {
this._inMolecule=false;
} else {
}});

Clazz.newMeth(C$, 'characters$CA$I$I', function (ch, start, length) {
var lecture= String.instantialize(ch, start, length);
if (this._buffer != null ) this._buffer.append$S(lecture);
});

Clazz.newMeth(C$, 'startDocument$', function () {
});

Clazz.newMeth(C$, 'endDocument$', function () {
p$1.postProcess.apply(this, []);
});

Clazz.newMeth(C$, 'discardStacking', function () {
var result=Clazz.new_($I$(5));
for (var i=0; i < this._molecules.get$O(this._currentModel)._structure.size$(); i++) {
var bp=this._molecules.get$O(this._currentModel)._structure.get$I(i);
if (bp.orientation.equals$O("c") || bp.orientation.equals$O("t") ) {
result.add$TE(bp);
}}
this._molecules.get$O(this._currentModel)._structure=result;
}, p$1);

Clazz.newMeth(C$, 'isSelfCrossing$IA', function (str) {
var intervals=Clazz.new_($I$(15));
intervals.add$TE(Clazz.new_($I$(16).c$$I$I,[0, str.length - 1]));
while (!intervals.empty$()){
var p=intervals.pop$();
if (p.x <= p.y) {
if (str[p.x] == -1) {
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[p.x + 1, p.y]));
} else {
var i=p.x;
var j=p.y;
var k=str[i];
if ((k <= i) || (k > j) ) {
return true;
} else {
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[i + 1, k - 1]));
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[k + 1, j]));
}}}}
return false;
}, 1);

Clazz.newMeth(C$, 'debugPrintArray$OA', function (str) {
var s=Clazz.new_($I$(11).c$$S,["["]);
for (var i=0; i < str.length; i++) {
if (i != 0) {
s.append$S(",");
}s.append$O(str[i]);
}
s.append$S("]");
System.out.println$S(s.toString());
}, p$1);

Clazz.newMeth(C$, 'planarize$IA', function (str) {
if (!C$.isSelfCrossing$IA(str)) {
return str;
}var length=str.length;
var result=Clazz.array(Integer.TYPE, [length]);
for (var i=0; i < result.length; i++) {
result[i]=-1;
}
var tab=Clazz.array(Short.TYPE, [length, length]);
var backtrack=Clazz.array(Short.TYPE, [length, length]);
var theta=3;
for (var i=0; i < result.length; i++) {
for (var j=i; j < Math.min(i + theta, result.length); j++) {
tab[i][j]=(0|0);
backtrack[i][j]=(-1|0);
}
}
for (var n=theta; n < length; n++) {
for (var i=0; i < length - n; i++) {
var j=i + n;
tab[i][j]=tab[i + 1][j];
backtrack[i][j]=(-1|0);
var k=str[i];
if ((k != -1) && (k <= j) && (i < k)  ) {
var tmp=1;
if (i + 1 <= k - 1) {
tmp+=tab[i + 1][k - 1];
}if (k + 1 <= j) {
tmp+=tab[k + 1][j];
}if (tmp > tab[i][j]) {
tab[i][j]=(tmp|0);
backtrack[i][j]=(k|0);
}}}
}
var intervals=Clazz.new_($I$(15));
intervals.add$TE(Clazz.new_($I$(16).c$$I$I,[0, length - 1]));
while (!intervals.empty$()){
var p=intervals.pop$();
if (p.x <= p.y) {
if (backtrack[p.x][p.y] == -1) {
result[p.x]=-1;
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[p.x + 1, p.y]));
} else {
var i=p.x;
var j=p.y;
var k=backtrack[p.x][p.y];
result[i]=k;
result[k]=i;
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[i + 1, k - 1]));
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[k + 1, j]));
}}}
return result;
}, 1);

Clazz.newMeth(C$, 'planarize$java_util_ArrayList$java_util_ArrayList$java_util_ArrayList$I', function (input, planar, others, length) {
var index2BPs=Clazz.new_($I$(6));
for (var msbp, $msbp = input.iterator$(); $msbp.hasNext$()&&((msbp=($msbp.next$())),1);) {
var i=msbp.getPartner5$().getIndex$();
if (!index2BPs.containsKey$O(new Integer(i))) {
index2BPs.put$TK$TV(new Integer(i), Clazz.new_($I$(4)));
}index2BPs.get$O(new Integer(i)).add$TE(msbp);
}
var tab=Clazz.array(Short.TYPE, [length, length]);
var backtrack=Clazz.array(Short.TYPE, [length, length]);
var theta=3;
for (var i=0; i < length; i++) {
for (var j=i; j < Math.min(i + theta, length); j++) {
tab[i][j]=(0|0);
backtrack[i][j]=(-1|0);
}
}
for (var n=theta; n < length; n++) {
for (var i=0; i < length - n; i++) {
var j=i + n;
tab[i][j]=tab[i + 1][j];
backtrack[i][j]=(-1|0);
if (index2BPs.containsKey$O(new Integer(i))) {
var vi=index2BPs.get$O(new Integer(i));
for (var numBP=0; numBP < vi.size$(); numBP++) {
var mb=vi.get$I(numBP);
var k=mb.getPartner3$().getIndex$();
if ((k != -1) && (k <= j) && (i < k)  ) {
var tmp=1;
if (i + 1 <= k - 1) {
tmp+=tab[i + 1][k - 1];
}if (k + 1 <= j) {
tmp+=tab[k + 1][j];
}if (tmp > tab[i][j]) {
tab[i][j]=(tmp|0);
backtrack[i][j]=(numBP|0);
}}}
}}
}
var intervals=Clazz.new_($I$(15));
intervals.add$TE(Clazz.new_($I$(16).c$$I$I,[0, length - 1]));
while (!intervals.empty$()){
var p=intervals.pop$();
if (p.x <= p.y) {
if (backtrack[p.x][p.y] == -1) {
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[p.x + 1, p.y]));
} else {
var i=p.x;
var j=p.y;
var nb=backtrack[p.x][p.y];
var mb=index2BPs.get$O(new Integer(i)).get$I(nb);
var k=mb.getPartner3$().getIndex$();
planar.add$TE(mb);
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[i + 1, k - 1]));
intervals.push$TE(Clazz.new_($I$(16).c$$I$I,[k + 1, j]));
}}}
for (var i, $i = index2BPs.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
var vi=index2BPs.get$O(new Integer(i));
for (var mb, $mb = vi.iterator$(); $mb.hasNext$()&&((mb=($mb.next$())),1);) {
if (!planar.contains$O(mb)) {
others.add$TE(mb);
}}
}
}, 1);

Clazz.newMeth(C$, 'postProcess', function () {
for (var r, $r = this._molecules.values$().iterator$(); $r.hasNext$()&&((r=($r.next$())),1);) {
if (r._sequenceIDs.size$() == 0) {
var results=Clazz.new_($I$(5));
for (var i=0; i < r._sequence.size$(); i++) {
results.add$TE( new Integer(i + 1));
}
r._sequenceIDs=results;
}var ID2Index=Clazz.new_($I$(6));
for (var i=0; i < r._sequenceIDs.size$(); i++) {
ID2Index.put$TK$TV(r._sequenceIDs.get$I(i), new Integer(i));
}
for (var bp, $bp = r._structure.iterator$(); $bp.hasNext$()&&((bp=($bp.next$())),1);) {
bp.pos3=bp.pos3 - 1;
bp.pos5=bp.pos5 - 1;
}
p$1.discardStacking.apply(this, []);
var index2BPs=Clazz.new_($I$(6));
for (var msbp, $msbp = r._structure.iterator$(); $msbp.hasNext$()&&((msbp=($msbp.next$())),1);) {
var i=msbp.pos5;
if (!index2BPs.containsKey$O(new Integer(i))) {
index2BPs.put$TK$TV(new Integer(i), Clazz.new_($I$(6)));
}if (!index2BPs.get$O(new Integer(i)).contains$O(new Integer(msbp.pos3))) {
index2BPs.get$O(new Integer(i)).put$TK$TV(new Integer(msbp.pos3), msbp);
}}
for (var i=0; i < r._helices.size$(); i++) {
var h=r._helices.get$I(i);
for (var j=0; j < h.length; j++) {
var a=(h.pos5 + j - 1);
var b=(h.pos3 - j - 1 );
var bp=Clazz.new_($I$(13).c$$I$I$S$S$S, [this, null, a, (b), "+", "+", "c"]);
if (!index2BPs.containsKey$O(new Integer(a))) {
index2BPs.put$TK$TV(new Integer(a), Clazz.new_($I$(6)));
}if (!index2BPs.get$O(new Integer(a)).contains$O(new Integer(b))) {
index2BPs.get$O(new Integer(a)).put$TK$TV(new Integer(b), bp);
}}
}
var newStructure=Clazz.new_($I$(5));
for (var i, $i = index2BPs.keySet$().iterator$(); $i.hasNext$()&&((i=($i.next$()).intValue$()),1);) {
for (var j, $j = index2BPs.get$O(new Integer(i)).keySet$().iterator$(); $j.hasNext$()&&((j=($j.next$()).intValue$()),1);) {
var bp=index2BPs.get$O(new Integer(i)).get$O(new Integer(j));
newStructure.add$TE(bp);
}
}
r._structure=newStructure;
}
}, p$1);

Clazz.newMeth(C$, 'getMolecules$', function () {
return Clazz.new_($I$(4).c$$java_util_Collection,[this._molecules.values$()]);
});
;
(function(){var C$=Clazz.newClass(P$.RNAMLParser, "HelixTemp", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pos5=0;
this.pos3=0;
this.length=0;
this.name=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$S', function (pos5, pos3, length, name) {
C$.$init$.apply(this);
this.pos3=pos3;
this.pos5=pos5;
this.length=length;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return ("[" + this.name + "," + this.pos5 + "," + this.pos3 + "," + this.length + "]" );
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RNAMLParser, "BPTemp", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.pos5=0;
this.pos3=0;
this.edge5=null;
this.edge3=null;
this.orientation=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S$S$S', function (pos5, pos3, edge5, edge3, orientation) {
C$.$init$.apply(this);
if (edge3 == null ) {
edge3="+";
}if (edge5 == null ) {
edge5="+";
}if (orientation == null ) {
orientation="c";
}this.pos5=pos5;
this.pos3=pos3;
this.edge5=edge5;
this.edge3=edge3;
this.orientation=orientation;
}, 1);

Clazz.newMeth(C$, 'createBPStyle$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase', function (mb5, mb3) {
var e5;
var e3;
var isCanonical=false;
if (this.edge5.equals$O("W")) {
e5=$I$(1).WC;
} else if (this.edge5.equals$O("H")) {
e5=$I$(1).HOOGSTEEN;
} else if (this.edge5.equals$O("S")) {
e5=$I$(1).SUGAR;
} else {
e5=$I$(1).WC;
}if (this.edge3.equals$O("W")) {
e3=$I$(1).WC;
} else if (this.edge3.equals$O("H")) {
e3=$I$(1).HOOGSTEEN;
} else if (this.edge3.equals$O("S")) {
e3=$I$(1).SUGAR;
} else {
e3=$I$(1).WC;
}if ((this.edge5.equals$O("+") && this.edge3.equals$O("+") ) || (this.edge5.equals$O("-") && this.edge3.equals$O("-") ) ) {
e3=$I$(1).WC;
e5=$I$(1).WC;
}var ster;
if (this.orientation.equals$O("c")) {
ster=$I$(2).CIS;
} else if (this.orientation.equals$O("t")) {
ster=$I$(2).TRANS;
} else {
ster=$I$(2).CIS;
}return (Clazz.new_($I$(3).c$$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBase$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Edge$fr_orsay_lri_varna_models_rna_ModeleBP_Stericity,[mb5, mb3, e5, e3, ster]));
});

Clazz.newMeth(C$, 'toString', function () {
return ("[" + this.pos5 + "," + this.pos3 + "," + this.edge5 + "," + this.edge3 + "," + this.orientation + "]" );
});

Clazz.newMeth(C$);
})()
;
(function(){var C$=Clazz.newClass(P$.RNAMLParser, "RNATmp", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this._sequence=null;
this._sequenceIDs=null;
this._structure=null;
this._helices=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this._sequence=Clazz.new_($I$(4));
this._sequenceIDs=Clazz.new_($I$(5));
this._structure=Clazz.new_($I$(5));
this._helices=Clazz.new_($I$(5));
}, 1);

Clazz.newMeth(C$, 'getSequence$', function () {
return this._sequence;
});

Clazz.newMeth(C$, 'getStructure$', function () {
return this._structure;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:02 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
