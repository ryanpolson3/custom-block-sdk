const path = require('path');

module.exports = {
	// mode: "development",
	devtool: "none",
	entry: {
		// Name and Path to the component js files
		'content-split': './src/scripts/content-split.js',
		'content-one-column': './src/scripts/content-one-column.js',
		'product-grid': './src/scripts/product-grid.js',
		'product-grid-cart': './src/scripts/product-grid-cart.js',
		'header': './src/scripts/header.js',
		'footer': '.src/scripts/footer.js',
		'icons-with-title': './src/scripts/icons-with-title.js',
		'featured-product-two-column': './src/scripts/featured-product-two-column.js',
		'multi-category-features': './src/scripts/multi-category-features.js',
		'product-grid-bullseye': './src/scripts/product-grid-bullseye.js',
		'full-span-image': './src/scripts/full-span-image.js',
		'honeypot': './src/scripts/honeypot.js',
		'product-carousel': './src/scripts/product-carousel.js',
		'single-button': './src/scripts/single-button.js',
		'order-again': './src/scripts/order-again.js',
		'text-block': './src/scripts/text-block.js'
	},
	output: {
		// Name of output file to dist folder
		filename: '[name]/main.js', 
		// Path where file will be stored
		path: path.resolve(__dirname) + '/dist/' 
	},
	module: {
		rules: [{
			test: /\.(jpe?g|png|gif)$/i,   //to support eg. background-image property 
			loader:"file-loader",
			query:{
				name:'[name].[ext]',
				outputPath:'images/'
				//the images will be emmited to public/assets/images/ folder 
				//the images will be put in the DOM <style> tag as eg. background: url(assets/images/image.png); 
			}
		},
		{
			test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
			loader: "url-loader",
			query:{
				limit:'10000',
				name:'[name].[ext]',
				outputPath:'fonts/'
				//the fonts will be emmited to public/assets/fonts/ folder 
				//the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); }  
			}
		},	
		{
			test: /\.css$/,
			loaders: ["style-loader","css-loader"]
		}]
	}
};
