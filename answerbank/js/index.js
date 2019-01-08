$( function() {
    var availableTags = [
      "ADD AN OPTION: <input type='text' class='form-control'>",
      "N/A",
      "Below Average / Low - eat some sugar",
      "Average - Continue as normal with sugar",
      "Above Average - Cut down on sugar a little",
      "Through the Roof - Woah man, calma on the cookies.",
      "Unrelated option one or two",
      "Lorem ipsum dolor sit amet",
      "Consectitur adipscing elit",
      "<a href='http://google.com' target='_blank' class='category-Herbs'>This is a working link</a>",
      "Some huge body of text is written here just to show how it appears and is filtered yay"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
} );

function copy() { 
document.getElementById("patientName").innerHTML=document.getElementById("ptntName").value,
document.getElementById("ptntId").innerHTML="12345",
document.getElementById("healthScore").innerHTML=document.getElementById("hlthScore").value,
document.getElementById("lastTest").innerHTML=document.getElementById("latestTest").value,
document.getElementById("bloodOut").innerHTML=document.getElementById("tags").value,
document.getElementById("triOut").innerHTML=document.getElementById("triLevels").value,
document.getElementById("igfOut").innerHTML=document.getElementById("igfLevels").value,
document.getElementById("kidneyOut").innerHTML=document.getElementById("kidneyFctn").value,
document.getElementById("elminOut").innerHTML=document.getElementById("elminLevels").value,
document.getElementById("magOut").innerHTML=document.getElementById("magLevels").value,
document.getElementById("adrenalOut").innerHTML=document.getElementById("adrenalScore").value,
document.getElementById("biomOut").innerHTML=document.getElementById("bioMs").value;
};

var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

function Export2Doc(element, filename = ''){
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;

    var blob = new Blob(['\ufeff', html], {
        type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.docx';
    
    // Create download link element
    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
        navigator.msSaveOrOpenBlob(blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = url;
        
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
};