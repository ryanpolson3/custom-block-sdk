export default function template(data){
  return `
  <script runat="server">
  Platform.Load("Core", "1");
  HTTPHeader.SetValue("Access-Control-Allow-Methods","POST");
  HTTPHeader.SetValue("Access-Control-Allow-Origin","*");
  try {
</script>
<!--%%[
VAR @data_extension, @email, @firstName, @lastName, @phone, @company, @jobTitle, @city, @state, @zipCode, @fpAccountNumber, @fpNews, @fpTextAlerts, @createdDate, @srcCampaign, @srcLandingPage, @botCheck, @submit, @createdDate, @modifiedDate, @rows, @rowCount, @rowCountDE, @row, @subscribeToFleetPrideNews, @subscribeToTextAlerts

SET @submit = RequestParameter('submit')

IF @submit == 'submit' THEN
    
    /* SETS VALUES FROM THE SUBMITTION OF THE FORM */
    SET @modifiedDate = Now()
    SET @modifiedDate = format(@modifiedDate,"MM/dd/yyyy h:mm tt")
    SET @data_extension = '${data.dataExtension}'
    SET @email = RequestParameter('Email Address')
    SET @firstName = RequestParameter('First Name')
    SET @lastName = RequestParameter('Last Name')
    SET @phone = RequestParameter('Primary Phone')
    SET @company = RequestParameter('Company')
    SET @jobTitle = RequestParameter('Job Title')
    SET @city = RequestParameter('City')
    SET @state = RequestParameter('State')
    SET @zipCode = RequestParameter('Zip Code')
    SET @fpAccountNumber = RequestParameter('FleetPride Account Number')
    SET @srcCampaign = '${data.sourceCampaign}'
    SET @srcLandingPage = '${data.sourceLandingPage}'
    SET @botCheck = 'Verified'
    SET @fpNews = RequestParameter('Subscribe to FleetPride News')
    SET @fpTextAlerts = RequestParameter('Subscribe to Text Alerts')
    
    
    /* DOES A LOOKUP ON THE CURRENT ROW RETURNED */
    /* CHECKS DATA EXTENSION TO SEE IF EITHER CHECKBOX COLUMN IS ALREADY TRUE */
    /* IF BOOLEAN IN DATA EXTENSION IS TRUE (This is another submittion) LEAVE VALUE AS TRUE EVEN IF CHECKBOX IN FORM IS SET TO FALSE ON SUBMITTION */
    SET @rows = LookupOrderedRows(@data_extension, 0, "First Name, Last Name, Subscribe to FleetPride News, Subscribe to Text Alerts", "Email Address", @email, "Source Campaign", @srcCampaign, "Source Landing Page", @srcLandingPage)
    SET @rowCount = rowcount(@rows)
    
    IF @rowCount > 0 THEN   
        
        VAR @emailAddress, @FN, @LN, @sourceCampaign, @sourceLandingPage, @fleetPrideNews, @fleetPrideTextAlerts
        
        SET @row = row(@rows, 1)
        SET @emailAddress = Field(@row, "Email Address")
        SET @FN = Field(@row, "First Name")
        SET @LN = Field(@row, "Last Name")
        SET @sourceCampaign = Field(@row, "Source Campaign")
        SET @sourceLandingPage = Field(@row, "Source Landing Page")
        SET @fleetPrideNews = Field(@row, "Subscribe to FleetPride News")
        SET @fleetPrideTextAlerts = Field(@row, "Subscribe to Text Alerts")
        
        
        IF @fpNews == False THEN
          SET @fpNews = FIELD(@row, "Subscribe to FleetPride News")
        ENDIF

        IF @fpTextAlerts == False THEN
          SET @fpTextAlerts = FIELD(@row, "Subscribe to Text Alerts")
        ENDIF
      
    ENDIF
    
    /* PUSHES DATA TO DATA EXTENSION */
    UpsertData(
        @data_extension, 3,
        'Email Address', @email, 
        'Source Campaign', @srcCampaign,
        'Source Landing Page', @srcLandingPage,
        'First Name', @firstName, 
        'Last Name', @lastName,
        'Primary Phone', @phone,
        'Company', @company,
        'Job Title', @jobTitle,
        'City', @city,
        'State', @state,
        'Zip Code', @zipCode,
        'FleetPride Account Number', @fpAccountNumber,
        'Subscribe to FleetPride News', @fpNews,
        'Subscribe to Text Alerts', @fpTextAlerts,
        'Modified Date', @modifiedDate,
        'Bot Check', @botCheck,
     ) 

    /* NEWS CHECK */

    /* DOES A LOOKUP TO GATHER ALL ROWS WITH THE SAME EMAIL */
    /* CHANGE CHECKBOX BOOLEAN VALUE TO TRUE OF EITHER CHECKBOX COLUMN IF ANY OF THE ROWS OF EACH COLUMN ALREADY HAVE A TRUE VALUE */
    /* THIS IS DONE SO SOMEONE WHO HAS FILLED OUT A FORM MULTIPLE TIMES STAYS SUBSCRIBED TO NEWS OR ALERTS IF ALREADY SUBSCRIBED */
    
    SET @rows = LookupOrderedRows(@data_extension, 0, "Subscribe to FleetPride News", "Email Address", @email, "Subscribe to FleetPride News", "True")
    
    SET @rowCount = rowcount(@rows)
    
    IF @rowCount > 0 THEN 
      
        VAR @emailAddress, @sourceLandingPage, @FN, @LN, @fleetPrideNews

        SET @row = row(@rows, 1)
        SET @newsTrue = True
        SET @emailAddress = Field(@row, "Email Address")
        SET @sourceLandingPage = Field(@row, "Source Landing Page")
        SET @FName = Field(@row, "First Name")
        SET @LName = Field(@row, "Last Name")
        SET @fleetPrideNews = Field(@row, "Subscribe to FleetPride News")
        
      
]%%-->

<!--<p style="font-size:12px;">Row: %%=v(@i)=%% | Email: %%=v(@emailAddress)=%% | Landing Page: %%=v(@sourceLandingPage)=%% | FirstName: %%=v(@FName)=%% | LastName: %%=v(@LName)=%% | News: %%=v(@fleetPrideNews)=%%</p>
<br><br>-->
 
<!--%%[
    ELSE
]%%-->

    <!--No TRUE rows found for news-->

<!--%%[
    ENDIF
]%%-->

<!--%%[

    IF @newsTrue == True THEN
    
      SET @rows = LookupOrderedRows(@data_extension, 0, "Subscribe to FleetPride News", "Email Address", @email, "Subscribe to FleetPride News", "False")

      SET @rowCount = rowcount(@rows)

      IF @rowCount > 0 THEN 
        FOR @i = 1 to @rowCount DO

          VAR @EM, @SLP, @FN, @LN, @FPN, @rowsUpdated

          SET @row = row(@rows, @i)
          SET @EM = Field(@row, "Email Address")
          SET @SLP = Field(@row, "Source Landing Page")
          SET @FN = Field(@row, "First Name")
          SET @LN = Field(@row, "Last Name")
          SET @FPN = Field(@row, "Subscribe to FleetPride News")
          
          @rowsUpdated = UpdateData("Test_LP_GeneralForm_Display", 1, "Email Address", @EM, "Subscribe to FleetPride News", "True")
]%%-->

<!--<p style="font-size:12px;">Row: %%=v(@i)=%% | Email: %%=v(@EM)=%% | Landing Page: %%=v(@SLP)=%% | FirstName: %%=v(@FN)=%% | LastName: %%=v(@LN)=%% | News: %%=v(@FPN)=%%</p>
<br><br>-->

<!--%%[
         NEXT @i
       ELSE
]%%-->

       <!--No FALSE rows found for news-->

<!--%%[   
       ENDIF
     ENDIF
     
    /* ALERTS CHECK */
    
    /* DOES A LOOKUP TO GATHER ALL ROWS WITH THE SAME EMAIL */
    /* CHANGE CHECKBOX BOOLEAN VALUE TO TRUE OF EITHER CHECKBOX COLUMN IF ANY OF THE ROWS OF EACH COLUMN ALREADY HAVE A TRUE VALUE */
    /* THIS IS DONE SO SOMEONE WHO HAS FILLED OUT A FORM MULTIPLE TIMES STAYS SUBSCRIBED TO NEWS OR ALERTS IF ALREADY SUBSCRIBED */
    
    SET @rows = LookupOrderedRows(@data_extension, 0, "Subscribe to Text Alerts", "Email Address", @email, "Subscribe to Text Alerts", "True")
    
    SET @rowCount = rowcount(@rows)
    
    IF @rowCount > 0 THEN 
      
        VAR @emailAddress, @sourceLandingPage, @FN, @LN, @fleetPrideAlerts

        SET @row = row(@rows, 1)
        SET @alertsTrue = True
        SET @emailAddress = Field(@row, "Email Address")
        SET @sourceLandingPage = Field(@row, "Source Landing Page")
        SET @FName = Field(@row, "First Name")
        SET @LName = Field(@row, "Last Name")
        SET @fleetPrideAlerts = Field(@row, "Subscribe to Text Alerts")
]%%-->

<!--<p style="font-size:12px;">Row: %%=v(@i)=%% | Email: %%=v(@emailAddress)=%% | Landing Page: %%=v(@sourceLandingPage)=%% | FirstName: %%=v(@FName)=%% | LastName: %%=v(@LName)=%% | Alerts: %%=v(@fleetPrideAlerts)=%%</p>
<br><br>-->
 
<!--%%[
    ELSE
]%%-->

    <!--No TRUE rows found for alerts-->

<!--%%[
    ENDIF
]%%-->

<!--%%[

    IF @alertsTrue == True THEN
    
      SET @rows = LookupOrderedRows(@data_extension, 0, "Subscribe to Text Alerts", "Email Address", @email, "Subscribe to Text Alerts", "False")

      SET @rowCount = rowcount(@rows)

      IF @rowCount > 0 THEN 
        FOR @i = 1 to @rowCount DO

          VAR @EM, @SLP, @FN, @LN, @FPA, @rowsUpdated

          SET @row = row(@rows, @i)
          SET @EM = Field(@row, "Email Address")
          SET @SLP = Field(@row, "Source Landing Page")
          SET @FN = Field(@row, "First Name")
          SET @LN = Field(@row, "Last Name")
          SET @FPA = Field(@row, "Subscribe to Text Alerts")
          
          @rowsUpdated = UpdateData(@data_extension, 1, "Email Address", @EM, "Subscribe to Text Alerts", "True")
]%%-->

<!--<p style="font-size:12px;">Row: %%=v(@i)=%% | Email: %%=v(@EM)=%% | Landing Page: %%=v(@SLP)=%% | FirstName: %%=v(@FN)=%% | LastName: %%=v(@LN)=%% | Alerts: %%=v(@FPA)=%%</p>
<br><br>-->

<!--%%[
         NEXT @i
       ELSE
]%%-->

       <!--No FALSE rows found for alerts-->

<!--%%[   
       ENDIF
     ENDIF
]%%-->
<script type="text/javascript">
  window.top.location.href = "https://cloud.e.fleetpride.com/thank-you"
</script>
<!--%%[    
ENDIF
]%%-->
<script runat="server">
  }
  catch (e) {
    Variable.SetValue("errorMessage", Stringify(e.message) + Stringify(e.description));
  }
</script>
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>
<!-- Checkbox Script | Start -->
<script>
  function handleClick(cb) {
    cb.setAttribute("value", cb.checked);
  }
</script>
<!-- Checkbox Script | End -->
<!-- reCAPTCHA Script | Start -->
<script>
  function submitUserForm() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) {
      console.log(response.length);
      document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red;">Please complete reCAPTCHA.</span>';
      return false;
    }
    return true;
  };
  function verifyCaptcha(token) {
    response = token;
    console.log('reCaptcha Verified: ' + response);
    document.getElementById('g-recaptcha-error').innerHTML = ''
  }
</script>
<script src="https://www.google.com/recaptcha/api.js"></script>
<!-- reCAPTCHA Script | End -->

<!-- Form Styles : Start -->
<style id="form-styles" type="text/css">
  /* General Form Styles */
  * {
    box-sizing: border-box;
  }
  #form-block {
    background-color:transparent;
    margin-top:0px;
    margin-right:0px;
    margin-bottom:0px;
    margin-left:0px;
    padding-top:0px;
    padding-right:0px;
    padding-bottom:0px;
    padding-left:0px;
    text-align:left;
  }
  #form-block .form-controls {
    box-sizing: border-box;
    margin: 10px;
    padding-bottom: 10px;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
  }
  #form-block .form-controls .form-field-label,
  #form-block .form-controls .form-field-label label,
  #form-block .form-controls .form-field-input label {
    color:#353535 !important;
    font-family: Mukta, Arial, Helvetica, sans-serif;
    font-size:14px !important;
    line-height: 24px !important;
    margin-bottom:3px;
    vertical-align:middle;
  }
  #form-block .form-controls .form-field-label label {
    padding-left: 15px;
    font-weight: 700;
    letter-spacing: 0;
  }
  #form-block input[type="radio"],
  #form-block input[type="checkbox"] {
    margin: 0 0.4em 3px 0;
    vertical-align: middle;
  }
  #form-block input[type="text"],
  #form-block input[type="email"],
  #form-block input[type="number"],
  select {
    box-sizing: border-box;
    width:100% !important;
    height: auto !important;
    border: 1px solid #d0d0d0 !important;
    border-radius: 4px;
    background-color: #fff;
    padding: 5px 15px !important;
    font-family: Mukta, Arial, Helvetica, sans-serif !important;
    font-size: 14px !important;
    line-height: 23px;
    letter-spacing: 0;
    color: #494949;
  }
  #form-block .submit-button-wrapper {
    margin-top: 20px;
    padding-right: 20px;
    padding-bottom:10px;
    text-align: center;
    max-width: 768px;
  }
  #form-block .form-button {
    width: 100%;
    display: block;
    border-radius: 4px;
    background-color:#EE3124 !important;
    border-color:#EE3124 !important;
    border-style: solid;
    -webkit-border-radius: 3px;
    -moz-border-radius: 4px;
    color:#FFFFFF !important;
    font-family: Mukta, Arial, Helvetica, sans-serif !important;
    font-size: 14px !important;
    font-weight: bold;
    line-height: 23px !important;
    text-align: center;
    padding:15px 0 !important;
    margin: 10px;
  }
  #form-block .date-dropdown-select-boxes input {
    display: none;
  }
  #form-block .date-dropdown-select-boxes .select {
    max-height: 28em;
    max-width: 6em;
    overflow: auto;
  }
  .form-content-wrapper {
    min-width: 290px;
    max-width: 678px;
    margin: 0 auto !important;
  }
  /* Custom Form Styles*/
  .lp-lead-gen-form {
    min-width: 290px;
    width: 100% !important;
    background-color: #F4F4F4;
    border-radius: 4px;
    -webkit-box-shadow: 0 0 4px 0 rgb(0 0 0 / 50%);
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 50%);
  }
  .lp-lead-gen-form__header {
    /*border-radius:0 0 4px 4px;*/
    background-color: #001e62;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .lp-lead-gen-form__header-wrapper {
    padding: 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex: 1 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-family: Mukta, Arial, Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 34px
  }
  .lp-lead-gen-form__header-wrapper img {
    width: 25px;
    height: 25px;
    margin-right: 10px
  }
  .email-address-icon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-attachment: scroll;
    cursor: auto;
    background-size: 16px 18px;
    background-position: 98% 50%;
  }
  /* Remove .stylingblock-content-wrapper before adding to landing page */
  .stylingblock-content-wrapper{
    color: #404040!important;
    font-family: Mukta!important;
    font-size: 16px!important;
    letter-spacing: 0;
    line-height: 24px!important;
  }
</style>
<!-- Form Styles : End -->

<!-- Form | Start -->
<div class="lp-lead-gen-form">
  <table cellpadding="0" cellspacing="0" class="stylingblock-content-wrapper" role="presentation" width="100%">
    <tr>
      <td class="stylingblock-content-wrapper">
        <!-- Form Header : Start -->
        <div class="lp-lead-gen-form__header">
          <div class="lp-lead-gen-form__header-wrapper">
            <img alt="Account Icon" class="lp-lead-gen-form__header-icon" src="https://image.s12.sfmc-content.com/lib/fe2f11727364047c7d1373/m/1/50e45222-eb60-47b0-b4f8-d3cd8f84b1d1.png"> Learn More
          </div>
        </div>
        <!-- Form Header : End -->
      </td>
    </tr>
  </table>
  <table cellpadding="0" cellspacing="0" class="stylingblock-content-wrapper" role="presentation" width="100%">
    <tr>
      <td class="stylingblock-content-wrapper">
        <form action="%%=RequestParameter('PAGEURL')=%%" class="form-content-wrapper" id="form-block" method="POST" onsubmit="return submitUserForm();">
          <div style="margin: 0 auto; width: 95%;">
            <!-- Form Fields : Start -->
            <div class="form-controls">
              <div class="form-field-label">
                <label for="Email Address">Email Address *</label>
              </div>
              <div class="form-field-input">
                <input class="email-address-icon" data-field-type="EmailAddress" data-validation="email" data-validation-message="Please enter an email address." name="Email Address" placeholder="" required="" type="email">
              </div>
            </div>
            <div class="form-controls">
              <div class="form-field-label">
                <label for="First Name">First Name *</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" data-validation-message="Please fill out this field." name="First Name" placeholder="" required="" type="text">
              </div>
            </div>
            <div class="form-controls">
              <div class="form-field-label">
                <label for="Last Name">Last Name *</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" data-validation-message="Please fill out this field." name="Last Name" placeholder="" required="" type="text">
              </div>
            </div>
            <div class="form-controls"  style="${data.phone ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="Primary Phone">Primary Phone</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Phone" name="Primary Phone" placeholder="" type="text">
              </div>
            </div>
            <div class="form-controls" style="${data.company ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="Company">Company</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" name="Company" placeholder="" type="text">
              </div>
            </div>
            <div class="form-controls" style="${data.jobTitle ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="Job Title">Job Title</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" name="Job Title" placeholder="" type="text">
              </div>
            </div>
            <div class="form-controls" style="${data.city ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="City">City</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" name="City" placeholder="" type="text">
              </div>
            </div>
            <div class="form-controls" style="${data.state ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="State">State</label>
              </div>
              <div class="form-field-input">
                <select data-field-type="Text" name="State" placeholder=""><option selected="selected" value=""></option><option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option> </select>
              </div>
            </div>
            <div class="form-controls" style="${data.zipCode ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="Zip Code">Zip Code</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Number" data-validation="number" name="Zip Code" placeholder="" type="text">
              </div>
            </div>

            <div class="form-controls" style="${data.accountNumber ? "display: block;" : "display: none;"}">
              <div class="form-field-label">
                <label for="FleetPride Account Number">FleetPride Account Number</label>
              </div>
              <div class="form-field-input">
                <input data-field-type="Text" name="FleetPride Account Number" placeholder="" type="text">
              </div>
            </div>

            <div class="form-controls">
              <div class="form-field-label">
              </div>
              <div class="formfield-input-wrapper">
                <div class="form-field-input">
                  <label style="font-weight: bold !important;"><input data-field-type="Boolean" id="checkbox" name="Subscribe to Text Alerts" onclick="handleClick(this);" type="checkbox" value="false"> &nbsp; Subscribe to Text Alerts </label>
                </div>
              </div>
            </div>
            <div class="form-controls">
            <div class="form-field-label"></div>
            <div class="formfield-input-wrapper">
              <div class="form-field-input">
                <label style="font-weight: bold !important;"><input data-field-type="Boolean" id="checkbox2" name="Subscribe to FleetPride News" onclick="handleClick(this);" type="checkbox" value="false"> &nbsp; Subscribe to FleetPride News </label>
              </div>
            </div>
          </div>
            <!-- reCAPTCHA_v2 | Start -->
            <div class="g-recaptcha" data-callback="verifyCaptcha" data-sitekey="6LcuWGoeAAAAAIwpnSOJIEfwlWJpvGmjUue8tmPX" id="recaptcha" style="margin-left: 10px;">
            </div>
            <div id="g-recaptcha-error" style="margin-left: 10px;">
            </div>
            <!-- reCAPTCHA_v2 | End -->
            <!-- Form Fields : End -->
            <!-- Form Submit Button : Start -->
            <div class="submit-button-wrapper">
              <button class="form-button" name="submit" type="submit" value="submit">Submit</button>
            </div>
            <!-- Form Submit Button : End -->
            <!-- Form Terms & Conditions Statment : Start -->
            <div>
              <p style="padding:5px 15px 15px 15px; font-size:12px; line-height:14px">
                By clicking 'Submit' you are consenting to receive email communications to the email address you provide for information and/or marketing purposes from FleetPride. You also agree to our 
                <u> 
                  <a href="https://www.fleetpride.com/site-terms-conditions/" style="font-weight: bold;">Terms &amp; Conditions</a> 
                </u> and 
                <u> 
                  <a href="https://www.fleetpride.com/privacy-policy/" style="font-weight: bold;">Privacy Policy</a> 
                </u>.
              </p>
            </div>
            <!-- Form Terms & Conditions Statment : End -->
          </div>
        </form>
      </td>
    </tr>
  </table>
</div>
<!-- Form | End -->`
}