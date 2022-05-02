export default function template(data) {
  return `<!-- Email Header : BEGIN -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <td dir="${data.imageAlignmentRight ? "rtl" : "ltr"}" >
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tr>
                        <!-- Column : BEGIN -->
                        <th class="stack-column-center" style="background-color: #${data.imageBackgroundColor};" valign="middle" width="50%">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tr>
                                    <td class="center-on-narrow" style="text-align: left; padding: 0px;">
                                        <a href="${data.promotionLink}" style="text-align: left;color: #ffffff; font-size: 12px; line-height: 16px;" target="_blank"><img alt="${data.promotionAlt}" border="0" height="auto" width="100%" src=" ${data.promotionUrl}" style="width: 100%; max-width: 300px; height: auto; background: #00319F; font-family: Arial, sans-serif;; font-size: 15px; line-height: 15px; color: #ffffff;" width="142"> </a>
                                    </td>
                                </tr>
                            </table>
                        </th>
                        <!-- Column : END -->
                        <!-- Column : BEGIN -->
                        <th class="stack-column-center" style="background-color: #${data.textBackgroundColor};" valign="middle" width="50%">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td class="center-on-narrow" style="text-align: center; padding:  10px 0px 10px 0px;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                                            <tr>
                                                <td style="padding: 0px 10px 5px 10px">
                                                    <h3 style="font-size:${data.titleFontSize}px !important; font-weight:${data.titleFontWeight}; line-height: ${data.titleLineHeight}px !important; font-family: Arial, sans-serif; color:#${data.titleFontColor}; text-transform: uppercase; margin: 0px 0px 0px 0px; padding: 0px 0px ${data.titlePadBot}px 0px;">
                                                        ${data.title}
                                                    </h3>
                                                    <h1 style="font-size:${data.subtitleFontSize}px !important; font-weight:${data.subtitleFontWeight}; line-height: ${data.subtitleLineHeight}px !important; font-family: Arial, sans-serif; color:#${data.subtitleFontColor}; text-transform: uppercase; margin: 0px 0px 0px 0px; padding: 0px 0px ${data.subtitlePadBot}px 0px;">
                                                        ${data.subtitle}
                                                    </h1>
                                                    <p style="font-size:${data.descriptionFontSize}px !important; font-weight:${data.descriptionFontWeight} !important;  line-height: ${data.descriptionLineHeight}px !important; font-family: Arial, sans-serif; color:#${data.descriptionFontColor}; text-transform: uppercase; margin: 0px 0px 0px 0px; padding: 0px 0px ${data.descriptionPadBot}px 0px;">
                                                        ${data.description}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" class="center-on-narrow" role="presentation">
                                            <tbody>
                                                <tr>
                                                    <td class="button-td button-td-primary" style="background: #${data.buttonBackgroundColor};border-radius: 4px;"><a class="button-a button-a-primary"
                                                            alias="${data.buttonUrl}"
                                                            href="${data.buttonUrl}"
                                                            style="font-family: Arial, sans-serif; font-size: 14px; line-height: 22px; font-weight: bold; text-decoration: none; padding: 5px 25px; display: block; color: #${data.buttonColor}; border: 1px solid #${data.buttonBackgroundColor}; background: #${data.buttonBackgroundColor}; border-radius: 4px; display: block;"
                                                            target="_blank">${data.buttonText}</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </th>
                        <!-- Column : END -->
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; background: #ffffff;" width="100%">
        <!-- Spacer : Start -->
        <tr>
            <td align="center" style="background-color: #ffffff; padding: 0;" valign="top">
                <div style="color: #ffffff; line-height: 5px !important;">&zwnj;</div>
            </td>
        </tr>
        <!-- Spacer : End -->
    </table>
    <!-- Email Header : END -->`;
}
