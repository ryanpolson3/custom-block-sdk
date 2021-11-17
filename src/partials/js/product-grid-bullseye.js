import BUTTON from './button.js';
import PRODUCT_CARD from './product-grid-card.js';

export default function template(data){
    return `<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tr>
            <td style="padding: ${data.noHeader ? '0' : '20'}px 30px; font-family: Arial, sans-serif;; font-size: 15px; line-height: ${data.noHeader ? '0' : '24'}px; color: #555555;">
            <h3 style="font-size:${data.titleFontSize}px; font-weight:${data.titleFontWeight}; line-height: ${data.title ? data.titleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.titleFontColor}; margin: 0px 0 ${data.title ? '10' : '0'}px 0;">${data.title}</h3>
            <p style="font-size:${data.subtitleFontSize}px; font-weight:${data.subtitleFontWeight}; line-height: ${data.subtitle ? data.subtitleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.subtitleFontColor};margin: 0 0 ${data.subtitle ? '15' : '0'}px;">
                        <!--%%[ 
                            var @dynamicSubtitle
                            set @dynamicSubtitle = Lookup('${data.staticDataExtension}','Subtitle','${data.staticDataExtensionColumn}','${data.staticDataExtensionColumnValue}')
                        ]%%-->
                        %%=v(@dynamicSubtitle)=%%</p>
                </td>
            </tr>
        </table>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
           
            <!--%%[ 
                var @rows, @row, @rowCount, @staticRows, @staticRow, @staticRowCount, @numRowsToReturn, @region, @i, @j, @email, @contactId, @tempContactId, @subId, @len

                set @tempContactId = AttributeValue("_subscriberkey")
                set @subId = Substring(@tempContactId,1,3)
                    IF IndexOf(@tempContactId,"@") > 0 THEN
                        SET @email = [emailaddr]
                    ELSEIF IndexOf(@subId,"003") > 0 THEN
                        SET @contactId = AttributeValue("_subscriberkey")
                    ELSEIF IndexOf(@subId,"005") > 0 THEN
                        SET @contactId = Lookup('SF_All_ECom',"ContactId","ContactKey",@tempContactId)
                    ENDIF

                    set @len = length(@email)
                    IF @len > 0 THEN
                        SET @rows = LookupOrderedRows('${data.dataExtension}',10,"Rank asc","Email",@email)
                    ELSE 
                        SET @rows = LookupOrderedRows('${data.dataExtension}',10,"Rank asc","ContactId",@contactId)
                    ENDIF

                    set @rowCount = rowcount(@rows)

        
                set @staticRows = LookupOrderedRows('${data.staticDataExtension}',${data.staticProductCount},"Rank asc","${data.staticDataExtensionColumn}","${data.staticDataExtensionColumnValue}")
                set @staticRowCount = rowcount(@staticRows)

                IF @rowCount < 1 THEN
                    set @rows = LookupOrderedRows('${data.dataExtensionFallback}',10,"Rank asc","Email","fallback@fleetpride.com")
                    set @rowCount = rowcount(@rows)
                ENDIF 

                IF @staticRowCount < 1 THEN
                    set @staticRows = LookupOrderedRows('${data.staticDataExtension}',${data.staticProductCount},"Rank asc","UID","fallback")
                    set @staticRowCount = rowcount(@staticRows)
                ENDIF ]%%-->

                <!--%%[ 
                    for @j = 1 to @staticRowCount do 
                         var @rank, @prodURL, @pdpURL, @pdpImageURL, @prodImgURL, @brand, @sku, @price, @emailId, @emailName, @cpURL
                         set @emailId = _emailId
                         set @emailName = emailName_
                         set @staticRow = row(@staticRows, @j) /* get row based on counter */ 
                         set @rank = field(@staticRow, "Rank") 
                         set @prodName = field(@staticRow, "ProductName") 
                         set @prodURL = field(@staticRow, "ProductURL") 
                         set @prodImgURL = field(@staticRow, "ProductImageURL")
                         set @pdpURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-product")
                         set @pdpImageURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-image-product")
                         set @cpURL = concat(CloudPagesURL(${data.cloudPageId}), "&utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-lander")
                         set @brand = field(@staticRow,"Manufacturer") 
                         set @sku = field(@staticRow,"DisplayPartNumber") 
                         set @priceAmount = field(@staticRow,"ProductPrice")]
                         
                         IF @priceAmount > 0 THEN
                              set @price = FormatNumber(@priceAmount, "C")
                         ELSE
                              set @price = concat("See your price")
                         ENDIF
                    ]%%-->
                    <!--%%[ IF (@j == 1 OR @j == 3 OR @j == 5 OR @j == 7 OR @j == 9) THEN ]%%-->                    
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
                    <!--%%[ IF (@j == 2 OR @j == 4 OR @j == 6 OR @j == 8 OR @j == 10) THEN ]%%-->
                    
                        </tr>
                    <!--%%[ ENDIF ]%%-->
                    <!--%%[ next @j]%%-->

                <!--%%[ 
                    for @i = 1 to @rowCount do 
                         var @rank, @prodURL, @pdpURL, @pdpImageURL, @prodImgURL, @brand, @sku, @price, @emailId, @emailName, @cpURL, @sequence
                         set @sequence = '${data.sequenceNumber}'
                         set @emailId = _emailId
                         set @emailName = emailName_
                         set @row = row(@rows, @i) /* get row based on counter */ 
                         set @rank = field(@row, "Rank") 
                         set @prodName = field(@row, "ProductName") 
                         set @prodURL = field(@row, "ProductURL") 
                         set @prodImgURL = field(@row, "ProductImageURL")
                         set @pdpURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-view-product")
                         set @pdpImageURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-image-product-link")
                         set @cpURL = concat(CloudPagesURL(${data.cloudPageId}), "&utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${data.utmContentId}-cta-see-more")
                         set @brand = field(@row,"Manufacturer") 
                         set @sku = field(@row,"DisplayPartNumber") 
                         set @priceAmount = field(@row,"ProductPrice")]
                         
                         IF @priceAmount > 0 THEN
                              set @price = FormatNumber(@priceAmount, "C")
                         ELSE
                              set @price = concat("See your price")
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
        </table>`
}