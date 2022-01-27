module.exports = {
    format_url: url => {
        return url
            .replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('/')[0]
            .split('?')[0];
    },
    format_plural: (formatString, length) => {
        if (length) {
            if (length > 0) {
                formatString += 's';
            }
        }
        return formatString;
    },
    Log: (msg, obj) => {
        const messageParts = msg.match(/.{1,100}/g);
        messageParts.forEach(message => {
            const time = new Date();
            const timeStamp = `[${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} | ${time.toLocaleTimeString('en-US', { hour12: false })}(${time.getMilliseconds().toPrecision(3)})] > `;
            console.log(timeStamp + message);
        });
        if (obj) {
            console.log('', obj);
        }
    },
    format_time: (date) => {
        return date.toLocaleTimeString('en-US', { hour12: false });
    },
    format_date: (date) => {
        const rawDate = new Date(date);
        return `[${rawDate.getMonth() + 1}/${rawDate.getDate()}/${rawDate.getFullYear()}] at ${rawDate.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })}`;
    },
};