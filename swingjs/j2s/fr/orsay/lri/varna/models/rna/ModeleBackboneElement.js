(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,['fr.orsay.lri.varna.models.rna.ModeleBackboneElement','.BackboneType'],'org.xml.sax.helpers.AttributesImpl','fr.orsay.lri.varna.utils.XMLUtils']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ModeleBackboneElement", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['BackboneType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this._color=null;
},1);

C$.$fields$=[['I',['_index'],'O',['_type','fr.orsay.lri.varna.models.rna.ModeleBackboneElement.BackboneType','_color','java.awt.Color']]
,['S',['XML_ELEMENT_NAME','XML_VAR_INDEX_NAME','XML_VAR_TYPE_NAME','XML_VAR_COLOR_NAME']]]

Clazz.newMeth(C$, 'c$$I$fr_orsay_lri_varna_models_rna_ModeleBackboneElement_BackboneType', function (index, t) {
;C$.$init$.apply(this);
this._index=index;
if (t === $I$(1).CUSTOM_COLOR ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Error: Missing Color while constructing Backbone"]);
}this._type=t;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_awt_Color', function (index, c) {
;C$.$init$.apply(this);
this._index=index;
this._type=$I$(1).CUSTOM_COLOR;
this._color=c;
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this._type;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this._index;
});

Clazz.newMeth(C$, 'getColor$', function () {
return this._color;
});

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
var atts=Clazz.new_($I$(2,1));
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_INDEX_NAME, "CDATA", "" + this._index);
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_TYPE_NAME, "CDATA", "" + this._type.getLabel$());
if (this._type === $I$(1).CUSTOM_COLOR ) {
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_COLOR_NAME, "CDATA", "" + $I$(3).toHTMLNotation$java_awt_Color(this._color));
}hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

C$.$static$=function(){C$.$static$=0;
C$.XML_ELEMENT_NAME="BackboneElement";
C$.XML_VAR_INDEX_NAME="index";
C$.XML_VAR_TYPE_NAME="type";
C$.XML_VAR_COLOR_NAME="color";
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.ModeleBackboneElement, "BackboneType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['label']]]

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
this.label=s;
}, 1);

Clazz.newMeth(C$, 'getLabel$', function () {
return this.label;
});

Clazz.newMeth(C$, 'getType$S', function (lbl) {
var vals=C$.values$();
for (var i=0; i < vals.length; i++) {
if (vals[i].equals$O(lbl)) return vals[i];
}
return null;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S, "SOLID_TYPE", 0, ["solid"]);
Clazz.newEnumConst($vals, C$.c$$S, "DISCONTINUOUS_TYPE", 1, ["discontinuous"]);
Clazz.newEnumConst($vals, C$.c$$S, "MISSING_PART_TYPE", 2, ["missing"]);
Clazz.newEnumConst($vals, C$.c$$S, "CUSTOM_COLOR", 3, ["custom"]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:21 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
