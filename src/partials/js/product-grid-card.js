import BUTTON from './button.js';

export default function template(data){

    const price = `<span style="font-size: 11px; display: block;">${data.priceLabel}</span>
    <p
    style="font-size: 18px; font-weight: bold; line-height: 24px; font-family: Arial, sans-serif; color:#565656;margin: 0 0 15px;">
    ${data.price}</p>`

    return `<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <td style="text-align: center;padding: 20px 10px 10px;">
                ${data.imageDestinationUrl ? `<a href=\"${data.imageDestinationUrl}\" target=\"_blank\">` : ''}
                    <img alt="${data.imageAltText}" border="0" height="230" src="${data.imageUrl}"
                        style="max-width: 230px; height: 230px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 230px;"
                        width="230">
                ${data.imageDestinationUrl ? `</a>` : ''}
            </td>
        </tr>
    <tr>
        <td class="center-on-narrow"
            style="font-family: Arial, sans-serif; font-size: 15px; line-height: 24px; color: #555555; text-align: left;padding: 10px 40px 40px;">
            <h3
                style="font-size: 18px; font-weight: 300; line-height: 28px; font-family: Arial, sans-serif; min-height: 55px; color:#171717; margin: 5px 0 5px 0;">
                ${data.title}</h3>
            <p
                style="font-size: 14px; line-height: 24px; font-family: Arial, sans-serif; color:#565656;margin: 0 0 10px;">
                ${data.brand} | ${data.sku}</p>
                ${data.showPrice ? price : ''}
                ${data.buttonUrl && data.buttonText ? BUTTON(data) : '' }
        </td>
    </tr>
</table>`
}