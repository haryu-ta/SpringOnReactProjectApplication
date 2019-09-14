■参考情報
https://spring.io/guides/tutorials/react-and-spring-data-rest/

http://localhost:8080/api/horse
http://localhost:8080/

#React導入
npm init -y

#Package.jsonの編集
{
  "dependencies": {
    "react": "^15.3.2",
    "react-dom": "^15.3.2",
    "rest": "^1.3.1",
    "webpack": "^1.12.2"
  },
  "scripts": {
    "watch": "webpack --watch -d"
  },
  "devDependencies": {
    "babel-core": "^6.18.2",
    "babel-loader": "^6.2.7",
    "babel-polyfill": "^6.16.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0"
  }
}

#webpack.config.jsの作成
var path = require('path');

module.exports = {
    entry: './src/main/js/app.js',
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        loaders: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};

#jsファイルの作成（rootとなるファイル） ←上記の場合には、app.js
const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		
	}
	
	render() {
		return (
			<h3>horse-stable-gender</h3>
		)
	}
	
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)

#Maven Install


#WebPackを変更すると自動でコンパイルさせる
cd /Users/itamuraryouhei/Documents/workspace_spring/SpringOnReactProject
./node_modules/.bin/webpack --progress --watch