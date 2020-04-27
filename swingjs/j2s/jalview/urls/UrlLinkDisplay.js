(function(){var P$=Clazz.newPackage("jalview.urls"),I$=[[0,'jalview.util.MessageManager','java.util.ArrayList','jalview.util.UrlLink']],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UrlLinkDisplay");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isPrimary','isSelected'],'S',['id'],'O',['link','jalview.util.UrlLink']]
,['O',['COLNAMES','java.util.List']]]

Clazz.newMeth(C$, 'c$$S$jalview_util_UrlLink$Z$Z', function (rowId, rowLink, rowSelected, rowDefault) {
;C$.$init$.apply(this);
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
this.link=Clazz.new_([this.getDescription$(), rowUrl, this.getDBName$()],$I$(3,1).c$$S$S$S);
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
this.isPrimary=(value).valueOf();
break;
case 3:
this.isSelected=(value).valueOf();
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

C$.$static$=function(){C$.$static$=0;
C$.COLNAMES=((P$.UrlLinkDisplay$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "UrlLinkDisplay$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.ArrayList'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
{
this.add$O($I$(1).formatMessage$S$OA("label.database", []));
this.add$O($I$(1).formatMessage$S$OA("label.name", []));
this.add$O($I$(1).formatMessage$S$OA("label.url", []));
this.add$O($I$(1).formatMessage$S$OA("label.inmenu", []));
this.add$O($I$(1).formatMessage$S$OA("label.primary", []));
this.add$O($I$(1).formatMessage$S$OA("label.id", []));
}
},1);
})()
), Clazz.new_($I$(2,1),[this, null],P$.UrlLinkDisplay$1));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.9-v1');//Created 2020-04-23 11:21:01 Java2ScriptVisitor version 3.2.9-v1 net.sf.j2s.core.jar version 3.2.9-v1
