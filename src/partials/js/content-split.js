import BUTTON from "./button.js";

export default function template(data) {
  return `
  <!-- 1 COLUMN GRID - HORIZONTAL : START -->
<!--[if (gte mso 9)|(IE)]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" valign="top" width="100%"><![endif]-->
<table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="background-color: ${data.backgroundColor};">
  <tr>
    <td>

      <!--[if (gte mso 9)|(IE)]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;"><tr><td align="center" valign="top" width="100%"><![endif]-->
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="max-width:600px;">
        <tr>
          <td align="center" valign="top" style="padding-top: 25px;padding-bottom: 0px;padding-left: 15px;padding-right: 15px;">

            <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" valign="top" width="50%"><![endif]-->
            <div class="stack-column" style="display:inline-block; width:100%; vertical-align:middle; max-width:50%;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-top: 0px;padding-bottom: 25px;padding-left: 10px;padding-right: 10px;">
                    <!-- 2 COLUMN IMAGE : START -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td>
                          <a alias="" href="" style="text-decoration:none; color:#808080;" target="_blank"> <img alt="" border="0" class="mobile-center" src="http://placehold.it/530x353" style="height:auto; border:0; font-family: 'Open Sans Condensed', Arial, Helvetica, sans-serif; font-weight:400; font-size:14px; color:#808080; display:block; max-width:265px;" width="265">
                          </a>
                        </td>
                      </tr>
                    </table>
                    <!-- 2 COLUMN IMAGE : END -->
                  </td>
                </tr>
              </table>
            </div>
            <!--[if (gte mso 9)|(IE)]></td><td align="left" valign="top" width="50%"><![endif]-->
            <div class="stack-column" style="display:inline-block; width:100%; vertical-align:middle; max-width:50%;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-top: 0px;padding-bottom: 0px;padding-left: 10px;padding-right: 10px;">
                    <!-- HEADING 2 : START -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="mobile-center" style="font-family: 'Open Sans Condensed', Arial, Helvetica, sans-serif; color:#3e3e3e;padding-top: 5px;padding-bottom: 5px;padding-left: 0px;padding-right: 0px; text-align:left; font-weight:700; font-size:20px; mso-line-height-rule:exactly; line-height:24px;">
                          Title Block 1
                        </td>
                      </tr>
                    </table>
                    <!-- HEADING 2 : END -->

                    <!-- PARAGRAPH : START -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td class="mobile-center" style="font-family: 'Open Sans', Arial, Helvetica, sans-serif; color:#3e3e3e; text-align:left;padding-top: 0px;padding-bottom: 10px;padding-left: 0px;padding-right: 0px; font-weight:400; font-size:14px; mso-line-height-rule:exactly; line-height:18px;">
                          Lorem ipsum dolor sit amet, consetetur sadipscing elitr. At aliquyam erat, sed diam. Bero sed diam nonumy eirmod tempor.
                        </td>
                      </tr>
                    </table>
                    <!-- PARAGRAPH : END -->

                    <!-- BUTTON : BEGIN -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td valign="top" align="center" style="padding-top: 0px;padding-bottom:25px;padding-left:0px;padding-right:0px;">
                          <table role="presentation" align="left" cellspacing="0" cellpadding="0" border="0" class="mobile-center" style="text-align: center;">
                            <tr>
                              <td style="background: #3e3e3e; border: 1px solid #ffffff; font-family: 'Open Sans Condensed', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 18px; text-align: center; display: block; font-weight: 600; padding-top: 8px;padding-bottom: 8px;padding-left: 15px;padding-right: 15px;" class="button-black-td">
                                <a href="http://www.google.com" style="text-decoration: none;" class="button-black-a">
                                  <span style="color:#ffffff;" class="button-black-link">Call to action</span>
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <!-- BUTTON : END -->
                  </td>
                </tr>
              </table>
            </div>
            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
      </table>
      <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->

    </td>
  </tr>
</table>
<!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
<!-- 1 COLUMN GRID - HORIZONTAL : END -->

  `;
}
