module.exports = {
    format_url: (urlString) => {
        return urlString;
    },
    format_plural: (formatString, length) => {
        return formatString + (length > 0) ? + 's' : '';
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
        return `[${rawDate.getMonth() + 1}/${rawDate.getDate()}/${rawDate.getFullYear()}]`;
    },
};