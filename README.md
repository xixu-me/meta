# META - Modular Enhanced Traffic Architecture

META is a comprehensive configuration generator for network traffic management, providing intelligent routing rules and proxy configurations for various online services across different geographical locations. It's designed to work with network management tools that support JavaScript parser overrides or YAML configurations.

## Features

- **Service-based routing**: Automatically route traffic for popular services (OpenAI, Google, YouTube, Telegram, etc.)
- **Location-based proxy grouping**: Organize proxies by geographical location
- **Multiple proxy strategies**: Support for direct selection, auto-testing, fallback, and load balancing
- **Comprehensive rule providers**: Pre-configured rulesets for applications, domains, and IP ranges
- **Optimized DNS configuration**: Different nameservers for mainland China and international services
- **TUN mode support**: System-level traffic capture and routing
- **Smart proxy group generation**: Automatically create proxy groups based on available proxies

## Quick Start

### Import Options

Choose one of the following URLs to import META into your network management tool:

#### JavaScript

| Source | URL |
|--------|-----|
| GitHub Raw | <https://raw.githubusercontent.com/xixu-me/META/refs/heads/script/META.js> |
| Xget | <https://xget.xi-xu.me/gh/xixu-me/META/raw/refs/heads/script/META.js> |
| jsDelivr | <https://cdn.jsdelivr.net/gh/xixu-me/META@refs/heads/script/META.js> |

#### YAML

| Source | URL |
|--------|-----|
| GitHub blob | <https://github.com/xixu-me/META/blob/config/META.yaml> |

The YAML configuration is automatically generated from the JavaScript version and is updated whenever the JavaScript version changes. This provides a static configuration option for users who prefer not to use JavaScript overrides.

## Configuration Structure

The META configuration includes:

- **General Settings**: Basic configuration for the proxy management system
- **DNS Settings**: Optimized DNS servers for different scenarios
- **Proxy Groups**: Organized by services and geographical locations
- **Routing Rules**: Prioritized rules for traffic routing
- **Rule Providers**: External rulesets for different services and scenarios

## Customization

The JavaScript has a designated customization section at the top:

```javascript
// ################################################### this section can be flexibly customized ###################################################
```

Here you can modify:

1. **Services**: Add, remove, or reorder services for routing
2. **Locations**: Configure geographical locations for proxy organization
3. **Icons**: Customize the icons for services and locations

For a user-friendly way to create custom the JavaScript, use the **[META.js Customizer](https://github.com/xixu-me/META.js-Customizer)** web app at [metajs.xi-xu.me](https://metajs.xi-xu.me). This tool provides an intuitive interface to select services and generate personalized configurations.

## Key Components

### Rule Providers

META integrates with **[RFM (Rulesets for META)](https://github.com/xixu-me/RFM)** for comprehensive and frequently updated rulesets. RFM provides:

- **Multiple format support**: Both MRS (binary) and YAML formats
- **Frequent updates**: Rulesets rebuilt multiple times daily
- **Comprehensive coverage**: Aggregated from multiple reliable sources
- **Optimized processing**: Redundancy removal and intelligent domain handling

### Location Configuration

Locations help organize proxies geographically with:

- Name with emoji
- Icon URL
- Filter regex for matching proxies

### Proxy Groups

Several types of proxy groups are automatically generated:

- Main selector groups (PROXY, AUTO, STATIC)
- Service-specific groups
- Location-based groups
- Strategy groups (url-test, fallback, load-balance)

### Rules

Traffic routing rules are prioritized from top to bottom:

1. Direct rules (applications, LAN, private)
2. Advertising blocks
3. Service-specific rules
4. Geographic rules
5. Fallback rules

## Usage Guidelines

1. **Easy customization**: Use the [META.js Customizer](https://github.com/xixu-me/META.js-Customizer) for an intuitive configuration experience
2. **First-time setup**: Import the JavaScript or YAML into your network management tool
3. **Proxy source**: Ensure you have configured proxy sources (providers or individual proxies)
4. **Service selection**: Use the automatically generated service groups to select routing preferences
5. **Location selection**: Choose geographic routing preferences using location groups

## Related Projects

- **[META.js Customizer](https://github.com/xixu-me/META.js-Customizer)**: Web-based configuration generator with intuitive interface
- **[RFM (Rulesets for META)](https://github.com/xixu-me/RFM)**: Comprehensive and frequently updated rulesets collection

## Disclaimer

- **Usage Responsibility**: META is provided as a configuration tool only. Users are solely responsible for how they implement and use these configurations.
- **No Warranty**: This software is provided "as is" without warranty of any kind, express or implied. The developers make no guarantees regarding its performance, reliability, or suitability for any purpose.
- **Legal Compliance**: Users must ensure their use of META complies with all applicable local, national, and international laws and regulations. The use of proxies may be restricted or regulated in certain jurisdictions.
- **Service Compatibility**: While META aims to provide optimal routing for various services, changes to those services may affect functionality. No guarantee is made regarding compatibility with any specific service.
- **Security Considerations**: Users should review all configurations before implementation in production environments. The developers are not responsible for any security vulnerabilities that may arise from using these configurations.
- **Third-Party Services**: META interacts with various third-party services but is not affiliated with, endorsed by, or sponsored by any of these services.

## License

Copyright &copy; [Xi Xu](https://xi-xu.me)

Licensed under the [GPL-3.0](LICENSE) license.  
