export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
	<tr>
		<td style="text-align: center; padding-top:${data.marginTopSingle}px !important; padding-bottom: ${data.marginBottomSingle}px !important; padding-left:${data.centerButtonSingle ? '0' : '30'}px !important;">
			<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="${data.centerButtonSingle ? '' : 'float:left;'}">
				<tbody>
					<tr>
						<td class="button-td button-td-primary" style="background: #${data.backgroundColorSingle};border-radius: 4px;">
							<a class="button-a button-a-primary"
								alias="${data.buttonUrl}"
								href="${data.buttonUrl}"
								style="font-family: Arial, sans-serif; font-size: ${data.fontSizeSingle}px; line-height: ${data.lineHeightSingle}px; font-weight: ${data.fontWeightSingle}; text-decoration: none; padding: 5px 25px; display: block; color: #${data.fontColorSingle}; border: 1px solid #${data.borderColorSingle}; background: #${data.backgroundColorSingle}; border-radius: 4px;"
								target="_blank">${data.buttonText}
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</td>
	</tr>
</table>
`   
}


