(function(){var P$=Clazz.newPackage("fr.orsay.lri.varna.models.rna"),I$=[[0,'org.xml.sax.helpers.AttributesImpl',['java.awt.geom.Point2D','.Double']]],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VARNAPoint", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.x=0.0;
this.y=0.0;
},1);

C$.$fields$=[['D',['x','y']]
,['S',['XML_ELEMENT_NAME','XML_VAR_ROLE_NAME','XML_VAR_X_NAME','XML_VAR_Y_NAME']]]

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler', function (hd) {
this.toXML$javax_xml_transform_sax_TransformerHandler$S(hd, "");
});

Clazz.newMeth(C$, 'toXML$javax_xml_transform_sax_TransformerHandler$S', function (hd, role) {
var atts=Clazz.new_($I$(1,1));
if (!role.equals$O("")) {
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_ROLE_NAME, "CDATA", "" + role);
}atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_X_NAME, "CDATA", "" + new Double(this.x).toString());
atts.addAttribute$S$S$S$S$S("", "", C$.XML_VAR_Y_NAME, "CDATA", "" + new Double(this.y).toString());
hd.startElement$S$S$S$org_xml_sax_Attributes("", "", C$.XML_ELEMENT_NAME, atts);
hd.endElement$S$S$S("", "", C$.XML_ELEMENT_NAME);
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$D$D.apply(this, [0.0, 0.0]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (px, py) {
;C$.$init$.apply(this);
this.x=px;
this.y=py;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D_Double', function (p) {
C$.c$$D$D.apply(this, [p.x, p.y]);
}, 1);

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'toPoint2D$', function () {
return Clazz.new_($I$(2,1).c$$D$D,[this.x, this.y]);
});

Clazz.newMeth(C$, 'toString', function () {
return "(" + new Double(this.x).toString() + "," + new Double(this.y).toString() + ")" ;
});

C$.$static$=function(){C$.$static$=0;
C$.XML_ELEMENT_NAME="p";
C$.XML_VAR_ROLE_NAME="r";
C$.XML_VAR_X_NAME="x";
C$.XML_VAR_Y_NAME="y";
};
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-03-23 09:06:22 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
