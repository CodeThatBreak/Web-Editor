var iFrame =document.getElementById('iFrame');
var style  =document.createElement('style');
var script = document.createElement('script');
var jqueryCDNJS = document.createElement('script');
jqueryCDNJS.setAttribute('src','https://code.jquery.com/jquery-3.5.0.js');
jqueryCDNJS.setAttribute('integrity','sha256-r/AaFHrszJtwpe+tHyNi/XCfMxYpbsRg2Uqn0x3s2zc=');
jqueryCDNJS.setAttribute('crossorigin','anonymous');

var jqueryCDNUI = document.createElement('script');
jqueryCDNUI.setAttribute('src','https://code.jquery.com/ui/1.12.1/jquery-ui.js');
jqueryCDNUI.setAttribute('integrity','sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=');
jqueryCDNUI.setAttribute('crossorigin','anonymous');

var bootstrapCDN = document.createElement('link');
bootstrapCDN.setAttribute('href','https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css');
bootstrapCDN.setAttribute('rel','stylesheet');
bootstrapCDN.setAttribute('integrity','sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh');
bootstrapCDN.setAttribute('crossorigin','anonymous');


/*
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous">
  </script>
*/
 var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.session.setMode("ace/mode/html");
  
 var editor1 = ace.edit("editor1");
    editor1.setTheme("ace/theme/monokai");
    editor1.session.setMode("ace/mode/css");

var editor2 = ace.edit("editor2");
    editor2.setTheme("ace/theme/monokai");
    editor2.session.setMode("ace/mode/javascript");    




console.log(editor1.getValue());



 editor.getSession().on('change', function() {
    
    var idoc =iFrame.contentWindow.document;
	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
    idoc.head.appendChild(bootstrapCDN);
    idoc.head.appendChild(jqueryCDNJS);
    idoc.head.appendChild(jqueryCDNUI);
 	idoc.head.appendChild(style);

  

    try{

        insertCSS();
        insertJS();
        
    }catch{



    }





});

 editor1.getSession().on('change', function() {
    
        insertCSS();
        insertJS();
});

 editor2.getSession().on('change',function(){

        insertCSS();
        insertJS();
   
 });

function insertCSS()
{
    style.innerHTML = editor1.getValue();


}

function insertJS()
{
     try{
   var str = editor2.getValue()
   str = str.replace(/'/g ,'\"')


    iFrame.contentWindow.eval(str);
    }
    catch{


    }
}


 var heightUpdateFunction = function() {

        // http://stackoverflow.com/questions/11584061/
        var newHeight =
                  editor.getSession().getScreenLength()
                  * editor.renderer.lineHeight
                  + editor.renderer.scrollBar.getWidth();

        $('#editor').height(newHeight.toString() + "px");
        $('#editor-section').height(newHeight.toString() + "px");

        // This call is required for the editor to fix all of
        // its inner structure for adapting to a change in size
        editor.resize();
    };


document.getElementById("editorContainer").addEventListener("change",function(){

    console.log('Hi');

});