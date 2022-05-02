import BUTTON from './button.js';
import PRODUCT_CARD from './product-grid-card.js';

export default function template(data){
    return `<div class="product-carousel">
    <h3>
        ${data.title}
    </h3>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <!--%%[ 
                    var @rows, @row, @rowCount, @i, @email, @contactId, @tempContactId, @subId, @len, @emailName
                        set @emailName = QueryParameter('utm_campaign')
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
                                SET @rows = LookupOrderedRows('${data.dataExtension}',${data.productCount},"Rank asc","Email",@email)
                            ELSE 
                                SET @rows = LookupOrderedRows('${data.dataExtension}',${data.productCount},"Rank asc","ContactId",@contactId)
                            ENDIF
                        
                        set @rowCount = rowcount(@rows)

                        IF @rowCount < 1 THEN
                        set @rows = LookupOrderedRows('${data.dataExtensionFallback}',${data.productCount},"Rank asc","Email","fallback@fleetpride.com")
                        set @rowCount = rowcount(@rows)
                        ENDIF

                        for @i = 1 to @rowCount do 
                        var @rank, @prodURL, @prodImgURL, @brand, @sku, @price,@prodRedirectURL 
                        set @row = row(@rows, @i) /* get row based on counter */ 
                        set @rank = field(@row,"Rank") 
                        set @prodName = field(@row,"ProductName") 
                        set @prodURL = field(@row,"ProductURL") 
                        set @prodImgURL = field(@row,"ProductImageURL") 
                        set @brand = field(@row,"Manufacturer") 
                        set @sku = field(@row,"DisplayPartNumber") 
                        set @priceAmount = field(@row,"ProductPrice")]
                        IF @priceAmount > 0 THEN
                        set @price = FormatNumber(@priceAmount, "C")
                        ELSE
                        set @price = concat("See your price")
                        ENDIF
                        set @prodRedirectURL = RedirectTo(CloudPagesURL(319,'whereto',@prodURL,'emailName',@emailName))
                        
            ]%%-->
            <div class="swiper-slide">
                <div class="product-tile">
                    <a href="%%=v(@prodRedirectURL)=%%"><img alt="%%=v(@prodName)=%%" src="%%=v(@prodImgURL)=%%" /></a>
                    <div class="product-info">
                        <a href="%%=v(@prodRedirectURL)=%%"><span class="product-name">%%=v(@prodName)=%%</span></a>
                        <div class="product-data">
                            <a href="%%=v(@prodRedirectURL)=%%"><span class="product-brand">%%=v(@brand)=%%</span> | <span class="product-sku">%%=v(@sku)=%%</span></a>
                        </div>
                        <div class="product-price">
                            <a style="${data.showPriceStyle}" href="%%=v(@prodRedirectURL)=%%"><span class="price-title">${data.priceLabel}</span><span class="price">%%=v(@price)=%%</span></a>
                        </div>
                        <div class="button-td button-td-primary" style="float: left; background: #ee3124;border-radius: 4px;">
                        <a href="%%=v(@prodRedirectURL)=%%"> </a><a class="button-a button-a-primary" style="font-family: Mukta, Arial, sans-serif; font-size: 14px; line-height: 22px; font-weight: bold; text-decoration: none; padding: 5px 25px; display: block; color: white; border: 1px solid #ee3124; background: #ee3124; border-radius: 4px;" href="%%=v(@prodRedirectURL)=%%" target="_blank">${data.productButtonText}</a>
                        </div>
                    </div>
                </div>
            </div>
            <!--%%[ Next @i]%%-->
        </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>`
}