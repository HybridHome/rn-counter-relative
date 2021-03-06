/**
 * 显示屏幕组件
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   View,
 } from 'react-native';

export default class extends Component {

	// 格式化 expression
	getExpression () {
		var lastIndex = this.props.expression.length - 1;
		return this.props.expression.join('的');
	}

	// 格式化 result
	getResult () {
		var lastIndex = this.props.result.length - 1;

		if(lastIndex === 0) {
			return ""
		}

		if(typeof(this.props.result[lastIndex]) === 'object') {
			return "比 " + this.props.result[lastIndex]['中'] + " 年长/年轻？";
		}

		if(this.props.result[lastIndex] === '未知') {
			return "这个太难了！";
		}
		return this.props.result[lastIndex];
	}

	render () {
		return(
			<View style={styles.Show}>
				<View style={styles.expression}>
					<Text style={styles.expression_font}>
						{this.getExpression()}
					</Text>
				</View>
				<View style={styles.result}>
					<Text style={styles.result_font}>
						{this.getResult()}
					</Text>
				</View>
			</View>
		);
	}
  
};

const styles = StyleSheet.create({
	Show: {
		flex: 3,
		backgroundColor: '#E3E7E9',
	},
	expression: {
		flex: 1,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 35,
		marginBottom: 10,
		paddingTop: 15,
	},
	result: {
		flex: 1,
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		marginBottom: 20,
	},
	expression_font: {
		fontSize: 20,
		textAlign: 'right', 
		color: '#64676A',
	},
	result_font: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#3D4044',
		textAlign: 'right',
		fontFamily: 'Arial',
	},
});
