export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
	<tr>
		<td style="text-align: center; padding-top:${data.marginTop}px !important; padding-bottom: ${data.marginBottom}px !important; padding-left:${data.centerButton ? '0' : '30'}px !important;">
			<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="${data.centerButton ? '' : 'float:left;'}">
				<tbody>
					<tr>
						<td class="button-td button-td-primary" style="background: #${data.backgroundColorSingle};border-radius: 4px;">
							<a class="button-a button-a-primary"
								alias="${data.buttonUrl}"
								href="${data.buttonUrl}"
								style="font-family: Arial, sans-serif; font-size: ${data.fontSize}px; line-height: ${data.lineHeight}px; font-weight: ${data.fontWeight}; text-decoration: none; padding: 5px 25px; display: block; color: #${data.fontColor}; border: 1px solid #${data.borderColor}; background: #${data.backgroundColor}; border-radius: 4px;"
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


