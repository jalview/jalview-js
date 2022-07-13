(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'java.util.Hashtable','org.xml.sax.helpers.AttributesImpl',['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleBackbone", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elems=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['elems','java.util.Hashtable']]
,['S',['XML_ELEMENT_NAME']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2,1));
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
for (var bck, $bck = this.elems.values$().iterator$(); $bck.hasNext$()&&((bck=($bck.next$())),1);) {
bck.toXML$javax_xml_transform_sax_TransformerHandler(hd);
}
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
atts.clear$();
});

Clazz.newMeth(C$, 'addElement$fr_orsay_lri_varna_models_rna_ModeleBackboneElement', function (mbe) {
this.elems.put$O$O(new Integer(mbe.getIndex$()), mbe);
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

C$.$static$=function(){C$.$static$=0;
C$.XML_ELEMENT_NAME="backbone";
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
