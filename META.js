// from https://github.com/xixu-me/META

// ################################################### this section can be flexibly customized ###################################################

// Number of STATIC proxy groups (for IP-sensitive services)
const STATIC_PROXY_COUNT = 4;

// Routing rules are matched in order from top to bottom, with the rule at the top of the list taking precedence over the rules below it.
const services = [
  // Media & Content
  { name: "bilibili", tld: "com" },
  { name: "Netflix", tld: "com" },
  { name: "Sora", domain: "sora.chatgpt.com" },
  { name: "YouTube", tld: "com" },

  // AI/LLM Services
  { name: "Anthropic", tld: "com" },
  { name: "Gemini", tld: "google", alias: "Google-Gemini" },
  { name: "NotebookLM", tld: "google", alias: "Google-NotebookLM" },
  { name: "OpenAI", tld: "com" },

  // Social Media & Communication
  { name: "rednote", domain: "xiaohongshu.com", alias: "Xiaohongshu" },
  { name: "Telegram", tld: "org" },
  {
    name: "Truth Social",
    tld: "com",
    sld: "truthsocial",
    alias: "TruthSocial",
  },
  { name: "X", tld: "com" },

  // Financial Services
  { name: "Binance", tld: "com" },
  { name: "Bybit", tld: "com" },
  { name: "OKX", tld: "com" },
  { name: "Pi", tld: "com", sld: "minepi" },

  // Technology Companies
  { name: "Apple", tld: "com" },
  { name: "Google", tld: "google", sld: "about" },
  { name: "Microsoft", tld: "com" },

  // Infrastructure
  { name: "Speedtest", tld: "net" },
  { name: "Xget", domain: "xuc.xi-xu.me" },
  { name: "Cloudflare", tld: "com" },
];

const LOCATION_ICON_SET_URL = "https://img.icons8.com/color/144/";

const locations = [
  {
    name: "Argentina 🇦🇷",
    icon: `${LOCATION_ICON_SET_URL}argentina`,
    filter: "(?i)\u963f\u6839\u5ef7|Argentina|ARG|AR|argentina|arg|ar|🇦🇷",
  },
  {
    name: "Canada 🇨🇦",
    icon: `${LOCATION_ICON_SET_URL}canada`,
    filter: "(?i)\u52a0\u62ff\u5927|Canada|CAN|CA|canada|ca|🇨🇦",
  },
  {
    name: "Finland 🇫🇮",
    icon: `${LOCATION_ICON_SET_URL}finland`,
    filter: "(?i)\u82ac\u5170|Finland|FIN|FI|finland|fin|fi|🇫🇮",
  },
  {
    name: "France 🇫🇷",
    icon: `${LOCATION_ICON_SET_URL}france`,
    filter: "(?i)\u6cd5\u56fd|France|FR|france|fr|🇫🇷",
  },
  {
    name: "Germany 🇩🇪",
    icon: `${LOCATION_ICON_SET_URL}germany`,
    filter: "(?i)\u5fb7\u56fd|Germany|GER|DE|germany|ger|de|🇩🇪",
  },
  {
    name: "Hong Kong, China 🇭🇰",
    icon: `${LOCATION_ICON_SET_URL}hongkong-circular`,
    filter: "(?i)\u9999\u6e2f|Hong Kong|HK|hong kong|hk|🇭🇰",
  },
  {
    name: "India 🇮🇳",
    icon: `${LOCATION_ICON_SET_URL}india`,
    filter: "(?i)\u5370\u5ea6|India|IND|IN|india|ind|in|🇮🇳",
  },
  {
    name: "Iraq 🇮🇶",
    icon: `${LOCATION_ICON_SET_URL}iraq`,
    filter: "(?i)\u4f0a\u62c9\u514b|Iraq|IQ|iraq|iq|🇮🇶",
  },
  {
    name: "Japan 🇯🇵",
    icon: `${LOCATION_ICON_SET_URL}japan`,
    filter: "(?i)\u65e5\u672c|Japan|JP|japan|jp|🇯🇵",
  },
  {
    name: "Korea 🇰🇷",
    icon: `${LOCATION_ICON_SET_URL}south-korea`,
    filter: "(?i)\u97e9\u56fd|Korea|KR|korea|kr|🇰🇷",
  },
  {
    name: "Russia 🇷🇺",
    icon: `${LOCATION_ICON_SET_URL}russian-federation`,
    filter:
      "(?i)\u4fc4\u7f57\u65af|Russia Federation|Russia|RU|russia federation|russia|ru|🇷🇺",
  },
  {
    name: "Singapore 🇸🇬",
    icon: `${LOCATION_ICON_SET_URL}singapore`,
    filter: "(?i)\u65b0\u52a0\u5761|Singapore|SG|singapore|sg|🇸🇬",
  },
  {
    name: "Taiwan, China 🇨🇳",
    icon: `${LOCATION_ICON_SET_URL}china-circular`,
    filter: "(?i)\u53f0\u6e7e|Taiwan|TW|taiwan|tw|\uD83C\uDDF9\uD83C\uDDFC",
  },
  {
    name: "Thailand 🇹🇭",
    icon: `${LOCATION_ICON_SET_URL}thailand`,
    filter: "(?i)\u6cf0\u56fd|Thailand|TH|thailand|th|🇹🇭",
  },
  {
    name: "Türkiye 🇹🇷",
    icon: `${LOCATION_ICON_SET_URL}turkey`,
    filter:
      "(?i)\u571f\u8033\u5176|Türkiye|Turkey|TUR|TR|türkiye|turkey|tur|tr|🇹🇷",
  },
  {
    name: "Ukraine 🇺🇦",
    icon: `${LOCATION_ICON_SET_URL}ukraine`,
    filter: "(?i)\u4e4c\u514b\u5170|Ukraine|UKR|UA|ukraine|ukr|ua|🇺🇦",
  },
  {
    name: "United Kingdom 🇬🇧",
    icon: `${LOCATION_ICON_SET_URL}great-britain`,
    filter:
      "(?i)\u82f1\u56fd|United Kingdom|Great Britain|UK|GB|united kingdom|great britain|uk|gb|🇬🇧",
  },
  {
    name: "United States 🇺🇸",
    icon: `${LOCATION_ICON_SET_URL}usa`,
    filter:
      "(?i)\u7f8e\u56fd|United States of America|United States|USA|US|united states of america|united states|usa|us|🇺🇸",
  },
  {
    name: "Global 🌐",
    icon: "https://img.icons8.com/?size=144&id=3685&format=png&color=7bbbe9",
    filter: "(?i)Global|GL|global|gl|Cloudflare|CF|cloudflare|cf|🌐",
  },
];

