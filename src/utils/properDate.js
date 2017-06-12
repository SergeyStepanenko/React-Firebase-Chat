export default function getProperDate(seconds) {
	const date = new Date(seconds);
	const now = new Date();

    let month = date.getMonth() + 1;
    if (month.toString().length === 1) {
        month = '0' + month;
    }

    let day = date.getDate();
    if (day.toString().length === 1) {
        day = '0' + day;
    }

    let hours = date.getHours();
    if (hours.toString().length === 1) {
        hours = '0' + hours;
    }

    let minutes = date.getMinutes();
    if (minutes.toString().length === 1) {
        minutes = '0' + minutes;
    }

	if (date.getFullYear() + date.getMonth() + date.getDate() === now.getFullYear() + now.getMonth() + now.getDate()) {
		return 'сегодня ' + hours + ':' + minutes;
	}

	if (date.getFullYear() + date.getMonth() + date.getDate() === now.getFullYear() + now.getMonth() + (now.getDate() - 1)) {
		return 'вчера ' + hours + ':' + minutes;
	}


    return day + ' ' + month + ' ' + date.getFullYear() + ' ' + hours + ':' + minutes;
}
