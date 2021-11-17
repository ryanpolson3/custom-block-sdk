export default function template(data){
 return `<table border="0" cellpadding="0" cellspacing="0" class="center-on-narrow" role="presentation" style="${data.buttonCenter ? '' : 'float: left;'}">
        <tbody>
            <tr>
                <td class="button-td button-td-primary" style="background: #ee3124;border-radius: 4px;"><a class="button-a button-a-primary"
                        alias="${data.buttonUrl}"
                        href="${data.buttonUrl}"
                        style="font-family: Arial, sans-serif; font-size: 14px; line-height: 22px; font-weight: bold; text-decoration: none; padding: 5px 25px; display: block; color: white; border: 1px solid #ee3124; background: #ee3124; border-radius: 4px;"
                        target="_blank">${data.buttonText}</a></td>
            </tr>
        </tbody>
    </table>`   
}