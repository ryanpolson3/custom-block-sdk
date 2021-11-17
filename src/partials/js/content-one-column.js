import BUTTON from './button.js';

export default function template(data){
    return `<!-- 1 Column Text with Image : BEGIN -->
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tr>
        <td dir="ltr" style="padding: ${data.imageUrl ? '20' : '0'}px 20px;" valign="top">
        ${data.imageDestinationUrl ? `<a href=\"${data.imageDestinationUrl}\" target=\"_blank\">` : ''}
        ${data.imageUrl ? `<img alt="${data.imageAltText}" border="0" class="center-on-narrow" height="230" src="${data.imageUrl}" style="height: auto; background: #dddddd; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: #555555;" width="100%">` : ''}
        ${data.imageDestinationUrl ? `</a>` : ''}
      </td>
      </tr>
      <tr>
      <td style="padding: ${data.componentPaddingTop}px 30px ${data.componentPaddingBottom}px 30px; font-family: Arial, sans-serif;; font-size: 15px; line-height: ${data.noHeader ? '0' : '24'}px; color: #555555;">
      <h3 style="font-size:${data.titleFontSize}px; font-weight:${data.titleFontWeight}; line-height: ${data.title ? data.titleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.titleFontColor}; margin: 0px 0 ${data.title ? '10' : '0'}px 0;">${data.title}</h3>
      <p style="font-size:${data.subtitleFontSize}px; font-weight:${data.subtitleFontWeight}; line-height: ${data.subtitle ? data.subtitleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.subtitleFontColor};margin: 0 0 ${data.subtitlePaddingBottom}px;">${data.subtitle}</p>
          <p style="white-space: pre-wrap; font-size:${data.descriptionFontSize}px; font-weight:${data.descriptionFontWeight};  line-height: ${data.descriptionLineHeight}px; font-family: Arial, sans-serif; color:#${data.descriptionFontColor};margin: 0 0 ${data.descriptionPaddingBottom}px;">${data.description}</p>
          ${data.buttonUrl && data.buttonText ? BUTTON(data) : '' }
        </td>
      </tr>
    </table>
    <!-- 1 Column Text with Image : END -->`
}