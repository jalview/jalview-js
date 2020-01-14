(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.Hashtable','org.xml.sax.helpers.AttributesImpl',['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType']]],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "ModeleBackbone", null, null, 'java.io.Serializable');
C$.XML_ELEMENT_NAME=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.XML_ELEMENT_NAME="backbone";
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.elems=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.elems=Clazz.new_($I$(1));
}, 1);

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2));
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
for (var bck, $bck = this.elems.values$().iterator$(); $bck.hasNext$()&&((bck=($bck.next$())),1);) {
bck.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
atts.clear$();
});

Clazz.newMeth(C$, 'addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement', function (mbe) {
this.elems.put$TK$TV(new Integer(mbe.getIndex$()), mbe);
});

Clazz.newMeth(C$, 'getTypeBefore$I', function (indexBase) {
return this.getTypeAfter$I(indexBase - 1);
});

Clazz.newMeth(C$, 'getTypeAfter$I', function (indexBase) {
if (this.elems.containsKey$O(new Integer(indexBase))) return this.elems.get$O(new Integer(indexBase)).getType$();
 else return $I$(3).SOLID_TYPE;
});

Clazz.newMeth(C$, 'getColorBefore$I$java_awt_Color', function (indexBase, defCol) {
return this.getColorAfter$I$java_awt_Color(indexBase - 1, defCol);
});

Clazz.newMeth(C$, 'getColorAfter$I$java_awt_Color', function (indexBase, defCol) {
if (this.elems.containsKey$O(new Integer(indexBase))) {
var c=this.elems.get$O(new Integer(indexBase)).getColor$();
if (c != null ) return c;
}return defCol;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.06');//Created 2019-01-21 23:30:03 Java2ScriptVisitor version 3.2.4.06 net.sf.j2s.core.jar version 3.2.4.06
