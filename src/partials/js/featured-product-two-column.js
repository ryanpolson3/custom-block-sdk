import BUTTON from './button.js';

export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
       <td style="padding-top: ${data.padTop}px; padding-bottom: ${data.padBottom}px;">
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tr>
               <td class="stack-column-center" valign="top" width="50%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 10px 0px;">
                           ${data.productLink ? `<a href=\"${data.productLink}\" target=\"_blank\">` : ''}
                           <img alt="${data.imageAltText}" border="0" height="230" src="${data.imageUrl}"
                              style="max-width: 230px; height: 230px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 230px;"
                              width="230">
                           ${data.productLink ? `</a>` : ''}
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow"
                           style="font-family: Arial, sans-serif; font-size: 15px; line-height: 24px; color: #555555; text-align: ${data.centerAlign ? 'center' : 'left'}; padding: 0px 40px 40px;">
                           <h3 style="font-size: ${data.titleFontSize}px; font-weight: ${data.titleFontWeight}; line-height: ${data.titleLineHeight}px; font-family: Arial, sans-serif; color:#${data.titleFontColor}; margin: 0px 0 10px 0;">
                              ${data.title}
                           </h3>
                           <p style="font-size: ${data.subtitleFontSize}px; font-weight: ${data.subtitleFontWeight}; line-height: ${data.subtitleLineHeight}px; font-family: Arial, sans-serif; color:#${data.subtitleFontColor};margin: 0 0 15px;">
                              ${data.subtitle}
                           </p>
                           <table border="0" cellpadding="0" cellspacing="0" class="center-on-narrow" role="presentation" style="${data.centerAlign ? '' : 'float: left;'}">
                              <tbody>
                                    <tr>
                                       <td class="button-td button-td-primary" style="background: #ee3124;border-radius: 4px;"><a class="button-a button-a-primary"
                                                href="${data.buttonUrl}"
                                                style="font-family: Arial, sans-serif; font-size: 14px; line-height: 22px; font-weight: bold; text-decoration: none; padding: 5px 25px; display: block; color: white; border: 1px solid #ee3124; background: #ee3124; border-radius: 4px;"
                                                target="_blank">${data.buttonText}</a></td>
                                    </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
               <td class="stack-column-center" valign="top" width="50%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 10px 0px;">
                           ${data.productLink2 ? `<a href=\"${data.productLink2}\" target=\"_blank\">` : ''}
                           <img alt="${data.imageAltText2}" border="0" height="230" src="${data.imageUrl2}"
                              style="max-width: 230px; height: 230px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 230px;"
                              width="230">
                           ${data.productLink2 ? `</a>` : ''}
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow"                                                                               
                           style="font-family: Arial, sans-serif; font-size: 15px; line-height: 24px; color: #555555; text-align: ${data.centerAlign ? 'center' : 'left'}; padding: 0px 40px 40px;">
                           <h3 style="font-size: ${data.title2FontSize}px; font-weight: ${data.title2FontWeight}; line-height: ${data.titleLineHeight2}px; font-family: Arial, sans-serif; color:#${data.title2FontColor}; margin: 0px 0 10px 0;">
                              ${data.title2}
                           </h3>
                           <p style="font-size: ${data.subtitle2FontSize}px; font-weight: ${data.subtitle2FontWeight}; line-height: ${data.subtitleLineHeight2}px; font-family: Arial, sans-serif; color:#${data.subtitle2FontColor}; margin: 0 0 15px;">
                              ${data.subtitle2}
                           </p>
                           <table border="0" cellpadding="0" cellspacing="0" class="center-on-narrow" role="presentation" style="${data.centerAlign ? '' : 'float: left;'}">
                              <tbody>
                                    <tr>
                                       <td class="button-td button-td-primary" style="background: #ee3124;border-radius: 4px;"><a class="button-a button-a-primary"
                                                href="${data.buttonUrl2}"
                                                style="font-family: Arial, sans-serif; font-size: 14px; line-height: 22px; font-weight: bold; text-decoration: none; padding: 5px 25px; display: block; color: white; border: 1px solid #ee3124; background: #ee3124; border-radius: 4px;"
                                                target="_blank">${data.buttonText2}</a></td>
                                    </tr>
                              </tbody>
                           </table>
                        </td>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>
      </td>
   </tr>
</table>`
}