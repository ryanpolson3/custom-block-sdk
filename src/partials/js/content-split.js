import BUTTON from "./button.js";

export default function template(data) {
  return `
  <!--[if (gte mso 9)|(IE)]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="center" valign="top" width="100%"><![endif]-->
  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <td dir="${data.imageAlignmentRight ? "rtl" : "ltr"}" style="padding: 0; background-color: ${data.backgroundColor};" width="100%">
            <!--[if (gte mso 9)|(IE)]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100%;"><tr><td align="center" valign="top" width="100%"><![endif]-->
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                        <tr>
                            <!--[if (gte mso 9)|(IE)]><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td align="left" valign="top" width="50%"><![endif]-->
                            <!-- Column : BEGIN -->
                            <th class="stack-column-center" width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td dir="ltr" style="padding: 0; overflow: hidden;" valign="top">

                                                <!-- Left Column -->
                                                <h3>Hello</h3>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <!-- Column : END -->

                            <!--[if (gte mso 9)|(IE)]></td><td align="left" valign="top" width="50%"><![endif]-->
                            <!-- Column : BEGIN -->
                            <th class="stack-column-center" width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="" dir="ltr" style="font-family: Arial, sans-serif; font-size: 15px; line-height: 20px; color: #c7c7c7; padding: 30px; text-align: left;" valign="top">

                                            <!-- Right Column -->
                                            <h3>World</h3>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <!-- Column : END -->
                            <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
                        </tr>
                    </tbody>
                </table>
                <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
            </td>
        </tr>
  </table>
  <!--[if (gte mso 9)|(IE)]></td></tr></table><![endif]-->
  `;
}
