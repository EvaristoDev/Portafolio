export const getLanguagePreference = () => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language");
      return savedLanguage && ['en', 'es'].includes(savedLanguage) ? savedLanguage : 'en';
    }
    return 'en'; // Default to English if running on the server
  };
  
  export const setLanguagePreference = (language) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("language", language);
    }
  };
  
  export const switchLanguage = (language) => {
    setLanguagePreference(language);
    // Recargar la página para aplicar el cambio de idioma
    location.reload();
  };
  