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
                                                ${data.imageDestinationUrl ? 
                                                    `<a href=\"${data.imageDestinationUrl}\" target=\"_blank\">` : "" }
                                                        <img width="100%" alt="alt_text" border="0" class="center-on-narrow" alt="${data.imageAltText}" src="${data.imageUrl}"style="background: ${data.backgroundColor}; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: ${data.titleColor}; display: block; width:100%;">
                                                        ${data.imageDestinationUrl ? 
                                                    "</a>" : "" }
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

                                                <h3 style="font-size: 24px; line-height: 28px; font-family: Arial, sans-serif; color:${data.titleColor}; margin: 5px 0 10px 0;">
                                                    ${data.title}
                                                </h3>

                                                <p style="font-size: 18px; line-height: 24px; font-family: Arial, sans-serif; color:${data.subtitleColor }; font-weight: bold; margin: 0 0 15px;">
                                                    ${data.subtitle}
                                                </p>

                                                <p style="font-size: 14px; line-height: 20px; font-family: Arial, sans-serif; color:${data.titleColor}; margin: 0 0 25px;">
                                                    ${data.description}
                                                </p>
                                                ${data.buttonUrl && data.buttonText ? BUTTON(data) : "" }
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
