
export default function template(data){
    return   `<!-- Email Header : BEGIN -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <!-- Column : BEGIN -->
            <th class="stack-column-center" style="background-color: #000000;" valign="middle" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tr>
                        <td class="center-on-narrow" style="text-align: center; padding: 20px;">
                            <a href="${data.logoLink}" style="text-align: center;color: #ffffff; font-size: 12px; line-height: 16px;" target="_blank"><img alt="Logo" border="0" height="auto" src="${data.logoUrl}" style="max-width: 142px; height: auto; background: #00319F; font-family: Arial, sans-serif;; font-size: 15px; line-height: 15px; color: #ffffff;" width="142"> </a>
                        </td>
                    </tr>
                </table>
            </th>
            <!-- Column : END -->
        </tr>
    </table><span style="height: 5px; line-height: 5px;">&nbsp;</span>
    <!-- Email Header : END -->`

}