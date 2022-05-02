import BUTTON from './button.js';

export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
        <td style="padding-top: ${data.iconPadTop}px; padding-bottom: ${data.iconPadBottom}px;">
            <!-- 4 Even Columns : BEGIN -->
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                    <!-- Column : BEGIN -->
                    <th class="stack-column-center" valign="top" width="33%">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                                <td class="center-on-narrow" style="font-family: Arial, sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center; padding-top: 10px; padding-right: 0; padding-bottom: 0px; padding-left: 0;">
                                    <h3 style="font-size: ${data.iconFontSize}px; line-height: ${data.iconLineHeight}px; font-family: Arial, sans-serif; color: #${data.iconColor}; font-weight:${data.iconFontWeight};">
                    <a alias="${data.iconName}" conversion="true" data-linkto="${data.iconLink}" style="text-decoration:none;color:inherit" title="${data.iconName}">${data.iconName}</a></h3></td>
                            </tr>
                            <tr>
                                <td style="text-align: center;padding: 10px 10px 10px;">
                                    <a alias="" conversion="true" data-linkto="https://" href="${data.iconLink}" title=""><img alt="${data.iconAltText}" data-assetid="2663" height="50" src="${data.iconUrl}" style="max-width: 150px; height: 50px; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 48px;" width="48"></a>
                                </td>
                            </tr>
                        </table>
                    </th>
                    <!-- Column : END -->
                    <!-- Column : BEGIN -->
                    <th class="stack-column-center" valign="top" width="33%">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                                <td class="center-on-narrow" style="font-family: Arial, sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center; padding-top: 10px; padding-right: 0; padding-bottom: 0px; padding-left: 0;">
                                    <h3 style="font-size: ${data.iconFontSize2}px; line-height: ${data.iconLineHeight2}px; font-family: Arial, sans-serif; color: #${data.iconColor2}; font-weight:${data.iconFontWeight2};">
                    <a alias="${data.iconName2}" conversion="true" data-linkto="${data.iconLink2}" style="text-decoration:none;color:inherit" title="${data.iconName2}">${data.iconName2}</a></h3></td>
                            </tr>
                            <tr>
                                <td style="text-align: center;padding: 10px 10px 10px;">
                                    <a alias="" conversion="true" data-linkto="https://" href="${data.iconLink2}" title=""><img alt="${data.iconAltText2}" data-assetid="2663" height="50" src="${data.iconUrl2}" style="max-width: 150px; height: 50px; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 48px;" width="48"></a>
                                </td>
                            </tr>
                        </table>
                    </th>
                    <!-- Column : END -->
                    <!-- Column : BEGIN -->
                    <th class="stack-column-center" valign="top" width="33%">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                                <td class="center-on-narrow" style="font-family: Arial, sans-serif; font-size: 15px; line-height: 20px; color: #555555; text-align: center; padding-top: 10px; padding-right: 0; padding-bottom: 0px; padding-left: 0;">
                                    <h3 style="font-size:${data.iconFontSize3}px; line-height: ${data.iconLineHeight3}px; font-family: Arial, sans-serif; color: #${data.iconColor3}; font-weight:${data.iconFontWeight3};">
                    <a alias="${data.iconName3}" conversion="true" data-linkto="${data.iconLink3}" style="text-decoration:none;color:inherit" title="${data.iconName3}">${data.iconName3}</a></h3></td>
                            </tr>
                            <tr>
                                <td style="text-align: center;padding: 10px 10px 10px;">
                                    <a alias="" conversion="true" data-linkto="https://" href="${data.iconLink3}" title=""><img alt="${data.iconAltText3}" data-assetid="2663" height="50" src="${data.iconUrl3}" style="max-width: 150px; height: 50px; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 48px;" width="48"></a>
                                </td>
                            </tr>
                        </table>
                    </th>
                    <!-- Column : END -->
                </tr>
            </table>
            <br>
            <br>
            <!-- 3 Even Columns : END -->
        </td>
    </tr>
</table>`
}