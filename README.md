# META

META stands for Modular Enhanced Traffic Architecture.

That idea shapes the project itself: the inputs stay modular, the generated output adds stronger routing structure on top, and the overall repository is organized as an architecture with clear roles for source, validation, and published artifacts.

The repository currently uses a split branch model:

- `main`: project documentation
- `script`: source code, tests, and GitHub Actions workflow
- `config`: generated `META.yaml`

> [!NOTE]
> If you want to use or customize META, the source of truth is the `script` branch. The `config` branch is generated from it after CI passes.

## What META Generates

META starts from your existing proxy configuration and builds a layered traffic profile instead of leaving you with a flat set of raw inputs:

- Service-oriented policy groups
- Location-based groups with `select`, `url-test`, `fallback`, and multiple load-balancing strategies
- DNS, TUN, rule providers, and routing rules for a broad range of network environments
- A published YAML artifact for users who prefer a static configuration

The generator preserves your original proxies or proxy providers, then injects META's standardized policy groups and rules on top.

## Import URLs

META currently documents both direct raw access and [Xget](https://github.com/xixu-me/xget) for remote imports.

### JavaScript

| Source | URL |
| --- | --- |
| GitHub Raw | <https://raw.githubusercontent.com/xixu-me/meta/refs/heads/script/META.js> |
| Xget | <https://xget.xi-xu.me/gh/xixu-me/meta/raw/refs/heads/script/META.js> |

### YAML

| Source | URL |
| --- | --- |
| GitHub Raw | <https://raw.githubusercontent.com/xixu-me/meta/refs/heads/config/META.yaml> |
| Xget | <https://xget.xi-xu.me/gh/xixu-me/meta/raw/refs/heads/config/META.yaml> |

## Customization

`META.js` is intentionally organized so the top section is the only part most users need to edit:

```javascript
// ################################################### this section can be flexibly customized ###################################################
```

The main customization points are:

- `STATIC_PROXY_COUNT`: number of static groups for IP-sensitive services
- `services`: service list and icon/domain metadata
- `locations`: country and region groups, including keywords, country codes, and emoji matchers

META derives the more error-prone parts, such as location filter regexes, from this top-level data so the editable surface stays small while the generated structure stays rich.

For a GUI-based workflow, use [META.js Customizer](https://github.com/xixu-me/META.js-Customizer) at [metajs.xi-xu.me](https://metajs.xi-xu.me).

## RFM Integration

META is built around [RFM](https://github.com/xixu-me/rfm), which provides the ruleset foundation for the generated configuration.

- META consumes RFM rulesets as its primary rule-provider source
- Domain, classical, and IP-based routing behavior are organized around RFM outputs
- Keeping RFM current directly improves the quality and coverage of META's generated configuration

Within the overall project structure, META acts as the assembly layer while RFM supplies the ruleset base that gives the generated output its breadth and consistency.

## Maintenance

The branches are intentionally separated:

- `script` is where generator changes, tests, and workflow updates happen
- `config` is force-updated by GitHub Actions with the latest generated YAML
- `main` is the stable documentation entrypoint for the project

The source branch uses Bun for local verification and publishes the generated YAML only after automated checks pass. This keeps the documentation branch, source branch, and generated branch aligned without turning the main README into a workflow manual.

## Design Notes

The project leans into the meaning behind its name: small editable building blocks, stronger generated defaults, and a structure that can scale without turning into a monolithic config blob.

- It treats service routing as the primary UX surface instead of exposing only raw proxy groups
- It generates several per-location strategies automatically so users can switch between stability and performance without editing rules
- It keeps source validation strict enough to catch malformed inputs while still supporting special outbound forms used by the underlying ecosystem
- It favors portable defaults so the generated configuration travels better across different clients and environments

## Related Projects

- [META.js Customizer](https://github.com/xixu-me/META.js-Customizer): browser-based META configuration builder
- [RFM](https://github.com/xixu-me/rfm): ruleset backbone used by META

## Disclaimer

- META is a configuration generator. You are responsible for how you deploy and use the generated configuration.
- Compatibility can change as clients, parsers, and third-party services evolve.
- Review generated output before using it in environments where routing, privacy, or availability is sensitive.

## License

Licensed under the MIT License. See [`LICENSE`](./LICENSE).