// ####################################### DO NOT MODIFY THE CODE BELOW UNLESS YOU KNOW WHAT YOU ARE DOING #######################################

function extractFavicon(domain) {
  return `https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`;
}

// General Configuration

const generalConfig = {
  "mixed-port": 7890,
  "allow-lan": false,
  mode: "rule",
  "log-level": "info",
  ipv6: true,
  "find-process-mode": "strict",
  profile: {
    "store-selected": true,
    "store-fake-ip": true,
  },
  "unified-delay": true,
  "tcp-concurrent": true,
  "global-client-fingerprint": "chrome",
  "global-ua": "\u0063\u006c\u0061\u0073\u0068.\u006D\u0065\u0074\u0061",
  "etag-support": true,
};

// DNS

const chineseNameservers = [
  "https://dns.alidns.com/dns-query",
  "https://doh.pub/dns-query",
];

const internationalNameservers = [
  "https://cloudflare-dns.com/dns-query",
  "https://dns.google/dns-query",
  // "https://dns.mullvad.net/dns-query",
  // "https://wikimedia-dns.org/dns-query",
  // "https://doh.dns.sb/dns-query",
];

const dns = {
  enable: true,
  "cache-algorithm": "arc",
  "prefer-h3": false,
  "use-hosts": true,
  "use-system-hosts": false,
  "respect-rules": true,
  ipv6: true,
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-range6": "fd00::/18",
  "fake-ip-filter-mode": "blacklist",
  "fake-ip-filter": [
    "rule-set:fake-ip-filter",
    "rule-set:direct",
    "rule-set:private",
    "rule-set:connectivity-check",
  ],
  "default-nameserver": [
    "tls://223.5.5.5",
    "tls://223.6.6.6",
    "tls://119.29.29.29",
  ],
  "proxy-server-nameserver": chineseNameservers,
  "nameserver-policy": {
    "rule-set:private": ["system://"],
    "rule-set:direct,geolocation-cn": chineseNameservers,
  },
  nameserver: internationalNameservers,
};

