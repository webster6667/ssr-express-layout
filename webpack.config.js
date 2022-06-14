const path = require('path'),
	  getFileRelativeConfigFile = (filePath) => path.resolve(__dirname, filePath),
	  {
	  	getBuildMode,
		getDefaultPlugins,
		getResolveExtensions,
		getStyleRules,
		getScriptRules,
		getFileRules,
		getAliasFromFile
	  } = require('webpack-config-create-utils')(),
	  AssetsPlugin = require('assets-webpack-plugin')




const {
		isDev,
		isProd,
		buildModeByNodeEnv,
		getFileNameByMode,
		optimizationSettingsByMode
	} = getBuildMode(),
    extensions = getResolveExtensions(),
    alias = getAliasFromFile(__dirname),
    defaultPlugins = getDefaultPlugins({isProd}),
    fileRules = getFileRules(),

	styleRules = getStyleRules({
		sassFilesForImport: [
			getFileRelativeConfigFile('src/common/style/smart-grid.scss'),
			getFileRelativeConfigFile('node_modules/scss-coding-helpers/index.scss')
		]
	}),
	scriptRules = getScriptRules()


// module.exports = {
// 	context: getFileRelativeConfigFile('src'),
// 	mode: buildModeByNodeEnv,
// 	devtool: isDev ? 'source-map' : false,
// 	entry: ['@babel/polyfill', './index.tsx'],
// 	output: {
// 		filename: getFileNameByMode('js'),
// 		path: getFileRelativeConfigFile( 'dist')
// 	},
// 	resolve: {
// 		extensions,
// 		alias
// 	},
// 	optimization: optimizationSettingsByMode,
// 	devServer: {
// 		overlay: true
// 	},
// 	plugins: [
// 		...defaultPlugins
// 	],
// 	module: {
// 		rules: [
// 			...styleRules,
// 			scriptRules,
//             ...fileRules
// 		]
// 	}
// }

const clientsConfig = {
	mode: 'development',
	name: 'client',
	entry: {
		server: ['@babel/polyfill', './src/client/index.tsx']
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	resolve: {
		extensions,
		alias
	},
	plugins: [
		new AssetsPlugin({filename: 'assets.json', fileTypes: ['js', 'css']}),
	],
	module: {
		rules: [
			...styleRules,
			scriptRules,
			...fileRules
		]
	}
}

const serverConfig = {
	target: 'node',
	mode: 'development',
	name: 'server',
	entry: {
		server: ['@babel/polyfill', './src/server/index.tsx']
	},
	output: {
		path: __dirname,
		filename: '[name].js',
		libraryTarget: 'commonjs2',
	},
	resolve: {
		extensions,
		alias
	},
	module: {
		rules: [
			...styleRules,
			scriptRules,
            ...fileRules
		]
	}
}

module.exports = [serverConfig, clientsConfig]