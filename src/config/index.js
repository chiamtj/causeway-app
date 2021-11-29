const env = process.env.REACT_APP_ENV;

let config = {
    baseUrl: "https://chiamtj.github.io/causeway-app/",
};

if (env) {
    // eslint-disable-next-line default-case
    switch (env.toUpperCase()) {
        case "STAGE":
            config.baseUrl = "https://chiamtj.github.io/causeway-stage/";
            break;
        case "PRODUCTION":
            config.baseUrl = "https://chiamtj.github.io/causeway-app/final/";
        
    }
}

export default config;