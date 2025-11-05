export const formatNumber = {
  // Formatear números grandes (millones, billones)
  marketCap: (value) => {
    if (!value && value !== 0) return 'N/A';
    
    if (value >= 1e12) {
      return `$${(value / 1e12).toFixed(2)}T`; // Trillones
    } else if (value >= 1e9) {
      return `$${(value / 1e9).toFixed(2)}B`; // Billones
    } else if (value >= 1e6) {
      return `$${(value / 1e6).toFixed(2)}M`; // Millones
    } else if (value >= 1e3) {
      return `$${(value / 1e3).toFixed(2)}K`; // Miles
    } else {
      return `$${value.toFixed(2)}`;
    }
  },

  // Formatear porcentajes
  percentage: (value) => {
    if (!value && value !== 0) return 'N/A';
    return `${value.toFixed(2)}%`;
  },

  // Formatear números normales con separadores de miles
  withCommas: (value) => {
    if (!value && value !== 0) return 'N/A';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  // Formatear números de criptomonedas
  crypto: (value, decimals = 2) => {
    if (!value && value !== 0) return 'N/A';
    return value.toFixed(decimals);
  }
};