'use strict';define(['jquery'],function($){return function EditController(){var OXYGEN='https://www.oxygenxml.com/webapp-demo-aws/app/oxygen.html';var PROJECT_BASE='github://getFileContent/dita-ot/docs/';var PROJECT_MAP='userguide-book.ditamap';var PROJECT_BRANCH='develop';return {createEditLink:createEditLink};function createEditLink(){var $link=$('#editLink');if(location.pathname.indexOf('/dev/')!=-1&&$('.generated').length===0){var url=void 0;if(document.querySelector('.generated')){url=getEditURL(PROJECT_BRANCH,PROJECT_MAP);}else {var htmlURL=location.pathname.substring(location.pathname.indexOf('/dev/'));var file=htmlURL.endsWith('.html')?htmlURL.slice('/dev/'.length,htmlURL.length-'.html'.length)+'.dita':htmlURL.slice('/dev/'.length,htmlURL.length)+'index.dita';if(file.indexOf('/first-build-')!=-1){file=file.replace('first-build-','');}if(file.indexOf('/build-')!=-1){file=file.replace('build-','');}url=getEditURL(PROJECT_BRANCH,file,PROJECT_MAP);}if($link.length===0){$link=$('<a id="editLink" target="_blank" title="Edit this file"><span class="glyphicon glyphicon-pencil"></span> Edit this page.</a>');$('footer > .container').append($link);}$link.attr('href',url);}else {$link.remove();}}function getEditURL(branch,file,map){var url=OXYGEN+'?url='+encodeURIComponent(PROJECT_BASE+branch+'/'+file);if(!!map){url=url+'&ditamap='+encodeURIComponent(PROJECT_BASE+branch+'/'+map);}return url;}};});