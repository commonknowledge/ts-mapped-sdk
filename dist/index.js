/**
 * Public API Types for ts-mapped
 *
 * These types can be imported by external projects that consume the ts-mapped REST API.
 *
 * Recommended Installation:
 *   npm install github:commonknowledge/ts-mapped-sdk
 *
 * Usage:
 *   import type { GeoJSONAPIResponse, GeoJSONFeatureProperties } from '@commonknowledge/ts-mapped-sdk';
 *
 * Documentation:
 *   See src/api/README.md for detailed usage examples and API reference.
 */
// ============================================================================
// GEOJSON API TYPES - GET /api/rest/data-sources/:dataSourceId/geojson
// ============================================================================
/**
 * Filter operators for combining filter conditions
 */
export var APIFilterOperator;
(function (APIFilterOperator) {
    APIFilterOperator["AND"] = "AND";
    APIFilterOperator["OR"] = "OR";
})(APIFilterOperator || (APIFilterOperator = {}));
/**
 * Types of filters that can be applied
 */
export var APIFilterType;
(function (APIFilterType) {
    /** Geographic filter (proximity, turf) */
    APIFilterType["GEO"] = "GEO";
    /** Multi-select filter */
    APIFilterType["MULTI"] = "MULTI";
    /** Text search filter */
    APIFilterType["TEXT"] = "TEXT";
})(APIFilterType || (APIFilterType = {}));