// Hosts

const hosts = {};

// Domain Sniffing

const sniffer = {
  enable: false,
};

// TUN

const tun = {
  enable: true,
  stack: "mixed",
  "auto-route": true,
  "auto-redirect": true,
  "auto-detect-interface": true,
  "strict-route": true,
  "dns-hijack": ["any:53", "tcp://any:53"],
};

// Proxy Groups

const proxyGroupDefaults = {
  url: "https://www.gstatic.com/generate_204",
  interval: 300,
  lazy: true,
  timeout: 5000,
  "max-failed-times": 5,
};

// Generate STATIC proxy group names
function generateStaticProxyNames() {
  if (STATIC_PROXY_COUNT === 1) {
    return ["STATIC"];
  }
  return Array.from(
    { length: STATIC_PROXY_COUNT },
    (_, i) => `STATIC-${i + 1}`
  );
}

const staticProxyNames = generateStaticProxyNames();

const serviceProxyGroupProxies = [
  "PROXY",
  ...staticProxyNames,
  "AUTO",
  "DIRECT",
  "Chinese Mainland 🇨🇳",
  ...locations.map(({ name }) => name),
];

const locationPolicyProxyGroupDefaults = {
  ...proxyGroupDefaults,
  proxies: ["REJECT"],
  "include-all": true,
};

const SERVICE_ICON_SET_URL =
  "https://cdn.jsdelivr.net/gh/xixu-me/favicons@assets/favicons/";

function getServiceIcon(service) {
  if (service.icon) return service.icon;
  if (service.domain) return extractFavicon(service.domain);
  if (service.tld) {
    const secondLevelDomain = service.sld || service.name.toLowerCase();
    return `${SERVICE_ICON_SET_URL}${secondLevelDomain}.${service.tld}.png`;
  }
  console.warn(`No icon configuration for service: ${service.name}`);
  return null;
}

services.forEach((service) => {
  service.icon = getServiceIcon(service);
});

function generateServiceProxyGroups(items, defaultConfig) {
  return items.map(({ name, icon }) => ({
    ...defaultConfig,
    name,
    icon,
    type: "select",
    proxies: serviceProxyGroupProxies,
  }));
}

function generateLocationPolicyProxyGroups(
  items,
  defaultConfig,
  type,
  extraProps = {}
) {
  const getStrategyName = (type, strategy) => {
    switch (type) {
      case "url-test":
        return "AUTO";
      case "fallback":
        return "FALLBACK";
      case "load-balance":
        switch (strategy) {
          case "consistent-hashing":
            return "LOAD BALANCING (consistent hashing)";
          case "round-robin":
            return "LOAD BALANCING (round-robin)";
          case "sticky-sessions":
            return "LOAD BALANCING (sticky sessions)";
          default:
            return "LOAD BALANCING";
        }
      default:
        return type.toUpperCase();
    }
  };
  return items.map(({ name, icon, filter }) => {
    const strategyName = getStrategyName(type, extraProps.strategy);
    const emoji = name.split(" ").pop();
    const newName = `${strategyName} ${emoji}`;
    return {
      ...defaultConfig,
      name: newName,
      type,
      icon,
      filter,
      hidden: true,
      ...extraProps,
    };
  });
}

function generateLocationSelectProxyGroups() {
  return locations.map(({ name, icon }) => ({
    ...proxyGroupDefaults,
    name,
    type: "select",
    icon,
    proxies: [
      `LOAD BALANCING (consistent hashing) ${name.split(" ").pop()}`,
      `LOAD BALANCING (round-robin) ${name.split(" ").pop()}`,
      `LOAD BALANCING (sticky sessions) ${name.split(" ").pop()}`,
      `FALLBACK ${name.split(" ").pop()}`,
      `AUTO ${name.split(" ").pop()}`,
    ],
  }));
}

const BASE_ICON_SET_URL =
  "https://cdn.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/";

// Generate STATIC proxy groups
function generateStaticProxyGroups(defaultConfig) {
  return staticProxyNames.map((name, index) => ({
    ...defaultConfig,
    name,
    type: "select",
    "include-all": true,
    icon: `${BASE_ICON_SET_URL}Static.png`,
  }));
}

