import BUTTON from "./button.js";

export default function template(data) {
  return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
        <td style="padding-top: ${data.padTop}px; padding-bottom: ${data.padBottom}px;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                    <td dir="${data.imageAlignmentRight ? "rtl" : "ltr"}"
                        style="padding: 0;" width="100%">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tbody>
                                <tr>
                                    <!-- Column : BEGIN -->
                                    <th class="stack-column-center" width="60%" style="background-color: #${data.backgroundColor};">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td dir="ltr" style="padding: 0; overflow: hidden;" valign="top">
                                                        ${
                                                        data.imageDestinationUrl
                                                            ? `<a href=\"${data.imageDestinationUrl}\" target=\"_blank\">`
                                                            : ""
                                                        }
                                                        <img width="100%" border="0" class="center-on-narrow"
                                                            alt="${
                                                            data.imageAltText
                                                            }" src="${data.imageUrl}"
                                                            style="background: ${
                                                            data.backgroundColor
                                                            }; font-family: Arial, sans-serif; font-size: 15px; line-height: 15px; color: ${
            data.titleColor
        }; display: block; width: 100%;"
                                                            >
                                                        ${
                                                        data.imageDestinationUrl
                                                            ? "</a>"
                                                            : ""
                                                        }
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                    <!-- Column : END -->
                                    <!-- Column : BEGIN -->
                                    <th class="stack-column-center" width="40%" style="background-color: #${data.backgroundColor2};">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                            <tbody>
                                                <tr>
                                                    <td class="" dir="ltr"
                                                        style="font-family: Arial, sans-serif; font-size: 15px; line-height: 20px; color: #c7c7c7; padding-top: 30px; padding-right: 30px; padding-bottom: 30px; padding-left: 30px; text-align: left;"
                                                        valign="top">
                                                        <h3
                                                            style="font-size: ${data.titleFontSize}px; font-weight: ${data.titleFontWeight}; line-height: ${data.titleLineHeight}px; font-family: Arial, sans-serif; color:#${
                                                            data.titleColor
                                                            }; padding-top: ${data.titlePadTop}px; padding-right: 0; padding-bottom: ${data.titlePadBot}px; padding-left: 0; margin: 0;">
                                                            ${data.title}</h3>
                                                        <p
                                                            style="font-size: ${data.subtitleFontSize}px; font-weight: ${data.subtitleFontWeight}; line-height: ${data.subtitleLineHeight}px; font-family: Arial, sans-serif; color:#${
                                                            data.subtitleColor
                                                            }; padding-top: ${data.subtitlePadTop}px; padding-right: 0; padding-bottom: ${data.subtitlePadBot}px; padding-left: 0; margin: 0;">
                                                            ${data.subtitle}</p>
                                                        <p
                                                            style="font-size: ${data.descriptionFontSize}px; font-weight: ${data.descriptionFontWeight}; line-height: ${data.descriptionLineHeight}px; font-family: Arial, sans-serif; color:#${
                                                            data.descriptionColor
                                                            }; padding-top: ${data.descPadTop}px; padding-right: 0; padding-bottom: ${data.descPadBot}px; padding-left: 0; margin: 0;">
                                                            ${data.description}</p>
                                                        ${
                                                        data.buttonUrl &&
                                                        data.buttonText
                                                            ? BUTTON(data)
                                                            : ""
                                                        }
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
            </table>`;
}
