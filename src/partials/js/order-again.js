import BUTTON from "./button.js";
import PRODUCT_CARD from "./product-grid-card.js";

export default function template(data) {
  return `<table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tr>
                    <td style="padding: ${
                      data.noHeader ? "0" : "20"
                    }px 30px; font-family: Arial, sans-serif;; font-size: 15px; line-height: ${
    data.noHeader ? "0" : "24"
  }px; color: #555555;">
                        <h3 style="font-size:${
                          data.titleFontSize
                        }px; font-weight:${
    data.titleFontWeight
  }; line-height: ${
    data.title ? data.titleLineHeight : "0"
  }px; font-family: Arial, sans-serif; color:#${
    data.titleFontColor
  }; margin: 0px 0 ${data.title ? "10" : "0"}px 0;">${data.title}</h3>
                        <p style="font-size:${
                          data.subtitleFontSize
                        }px; font-weight:${
    data.subtitleFontWeight
  }; line-height: ${
    data.subtitle ? data.subtitleLineHeight : "0"
  }px; font-family: Arial, sans-serif; color:#${
    data.subtitleFontColor
  };margin: 0 0 ${data.subtitle ? "15" : "0"}px;">${data.subtitle}</p>
                    </td>
                </tr>
            </table>
        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
           
            <!--%%[ 
                var @rows, @row, @rowCount, @i, @email, @contactId, @cartRow, @firstRow

                    SET @email = [emailaddr]
    
                    SET @contactId = AttributeValue("_subscriberkey")
   
                    SET @rows = LookupOrderedRows('${
                      data.dataExtension
                    }',10,"Rank asc","ContactId",@contactId)
                
                set @rowCount = rowcount(@rows)
        
                IF @rowCount < 1 THEN
                    SET @rows = LookupOrderedRows('${
                      data.dataExtension
                    }',10,"Rank asc","Email",@email)
                    set @rowCount = rowcount(@rows)
                ENDIF
    
                IF @rowCount < 1 THEN
                set @rows = LookupOrderedRows('${
                  data.dataExtensionFallback
                }',10,"Rank asc","Email","fallback@fleetpride.com")
                set @rowCount = rowcount(@rows)

                ENDIF ]%%-->

                <!--%%[ 
                    for @i = 1 to @rowCount do 
                         var @rank, @prodURL, @pdpURL, @pdpImageURL, @prodImgURL, @brand, @sku, @price, @emailId, @emailName, @cpURL, @sequence12
                         set @sequence = '${data.sequenceNumber}'
                         set @emailId = _emailId
                         set @emailName = emailName_
                         set @row = row(@rows, @i) /* get row based on counter */ 
                         set @rank = field(@row, "Rank") 
                         set @prodName = field(@row, "ProductName") 
                         set @prodURL = field(@row, "ProductURL") 
                         set @prodImgURL = field(@row, "ProductImageURL")
                         set @pdpURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${
                           data.utmContentId
                         }-cta-product")
                         set @pdpImageURL = concat(@prodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${
                           data.utmContentId
                         }-image-product")
                         set @cpURL = concat("https://www.fleetpride.com/parts?", "utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${
                           data.utmContentId
                         }")
                         set @brand = field(@row,"Manufacturer") 
                         set @sku = field(@row,"DisplayPartNumber") 
                         set @priceAmount = field(@row,"ProductPrice")]
                         
                         IF ISNULL(@priceAmount) THEN

                         ELSE
                         IF @priceAmount > 0 THEN
                              set @price = FormatNumber(@priceAmount, "C")
                         ELSE
                              set @price = concat("See your price")
                         ENDIF
                         ENDIF

                         var @firstrow, @firstprodId, @firstprodURL, @firstprodName, @firstbrand, @firstsku, @firstprodImgURL, @firstpdpURL, @firstpdpURL, @firstpdpImageURL, @firstprice, @firstdisplayPrice 
                         set @firstrow = row(@rows, 1) /* get row based on counter */ 
                         set @firstprodURL = field(@firstrow, "ProductURL") 
                         set @firstprodName = field(@firstrow, "ProductName") 
                         set @firstbrand = field(@firstrow,"Manufacturer") 
                         set @firstsku = field(@firstrow,"DisplayPartNumber") 
                         set @firstprodImgURL = field(@firstrow, "ProductImageURL")
                         set @firstpdpURL =  concat(@firstprodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${
                           data.utmContentId
                         }-cta-product")
                         set @firstpdpImageURL =  concat(@firstprodURL, "?utm_source=sfmc_email&utm_medium=email&utm_campaign=", @emailName, "&utm_content=${
                           data.utmContentId
                         }-image-product")
                         set @firstprice = field(@firstrow,"ProductPrice")]
                         IF ISNULL(@firstprice) THEN

                         ELSE
                         IF @firstprice > 0 THEN
                              set @firstdisplayPrice = FormatNumber(@firstprice, "C")
                         ELSE
                              set @firstdisplayPrice = concat("See your price")
                         ENDIF
                         ENDIF

                    ]%%-->

                    <!--%%[ IF ((@sequence == '1' OR @rowCount <3) OR (@sequence == '3' AND @rowCount < 5) OR (@sequence == '4' AND @rowCount < 7) OR (@sequence == '5' AND @rowCount < 9)) AND @i <=2 THEN ]%%-->  
                    <!--%%[ IF MOD(@i,2) == 1 THEN ]%%-->          
                            <tr>
                    <!--%%[ ENDIF ]%%-->  
                        <td class="stack-column-center" valign="top" width="50%">
                            ${PRODUCT_CARD({
                              title: "%%=v(@prodName)=%%",
                              brand: "%%=v(@brand)=%%",
                              sku: "%%=v(@sku)=%%",
                              price: "%%=v(@price)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@pdpImageURL)=%%",
                              imageUrl: "%%=v(@prodImgURL)=%%",
                              imageAltText: "%%=v(@prodName)=%%",
                              buttonUrl: "%%=RedirectTo(@pdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
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
                              title: "%%=v(@prodName)=%%",
                              brand: "%%=v(@brand)=%%",
                              sku: "%%=v(@sku)=%%",
                              price: "%%=v(@price)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@pdpImageURL)=%%",
                              imageUrl: "%%=v(@prodImgURL)=%%",
                              imageAltText: "%%=v(@prodName)=%%",
                              buttonUrl: "%%=RedirectTo(@pdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
                            })}
                        </td>
                        <!--%%[ IF @rowCount == '3' THEN ]%%-->
                        <td class="stack-column-center" valign="top" width="50%">
                            ${PRODUCT_CARD({
                              title: "%%=v(@firstprodName)=%%",
                              brand: "%%=v(@firstbrand)=%%",
                              sku: "%%=v(@firstsku)=%%",
                              price: "%%=v(@firstdisplayPrice)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@firstpdpImageURL)=%%",
                              imageUrl: "%%=v(@firstprodImgURL)=%%",
                              imageAltText: "%%=v(@firstprodName)=%%",
                              buttonUrl: "%%=RedirectTo(@firstpdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
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
                              title: "%%=v(@prodName)=%%",
                              brand: "%%=v(@brand)=%%",
                              sku: "%%=v(@sku)=%%",
                              price: "%%=v(@price)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@pdpImageURL)=%%",
                              imageUrl: "%%=v(@prodImgURL)=%%",
                              imageAltText: "%%=v(@prodName)=%%",
                              buttonUrl: "%%=RedirectTo(@pdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
                            })}
                        </td>
                        <!--%%[ IF @rowCount == '5' THEN ]%%-->
                        <td class="stack-column-center" valign="top" width="50%">
                            ${PRODUCT_CARD({
                              title: "%%=v(@firstprodName)=%%",
                              brand: "%%=v(@firstbrand)=%%",
                              sku: "%%=v(@firstsku)=%%",
                              price: "%%=v(@firstdisplayPrice)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@firstpdpImageURL)=%%",
                              imageUrl: "%%=v(@firstprodImgURL)=%%",
                              imageAltText: "%%=v(@firstprodName)=%%",
                              buttonUrl: "%%=RedirectTo(@firstpdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
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
                              title: "%%=v(@prodName)=%%",
                              brand: "%%=v(@brand)=%%",
                              sku: "%%=v(@sku)=%%",
                              price: "%%=v(@price)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@pdpImageURL)=%%",
                              imageUrl: "%%=v(@prodImgURL)=%%",
                              imageAltText: "%%=v(@prodName)=%%",
                              buttonUrl: "%%=RedirectTo(@pdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
                            })}
                        </td>
                        <!--%%[ IF @rowCount == '7' THEN ]%%-->
                        <td class="stack-column-center" valign="top" width="50%">
                            ${PRODUCT_CARD({
                              title: "%%=v(@firstprodName)=%%",
                              brand: "%%=v(@firstbrand)=%%",
                              sku: "%%=v(@firstsku)=%%",
                              price: "%%=v(@firstdisplayPrice)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@firstpdpImageURL)=%%",
                              imageUrl: "%%=v(@firstprodImgURL)=%%",
                              imageAltText: "%%=v(@firstprodName)=%%",
                              buttonUrl: "%%=RedirectTo(@firstpdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
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
                              title: "%%=v(@prodName)=%%",
                              brand: "%%=v(@brand)=%%",
                              sku: "%%=v(@sku)=%%",
                              price: "%%=v(@price)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@pdpImageURL)=%%",
                              imageUrl: "%%=v(@prodImgURL)=%%",
                              imageAltText: "%%=v(@prodName)=%%",
                              buttonUrl: "%%=RedirectTo(@pdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
                            })}
                        </td>
                        <!--%%[ IF @rowCount == '9' THEN ]%%-->
                        <td class="stack-column-center" valign="top" width="50%">
                            ${PRODUCT_CARD({
                              title: "%%=v(@firstprodName)=%%",
                              brand: "%%=v(@firstbrand)=%%",
                              sku: "%%=v(@firstsku)=%%",
                              price: "%%=v(@firstdisplayPrice)=%%",
                              priceLabel: data.priceLabel,
                              imageDestinationUrl:
                                "%%=RedirectTo(@firstpdpImageURL)=%%",
                              imageUrl: "%%=v(@firstprodImgURL)=%%",
                              imageAltText: "%%=v(@firstprodName)=%%",
                              buttonUrl: "%%=RedirectTo(@firstpdpURL)=%%",
                              buttonText: data.productButtonText,
                              showPrice: data.showPrice,
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
                  buttonUrl: "%%=RedirectTo(@cpURL)=%%",
                })}
            </td>
        </tr>
    </table>`;
}
