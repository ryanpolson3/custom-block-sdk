import BUTTON from './button.js';
import PRODUCT_CARD from './product-grid-card.js';

export default function template(data){
    return `<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
    <tr>
        <td style="padding: ${data.noHeader ? '0' : '20'}px 30px; font-family: Arial, sans-serif;; font-size: 15px; line-height: ${data.noHeader ? '0' : '24'}px; color: #555555;">
            <h3 style="font-size:${data.titleFontSize}px; font-weight:${data.titleFontWeight}; line-height: ${data.title ? data.titleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.titleFontColor}; margin: 0px 0 ${data.title ? '10' : '0'}px 0;">${data.title}</h3>
            <p style="font-size:${data.subtitleFontSize}px; font-weight:${data.subtitleFontWeight}; line-height: ${data.subtitle ? data.subtitleLineHeight : '0'}px; font-family: Arial, sans-serif; color:#${data.subtitleFontColor};margin: 0 0 ${data.subtitle ? '15' : '0'}px;">${data.subtitle}</p>
        </td>
    </tr>
</table>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
           
            <!--%%[ 
                var @cartId, @rows, @rowCount, @i, @email, @contactId, @tempContactId, @subId, @len, @cartRow, @firstRow
                set @cartId = [ccrz__E_Cart__c:Id]
                set @contactId = AttributeValue("_subscriberkey")
                set @rows = LookupOrderedRows('ccrz__E_CartItem__c_Salesforce',10,"Name asc","ccrz__Cart__c",@cartId)
                set @rowCount = rowcount(@rows)
        
            ]%%-->
            
                <!--%%[ 
                    for @i = 1 to @rowCount do 
                         var @prodId, @cartURL, @row, @prodURL, @pdpURL, @pdpImageURL, @prodImgURL, @brand, @sku, @price, @displayPrice, @emailId, @emailName, @cpURL, @sequence, @mod
                         set @sequence = '${data.sequenceNumber}'
                         set @emailId = _emailId
                         set @emailName = emailName_
                         set @row = row(@rows, @i) /* get row based on counter */ 
                         set @prodId = field(@row, "ccrz__Product__c")
                         set @prodURL = "www.fleetpride.com/" 
                         set @prodName = Lookup('ccrz__E_Product__c_Salesforce',"Name","Id", @prodId)
                         set @brand = Lookup('ccrz__E_Product__c_Salesforce',"FP_Brand_Name__c","Id", @prodId)
                         set @sku = Lookup('ccrz__E_Product__c_Salesforce',"DSP_Part_Number__c","Id", @prodId)
                         set @prodImgURL = Lookup('ccrz__E_ProductMedia__c_Salesforce',"ccrz__URI__c","ccrz__Product__c", @prodId, "ccrz__MediaType__c", "Product Image")
                         set @pdpURL =  concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@emailName,"&utm_content=${data.utmContentId}")
                         set @cartURL = concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@emailName,"&utm_content=${data.utmContentId}")
                         @pdpImageURL =  concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@emailName,"&utm_content=${data.utmContentId}")
                         set @price = field(@row, "ccrz__Price__c")
                         set @displayPrice = FormatNumber(@price, "C")

                         var @firstrow, @firstprodId, @firstprodURL, @firstprodName, @firstbrand, @firstsku, @firstprodImgURL, @firstpdpURL, @firstcartURL, @firstpdpImageURL, @firstprice, @firstdisplayPrice 
                         set @firstrow = row(@rows, 1) /* get row based on counter */ 
                         set @firstprodId = field(@firstrow, "ccrz__Product__c")
                         set @firstprodURL = "www.fleetpride.com/" 
                         set @firstprodName = Lookup('ccrz__E_Product__c_Salesforce',"Name","Id", @firstprodId)
                         set @firstbrand = Lookup('ccrz__E_Product__c_Salesforce',"FP_Brand_Name__c","Id", @firstprodId)
                         set @firstsku = Lookup('ccrz__E_Product__c_Salesforce',"DSP_Part_Number__c","Id", @firstprodId)
                         set @firstprodImgURL = Lookup('ccrz__E_ProductMedia__c_Salesforce',"ccrz__URI__c","ccrz__Product__c", @firstprodId, "ccrz__MediaType__c", "Product Image")
                         set @firstpdpURL =  concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@firstemailName,"&utm_content=${data.utmContentId}")
                         set @firstcartURL = concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@firstemailName,"&utm_content=${data.utmContentId}")
                         @firstpdpImageURL =  concat("https://www.fleetpride.com/parts/ccrz__CCSiteLogin?startURL=%2Fparts%2Fccrz__Cart&utm_source=sfmc_email&utm_medium=email&utm_campaign=",@firstemailName,"&utm_content=${data.utmContentId}")
                         set @firstprice = field(@firstrow, "ccrz__Price__c")
                         set @firstdisplayPrice = FormatNumber(@firstprice, "C")
                         

                ]%%-->

                        <!--%%[ IF ((@sequence == '1' OR @rowCount <3) OR (@sequence == '3' AND @rowCount < 5) OR (@sequence == '4' AND @rowCount < 7) OR (@sequence == '5' AND @rowCount < 9)) AND @i <=2 THEN ]%%-->  
                        <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                                <tr>
                        <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@displayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=v(@cartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF @rowCount == '1' THEN ]%%-->
                            <td class="stack-column-center" valign="top" width="50%" style="font-size:1px;line-height:2px;">
                            <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td></td>
                            </tr>
                            </table>
                            </td>
                            </tr>
                            <!--%%[ ENDIF ]%%-->    
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                            <!--%%[ ENDIF ]%%-->
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '2' AND @i >=3 AND @i <=4) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@displayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=v(@cartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF @rowCount == '3' THEN ]%%-->
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@firstprodName)=%%',
                                    brand: '%%=v(@firstbrand)=%%',
                                    sku: '%%=v(@firstsku)=%%',
                                    price: '%%=v(@firstdisplayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@firstprodImgURL)=%%',
                                    imageAltText: '%%=v(@firstprodName)=%%',
                                    buttonUrl: '%%=v(@firstcartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
</td>  
                            </tr>
                            <!--%%[ ENDIF ]%%-->    
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '3' AND @i >=5 AND @i <=6) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@displayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=v(@cartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF @rowCount == '5' THEN ]%%-->
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@firstprodName)=%%',
                                    brand: '%%=v(@firstbrand)=%%',
                                    sku: '%%=v(@firstsku)=%%',
                                    price: '%%=v(@firstdisplayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@firstprodImgURL)=%%',
                                    imageAltText: '%%=v(@firstprodName)=%%',
                                    buttonUrl: '%%=v(@firstcartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
</td>  
                            </tr>
                            <!--%%[ ENDIF ]%%--> 
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '4' AND @i >=7 AND @i <=8) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@displayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=v(@cartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF @rowCount == '7' THEN ]%%-->
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@firstprodName)=%%',
                                    brand: '%%=v(@firstbrand)=%%',
                                    sku: '%%=v(@firstsku)=%%',
                                    price: '%%=v(@firstdisplayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@firstprodImgURL)=%%',
                                    imageAltText: '%%=v(@firstprodName)=%%',
                                    buttonUrl: '%%=v(@firstcartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
</td>  
                            </tr>
                            <!--%%[ ENDIF ]%%--> 
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ IF (@sequence == '5' AND @i >=9 AND @i <=10) THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                            <!--%%[ ENDIF ]%%-->  
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@prodName)=%%',
                                    brand: '%%=v(@brand)=%%',
                                    sku: '%%=v(@sku)=%%',
                                    price: '%%=v(@displayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@prodImgURL)=%%',
                                    imageAltText: '%%=v(@prodName)=%%',
                                    buttonUrl: '%%=v(@cartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
                            </td>
                            <!--%%[ IF @rowCount == '9' THEN ]%%-->
                            <td class="stack-column-center" valign="top" width="50%">
                                ${PRODUCT_CARD({
                                    title: '%%=v(@firstprodName)=%%',
                                    brand: '%%=v(@firstbrand)=%%',
                                    sku: '%%=v(@firstsku)=%%',
                                    price: '%%=v(@firstdisplayPrice)=%%',
                                    priceLabel: data.priceLabel,
                                    imageDestinationUrl: '',
                                    imageUrl: '%%=v(@firstprodImgURL)=%%',
                                    imageAltText: '%%=v(@firstprodName)=%%',
                                    buttonUrl: '%%=v(@firstcartURL)=%%',
                                    buttonText: data.productButtonText,
                                    showPrice: data.showPrice
                                })}
</td>  
                            </tr>
                            <!--%%[ ENDIF ]%%--> 
                            <!--%%[ IF MOD(@i,2) == 0 THEN ]%%-->  
                            </tr>
                    <!--%%[ ENDIF ]%%-->  
                    <!--%%[ ENDIF ]%%-->

                    <!--%%[ next @i]%%-->
        </table>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <tr>
                <td style="padding: 20px 20px; font-family: Arial, sans-serif;; font-size: 15px; line-height: 24px; color: #555555;text-align: center;">
                    ${BUTTON({
                        buttonText: data.buttonText,
                        buttonCenter: true,
                        buttonUrl: '%%=RedirectTo(@cartURL)=%%'
                    })}
                </td>
            </tr>
        </table>`
}