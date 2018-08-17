const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: 'vueexample.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['vue-style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					// TODO only use vue-style-loader on dev
					'vue-style-loader',
					// otherwise mincssextractplugin
					MiniCssExtractPlugin.loader,
					'css-loader',
					// just raw loader / vue-style-loader for scss only output
					//'raw-loader',
					'sass-loader',
					{
						// always load variables file
						loader: 'sass-resources-loader',
						options: {
							resources: path.resolve(
								__dirname,
								'../../core/css/variables.scss'
							)
						}
					},
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			}
		]
	},
	plugins: [new VueLoaderPlugin(), new MiniCssExtractPlugin({
      filename: '../css/style.css'
    })],
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm.js'
		},
		extensions: ['*', '.js', '.vue', '.json', ]
	}
}
