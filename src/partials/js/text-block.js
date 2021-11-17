

export default function template(data){
    return `
    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
      <tr>
        <td dir="ltr" style="font-size:${data.descriptionFontSize}px; font-family: Arial, sans-serif; background-color: #${data.backgroundColor}; color:#${data.descriptionFontColor}; font-weight:${data.descriptionFontWeight};  line-height: ${data.descriptionLineHeight}px; padding: ${data.paddingTop}px 30px ${data.paddingBottom}px 30px;" valign="top">
          <p style="white-space: pre-wrap; margin: 0 0 0px;">${data.description}</p>
        </td>
      </tr>
    </table>
   `
}