const proxyGroups = [
  {
    ...proxyGroupDefaults,
    name: "PROXY",
    type: "select",
    proxies: [
      ...staticProxyNames,
      "AUTO",
      "DIRECT",
      "Chinese Mainland 🇨🇳",
      ...locations.map(({ name }) => name),
    ],
    icon: `${BASE_ICON_SET_URL}Proxy.png`,
  },
  {
    ...proxyGroupDefaults,
    name: "AUTO",
    type: "url-test",
    tolerance: 50,
    "include-all": true,
    icon: `${BASE_ICON_SET_URL}Auto.png`,
    hidden: true,
  },
  ...generateStaticProxyGroups(proxyGroupDefaults),
  ...generateServiceProxyGroups(services, proxyGroupDefaults),
  {
    ...proxyGroupDefaults,
    name: "Domestic",
    type: "select",
    proxies: [
      "DIRECT",
      "PROXY",
      ...staticProxyNames,
      "AUTO",
      "Chinese Mainland 🇨🇳",
      ...locations.map(({ name }) => name),
    ],
    icon: `${BASE_ICON_SET_URL}Domestic.png`,
  },
  {
    ...proxyGroupDefaults,
    name: "Others",
    type: "select",
    proxies: [...serviceProxyGroupProxies],
    icon: `${BASE_ICON_SET_URL}Final.png`,
  },
  {
    ...proxyGroupDefaults,
    name: "Advertising",
    type: "select",
    proxies: ["REJECT", "DIRECT", ...staticProxyNames],
    icon: `${BASE_ICON_SET_URL}Advertising.png`,
  },
  {
    ...locationPolicyProxyGroupDefaults,
    name: "Chinese Mainland 🇨🇳",
    type: "select",
    icon: `${LOCATION_ICON_SET_URL}china`,
    proxies: ["REJECT"],
    "include-all": true,
    filter:
      "(?i)\u5927\u9646|\u4e2d\u56fd|\u7535\u4fe1|\u79fb\u52a8|\u8054\u901a|Mainland|China|CN|mainland|china|cn|🇨🇳",
  },
  ...generateLocationPolicyProxyGroups(
    locations,
    locationPolicyProxyGroupDefaults,
    "url-test",
    {
      tolerance: 50,
    }
  ),
  ...generateLocationPolicyProxyGroups(
    locations,
    locationPolicyProxyGroupDefaults,
    "fallback"
  ),
  ...generateLocationPolicyProxyGroups(
    locations,
    locationPolicyProxyGroupDefaults,
    "load-balance",
    {
      strategy: "round-robin",
    }
  ),
  ...generateLocationPolicyProxyGroups(
    locations,
    locationPolicyProxyGroupDefaults,
    "load-balance",
    {
      strategy: "consistent-hashing",
    }
  ),
  ...generateLocationPolicyProxyGroups(
    locations,
    locationPolicyProxyGroupDefaults,
    "load-balance",
    {
      strategy: "sticky-sessions",
    }
  ),
  ...generateLocationSelectProxyGroups(),
];

// Routing Rules

function generateServiceRules(services) {
  return services.map(
    ({ name }) => `RULE-SET,${name.toLowerCase().replace(/\s+/g, "")},${name}`
  );
}

const rules = [
  "RULE-SET,applications,DIRECT",
  "RULE-SET,win-phonelink,DIRECT",
  "RULE-SET,lancidr,DIRECT,no-resolve",
  "RULE-SET,private,DIRECT",
  ...generateServiceRules(services),
  "RULE-SET,reject,Advertising",
  "RULE-SET,win-spy,Advertising",
  "RULE-SET,direct,Domestic",
  "RULE-SET,proxy,PROXY",
  "RULE-SET,telegramcidr,Telegram",
  "RULE-SET,xcidr,X",
  "RULE-SET,googlecidr,Google",
  "RULE-SET,cloudflarecidr,Cloudflare",
  "RULE-SET,cncidr,Domestic",
  "MATCH,Others",
];

// Rule Providers

const ruleProviderDefaults = {
  type: "http",
  interval: 14400,
};

function generateServiceRuleProviders(services, defaultConfig) {
  return services.reduce((acc, { name, alias }) => {
    const fileName = (alias || name).toLowerCase();
    const ruleName = name.toLowerCase().replace(/\s+/g, "");
    acc[ruleName] = {
      ...defaultConfig,
      format: "mrs",
      behavior: "domain",
      url: `https://cdn.jsdelivr.net/gh/xixu-me/RFM@universal/${fileName}.mrs`,
      path: `./rulesets/${ruleName}.mrs`,
    };
    return acc;
  }, {});
}

