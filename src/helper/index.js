export const formatMoney = (number, currency = true) => {
    return (
        `${currency ? 'Rp ' : ''}` +
        parseInt(number, 10)
            .toFixed(0) // always two decimal digits
            .replace('.', ',') // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    ); // use . as a separator
};

export const formatDate = (dateString, isShort = false, withDay = false) => {
    const date = new Date(Date.parse(dateString));
    let options = {
        year: 'numeric',
        month: isShort ? 'short' : 'long',
        day: 'numeric'
    };

    if (withDay) options = { ...options, weekday: isShort ? 'short' : 'long' };

    try {
        return date.toLocaleDateString('id-ID', options);
    } catch {
        // fallback for unsupported browsers
        return date.toLocaleDateString();
    }
};

export const formatTime = dateString => {
    const date = new Date(Date.parse(dateString));
    const options = {
        hour: '2-digit',
        minute: '2-digit'
    };
    try {
        return date.toLocaleTimeString('id-ID', options);
    } catch {
        // fallback for unsupported browsers
        return date.toLocaleTimeString();
    }
};