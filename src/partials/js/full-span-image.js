import BUTTON from './button.js';

export default function template(data){
    return `<table width="100%" cellspacing="0" cellpadding="0" role="presentation">
    <tr>
      <td align="center" style="padding-top:${data.padTop}px; padding-bottom:${data.padBottom}px;">
          ${data.imageLink ? `<a href=\"${data.imageLink}\" target=\"_blank\">` : ''}
		         <img data-assetid="3716" src="${data.imageUrl}" alt="${data.imageAltText}" width="601" style="display: block; padding: 0px; text-align: center; height: auto; width: 100%; border: 0px;">
	        ${data.imageLink ? `</a>` : ''}
      </td>
    </tr>
  </table>`
}