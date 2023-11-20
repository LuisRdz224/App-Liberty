const axios = require('axios');

// Function to get and update exchange rates
async function updateExchangeRates() {
    try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/839c4e13e7ea99ff35f0dd7e/latest/USD');

        if (response.data.result === 'success') {
            const euroRate = response.data.conversion_rates.EUR;
            const usdRate = response.data.conversion_rates.USD;
            const mxnRate = response.data.conversion_rates.MXN;

            // console.log(`Tasa de cambio de EUR a USD: ${euroRate}`);
            // console.log(`Tasa de cambio de USD a EUR: ${1 / euroRate}`);
            // console.log(`Tasa de cambio de USD a MXN: ${mxnRate}`);
            // console.log(`Tasa de cambio de MXN a USD: ${1 / mxnRate}`);

            return { euroRate, usdRate, mxnRate };
        } else {
            console.error('Error al obtener tasas de cambio:', response.data);
            return null;
        }
    } catch (error) {
        console.error('Error de conexión:', error.message);
        return null;
    }
}

export { updateExchangeRates }