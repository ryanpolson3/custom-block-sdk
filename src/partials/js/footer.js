export default function template(data){
    return `<!-- Email Footer : BEGIN -->
<table align="center" border="0" cellpadding="0" cellspacing="0" class="email-container" role="presentation"
style="margin: auto; background-color: #000000;" width="600" class="email-footer">
<tbody>
    <tr>
        <td class="center-on-narrow" style="text-align: center; padding: 25px 40px 40px;">
            <a href="{{ fbLink }}"
                style="display: inline-block; color: #ffffff; font-size: 12px; line-height: 16px;"
                target="_blank" title="LinkedIn"> <img alt="LinkedIn" height="32"
                    src="{{ fbUrl }}"
                    style="display: block; padding: 0; color: black; text-decoration: none; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;"
                    width="32"> </a>&nbsp;&nbsp;
            <a href="{{ liLink }}"
                style="display: inline-block; color: #ffffff; font-size: 12px; line-height: 16px;"
                target="_blank" title="Facebook"><img alt="Facebook" height="32"
                    src="{{ liUrl }}"
                    style="display: block; padding: 0; color: black; text-decoration: none; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px;"
                    width="32"> </a>&nbsp;&nbsp;
        </td>
    </tr>
    <tr>
        <td style="padding-bottom: 25px; text-align: center;">
            <a href="{{ logoLink }}"
                style="color: #ffffff; font-size: 12px; line-height: 16px; margin: 25px 0;"
                target="_blank"><img alt="Logo" border="0" height="33"
                    src="{{ logoUrl }}"
                    style="max-width: 142px; height: auto; font-family: Arial, sans-serif;; font-size: 15px; line-height: 15px; color: #ffffff; vertical-align: top;"
                    width="142"> </a>
        </td>
    </tr>
    <tr>
        <td
            style="padding: 20px; font-family: Arial, sans-serif;; font-size: 12px; line-height: 15px; text-align: center; color: #ffffff;">
            Copyright &copy; %%=FormatDate(Now(), "yyyy")=%% FleetPride, Inc.
            <br />
    <tr>
        <td valign="top" class="sfmc-footer">
            <custom type="footer" />
        </td>
    </tr>
    </td>
    </tr>
</tbody>
</table>
<!-- Email Footer : END -->`
}