const ruleProviders = {
  "fake-ip-filter": {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/fake-ip-filter.mrs",
    path: "./rulesets/fake-ip-filter.mrs",
  },
  "connectivity-check": {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@universal/connectivity-check.mrs",
    path: "./rulesets/connectivity-check.mrs",
  },
  applications: {
    ...ruleProviderDefaults,
    format: "yaml",
    behavior: "classical",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/applications.yaml",
    path: "./rulesets/applications.yaml",
  },
  "win-phonelink": {
    ...ruleProviderDefaults,
    format: "yaml",
    behavior: "classical",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@fixed/win-phonelink.yaml",
    path: "./rulesets/win-phonelink.yaml",
  },
  lancidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/lancidr.mrs",
    path: "./rulesets/lancidr.mrs",
  },
  cncidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/cncidr.mrs",
    path: "./rulesets/cncidr.mrs",
  },
  cloudflarecidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/cloudflarecidr.mrs",
    path: "./rulesets/cloudflarecidr.mrs",
  },
  googlecidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/googlecidr.mrs",
    path: "./rulesets/googlecidr.mrs",
  },
  telegramcidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/telegramcidr.mrs",
    path: "./rulesets/telegramcidr.mrs",
  },
  xcidr: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "ipcidr",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/xcidr.mrs",
    path: "./rulesets/xcidr.mrs",
  },
  private: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/private.mrs",
    path: "./rulesets/private.mrs",
  },
  direct: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/direct.mrs",
    path: "./rulesets/direct.mrs",
  },
  proxy: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/proxy.mrs",
    path: "./rulesets/proxy.mrs",
  },
  "geolocation-cn": {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@universal/geolocation-cn.mrs",
    path: "./rulesets/geolocation-cn.mrs",
  },
  reject: {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@basic/reject.mrs",
    path: "./rulesets/reject.mrs",
  },
  "win-spy": {
    ...ruleProviderDefaults,
    format: "mrs",
    behavior: "domain",
    url: "https://cdn.jsdelivr.net/gh/xixu-me/RFM@universal/win-spy.mrs",
    path: "./rulesets/win-spy.mrs",
  },
  ...generateServiceRuleProviders(services, ruleProviderDefaults),
};

// generate configuration using the above settings

function validateOriginalConfig(config) {
  if (!config)
    throw new Error("Configuration object cannot be null or undefined");
  const proxyCount = Array.isArray(config.proxies) ? config.proxies.length : 0;
  const proxyProviderCount = Object.keys(
    config["proxy-providers"] || {}
  ).length;
  if (proxyCount === 0 && proxyProviderCount === 0)
    throw new Error(
      "The original configuration must contain a non-empty proxies array (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/) or a proxy-providers object with at least one property (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)"
    );
  if (proxyCount > 0) {
    config.proxies.forEach((proxy, index) => {
      if (!proxy.name || !proxy.type || !proxy.server || !proxy.port) {
        throw new Error(
          `Invalid proxy number ${
            index + 1
          } configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxies/)`
        );
      }
    });
    console.log(
      `The original configuration contains ${proxyCount} proxies, which will be preserved`
    );
  }
  if (proxyProviderCount > 0) {
    Object.entries(config["proxy-providers"]).forEach(
      ([name, provider], index) => {
        if (!provider.type || (provider.type === "http" && !provider.url)) {
          throw new Error(
            `Invalid proxy provider number ${
              index + 1
            } configuration (see https://wiki.\u006D\u0065\u0074\u0061\u0063\u0075\u0062\u0065\u0078.one/en/config/proxy-providers/)`
          );
        }
      }
    );
    console.log(
      `The original configuration contains ${proxyProviderCount} proxy providers, which will be preserved`
    );
  }
  return true;
}

function main(config) {
  try {
    validateOriginalConfig(config);
    Object.assign(config, generalConfig, {
      dns,
      hosts,
      sniffer,
      tun,
      "proxy-groups": proxyGroups,
      rules,
      "rule-providers": ruleProviders,
    });
    console.log("The generated configuration is as follows");
    console.log(config);
    return config;
  } catch (error) {
    console.error(
      `An error occurred during configuration generation: ${error.message}`
    );
    return { error: error.message, originalConfig: config };
  }
}
