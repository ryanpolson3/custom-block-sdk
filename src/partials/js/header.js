
export default function template(data){
    return   `<!-- Email Header : BEGIN -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <!-- Column : BEGIN -->
            <th class="stack-column-center" style="background-color: #000000;" valign="middle" width="50%">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tr>
                        <td class="center-on-narrow" style="text-align: left; padding: 20px;">
                            <a href=" ${data.logoLink}" style="text-align: left;color: #ffffff; font-size: 12px; line-height: 16px;" target="_blank"><img alt="Logo" border="0" height="33" src=" ${data.logoUrl}" style="max-width: 142px; height: auto; background: #00319F; font-family: Arial, sans-serif;; font-size: 15px; line-height: 15px; color: #ffffff;" width="142"> </a>
                        </td>
                    </tr>
                </table>
            </th>
            <!-- Column : END -->
            <!-- Column : BEGIN -->
            <th class="stack-column-center mobile-hide" style="background-color: #00319F;" valign="middle" width="50%">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="float: right>
                    <tr>
                        <td class="center-on-narrow" style="text-align: right; padding: 20px;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="float: right">
                                <tr>
                                    <td style="padding: 0 30px 0 0">
                                        <a href=" ${data.ctaUrl}" style="display: inline-block; color: #ffffff; font-family: Arial, Helvetica, sans-serif; font-size: 14px; line-height: 10px; letter-spacing:1px;" target="_blank" title=" ${data.ctaText}"><img alt="Map Icon" height="20" src="https://image.s12.sfmc-content.com/lib/fe2f11727364047c7d1373/m/1/22a835c2-d0b3-4b8e-880d-3a7b0ebd6445.png" style="display: inline; vertical-align: middle; padding: 0px 9px 6px 0px; color: #ffffff; text-decoration: none; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;" width="20">${data.ctaText}</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </th>
            <!-- Column : END -->
        </tr>
    </table><span style="height: 5px; line-height: 5px;">&nbsp;</span>
    <!-- Email Header : END -->`

}