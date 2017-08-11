/**
 * This worker is used to calculate
 * the least common multiple
 * and the greatest common divisor
 */

onmessage = function (event)
{
	var first=event.data.first;
	var second=event.data.second;
	calculate(first,second);
};


/*
 * calculate the least common multiple
 * and the greatest common divisor
 */
// 计算
function calculate(first,second) {
	//do the calculation work
	var common_divisor=divisor(first,second);
	var common_multiple=multiple(first,second);
	postMessage("Work done! " +
		"The least common multiple is "+common_divisor
		+" and the greatest common divisor is "+common_multiple);
}



/**
 * calculate the greatest common divisor
 * @param number
 * @param number
 * @return
 */
// 计算最大公约数
function divisor(a, b) {
	if (a % b == 0) {
		return b;
	} else {
		return divisor(b, a % b);
	}
}

/**
 * calculate the least common multiple
 * @param number
 * @param number
 * @return
 */
// 计算最小公倍数
function multiple( a,  b) {
	var multiple = 0;
	multiple = a * b / divisor(a, b);
	return multiple;
}