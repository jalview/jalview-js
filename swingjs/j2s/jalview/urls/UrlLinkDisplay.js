(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[[0,'jalview.util.MessageManager','java.util.ArrayList','jalview.util.UrlLink']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "UrlLinkDisplay");
C$.COLNAMES=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.COLNAMES=((P$.UrlLinkDisplay$1||
(function(){var C$=Clazz.newClass(P$, "UrlLinkDisplay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.ArrayList'), null, 1);

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init$', function () {
{
this.add$TE($I$(1).formatMessage$S$OA("label.database", []));
this.add$TE($I$(1).formatMessage$S$OA("label.name", []));
this.add$TE($I$(1).formatMessage$S$OA("label.url", []));
this.add$TE($I$(1).formatMessage$S$OA("label.inmenu", []));
this.add$TE($I$(1).formatMessage$S$OA("label.primary", []));
this.add$TE($I$(1).formatMessage$S$OA("label.id", []));
}
}, 1);
})()
), Clazz.new_($I$(2), [this, null],P$.UrlLinkDisplay$1));
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.id=null;
this.isPrimary=false;
this.isSelected=false;
this.link=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$jalview_util_UrlLink$Z$Z', function (rowId, rowLink, rowSelected, rowDefault) {
C$.$init$.apply(this);
this.id=rowId;
this.isPrimary=rowDefault;
this.isSelected=rowSelected;
this.link=rowLink;
}, 1);

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return this.link.getLabel$();
});

Clazz.newMeth(C$, 'getDBName$', function () {
return this.link.getTarget$();
});

Clazz.newMeth(C$, 'getUrl$', function () {
return this.link.getUrlWithToken$();
});

Clazz.newMeth(C$, 'getIsPrimary$', function () {
return this.isPrimary;
});

Clazz.newMeth(C$, 'getIsSelected$', function () {
return this.isSelected;
});

Clazz.newMeth(C$, 'setDBName$S', function (name) {
this.link.setTarget$S(name);
});

Clazz.newMeth(C$, 'setUrl$S', function (rowUrl) {
this.link=Clazz.new_($I$(3).c$$S$S$S,[this.getDescription$(), rowUrl, this.getDBName$()]);
});

Clazz.newMeth(C$, 'setDescription$S', function (desc) {
this.link.setLabel$S(desc);
});

Clazz.newMeth(C$, 'setIsDefault$Z', function (rowDefault) {
this.isPrimary=rowDefault;
});

Clazz.newMeth(C$, 'setIsSelected$Z', function (rowSelected) {
this.isSelected=rowSelected;
});

Clazz.newMeth(C$, 'getValue$I', function (index) {
switch (index) {
case 5:
return this.id;
case 2:
return this.getUrl$();
case 4:
return new Boolean(this.isPrimary);
case 3:
return new Boolean(this.isSelected);
case 1:
return this.getDescription$();
case 0:
return this.getDBName$();
default:
return null;
}
});

Clazz.newMeth(C$, 'setValue$I$O', function (index, value) {
switch (index) {
case 5:
this.id=value;
break;
case 2:
this.setUrl$S(value);
break;
case 4:
this.isPrimary=(value).objectValue$();
break;
case 3:
this.isSelected=(value).objectValue$();
break;
case 1:
this.setDescription$S(value);
case 0:
this.setDBName$S(value);
break;
default:
}
});

Clazz.newMeth(C$, 'isEditable$I', function (index) {
if (index == 4) {
return (!this.link.usesDBAccession$());
} else {
return index == 3;
}});

Clazz.newMeth(C$, 'getDisplayColumnNames$', function () {
return C$.COLNAMES.subList$I$I(0, 5);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.4.07');//Created 2019-05-24 12:54:17 Java2ScriptVisitor version 3.2.4.07 net.sf.j2s.core.jar version 3.2.4.07
