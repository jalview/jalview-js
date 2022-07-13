(function(){var P$=Clazz.newPackage("jalview.io"),I$=[[0,'StringBuilder','java.io.File','jalview.io.HTMLOutput','jalview.bin.Cache','java.util.concurrent.atomic.AtomicBoolean','jalview.gui.LineartOptions','jalview.util.MessageManager','jalview.gui.OOMWarning','org.jfree.graphics2d.svg.SVGGraphics2D','org.jfree.graphics2d.svg.SVGHints','java.awt.Graphics','java.io.FileOutputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HtmlSvgOutput", null, 'jalview.io.HTMLOutput');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$jalview_gui_AlignmentPanel',  function (ap) {
;C$.superclazz.c$$jalview_gui_AlignmentPanel$S.apply(this,[ap, "HTML"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics',  function (pwidth, pheight, pi, idGraphics, alignmentGraphics) {
return this.ap.printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics(pwidth, pheight, pi, idGraphics, alignmentGraphics);
});

Clazz.newMeth(C$, 'printWrapped$I$I$I$java_awt_GraphicsA',  function (pwidth, pheight, pi, pg) {
return this.ap.printWrappedAlignment$I$I$I$java_awt_Graphics(pwidth, pheight, pi, pg[0]);
});

Clazz.newMeth(C$, 'getHtml$S$S$S$Z',  function (titleSvg, alignmentSvg, jsonData, wrapped) {
var htmlSvg=Clazz.new_($I$(1,1));
htmlSvg.append$S("<html>\n");
if (jsonData != null ) {
htmlSvg.append$S("<button onclick=\"javascipt:openJalviewUsingCurrentUrl();\">Launch in Jalview</button> &nbsp;");
htmlSvg.append$S("<input type=\"submit\" value=\"View raw BioJSON Data\" onclick=\"jQuery.facebox({ div:\'#seqData\' }); return false;\" />");
htmlSvg.append$S("<div style=\"display: none;\" name=\"seqData\" id=\"seqData\" >" + jsonData + "</div>" );
htmlSvg.append$S("<br/>&nbsp;");
}htmlSvg.append$S("\n<style type=\"text/css\"> div.parent{ width:100%;<!-- overflow: auto; -->}\ndiv.titlex{ width:11%; float: left; }\ndiv.align{ width:89%; float: right; }\ndiv.main-container{ border: 2px solid blue; border: 2px solid blue; width: 99%;   min-height: 99%; }\n.sub-category-container {overflow-y: scroll; overflow-x: hidden; width: 100%; height: 100%;}\nobject {pointer-events: none;}");
if (jsonData != null ) {
htmlSvg.append$S("#facebox { position: absolute;  top: 0;   left: 0; z-index: 100; text-align: left; }\n#facebox .popup{ position:relative; border:3px solid rgba(0,0,0,0); -webkit-border-radius:5px;-moz-border-radius:5px; border-radius:5px; -webkit-box-shadow:0 0 18px rgba(0,0,0,0.4); -moz-box-shadow:0 0 18px rgba(0,0,0,0.4);box-shadow:0 0 18px rgba(0,0,0,0.4); }\n#facebox .content { display:table; width: 98%; padding: 10px; background: #fff; -webkit-border-radius:4px; -moz-border-radius:4px; border-radius:4px; }\n#facebox .content > p:first-child{ margin-top:0; }\n#facebox .content > p:last-child{ margin-bottom:0; }\n#facebox .close{ position:absolute; top:5px; right:5px; padding:2px; background:#fff; }\n#facebox .close img{ opacity:0.3; }\n#facebox .close:hover img{ opacity:1.0; }\n#facebox .loading { text-align: center; }\n#facebox .image { text-align: center;}\n#facebox img { border: 0;  margin: 0; }\n#facebox_overlay { position: fixed; top: 0px; left: 0px; height:100%; width:100%; }\n.facebox_hide { z-index:-100; }\n.facebox_overlayBG { background-color: #000;  z-index: 99;  }");
}htmlSvg.append$S("</style>");
if (!wrapped) {
htmlSvg.append$S("<div class=\"main-container\" \n>");
htmlSvg.append$S("<div class=\"titlex\">\n");
htmlSvg.append$S("<div class=\"sub-category-container\"> \n");
htmlSvg.append$S(titleSvg);
htmlSvg.append$S("</div>");
htmlSvg.append$S("</div>\n\n<!-- ========================================================================================== -->\n\n");
htmlSvg.append$S("<div class=\"align\" >");
htmlSvg.append$S("<div class=\"sub-category-container\"> <div style=\"overflow-x: scroll;\">").append$S(alignmentSvg).append$S("</div></div>").append$S("</div>");
htmlSvg.append$S("</div>");
htmlSvg.append$S("<script language=\"JavaScript\" type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js\"></script>\n<script language=\"JavaScript\" type=\"text/javascript\"  src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n<script>\nvar subCatContainer = $(\".sub-category-container\");\nsubCatContainer.scroll(\nfunction() {\nsubCatContainer.scrollTop($(this).scrollTop());\n});\n");
htmlSvg.append$S("</script>\n");
} else {
htmlSvg.append$S("<div>\n").append$S(alignmentSvg).append$S("</div>");
htmlSvg.append$S("<script language=\"JavaScript\" type=\"text/javascript\" src=\"http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js\"></script>\n<script language=\"JavaScript\" type=\"text/javascript\"  src=\"http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js\"></script>\n");
}htmlSvg.append$S("<script language=\"JavaScript\">\n");
htmlSvg.append$S("function openJalviewUsingCurrentUrl(){\n");
htmlSvg.append$S("    var json = JSON.parse(document.getElementById(\"seqData\").innerHTML);\n");
htmlSvg.append$S("    var jalviewVersion = json[\'appSettings\'].version;\n");
htmlSvg.append$S("    var url = json[\'appSettings\'].webStartUrl;\n");
htmlSvg.append$S("    var myForm = document.createElement(\"form\");\n\n");
htmlSvg.append$S("    var heap = document.createElement(\"input\");\n");
htmlSvg.append$S("    heap.setAttribute(\"name\", \"jvm-max-heap\") ;\n");
htmlSvg.append$S("    heap.setAttribute(\"value\", \"2G\");\n\n");
htmlSvg.append$S("    var target = document.createElement(\"input\");\n");
htmlSvg.append$S("    target.setAttribute(\"name\", \"open\");\n");
htmlSvg.append$S("    target.setAttribute(\"value\", document.URL);\n\n");
htmlSvg.append$S("    var jvVersion = document.createElement(\"input\");\n");
htmlSvg.append$S("    jvVersion.setAttribute(\"name\", \"version\") ;\n");
htmlSvg.append$S("    jvVersion.setAttribute(\"value\", jalviewVersion);\n\n");
htmlSvg.append$S("    myForm.action = url;\n");
htmlSvg.append$S("    myForm.appendChild(heap);\n");
htmlSvg.append$S("    myForm.appendChild(target);\n");
htmlSvg.append$S("    myForm.appendChild(jvVersion);\n");
htmlSvg.append$S("    document.body.appendChild(myForm);\n");
htmlSvg.append$S("    myForm.submit() ;\n");
htmlSvg.append$S("    document.body.removeChild(myForm);\n");
htmlSvg.append$S("}\n");
if (jsonData != null ) {
var faceBoxJsFile=Clazz.new_($I$(2,1).c$$S,["examples/javascript/facebox-1.3.js"]);
try {
htmlSvg.append$S($I$(3).readFileAsString$java_io_File(faceBoxJsFile));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}htmlSvg.append$S("</script>\n");
htmlSvg.append$S("</html>");
return htmlSvg.toString();
});

Clazz.newMeth(C$, 'isEmbedData$',  function () {
return (Boolean.valueOf$S($I$(4).getDefault$S$S("EXPORT_EMBBED_BIOJSON", "true"))).valueOf();
});

Clazz.newMeth(C$, 'isLaunchInBrowserAfterExport$',  function () {
return true;
});

Clazz.newMeth(C$, 'run$',  function () {
try {
var renderStyle=$I$(4).getDefault$S$S("HTML_RENDERING", "Prompt each time");
var textOption=Clazz.new_([!"Lineart".equals$O(renderStyle)],$I$(5,1).c$$Z);
var okAction=((P$.HtmlSvgOutput$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HtmlSvgOutput$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.io.HtmlSvgOutput'].doOutput$Z.apply(this.b$['jalview.io.HtmlSvgOutput'], [this.$finals$.textOption.get$()]);
});
})()
), Clazz.new_(P$.HtmlSvgOutput$1.$init$,[this, {textOption:textOption}]));
if (renderStyle.equalsIgnoreCase$S("Prompt each time") && !this.isHeadless$() ) {
var svgOption=Clazz.new_($I$(6,1).c$$S$java_util_concurrent_atomic_AtomicBoolean,["HTML", textOption]);
svgOption.setResponseAction$O$Runnable(Integer.valueOf$I(1), ((P$.HtmlSvgOutput$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "HtmlSvgOutput$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['jalview.io.HTMLOutput'].setProgressMessage$S.apply(this.b$['jalview.io.HTMLOutput'], [$I$(7,"formatMessage$S$OA",["status.cancelled_image_export_operation", Clazz.array(java.lang.Object, -1, [this.b$['jalview.io.HTMLOutput'].getDescription$.apply(this.b$['jalview.io.HTMLOutput'], [])])])]);
});
})()
), Clazz.new_(P$.HtmlSvgOutput$2.$init$,[this, null])));
svgOption.setResponseAction$O$Runnable(Integer.valueOf$I(0), okAction);
svgOption.showDialog$();
} else {
this.doOutput$Z(textOption.get$());
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"OutOfMemoryError")){
var err = e$$;
{
System.out.println$S("########################\nOUT OF MEMORY " + this.generatedFile + "\n" + "########################" );
Clazz.new_($I$(8,1).c$$S$OutOfMemoryError,["Creating Image for " + this.generatedFile, err]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
e.printStackTrace$();
this.setProgressMessage$S($I$(7,"formatMessage$S$OA",["info.error_creating_file", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'doOutput$Z',  function (textCharacters) {
try {
var aDimension=this.ap.getAlignmentDimension$();
var idPanelGraphics=Clazz.new_([aDimension.getWidth$(), aDimension.getHeight$()],$I$(9,1).c$$I$I);
var alignPanelGraphics=Clazz.new_([aDimension.getWidth$(), aDimension.getHeight$()],$I$(9,1).c$$I$I);
if (!textCharacters) {
idPanelGraphics.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_DRAW_STRING_TYPE, $I$(10).VALUE_DRAW_STRING_TYPE_VECTOR);
alignPanelGraphics.setRenderingHint$java_awt_RenderingHints_Key$O($I$(10).KEY_DRAW_STRING_TYPE, $I$(10).VALUE_DRAW_STRING_TYPE_VECTOR);
}if (this.ap.av.getWrapAlignment$()) {
this.printWrapped$I$I$I$java_awt_GraphicsA(aDimension.getWidth$(), aDimension.getHeight$(), 0, Clazz.array($I$(11), -1, [alignPanelGraphics]));
} else {
this.printUnwrapped$I$I$I$java_awt_Graphics$java_awt_Graphics(aDimension.getWidth$(), aDimension.getHeight$(), 0, idPanelGraphics, alignPanelGraphics);
}var idPanelSvgData=idPanelGraphics.getSVGDocument$();
var alignPanelSvgData=alignPanelGraphics.getSVGDocument$();
var jsonData=this.getBioJSONData$();
var htmlData=this.getHtml$S$S$S$Z(idPanelSvgData, alignPanelSvgData, jsonData, this.ap.av.getWrapAlignment$());
var out=Clazz.new_($I$(12,1).c$$java_io_File,[this.generatedFile]);
out.write$BA(htmlData.getBytes$());
out.flush$();
out.close$();
this.setProgressMessage$S($I$(7,"formatMessage$S$OA",["status.export_complete", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
this.exportCompleted$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
this.setProgressMessage$S($I$(7,"formatMessage$S$OA",["info.error_creating_file", Clazz.array(java.lang.Object, -1, [this.getDescription$()])]));
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v1');//Created 2022-07-13 14:45:37 Java2ScriptVisitor version 3.3.1-v1 net.sf.j2s.core.jar version 3.3.1-v1
