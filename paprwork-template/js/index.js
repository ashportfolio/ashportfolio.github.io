$( function() {
    var remindersTags = [
      "Intake Form: Please <a href='#'>click here</a> to complete your online health assessment before our next consultation. This information is crucial to your success with this program."
    ];
    $( "#reminders-tags" ).autocomplete({
      source: remindersTags
    });

    var prioritiesTags = [
      "<b>Increase your water intake.</b><br><p>Drink half your body weight in filtered water daily (ie. 160 lbs = 80 oz water), or 1 liter for every 30 kg of body weight (ie. 90 kg = 3 liters water).</p>",
      "<b>Eliminate all gluten in your diet for 14 days.</b><br><p>Gluten is found in all wheat, barley, bulgur, rye, spelt, oats (unless gluten-free), kamut, triticale, semolina, pumpernickel, and farro. Gluten is not found in rice, buckwheat, teff, amaranth, quinoa, corn, hominy, and millet.<br>Learn more from <a href='https://www.precisionnutrition.com/all-about-gluten'>All About Gluten</a> from Precision Nutrition</p>",
      "<b>Start intermittent fasting</b><br><p>Reduce your daily eating window to 6-8 hours, followed by a 16-18 hour fast (water and herbal tea allowed during fasting only).<br>Learn more about <a href='https://www.precisionnutrition.com/intermittent-fasting'>Intermittent Fasting</a> from Precision Nutrition</p>"
    ];
    $( "#priorities-tags" ).autocomplete({
      source: prioritiesTags
    });

    var resourcesTags = [
      "<b>Drink water that is free from chlorine and fluoride.</b> Both disrupt hormone balance and the endocrine system.<p>First, check the purity of your tap water to see if it contains fluoride - <a href=''>start here</a>.</p><p>For a high quality affordable water and shower filter I recommend Multipure - <a href=''>view here</a>.</p><p>FYI - Reverse osmosis water filters are the only type that remove fluoride from drinking water.</p>",
      "Read <a href='http://paprwork.app/small/amzn-1234'>It Starts With Food</a> By Dallas and Melissa Hartwig."
    ];
    $( "#resources-tags" ).autocomplete({
      source: resourcesTags
    });

    var goalsTags = [
      "Improve brain function and increase daily motivation, focus, memory, and productivity.",
      "Increase daily energy and stamina.",
      "Support optimal health and function. Reduce risk of chronic disease. Increase longevity."
    ];
    $( "#goals-tags" ).autocomplete({
      source: goalsTags
    });

    var supplements1Tags = [
        "Supplement Number One - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Two - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Three - <a href='#'>Affiliate Link here</a>"
      ];
      $( "#supplements1-tags" ).autocomplete({
        source: supplements1Tags
    });

    var supplements2Tags = [
        "Supplement Number One - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Two - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Three - <a href='#'>Affiliate Link here</a>"
      ];
      $( "#supplements2-tags" ).autocomplete({
        source: supplements2Tags
    });

    var supplements3Tags = [
        "Supplement Number One - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Two - <a href='#'>Affiliate Link here</a>",
        "Supplement Number Three - <a href='#'>Affiliate Link here</a>"
      ];
      $( "#supplements3-tags" ).autocomplete({
        source: supplements3Tags
    });

    var supplements4Tags = [
        "<h5><b>Your plan has been added to <a href='#'>Fullscript</a>.</b></h5><p>Fullscript offers professional-grade supplements with a 10% discount with free shipping. You will receive a notification email from Fullscript shortly with your recommended products.</p>",
        "<h5><b>Order your supplements with <a href='#'>Amrita Nutrition</a>.</b></h5><p>You will receive a notification email from Amrita shortly with your recommended products. Use the link in the email to login and you will receive a 10% discount on all orders.</p>",
        "<h5><b>Order your supplements with <a href='#'>iHerb</a>.</b></h5><p>Click this link to easily add your recommended products to your shopping cart. Tip - Separate orders to keep the total cost < $80 per shipment to prevent issues with customs or duty fees.</p>"
      ];
      $( "#supplements4-tags" ).autocomplete({
        source: supplements4Tags
    });

    var medicationsTags = [
        "No daily medications",
        "Baby Aspirin - 81 mg daily for cardiovascular prevention."
      ];
      $( "#medications-tags" ).autocomplete({
        source: medicationsTags
    });

    var habitsTags = [
      "<b>Floss daily for gum, digestive, and heart health.</b> The health of your teeth and gums directly impacts your chronic disease risk. <a href='#'>Click here</a> to read the blog interview that I did with my favorite dentist on the correct technique (most people are doing it wrong!). </p>",
      "<b>Drink water that is free from chlorine and fluoride.</b> Both disrupt hormone balance and the endocrine system.</p><p>First, check the purity of your tap water to see if it contains fluoride - <a href=''>start here</a>.</p><p>For a high quality affordable water and shower filter I recommend Multipure - <a href=''>view here</a>.</p><p>FYI - Reverse osmosis water filters are the only type that remove fluoride from drinking water.</p>",
      ];
      $( "#habits-tags" ).autocomplete({
        source: habitsTags
    });

    var screeningsTags = [
        "<a href='#linkOne'>click here</a>.",
        "<a href='#linkTwo'>click here</a>.",
        "<a href='#linkThree'>click here</a>.",
        "<a href='#linkFour'>click here</a>."
      ];
      $( "#screenings-tags" ).autocomplete({
        source: screeningsTags
    });

    var biomarkersTags = [
        "Biomarker Number two",
        "Biomarker linkThree",
        "Something special",
        "General overall awesomeness"
      ];
      $( "#biomarkers-tags" ).autocomplete({
        source: biomarkersTags
    });

} );

function copy() { 
document.getElementById("PatientName").innerHTML=document.getElementById("ptntName").value,
document.getElementById("currentDate").innerHTML=document.getElementById("crrntDate").value,
document.getElementById("PatientMessage-1").innerHTML=document.getElementById("ptntMsg-1").value,
document.getElementById("PatientMessage-2").innerHTML=document.getElementById("ptntMsg-2").value,
document.getElementById("PatientMessage-3").innerHTML=document.getElementById("ptntMsg-3").value,
document.getElementById("PatientMessage-4").innerHTML=document.getElementById("ptntMsg-4").value,
document.getElementById("PatientMessage-5").innerHTML=document.getElementById("ptntMsg-5").value,
document.getElementById("remindersOut").innerHTML=document.getElementById("reminders-tags").value,
document.getElementById("prioritiesOut").innerHTML=document.getElementById("priorities-tags").value,
document.getElementById("resourcesOut").innerHTML=document.getElementById("resources-tags").value,
document.getElementById("goalsOut").innerHTML=document.getElementById("goals-tags").value,
document.getElementById("supplementsOut1").innerHTML=document.getElementById("supplements1-tags").value,
document.getElementById("supplementsOut2").innerHTML=document.getElementById("supplements2-tags").value,
document.getElementById("supplementsOut3").innerHTML=document.getElementById("supplements3-tags").value,
document.getElementById("supplementsOut4").innerHTML=document.getElementById("supplements4-tags").value,
document.getElementById("medicationsOut").innerHTML=document.getElementById("medications-tags").value,
document.getElementById("habitsOut").innerHTML=document.getElementById("habits-tags").value,
document.getElementById("screeningsOut").innerHTML=document.getElementById("screenings-tags").value,
document.getElementById("biomOut").innerHTML=document.getElementById("biomarkers-tags").value;
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