import BUTTON from './button.js';
import PRODUCT_CARD from './product-grid-card.js';

export default function template(data){
    return `
<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
        <td style="padding-top: ${data.padTop}px; padding-bottom: ${data.padBottom}px;">
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                    <td style="padding: ${data.noHeader ? '0' : '20'}px 30px; font-family: Arial, sans-serif;; font-size: 15px; line-height: ${data.noHeader ? '0' : '24'}px; color: #555555;">
                        <h3 style="font-size:${data.titleFontSize}px; font-weight:${data.titleFontWeight}; line-height: ${data.title ? data.titleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.titleFontColor}; margin: 0px 0 ${data.title ? '10' : '0'}px 0;">${data.title}</h3>
                        <p style="font-size:${data.subtitleFontSize}px; font-weight:${data.subtitleFontWeight}; line-height: ${data.subtitle ? data.subtitleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.subtitleFontColor};margin: 0 0 ${data.subtitle ? '15' : '0'}px;">${data.subtitle}</p>
                        <p style="font-size:${data.descriptionFontSize}px; font-weight:${data.descriptionFontWeight}; line-height: ${data.description ? data.descriptionLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.descriptionFontColor}; margin: 0 0 ${data.description ? data.descriptionPadBottom : '0'}px;">${data.description}</p>
                    </td>
                </tr>
            </table>

            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
           
            <!--%%[ 
                
                VAR @rows, @row, @rowCount, @i, @email, @contactId, @tempContactId, @subId, @len
                    
                SET @email = [emailaddr]
                SET @rows = LookupOrderedRows('${data.dataExtension}',10,"Rank asc","Email",@email)

                SET @rowCount = rowcount(@rows)
        
                IF @rowCount < 1 THEN
                    SET @rows = LookupOrderedRows('${data.dataExtensionFallback}',10,"Rank asc","Email","fallback@fleetpride.com")
                    SET @rowCount = rowcount(@rows)
                ENDIF ]%%-->

                <!--%%[ 
                    for @i = 1 to @rowCount do 

                         VAR @rank, @prodURL, @pdpURL, @pdpImageURL, @prodImgURL, @brand, @sku, @price, @emailId, @emailName, @cpURL, @sequence

                         SET @row = row(@rows, @i) /* get row based on counter */ 
                         SET @sequence = '${data.sequenceNumber}'

                         SET @emailId = _emailId
                         SET @emailName = emailName_
                         
                         SET @rank = field(@row, "Rank") 
                         SET @prodName = field(@row, "ProductName") 
                         SET @prodURL = field(@row, "ProductURL") 
                         SET @prodImgURL = field(@row, "ProductImageURL")
                         SET @pdpURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-product")
                         SET @pdpImageURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-image-product")
                         /* cloudPageId REQUIRED */
                         SET @cpURL = concat(CloudPagesURL(${data.cloudPageId}), "&utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-lander") 
                         SET @brand = field(@row,"Manufacturer") 
                         SET @sku = field(@row,"DisplayPartNumber")
                         SET @priceAmount = field(@row,"ProductPrice")]
                         
                         IF @priceAmount > 0 THEN
                            SET @price = FormatNumber(@priceAmount, "C")
                         ELSE
                            SET @price = concat("See your price")
                         ENDIF
                    ]%%-->

                    <!--%%[ IF (@sequence == '1' AND @i <=4) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '2' AND @i >=5 AND @i <=8) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%--> 
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '3' AND @i >=9 AND @i <=10) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '4' AND @i <=2) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '5' AND @i >=3 AND @i <=4) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '6' AND @i >=5 AND @i <=6) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '7' AND @i >=7 AND @i <=8) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@price)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '%%=RedirectTo(@pdpImageURL)=%%',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=RedirectTo(@pdpURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ next @i]%%-->
            </table>
            
            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                    <td style="padding: 20px 20px; font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555;text-align: center;">
                                ${data.buttonText ? BUTTON({
                                    buttonText: data.buttonText,
                                    buttonCenter: true,
                                    buttonUrl: '%%=RedirectTo(@cpURL)=%%'
                                }) : '' }
                    </td>
                </tr>
            </table>

        </td>
    </tr>
</table>`
}