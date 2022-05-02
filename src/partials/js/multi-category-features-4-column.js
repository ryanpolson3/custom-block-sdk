import BUTTON from './button.js';

export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
   <tr>
      <td style="padding-top: ${data.padTop}px; padding-bottom: ${data.padBottom}px;">
         <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tr>
               <!-- Column : BEGIN -->
               <th class="stack-column-center" valign="top" width="25%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 0 0px;">
                        <a href="${data.categoryUrl}" target="_blank"><img alt="${data.imageAltText}" border="0" data-assetid="4900" height="150" src="${data.imageUrl}" style="max-width: 150px; height: 150px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 150px;" width="150"></a>                
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow" style="font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555; text-align: center;padding: 0px 0 20px;">
                        <a href="${data.categoryUrl}" target="_blank"><h3 style="font-size: ${data.categoryNameFontSize}px; line-height: ${data.categoryNameLineHeight}px; font-family: Arial, sans-serif; color:#${data.categoryNameColor}; margin: 5px 0 10px 0; font-weight:${data.categoryNameFontWeight}">
                           ${data.categoryName}
                           </h3></a>
                        </td>
                     </tr>
                  </table>
               </th>
               <!-- Column : END -->
               <!-- Column : BEGIN -->
               <th class="stack-column-center" valign="top" width="25%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 0 0px;">
                        <a href="${data.categoryUrl2}" target="_blank"><img alt="${data.imageAltText2}" border="0" data-assetid="4900" height="150" src="${data.imageUrl2}" style="max-width: 150px; height: 150px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 150px;" width="150"></a> 
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow" style="font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555; text-align: center;padding: 0px 0 20px;">
                        <a href="${data.categoryUrl2}" target="_blank"><h3 style="font-size: ${data.categoryNameFontSize}px; line-height: ${data.categoryNameLineHeight}px; font-family: Arial, sans-serif; color:#${data.categoryNameColor}; margin: 5px 0 10px 0; font-weight:${data.categoryNameFontWeight}">
                           ${data.categoryName2}
                           </h3></a>
                        </td>
                     </tr>
                  </table>
               </th>
               <!-- Column : END -->
               <!-- Column : BEGIN -->
               <th class="stack-column-center" valign="top" width="25%">
               
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 0 0px;">
                        <a href="${data.categoryUrl3}" target="_blank"><img alt="${data.imageAltText3}" border="0" data-assetid="4900" height="150" src="${data.imageUrl3}" style="max-width: 150px; height: 150px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 150px;" width="150"></a> 
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow" style="font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555; text-align: center;padding: 0px 0 20px;">
                        <a href="${data.categoryUrl3}" target="_blank"><h3 style="font-size: ${data.categoryNameFontSize}px; line-height: ${data.categoryNameLineHeight}px; font-family: Arial, sans-serif; color:#${data.categoryNameColor}; margin: 5px 0 10px 0; font-weight:${data.categoryNameFontWeight}">
                           ${data.categoryName3}
                           </h3></a>
                        </td>
                     </tr>
                  </table>
               </th>
               <!-- Column : END -->
               <!-- Column : BEGIN -->
               <th class="stack-column-center" valign="top" width="25%">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                     <tr>
                        <td style="text-align: center;padding: 20px 0 0px;">
                        <a href="${data.categoryUrl4}" target="_blank"><img alt="${data.imageAltText4}" border="0" data-assetid="4900" height="150" src="${data.imageUrl4}" style="max-width: 150px; height: 150px; background: #DDDDDD; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555; padding: 0px; text-align: center; width: 150px;" width="150"></a>    
                        </td>
                     </tr>
                     <tr>
                        <td class="center-on-narrow" style="font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555; text-align: center;padding: 0px 0 20px;">
                        <a href="${data.categoryUrl4}" target="_blank"><h3 style="font-size: ${data.categoryNameFontSize}px; line-height: ${data.categoryNameLineHeight}px; font-family: Arial, sans-serif; color:#${data.categoryNameColor}; margin: 5px 0 10px 0; font-weight:${data.categoryNameFontWeight}">
                           ${data.categoryName4}
                           </h3></a>
                        </td>
                     </tr>
                  </table>
               </th>
               <!-- Column : END -->
            </tr>
         </table>
      </td>
   </tr>
</table`
}