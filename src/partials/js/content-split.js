import BUTTON from './button.js';

export default function template(data){
    return `<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
        <tr>
            <td dir="${data.imageAlignmentRight ? 'rtl' : 'ltr'}"
                style="padding: 0; background-color: ${data.backgroundColor};" width="100%">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                        <tr>
                            <!-- Column : BEGIN -->
                            <th class="stack-column-center" width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td dir="ltr" style="padding: 0; overflow: hidden;" valign="top">
                                                ${data.imageDestinationUrl ? `<a href=\"${data.imageDestinationUrl}\" target=\"_blank\">` : ''}
                                                <img alt="alt_text" border="0" class="center-on-narrow"
                                                    alt="${data.imageAltText}" src="${data.imageUrl}"
                                                    style="background: ${data.backgroundColor}; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: ${data.titleColor}; display: block;"
                                                    >
                                                ${data.imageDestinationUrl ? '</a>' : ''}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <!-- Column : END -->
                            <!-- Column : BEGIN -->
                            <th class="stack-column-center" width="50%">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                    <tbody>
                                        <tr>
                                            <td class="center-on-narrow" dir="ltr"
                                                style="font-family: Arial, sans-serif;; font-size: 15px; line-height: 20px; color: #c7c7c7; padding: 30px; text-align: left;"
                                                valign="top">
                                                <h3
                                                    style="font-size: 24px; line-height: 28px; font-family: Arial, sans-serif; color:${data.titleColor}; margin: 5px 0 10px 0;">
                                                    ${data.title}</h3>
                                                <p
                                                    style="font-size: 18px; line-height: 24px; font-family: Arial, sans-serif; color:${data.subtitleColor};font-weight: bold; margin: 0 0 15px;">
                                                    ${data.subtitle}</p>
                                                <p
                                                    style="font-size: 14px; line-height: 20px; font-family: Arial, sans-serif; color:${data.titleColor};margin: 0 0 25px;">
                                                    ${data.description}</p>
                                                ${data.buttonUrl && data.buttonText ? BUTTON(data) : '' }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </th>
                            <!-- Column : END -->
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </table>`
}