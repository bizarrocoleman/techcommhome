window.locale={"en-US":{generic:{ContentSave:"Content saved.",confirmDeleteButton:"Confirm",cancelButtonText:"Cancel",placeHolderFontSearch:"Search font"},confirmDeleteSlideTitle:"Delete page",confirmDeleteSlideDesc:"Are you sure you want to delete this page? This action can't be undone.",text:{mTitle:"<span>Double click to edit me</span>",mSubTitle:"<span>Double click to edit me</span>",mParagraph:"<span>Double click to edit me. Double click to edit me. Double click to edit me. Double click to edit me. Double click to edit me. Double click to edit me.</span>",mListEnum:'<span><ul style="list-style-type:decimal;"><li>Double click to edit me</li><li>Double click to edit me</li></ul></span>',mListPoint:"<span><ul><li>Double click to edit me</li><li>Double click to edit me</li></ul></span>"},"delete":{confirmButtonText:"Yes, delete",titleConfirmDelete:"Are you sure you want to delete this item?",textConfirmDelete:"This action can't be undone.",designLayersDeleteAllTitle:"DELETE AL ELEMENTS",designLayersDeleteAllContent:"This will delete ALL ELEMENTS in the CANVAS and CANNOT BE UNDONE!",designLayersDeleteAllConfirm:"PROCEED",designLayersDeleteAllCancel:"CANCEL"},error:{image:"Oops! This image type is not supported. Please try with other or try again. Thanks!",message:"Oops! Something went wrong. Check your internet connection. You can try to reload the page (F5).",reload:"Ok",timeoutTitle:"Connectivity issues",timeoutDescription:"Your connection seems to be very slow. Please take a look at it. We don't recommend to be working with this connection issues. Your changes may not be auto-saved.",timeoutButton:"Acknowledge"},update:{message:"We recommend that you upgrade your browser for a proper use of Genially.",IE:"We recommend that you use Chrome, Firefox or Safari for a proper use of Genially."},custom:{noResults:"No results matched {0}"},image:{titleImageTooBig:"Image too big",textImageTooBig:"This image file size is too large to upload (Max. 5 Mb). Please select another one.",textImageTooBigSome:"Some image file size is too large to upload (Max. 5 Mb). Please select another one.",confirmButtonText:"Ok",dragMe:"Drag me to the workspace or make double click",invalid:"Invalid image"},saved:{message:"Hi! Remember all changes are auto saved."},slide:{duplicate:"Duplicate page",remove:"Remove page"},spectrum:{choose:"Choose",cancel:"Cancel"},design:{"delete":"Remove element",interactivity:"Show interactivity",hideAndShow:"Hide/Show element",lock:"Block element"},settings:{logoUpdated:"Logotype Updated!",watermarkUpdated:"Watermark Updated!"}},"es-ES":{generic:{ContentSave:"Contenido guardado.",confirmDeleteButton:"Confirmar",cancelButtonText:"Cancelar",placeHolderFontSearch:"Buscar tipografía"},confirmDeleteSlideTitle:"Eliminar página",confirmDeleteSlideDesc:"¿Confirmas que quieres eliminar esta página? Esta acción no puede deshacerse.",text:{mTitle:"<span>Doble clic para editarme</span>",mSubTitle:"<span>Doble clic para editarme</span>",mParagraph:"<span>Doble clic para editarme. Doble clic para editarme. Doble clic para editarme. Doble clic para editarme. Doble clic para editarme. Doble clic para editarme.</span>",mListEnum:'<span><ul style="list-style-type:decimal;"><li>Doble clic para editarme</li><li>Doble clic para editarme</li></ul></span>',mListPoint:"<span><ul><li>Doble clic para editarme</li><li>Doble clic para editarme</li></ul></span>"},"delete":{confirmButtonText:"Sí, eliminar",titleConfirmDelete:"¿Confirmas que quieres eliminar este item?",textConfirmDelete:"Está acción no puede deshacerse.",designLayersDeleteAllTitle:"BORRAR TODOS LOS ELEMENTOS",designLayersDeleteAllContent:"¡Esto BORRARÁ todos los ELEMENTOS del LIENZO y NO SE PUEDE DESHACER!",designLayersDeleteAllConfirm:"PROCEDER",designLayersDeleteAllCancel:"CANCELAR"},error:{image:"¡Ups! El formato de la imagen no es válido. Inténtalo de nuevo o prueba con otra imagen. ¡¡Gracias!!",message:"¡Ups! Parece que ha habido un error. Revisa tu conexión a internet. Prueba a recargar la página (F5).",reload:"Ok",timeoutTitle:"Problemas de conexión",timeoutDescription:"Parece que la conexión a internet va muy lenta. Te recomendamos no trabajar con estos problemas de conexión, ya que tu trabajo puede no ser guardado de forma automática.",timeoutButton:"Lo entiendo"},update:{message:"Para un correcto funcionamiento de Genially, por favor actualiza tu navegador.",IE:"Para un correcto funcionamiento de Genially, por favor usa Chrome, Firefox o Safari como navegador"},custom:{noResults:"Sin resultados {0}"},image:{titleImageTooBig:"Imagen demasiado grande",textImageTooBig:"El tamaño de la imagen que intentas subir es demasiado grande. Por favor selecciona otra (máximo 5 Mb).",textImageTooBigSome:"El tamaño de alguna de las imagenes que intentas subir es demasiado grande. Por favor selecciona otra (máximo 5 Mb).",confirmButtonText:"Ok",dragMe:"Arrástrame al área de trabajo o haz doble clic",invalid:"Imagen no válida"},saved:{message:"¡Hola! Recuerda que los cambios que realices se guardarán automaticamente."},slide:{duplicate:"Duplicar página",remove:"Eliminar página"},spectrum:{choose:"Seleccionar",cancel:"Cancelar"},design:{"delete":"Eliminar elemento",interactivity:"Mostrar interactividad",hideAndShow:"Mostrar/Ocultar elemento",lock:"Bloquear elemento"},settings:{logoUpdated:"¡Logotipo Actualizado!",watermarkUpdated:"¡Marca de agua Actualizada!"}}},String.prototype.contains=function(e){return this.indexOf(e)!==-1};var cookieHandler=function(){function e(e,t,o,i){if(a)return a[e];for(t=document.cookie.split("; "),a={},i=t.length-1;i>=0;i--)o=t[i].split("="),a[o[0]]=o[1];return a[e]}var a;return{readCookie:e}}(),theCookie=cookieHandler.readCookie("_cultureLocalizationGeniallyV2"),language;void 0!==theCookie?language=theCookie.contains("es")?"es-ES":(theCookie.contains("en"),"en-US"):(navigatorLanguage=navigator.language?navigator.language:navigator.userLanguage,language=navigatorLanguage.contains("es")?"es-ES":"en-US");var locale=window.locale[language];